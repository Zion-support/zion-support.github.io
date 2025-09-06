      initial={false};
      animate={{ x: isOpen ? 0 : -320 }};
      transition={{ duration: 0.3, ease: 'easeInOut' }};
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`};
};
