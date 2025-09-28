import React, { useState, useEffect, useCallback } from "react";
import { Keyboard, Command, Settings, HelpCircle } from "lucide-react";

export interface KeyboardShortcut {
  id: string;
  keys: string[];
  description: string;
  category: string;
  action: () => void;
  enabled: boolean;
  global?: boolean;
  preventDefault?: boolean;
  modifier?: "ctrl" | "alt" | "shift" | "meta";
}

interface KeyboardShortcutsManagerProps {
  shortcuts: KeyboardShortcut[];
  onShortcutTriggered?: (shortcut: KeyboardShortcut) => void;
  showHelpPanel?: boolean;
  enableGlobalShortcuts?: boolean;
  customCategories?: Record<string, string>;
}

const KeyboardShortcutsManager: React.FC<KeyboardShortcutsManagerProps> = ({
  shortcuts,
  onShortcutTriggered,
  showHelpPanel = true,
  enableGlobalShortcuts = true,
  customCategories = {},
}) => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const [activeShortcuts, setActiveShortcuts] = useState<KeyboardShortcut[]>(
    [],
  );
  const [isRecording, setIsRecording] = useState(false);
  const [recordingShortcut, setRecordingShortcut] =
    useState<KeyboardShortcut | null>(null);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  // Default categories
  const defaultCategories: Record<string, string> = {
    navigation: "Navigation",
    tools: "Tools",
    system: "System",
    editing: "Editing",
    view: "View",
    help: "Help",
    ...customCategories,
  };

  // Initialize active shortcuts
  useEffect(() => {
    setActiveShortcuts(shortcuts.filter((s) => s.enabled));
  }, [shortcuts]);

  // Handle keydown events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const modifiers = {
        ctrl: event.ctrlKey,
        alt: event.altKey,
        shift: event.shiftKey,
        meta: event.metaKey,
      };

      // Build current key combination
      const currentKeys: string[] = [];
      if (modifiers.ctrl) currentKeys.push("ctrl");
      if (modifiers.alt) currentKeys.push("alt");
      if (modifiers.shift) currentKeys.push("shift");
      if (modifiers.meta) currentKeys.push("meta");
      currentKeys.push(key);

      setPressedKeys(currentKeys);

      // Find matching shortcut
      const matchingShortcut = activeShortcuts.find((shortcut) => {
        const shortcutKeys = shortcut.keys.map((k) => k.toLowerCase());
        return (
          shortcutKeys.length === currentKeys.length &&
          shortcutKeys.every((k, i) => k === currentKeys[i])
        );
      });

      if (matchingShortcut) {
        if (matchingShortcut.preventDefault !== false) {
          event.preventDefault();
        }

        matchingShortcut.action();
        onShortcutTriggered?.(matchingShortcut);
      }

      // Handle recording mode
      if (isRecording && recordingShortcut) {
        event.preventDefault();

        if (key === "escape") {
          setIsRecording(false);
          setRecordingShortcut(null);
          setPressedKeys([]);
          return;
        }

        if (key === "enter") {
          // Save the recorded shortcut
          const newShortcut = {
            ...recordingShortcut,
            keys: currentKeys,
          };

          // Update the shortcut in the shortcuts array
          const updatedShortcuts = shortcuts.map((s) =>
            s.id === newShortcut.id ? newShortcut : s,
          );

          setActiveShortcuts(updatedShortcuts.filter((s) => s.enabled));
          setIsRecording(false);
          setRecordingShortcut(null);
          setPressedKeys([]);
          return;
        }
      }
    },
    [
      activeShortcuts,
      isRecording,
      recordingShortcut,
      shortcuts,
      onShortcutTriggered,
    ],
  );

  // Handle keyup events
  const handleKeyUp = useCallback(() => {
    setPressedKeys([]);
  }, []);

  // Register/unregister event listeners
  useEffect(() => {
    if (enableGlobalShortcuts) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [handleKeyDown, handleKeyUp, enableGlobalShortcuts]);

  // Format keys for display
  const formatKeys = (keys: string[]) => {
    return keys
      .map((key) => {
        switch (key.toLowerCase()) {
          case "ctrl":
            return "Ctrl";
          case "alt":
            return "Alt";
          case "shift":
            return "Shift";
          case "meta":
            return "Cmd";
          case " ":
            return "Space";
          case "arrowup":
            return "↑";
          case "arrowdown":
            return "↓";
          case "arrowleft":
            return "←";
          case "arrowright":
            return "→";
          default:
            return key.toUpperCase();
        }
      })
      .join(" + ");
  };

  // Get shortcuts by category
  const shortcutsByCategory = activeShortcuts.reduce(
    (acc, shortcut) => {
      if (!acc[shortcut.category]) {
        acc[shortcut.category] = [];
      }
      acc[shortcut.category].push(shortcut);
      return acc;
    },
    {} as Record<string, KeyboardShortcut[]>,
  );

  // Start recording a shortcut
  const startRecording = (shortcut: KeyboardShortcut) => {
    setIsRecording(true);
    setRecordingShortcut(shortcut);
    setPressedKeys([]);
  };

  return (
    <>
      {/* Help Toggle Button */}
      {showHelpPanel && (
        <button
          onClick={() => setIsHelpVisible(!isHelpVisible)}
          className="fixed bottom-4 right-16 z-40 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          title="Keyboard Shortcuts Help"
          aria-label="Toggle keyboard shortcuts help"
        >
          <Keyboard className="w-5 h-5" />
        </button>
      )}

      {/* Help Panel */}
      {isHelpVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Keyboard className="w-6 h-6" />
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsHelpVisible(false)}
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Close keyboard shortcuts help"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {Object.keys(shortcutsByCategory).length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No keyboard shortcuts configured
                </p>
              ) : (
                <div className="space-y-6">
                  {Object.entries(shortcutsByCategory).map(
                    ([category, categoryShortcuts]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Command className="w-4 h-4" />
                          {defaultCategories[category] || category}
                        </h3>
                        <div className="grid gap-2">
                          {categoryShortcuts.map((shortcut) => (
                            <div
                              key={shortcut.id}
                              className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                            >
                              <div className="flex-1">
                                <p className="text-white font-medium">
                                  {shortcut.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                {isRecording &&
                                recordingShortcut?.id === shortcut.id ? (
                                  <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                      {pressedKeys.map((key, index) => (
                                        <kbd
                                          key={index}
                                          className="px-2 py-1 bg-red-600 text-white text-xs rounded"
                                        >
                                          {formatKeys([key])}
                                        </kbd>
                                      ))}
                                    </div>
                                    <span className="text-xs text-red-400 animate-pulse">
                                      Recording...
                                    </span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                      {shortcut.keys.map((key, index) => (
                                        <kbd
                                          key={index}
                                          className="px-2 py-1 bg-gray-700 text-white text-xs rounded"
                                        >
                                          {formatKeys([key])}
                                        </kbd>
                                      ))}
                                    </div>
                                    <button
                                      onClick={() => startRecording(shortcut)}
                                      className="text-gray-400 hover:text-white text-xs"
                                      title="Edit shortcut"
                                    >
                                      <Settings className="w-3 h-3" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700 bg-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    Press keys to record new shortcuts
                  </span>
                  <span>Press Esc to cancel recording</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsHelpVisible(false)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recording Indicator */}
      {isRecording && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          <div className="flex items-center gap-2">
            <Keyboard className="w-4 h-4" />
            <span>
              Recording shortcut for: {recordingShortcut?.description}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardShortcutsManager;
