import React from "react";

export default function Header(): React.ReactElement {
  return (
    <header className="w-full border-b border-gray-200 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 grid place-items-center text-white font-bold">Z</div>
            <div className="hidden sm:block">
              <div className="text-gray-900 font-semibold">Zion Tech Group</div>
              <div className="text-xs text-gray-600">Innovation & Technology</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

