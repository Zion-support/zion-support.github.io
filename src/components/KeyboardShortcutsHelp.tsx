import React from 'react';

interface KeyboardShortcutsHelpProps {
  isVisible: boolean;
  onClose: () => void;
}

const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;

  const shortcuts = [
    {
      category: 'Dashboard Controls',
      shortcuts: [
        { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard' },
        { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer' },
        { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor' },
        { key: 'Ctrl+Shift+A', description: 'Toggle AI Dashboard' },
        { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer' },
        { key: 'Ctrl+Shift+R', description: 'Toggle Real-Time Monitor' },
        { key: 'Ctrl+Shift+H', description: 'Toggle System Health' },
        { key: 'Ctrl+Shift+V', description: 'Toggle Comprehensive Monitor' }
      ]
    },
    {
      category: 'App Controls',
      shortcuts: [
        { key: 'Ctrl+Shift+T', description: 'Toggle Theme (Dark/Light)' },
        { key: 'Ctrl+K', description: 'Open Command Palette' },
        { key: 'Ctrl+/', description: 'Show Keyboard Shortcuts' },
        { key: 'Escape', description: 'Close All Modals' }
      ]
    },
    {
      category: 'Testing & Notifications',
      shortcuts: [
        { key: 'Ctrl+Shift+N', description: 'Test Notifications' },
        { key: 'Ctrl+Shift+C', description: 'Clear Notifications' },
        { key: 'Ctrl+Shift+K', description: 'Show Keyboard Help' }
      ]
    },
    {
      category: 'Navigation',
      shortcuts: [
        { key: 'Tab', description: 'Navigate to next element' },
        { key: 'Shift+Tab', description: 'Navigate to previous element' },
        { key: 'Enter', description: 'Activate focused element' },
        { key: 'Space', description: 'Activate focused button' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close Keyboard Shortcuts Help"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <div className="space-y-6">
            {shortcuts.map((category, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.shortcuts.map((shortcut, shortcutIndex) => (
                    <div key={shortcutIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{shortcut.description}</span>
                      <kbd className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-mono rounded border">
                        {shortcut.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Tips</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• All shortcuts work globally when the app is focused</li>
              <li>• Press Escape to close any open modal or dialog</li>
              <li>• Use Tab to navigate through interactive elements</li>
              <li>• Some shortcuts may not work in certain contexts (e.g., when typing in input fields)</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Got it!
            </button>
            <button
              onClick={() => {
                // Copy shortcuts to clipboard
                const shortcutsText = shortcuts
                  .map(category => 
                    `${category.category}:\n${category.shortcuts
                      .map(s => `  ${s.key}: ${s.description}`)
                      .join('\n')}`
                  )
                  .join('\n\n');
                navigator.clipboard.writeText(shortcutsText);
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;