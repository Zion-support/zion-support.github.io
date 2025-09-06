<<<<<<< HEAD

<<<<<<< HEAD
import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`);
=======
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`),
>>>>>>> main
});

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
=======
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// Create a simplified theme hook for offline mode

const useTheme = () => ({
<<<<<<< HEAD
  theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
=======
  theme: "dark",
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function ModeToggle() {
  const { theme, setTheme } = useTheme(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

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
<<<<<<< HEAD
  )
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
