import React from 'react';

const CommandPalette: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Command Palette</h2>
        <input
          type="text"
          placeholder="Type a command..."
          className="w-full p-2 border rounded"
        />
        <div className="mt-4 space-y-2">
          <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            Open Performance Monitor
          </div>
          <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            Toggle Analytics
          </div>
          <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            Show System Status
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;