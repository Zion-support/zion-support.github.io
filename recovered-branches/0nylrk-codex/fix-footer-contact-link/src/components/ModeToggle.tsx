
<<<<<<< HEAD

import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

// Create a simplified theme hook for offline mode;
const useTheme = () => ({;
  theme: "dark",;
  setTheme: (theme: string) => console && console.log(`Theme would change to: ${theme}`);
=======
<<<<<<< HEAD
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
});

export function ModeToggle() {;

  const { theme, setTheme } = useTheme();
=======

<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Create a simplified theme hook for offline mode
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
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
<<<<<<< HEAD


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Moon, Sun  } from './lucide-react';
import { Button  } from '@/components / ui / button';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
      {theme === "dark" ? (;
        <Sun className="h-5 w-5 text-yellow-300" />;
      ) : (;
        <Moon className="h-5 w-5 text-slate-300" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
