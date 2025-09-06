<<<<<<< HEAD
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// Create a simplified theme hook for offline mode

const useTheme = () => ({
  theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
export function ModeToggle() {
=======

import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => console && console.log(`Theme would change to: ${theme}`);
});

export function ModeToggle() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >;
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
<<<<<<< HEAD
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
=======
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
