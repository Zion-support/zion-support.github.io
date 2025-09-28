import React, { useState, useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  description: string;
  category: string;
}

interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({ 
  isOpen, 
  onClose, 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShortcuts, setFilteredShortcuts] = useState<KeyboardShortcut[]>([]);

  const shortcuts: KeyboardShortcut[] = [
    { key: 'Ctrl + K', description: 'Open command palette', category: 'Navigation' },
    { key: 'Esc', description: 'Close modals and menus', category: 'Navigation' },
    { key: 'Ctrl + /', description: 'Show keyboard shortcuts', category: 'Help' },
    { key: 'Ctrl + Shift + P', description: 'Open performance dashboard', category: 'Tools' },
    { key: 'Ctrl + Shift + A', description: 'Open analytics dashboard', category: 'Tools' },
    { key: 'Ctrl + Shift + S', description: 'Open system dashboard', category: 'Tools' },
    { key: 'F11', description: 'Toggle fullscreen', category: 'Display' },
    { key: 'Ctrl + D', description: 'Toggle dark mode', category: 'Display' },
    { key: 'Ctrl + R', description: 'Refresh page', category: 'Browser' },
    { key: 'Ctrl + Shift + R', description: 'Hard refresh', category: 'Browser' },
  ];

  useEffect(() => {
    const filtered = shortcuts.filter(shortcut =>
      shortcut.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shortcut.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shortcut.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShortcuts(filtered);
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Keyboard Shortcuts
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          <input
            type="text"
            placeholder="Search shortcuts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white mb-4"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {filteredShortcuts.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No shortcuts found matching "{searchTerm}"
            </div>
          ) : (
            <div className="space-y-3">
              {filteredShortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {shortcut.description}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {shortcut.category}
                    </div>
                  </div>
                  <div className="ml-4">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm font-mono">
                      {shortcut.key}
                    </kbd>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Press Escape to close</span>
            <span>{filteredShortcuts.length} shortcuts available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;