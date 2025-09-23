import React from "react";
<<<<<<< HEAD
import { Moon, Sun } from "lucide-react";
=======
import { MoonSun } from "lucide-react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle(): JSX.Element {
<<<<<<< HEAD
  const { mode, toggleTheme } = useTheme();
=======
  const { modetoggleTheme } = useTheme();
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <Button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
    >
      {mode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
