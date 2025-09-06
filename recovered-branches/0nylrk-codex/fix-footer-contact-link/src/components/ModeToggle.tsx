<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`),
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
});

export function ModeToggle() {;

  const { theme, setTheme } = useTheme();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
});

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
// Create a simplified theme hook for offline mode

const useTheme = () => ({
  theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
  theme: "dark",
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),



export function ModeToggle() {
  const { theme, setTheme } = useTheme(),

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
=======
=======
    >;
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;

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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Moon, Sun  } from './lucide-react';
import { Button  } from '@/components / ui / button';
// Create a simplified theme hook for offline mode;
const use_theme = () =>: any ({
  theme: "dark",
  set_theme: (theme: string) => console.log (`Theme would change to: ${theme}`),
});
;
export /**
 * ModeToggle - Function description
 */
function ModeToggle() {
  const { theme, set_theme } = use_theme ();
;
  return (
    <Button;
      variant="ghost";
      size="icon";
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
  );
}
  ),;}
 export function ModeToggle () {
  const {
  theme, setTheme 
}= useTheme ();
return (<Button variant="ghost" size="icon" onClick= {
  () => setTheme (theme === "dark" ? "light" : "dark") 
}> {
  theme === "dark" ? (<Sun className="h-5 w-5 text-yellow-300" /> h-5 w-5 text-slate-300"/>) 
}<span className=" sr-only" >Toggle theme</span> </Button>) 
}
);
}
}
;

}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
