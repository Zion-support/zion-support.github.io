import React, { useState } from 'react';
import { Accessibility, Eye, Type, Volume2, VolumeX, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // This would control any audio/video elements on the page
    const mediaElements = document.querySelectorAll('audio, video');
    mediaElements.forEach((element: HTMLMediaElement) => {
      element.muted = !isMuted;
    });
  };

  return (
    <div className="relative">
      {/* Accessibility Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Accessibility menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-cyan-500" />
              Accessibility Options
            </h3>

            {/* Font Size Controls */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Font Size
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[3rem] text-center">
                  {fontSize}px
                </span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={resetFontSize}
                  className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Reset font size"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                  className="mr-2 w-4 h-4 text-cyan-500 bg-slate-100 border-slate-300 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  High Contrast
                </span>
                <Eye className="w-4 h-4 ml-2 text-cyan-500" />
              </label>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={toggleReducedMotion}
                  className="mr-2 w-4 h-4 text-cyan-500 bg-slate-100 border-slate-300 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Reduced Motion
                </span>
                <Type className="w-4 h-4 ml-2 text-cyan-500" />
              </label>
            </div>

            {/* Mute Toggle */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isMuted}
                  onChange={toggleMute}
                  className="mr-2 w-4 h-4 text-cyan-500 bg-slate-100 border-slate-300 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mute Audio
                </span>
                {isMuted ? (
                  <VolumeX className="w-4 h-4 ml-2 text-cyan-500" />
                ) : (
                  <Volume2 className="w-4 h-4 ml-2 text-cyan-500" />
                )}
              </label>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                <strong>Keyboard shortcuts:</strong><br />
                • Tab: Navigate<br />
                • Enter/Space: Activate<br />
                • Escape: Close menus<br />
                • Ctrl + Plus: Increase font<br />
                • Ctrl + Minus: Decrease font
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};