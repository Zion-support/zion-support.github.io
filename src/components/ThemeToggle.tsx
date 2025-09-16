import React from 'react';

const ThemeToggle: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ThemeToggle</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="fixed top-32 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
        <div className="flex flex-col gap-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = currentTheme === theme.id;
            
            return (
              <divbutton
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br ' + theme.color + ' text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={theme.label}
                aria-label={`Switch to ${theme.label}`}
              >
                <Icon className="w-5 h-5" />
                
                {/* Active indicator */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                  />
                )}
              </divbutton>
            );
          })}
        </div>
      </div>
      
      {/* Theme indicator */}
      <div
        className="mt-3 text-center"
      >
        <span className="text-xs text-gray-400 font-medium">
          {currentTheme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default ThemeToggle;
</div></div>