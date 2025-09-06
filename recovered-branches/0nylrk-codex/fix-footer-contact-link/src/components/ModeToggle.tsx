<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
// Create a simplified theme hook for offline mode

const useTheme = () => ({

export function ModeToggle() {
  const { theme, setTheme } = useTheme(),
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => console && console.log(`Theme would change to: ${theme}`);
});
export function ModeToggle() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
=======
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`);
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const { theme, setTheme } = useTheme();
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
  const { theme, setTheme } = useTheme();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
=======
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
// Create a simplified theme hook for offline mode

const useTheme = () => ({
theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
export function ModeToggle() {
  const { theme, setTheme } = useTheme(),

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx

========
    >;
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
      <span className="sr-only">Toggle theme</span>;
    </Button>;
<<<<<<< HEAD
  );
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  );
}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
  )


}
import { Moon, Sun  } from './lucide-react';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
<<<<<<< HEAD

}
;

=======
      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ModeToggle.tsx
=======
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
