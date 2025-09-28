import React, { useState, useEffect } from 'react';

interface KeyboardShortcutsHelpProps {
  isVisible: boolean;
  onClose: () => void;
}

const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({ isVisible, onClose }) => {
  const [isOpen, setIsOpen] = useState(isVisible);

  useEffect(() => {
    setIsOpen(isVisible);
  }, [isVisible]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shortcuts = [
    {
      category: 'Dashboard Controls',
      items: [
        { key: 'Ctrl+Shift+D', description: 'Toggle System Dashboard' },
        { key: 'Ctrl+Shift+P', description: 'Toggle Performance Optimizer' },
        { key: 'Ctrl+Shift+M', description: 'Toggle Performance Monitor' },
        { key: 'Ctrl+Shift+A', description: 'Toggle AI Performance Dashboard' },
        { key: 'Ctrl+Shift+S', description: 'Toggle SEO Optimizer' },
        { key: 'Ctrl+Shift+T', description: 'Toggle Theme (Dark/Light)' },
        { key: 'Escape', description: 'Close All Dashboards' },
      ]
    },
    {
      category: 'Navigation',
      items: [
        { key: 'Ctrl+K', description: 'Open Command Palette' },
        { key: 'Ctrl+/', description: 'Show Keyboard Shortcuts' },
        { key: 'Ctrl+Shift+H', description: 'Show Help Modal' },
      ]
    },
    {
      category: 'Notifications',
      items: [
        { key: 'Ctrl+Shift+N', description: 'Show Notifications' },
        { key: 'Ctrl+Shift+C', description: 'Clear All Notifications' },
      ]
    },
    {
      category: 'Development',
      items: [
        { key: 'Ctrl+Shift+E', description: 'Open Error Console' },
        { key: 'Ctrl+Shift+L', description: 'Toggle Logs Panel' },
        { key: 'Ctrl+Shift+R', description: 'Reload with Cache Clear' },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
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
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-8">
            {shortcuts.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {category.category}
                </h3>
                <div className="grid gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-sm text-gray-700">{item.description}</span>
                      <kbd className="px-2 py-1 text-xs font-mono bg-gray-200 text-gray-800 rounded border border-gray-300">
                        {item.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-800">Pro Tip</h4>
                <p className="mt-1 text-sm text-blue-700">
                  You can press <kbd className="px-1 py-0.5 text-xs font-mono bg-blue-200 text-blue-800 rounded">Ctrl+Shift+H</kbd> at any time to open this help modal.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-end p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;