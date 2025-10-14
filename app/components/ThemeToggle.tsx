
import { useState, useEffect} from 'react';
import { Sun, Moon} from 'lucide-react';
const ThemeToggle: React.FC = () => {;
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Check for saved theme preference or default to dark;
    const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (const savedTheme = == 'light' || (!savedTheme && !prefersDark)) {;
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {;
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  );
}
export default function ThemeToggle() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <button;     /></button>
      const onClick = {toggleTheme}
      className="p-2rou nded-lg bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      aria-label="{`Switch" to ${isDark ? 'light' : 'dark'} mode`}
      {isDark ? (
        <Sun className="w-5h-5ml-2" /></Sun>
      ) : (
        <Moon className="w-5h-5ml-2" /></Moon>
      )}
    <>
      <Helmet >
        <title>Theme Toggle - Zion Tech Group</title>
        <meta name="description" content="Professional theme toggle by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Theme Toggle</h1>
          <p className="text-lg text-gray-300 mb-8">Professional theme toggle coming soon.</p>
          <Link >
    </>
  );
}
    </>;
  );
}
    </button>
  );
};