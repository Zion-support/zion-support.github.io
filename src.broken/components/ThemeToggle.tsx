<<<<<<< HEAD
import React from "react",;
import { Moon, Sun } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/context/ThemeContext",;
;
export default function ThemeToggle():JSX.Element {;
  const { mode, toggleTheme } = useTheme(),;
;
  return (;
    <Button;
      aria-label="Toggle theme";
      onClick={toggleTheme}
      variant="ghost";
      size="icon";
    >;
      {mode === "dark" ? (;
        <Sun className="h-5 w-5" />;
      ) :(;
        <Moon className="h-5 w-5" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  ),;
=======
import React from "react",
import { Moon, Sun } from "lucide-react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/context/ThemeContext",export default function ThemeToggle(): JSX.Element {
  const { mode, toggleTheme } = useTheme(),

  return (
    <Button
      aria-label=&quot;Toggle theme&quot;
      onClick={toggleTheme}
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
    >
      {mode === &quot;dark&quot; ? (
        <Sun className=&quot;h-5 w-5&quot; />
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
        <Moon className=&quot;h-5 w-5&quot; />
      )}
      <span className=&quot;sr-only&quot;>Toggle theme</span>
    </Button>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
