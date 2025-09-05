<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Moon, Sun } from "lucide-react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/context/ThemeContext",
=======
import React from &quot;react&quot;;
import { Moon, Sun } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useTheme } from &quot;@/context/ThemeContext&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ThemeToggle(): JSX.Element {
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
      ) : (
        <Moon className=&quot;h-5 w-5&quot; />
      )}
      <span className=&quot;sr-only&quot;>Toggle theme</span>
    </Button>
  )
=======
import React from "react",;
import { Moon, Sun } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/context/ThemeContext",;
export default function ThemeToggle(): JSX.Element {;
  const { mode, toggleTheme } = useTheme();
  return (;
    <Button;
      aria-label="Toggle theme";
      onClick={toggleTheme}
      variant="ghost";
      size="icon";
    >;
      {mode === "dark" ? (;
        <Sun className="h-5 w-5" />;
      ) : (;
        <Moon className="h-5 w-5" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;