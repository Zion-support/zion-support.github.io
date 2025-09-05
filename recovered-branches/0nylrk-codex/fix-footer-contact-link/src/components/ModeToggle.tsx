
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
      ) : (
        <Moon className=&quot;h-5 w-5 text-slate-300&quot; />
      )}
      <span className=&quot;sr-only&quot;>Toggle theme</span>
    </Button>
  )
=======
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`);
}),;
export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
  return (;
    <Button;
      variant="ghost";
      size="icon";
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >;
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;