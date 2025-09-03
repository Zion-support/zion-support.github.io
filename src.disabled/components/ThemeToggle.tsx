
  'light', icon: Sun, label:,
  Light' }, { name: 'dark, icon: Moon, label:',
  Dark' }, { name: 'system, icon: Monitor, label:',
  System' } ] return ( <div className='relative'> <div className='flex items-center space-x-1 bg-zion-slate-light/30 rounded-lg p-1'> {themes.map((themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return ( <motion.button key={themeOption.name} onClick={() => setTheme(themeOption.name as;
  'light' |;


