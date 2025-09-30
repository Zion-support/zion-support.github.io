import React from 'react';

const KeyboardShortcutsHelp: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Keyboard Shortcuts</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Ctrl + Shift + P</span>
          <span>Open Command Palette</span>
        </div>
        <div className="flex justify-between">
          <span>Ctrl + Shift + M</span>
          <span>Toggle Performance Monitor</span>
        </div>
        <div className="flex justify-between">
          <span>Ctrl + Shift + H</span>
          <span>Show Help</span>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsHelp;