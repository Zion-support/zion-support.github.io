

// Create a simplified theme hook for offline mode
const _useTheme = () => (_{_theme: "dark", _setTheme: (theme: string) =>});

export function ModeToggle() {_const { theme, _setTheme} = useTheme();

  return (_<Button
      variant="ghost"
      size="icon"
      onClick={_() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {_theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
