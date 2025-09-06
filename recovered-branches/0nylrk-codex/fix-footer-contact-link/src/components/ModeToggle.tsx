
<<<<<<< HEAD
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
=======
import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
>>>>>>> main

// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
<<<<<<< HEAD
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),

export function ModeToggle() {
  const { theme, setTheme } = useTheme(),
=======
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
>>>>>>> main

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
<<<<<<< HEAD
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
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
=======
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
>>>>>>> main
}
;