import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";


<<<<<<< HEAD
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"




import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`);

=======

import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => console && console.log(`Theme would change to: ${theme}`);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
});

export function ModeToggle() {;

  const { theme, setTheme } = useTheme();

<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export function ModeToggle() {
  const { theme, setTheme } = useTheme(),

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
<<<<<<< HEAD


=======
=======
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>

  )


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Moon, Sun  } from './lucide-react';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
