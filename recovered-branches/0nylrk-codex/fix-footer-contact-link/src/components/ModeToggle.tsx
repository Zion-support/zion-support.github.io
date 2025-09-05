
<<<<<<< HEAD
import { Moon, Sun } from &quot;lucide-react&quot;
import { Button } from &quot;@/components/ui/button&quot;

// Create a simplified theme hook for offline mode
const useTheme = () => ({
<<<<<<< HEAD
  theme: "dark",
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),
=======
  theme: &quot;dark&quot;,
  setTheme: (theme: string) => // console.log(`Theme would change to: ${theme}`)
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ModeToggle() {
  const { theme, setTheme } = useTheme(),

  return (
    <Button
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      onClick={() => setTheme(theme === &quot;dark&quot; ? &quot;light&quot; : &quot;dark&quot;)}
    >
      {theme === &quot;dark&quot; ? (
        <Sun className=&quot;h-5 w-5 text-yellow-300&quot; />
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ) : (
        <Moon className=&quot;h-5 w-5 text-slate-300&quot; />
      )}
      <span className=&quot;sr-only&quot;>Toggle theme</span>
    </Button>
  )
}
