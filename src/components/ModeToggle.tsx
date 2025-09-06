
  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
      const newTheme = isDarkMode ? "light" : "dark";

      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`),
        description: `Theme changed to ${newTheme} mode successfully`}),

      // Accessibility announcement for screen readers
      const announcement = `Theme switched to ${newTheme} mode`;
      

