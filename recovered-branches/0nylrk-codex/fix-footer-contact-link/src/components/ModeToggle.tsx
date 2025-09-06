import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

<<<<<<< HEAD
<<<<<<< HEAD
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
});

export function ModeToggle() {;

  const { theme, setTheme } = useTheme();
<<<<<<< HEAD
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
// Create a simplified theme hook for offline mode

const useTheme = () => ({
  theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});
  theme: "dark",
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),
=======
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
=======
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
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
=======


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Moon, Sun  } from './lucide-react';
import { Button  } from '@/components / ui / button';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
;
