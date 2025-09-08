
import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
// Create a simplified theme hook for offline mode
const useTheme = () => ({
  theme: "dark",
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`),
});

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
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
