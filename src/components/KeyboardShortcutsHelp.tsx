import React, { useState, useEffect, useMemo } from 'react';

interface KeyboardShortcutsHelpProps {
  isVisible: boolean;
  onClose: () => void;
}

interface Shortcut {
  key: string;
  description: string;
  category: string;
}

const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({
  isVisible,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const shortcuts: Shortcut[] = useMemo(() => [
    { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard', category: 'Dashboard' },
    { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer', category: 'Performance' },
    { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor', category: 'Performance' },
    { key: 'Ctrl+Shift+A', description: 'Toggle AI Dashboard', category: 'AI' },
    { key: 'Ctrl+Shift+R', description: 'Toggle Real-time Metrics', category: 'Performance' },
    { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer', category: 'SEO' },
    { key: 'Ctrl+K', description: 'Open Command Palette', category: 'Navigation' },
    { key: 'Ctrl+/', description: 'Show Keyboard Shortcuts', category: 'Help' },
    { key: 'Escape', description: 'Close All Modals', category: 'Navigation' }
  ], []);

  const categories = useMemo(() => {
    const cats = [...new Set(shortcuts.map(s => s.category))];
    return ['all', ...cats];
  }, [shortcuts]);

  const filteredShortcuts = useMemo(() => {
    return shortcuts.filter(shortcut => {
      const matchesSearch = shortcut.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           shortcut.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || shortcut.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [shortcuts, searchTerm, selectedCategory]);

  useEffect(() => {
    if (isVisible) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Keyboard Shortcuts</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Search shortcuts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Shortcuts List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredShortcuts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No shortcuts found matching your search.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredShortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-mono text-sm font-semibold text-gray-900">
                        {shortcut.key}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {shortcut.description}
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {shortcut.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-500 text-center">
              Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Escape</kbd> to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;