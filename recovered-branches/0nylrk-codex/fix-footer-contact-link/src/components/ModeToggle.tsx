<<<<<<< HEAD


import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => console && console.log(`Theme would change to: ${theme}`);
});

export function ModeToggle() {;

  const { theme, setTheme } = useTheme();
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
});

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
