import React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useTheme } from "@/components/ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}