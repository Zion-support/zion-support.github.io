import React from "react";

export default function ThemeToggle(): JSX.Element {_const { mode, _toggleTheme} = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      onClick={_toggleTheme}
      variant="ghost"
      size="icon"
    >
      {_mode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
