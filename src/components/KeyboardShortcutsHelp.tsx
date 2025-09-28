import React, { useState, useEffect } from 'react';

interface KeyboardShortcutsHelpProps {
  isVisible: boolean;
  onClose: () => void;
}

interface Shortcut {
  key: string;
  description: string;
  category: string;
}

const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShortcuts, setFilteredShortcuts] = useState<Shortcut[]>([]);

  const shortcuts: Shortcut[] = [
    { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard', category: 'Dashboard' },
    { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer', category: 'Performance' },
    { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor', category: 'Performance' },
    { key: 'Ctrl+Shift+A', description: 'Toggle AI Dashboard', category: 'AI' },
    { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer', category: 'SEO' },
    { key: 'Ctrl+Shift+C', description: 'Open Command Palette', category: 'Navigation' },
    { key: 'Ctrl+Shift+H', description: 'Show Keyboard Shortcuts', category: 'Help' },
    { key: 'Escape', description: 'Close All Modals', category: 'Navigation' },
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = shortcuts.filter(shortcut =>
        shortcut.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shortcut.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shortcut.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredShortcuts(filtered);
    } else {
      setFilteredShortcuts(shortcuts);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const groupedShortcuts = filteredShortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, Shortcut[]>);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Keyboard Shortcuts</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search shortcuts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {Object.keys(groupedShortcuts).length > 0 ? (
            Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                <div className="space-y-2">
                  {categoryShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
                      <span className="text-gray-700">
                        {shortcut.description}
                      </span>
                      <kbd className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No shortcuts found matching "{searchTerm}"
            </div>
          )}
        </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Press Escape to close</span>
            <span>{shortcuts.length} shortcuts available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;