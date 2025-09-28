import React, { useState, useEffect, useCallback } from "react";

interface Command {
  id: string;
  title: string;
  description: string;
  category: string;
  action: () => void;
  keywords?: string[];
  shortcut?: string;
}

interface CommandPaletteProps {
  isVisible: boolean;
  onClose: () => void;
  commands: Command[];
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isVisible,
  onClose,
  commands,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredCommands, setFilteredCommands] = useState<Command[]>(commands);

  useEffect(() => {
    if (isVisible) {
      setQuery("");
      setSelectedIndex(0);
      setFilteredCommands(commands);
    }
  }, [isVisible, commands]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            onClose();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, onClose, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredCommands(commands);
      setSelectedIndex(0);
      return;
    }

    const filtered = commands.filter((command) => {
      const searchText =
        `${command.title} ${command.description} ${command.category} ${command.keywords?.join(" ") || ""}`.toLowerCase();
      return searchText.includes(query.toLowerCase());
    });

    setFilteredCommands(filtered);
    setSelectedIndex(0);
  }, [query, commands]);

  const handleCommandClick = useCallback(
    (command: Command) => {
      command.action();
      onClose();
    },
    [onClose],
  );

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-96 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              autoFocus
            />
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <p>No commands found for &quot;{query}&quot;</p>
            </div>
          ) : (
            <div className="py-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={() => handleCommandClick(command)}
                  className={`
                    w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50
                    ${index === selectedIndex ? "bg-gray-50" : ""}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {command.title}
                        </p>
                        {command.shortcut && (
                          <kbd className="ml-2 px-1.5 py-0.5 text-xs font-mono bg-gray-200 text-gray-600 rounded">
                            {command.shortcut}
                          </kbd>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {command.description}
                      </p>
                      <p className="text-xs text-gray-400 capitalize">
                        {command.category}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>Use ↑↓ to navigate, Enter to select, Esc to close</span>
            <span>
              {filteredCommands.length} command
              {filteredCommands.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
