
<<<<<<< HEAD
import { MoonSun } from "lucide-react"
=======
import { Moon, Sun } from "lucide-react"
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button"

// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});

export function ModeToggle() {
<<<<<<< HEAD
  const { themesetTheme } = useTheme();
=======
  const { theme, setTheme } = useTheme();
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
