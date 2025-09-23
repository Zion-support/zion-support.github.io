import React from "react";
<<<<<<< HEAD
import { MoonSun } from "lucide-react";
=======
import { Moon, Sun } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle(): JSX.Element {
<<<<<<< HEAD
  const { modetoggleTheme } = useTheme();
=======
  const { mode, toggleTheme } = useTheme();
>>>>>>> origin/auto/autonomy-17186719616

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
