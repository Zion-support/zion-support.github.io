import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, ArrowRight, Hash, Star, Settings, User, Globe, FileText, Zap, Shield, Database, Code, Palette } from 'lucide-react';

interface Command {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
  keywords?: string[];
  isNew?: boolean;
  isPro?: boolean;
}

interface EnhancedCommandPaletteProps {
  isVisible: boolean;
  onClose: () => void;
  commands?: Command[];
}

const EnhancedCommandPalette: React.FC<EnhancedCommandPaletteProps> = ({
  isVisible,
  onClose,
  commands: customCommands = []
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Default commands
  const defaultCommands: Command[] = useMemo(() => [
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Navigate to the home page',
      category: 'Navigation',
      icon: <Hash className="w-4 h-4" />,
      action: () => window.location.href = '/',
      shortcut: 'Ctrl+H',
      keywords: ['home', 'main', 'index']
    },
    {
      id: 'about',
      title: 'Go to About',
      description: 'Navigate to the about page',
      category: 'Navigation',
      icon: <User className="w-4 h-4" />,
      action: () => window.location.href = '/about',
      shortcut: 'Ctrl+A',
      keywords: ['about', 'company', 'team']
    },
    {
      id: 'services',
      title: 'Go to Services',
      description: 'Navigate to the services page',
      category: 'Navigation',
      icon: <Settings className="w-4 h-4" />,
      action: () => window.location.href = '/services',
      shortcut: 'Ctrl+S',
      keywords: ['services', 'offerings', 'solutions']
    },
    {
      id: 'contact',
      title: 'Go to Contact',
      description: 'Navigate to the contact page',
      category: 'Navigation',
      icon: <Globe className="w-4 h-4" />,
      action: () => window.location.href = '/contact',
      shortcut: 'Ctrl+C',
      keywords: ['contact', 'reach', 'connect']
    },
    {
      id: 'blog',
      title: 'Go to Blog',
      description: 'Navigate to the blog page',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4" />,
      action: () => window.location.href = '/blog',
      shortcut: 'Ctrl+B',
      keywords: ['blog', 'articles', 'news']
    },
    {
      id: 'portfolio',
      title: 'Go to Portfolio',
      description: 'Navigate to the portfolio page',
      category: 'Navigation',
      icon: <Star className="w-4 h-4" />,
      action: () => window.location.href = '/portfolio',
      shortcut: 'Ctrl+P',
      keywords: ['portfolio', 'projects', 'work']
    },
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: 'Switch between light and dark mode',
      category: 'Appearance',
      icon: <Palette className="w-4 h-4" />,
      action: () => {
        // This would trigger the theme toggle in the parent component
        console.log('Toggle theme');
      },
      shortcut: 'Ctrl+Shift+T',
      keywords: ['theme', 'dark', 'light', 'mode']
    },
    {
      id: 'performance-dashboard',
      title: 'Open Performance Dashboard',
      description: 'View real-time performance metrics',
      category: 'Tools',
      icon: <Zap className="w-4 h-4" />,
      action: () => {
        // This would open the performance dashboard
        console.log('Open performance dashboard');
      },
      shortcut: 'Ctrl+Shift+P',
      keywords: ['performance', 'metrics', 'dashboard', 'monitoring']
    },
    {
      id: 'system-health',
      title: 'Open System Health',
      description: 'View system health and status',
      category: 'Tools',
      icon: <Shield className="w-4 h-4" />,
      action: () => {
        // This would open the system health dashboard
        console.log('Open system health');
      },
      shortcut: 'Ctrl+Shift+H',
      keywords: ['health', 'system', 'status', 'monitoring']
    },
    {
      id: 'api-docs',
      title: 'Open API Documentation',
      description: 'View API documentation and endpoints',
      category: 'Tools',
      icon: <Code className="w-4 h-4" />,
      action: () => {
        window.open('/api-docs', '_blank');
      },
      keywords: ['api', 'documentation', 'docs', 'endpoints']
    },
    {
      id: 'database-status',
      title: 'Database Status',
      description: 'Check database connection and status',
      category: 'Tools',
      icon: <Database className="w-4 h-4" />,
      action: () => {
        console.log('Check database status');
      },
      keywords: ['database', 'db', 'status', 'connection']
    }
  ], []);

  const allCommands = useMemo(() => [...defaultCommands, ...customCommands], [defaultCommands, customCommands]);

  // Filter commands based on query and category
  const filteredCommands = useMemo(() => {
    let filtered = allCommands;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(cmd => cmd.category === selectedCategory);
    }

    // Filter by query
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(cmd => 
        cmd.title.toLowerCase().includes(searchTerm) ||
        cmd.description.toLowerCase().includes(searchTerm) ||
        cmd.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
        cmd.category.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [allCommands, query, selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allCommands.map(cmd => cmd.category)));
    return ['All', ...cats];
  }, [allCommands]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isVisible) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [isVisible, filteredCommands, selectedIndex, onClose]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);

  // Handle keyboard events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus input when visible
  useEffect(() => {
    if (isVisible) {
      const input = document.getElementById('command-palette-input');
      if (input) {
        input.focus();
      }
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              id="command-palette-input"
              type="text"
              placeholder="Search commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 text-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  (category === 'All' && !selectedCategory) || selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Commands List */}
        <div className="max-h-96 overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No commands found</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="p-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={() => {
                    command.action();
                    onClose();
                  }}
                  className={`w-full p-3 rounded-lg text-left transition-colors flex items-center gap-3 ${
                    index === selectedIndex
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    index === selectedIndex ? 'bg-blue-500' : 'bg-gray-700'
                  }`}>
                    {command.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{command.title}</span>
                      {command.isNew && (
                        <span className="px-2 py-0.5 bg-green-600 text-white text-xs rounded-full">
                          New
                        </span>
                      )}
                      {command.isPro && (
                        <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                          Pro
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${
                      index === selectedIndex ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {command.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        index === selectedIndex ? 'bg-blue-500' : 'bg-gray-600'
                      }`}>
                        {command.category}
                      </span>
                      {command.shortcut && (
                        <span className={`text-xs px-2 py-0.5 rounded border ${
                          index === selectedIndex 
                            ? 'border-blue-400 text-blue-200' 
                            : 'border-gray-600 text-gray-400'
                        }`}>
                          {command.shortcut}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${
                    index === selectedIndex ? 'text-blue-200' : 'text-gray-500'
                  }`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Esc</kbd>
                Close
              </span>
            </div>
            <div className="text-xs">
              {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCommandPalette;