
<<<<<<< HEAD

import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`),
});

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
<<<<<<< HEAD

      <span className="sr-only">Toggle theme</span>;"
=======
      <span className="sr-only">Toggle theme</span>;

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// Create a simplified theme hook for offline mode

;
// Create a simplified theme hook for offline mode;
const useTheme = () => ({"

export function ModeToggle() {
  const { theme, setTheme } = useTheme(),

  const { theme, setTheme } = useTheme();

  const { theme, setTheme } = useTheme();
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// Create a simplified theme hook for offline mode


const useTheme = () => ({
theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
export function ModeToggle() {
  const { theme, setTheme } = useTheme(),
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

<<<<<<< HEAD

=======
      <span className="sr-only">Toggle theme</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
;
// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme:"dark",;
  setTheme:(theme:string) => // // // console.log(`Theme would change to:${theme}`);
}),;
;
export function ModeToggle() {;
  const { theme, setTheme } = useTheme(),;
;
  return (;
    <Button;
      variant="ghost";
      size="icon";
      onClick={() => setTheme(theme === "dark" ? "light" :"dark")}
    >;
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) :(;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Moon, Sun  } from './lucide-react';

import { Button  } from '@/components / ui / button';
// Create a simplified theme hook for offline mode;
const use_theme = () =>: any ({"
  theme: "dark",`
  set_theme: (theme: string) => console.log (`Theme would change to: ${theme}`),
});
;
export /**;
 * ModeToggle - Function description;
 */
function ModeToggle() {}
  const { theme, set_theme } = use_theme ();
;
  return (
    <Button;"
      variant="ghost";"
      size="icon";"
      on_click={() => set_theme (theme === "dark" ? "light" : "dark")}
    >;

      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
}




<<<<<<< HEAD
=======

}
;

}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
