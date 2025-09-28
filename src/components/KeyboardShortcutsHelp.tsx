import React, { useState, useEffect } from 'react';

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

  const shortcuts: Shortcut[] = [
    { key: 'Ctrl + /', description: 'Toggle keyboard shortcuts help', category: 'General' },
    { key: 'Ctrl + K', description: 'Open command palette', category: 'General' },
    { key: 'Ctrl + S', description: 'Save current work', category: 'General' },
    { key: 'Ctrl + Z', description: 'Undo last action', category: 'General' },
    { key: 'Ctrl + Y', description: 'Redo last action', category: 'General' },
    { key: 'Ctrl + F', description: 'Search in current page', category: 'Navigation' },
    { key: 'Ctrl + G', description: 'Go to line', category: 'Navigation' },
    { key: 'Ctrl + D', description: 'Go to definition', category: 'Navigation' },
    { key: 'Ctrl + Shift + F', description: 'Search in all files', category: 'Navigation' },
    { key: 'Ctrl + P', description: 'Quick open file', category: 'Navigation' },
    { key: 'Ctrl + B', description: 'Toggle sidebar', category: 'View' },
    { key: 'Ctrl + Shift + E', description: 'Toggle explorer', category: 'View' },
    { key: 'Ctrl + Shift + G', description: 'Toggle source control', category: 'View' },
    { key: 'Ctrl + Shift + D', description: 'Toggle debug panel', category: 'View' },
    { key: 'F11', description: 'Toggle fullscreen', category: 'View' },
    { key: 'Ctrl + `', description: 'Toggle terminal', category: 'Development' },
    { key: 'Ctrl + Shift + P', description: 'Open command palette', category: 'Development' },
    { key: 'Ctrl + Shift + `', description: 'New terminal', category: 'Development' },
    { key: 'Ctrl + C', description: 'Copy', category: 'Edit' },
    { key: 'Ctrl + V', description: 'Paste', category: 'Edit' },
    { key: 'Ctrl + X', description: 'Cut', category: 'Edit' },
    { key: 'Ctrl + A', description: 'Select all', category: 'Edit' },
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search functionality */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search shortcuts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category}
              </h3>
              <div className="space-y-2">
                {categoryShortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    <span className="text-gray-700 dark:text-gray-300">{shortcut.description}</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded border border-gray-300 dark:border-gray-500 font-mono">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {filteredShortcuts.length === 0 && searchTerm && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No shortcuts found for "{searchTerm}"
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Press <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs rounded font-mono">Ctrl + /</kbd> to toggle this help
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;