<<<<<<< HEAD:all-pages-backup/components/EnhancedAccessibility.tsx
    const handleContrastChange = (e: MediaQueryListEvent) => {;
      if (e.matches) {;
        document.documentElement.classList.add('high-contrast')} else {
        document.documentElement.classList.remove('high-contrast')}
    };

<<<<<<< HEAD:all-pages-backup/components/EnhancedAccessibility.tsx
    return () => {
      mediaQuery.removeEventListener('change', handleContrastChange)}}, []);

  useEffect(() => {
    // Add reduced motion support
    const handleMotionChange = (e: MediaQueryListEvent) => {;
      if (e.matches) {;
        document.documentElement.classList.add('reduce-motion')} else {
        document.documentElement.classList.remove('reduce-motion')}
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', handleMotionChange);
    // Call with the MediaQueryList directly
    handleMotionChange(mediaQuery as any);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)}}, []);

  useEffect(() => {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'announcements';
    document.body.appendChild(announcement);

    return () => {
      const existingAnnouncement = document.getElementById('announcements');
      if (existingAnnouncement) {
        document.body.removeChild(existingAnnouncement)}
    }}, []);

  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {;
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {;
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus()}
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown)}}, []);

  return <>{children}</>};

export default EnhancedAccessibility
