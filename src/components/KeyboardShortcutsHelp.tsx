import React, { useState, useEffect, useMemo } from 'react';

interface Shortcut {
  key: string;
  description: string;
  category: string;
}

interface KeyboardShortcutsHelpProps {
  isVisible: boolean;
  onClose: () => void;
}

const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShortcuts, setFilteredShortcuts] = useState<Shortcut[]>([]);

  const shortcuts: Shortcut[] = useMemo(() => [
    { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard', category: 'Dashboard' },
    { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer', category: 'Performance' },
    { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor', category: 'Performance' },
    { key: 'Ctrl+Shift+A', description: 'Toggle AI Dashboard', category: 'AI' },
    { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer', category: 'SEO' },
    { key: 'Ctrl+Shift+C', description: 'Open Command Palette', category: 'Navigation' },
    { key: 'Ctrl+Shift+H', description: 'Show Keyboard Shortcuts', category: 'Help' },
    { key: 'Escape', description: 'Close All Modals', category: 'Navigation' },
  ], []);

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
  }, [searchTerm, shortcuts]);

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
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search functionality */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search shortcuts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="space-y-6">
            {Object.entries(groupedShortcuts).length > 0 ? (
              Object.entries(groupedShortcuts).map(([category, shortcuts]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-gray-700 dark:text-gray-300">
                          {shortcut.description}
                        </span>
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded text-sm font-mono">
                          {shortcut.key}
                        </kbd>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No shortcuts found matching &quot;{searchTerm}&quot;
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