
});

export function ModeToggle() { return null; }
  const { theme, setTheme } = useTheme();
<<<<<<< HEAD
<<<<<<< HEAD
});

export function ModeToggle() {;
  const { theme, setTheme } = useTheme();
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

// Create a simplified theme hook for offline mode
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Moon, Sun } from "lucide-react""
import { Button } from "@/components/ui/button"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
// Create a simplified theme hook for offline mode;
const useTheme = () => ({"
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  theme: "dark"
  setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
});"
  theme: "dark",`
  setTheme: (theme: string) => // // // console.log(`Theme would change to: ${theme}`)
}),

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
    >
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {theme === "dark" ? (
=======
export function ModeToggle() {}
  const { theme, setTheme } = useTheme(),

  return (
    <Button"
      variant="ghost""
      size="icon""
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

    >"
      {theme === "dark" ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : ("
        <Moon className="h-5 w-5 text-slate-300" />
      )}"
      <span className="sr-only">Toggle theme</span>
</Button>
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
  )
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Moon, Sun  } from './lucide-react';
=======
    </Button>;
  );
}

import { Moon, Sun  } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {theme === "dark" ? (
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : (
        <Moon className="h - 5 w - 5 text - slate - 300" />)}
      <span className="sr - only">Toggle theme</span>;
    </Button>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
{theme === "dark" ? (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
=======
"
      {theme === "dark" ? ("
        <Sun className="h - 5 w - 5 text - yellow - 300" />) : ("
        <Moon className="h - 5 w - 5 text - slate - 300" />)}"
      <span className="sr - only">Toggle theme</span>;
    </Button>);
}

  );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
  ),;}
 export function ModeToggle () {}
  const {};
  theme, setTheme;
}= useTheme ();"
return (<Button variant="ghost" size="icon" onClick= {"
  () => setTheme (theme === "dark" ? "light" : "dark") 
}> {"
  theme === "dark" ? (<Sun className="h-5 w-5 text-yellow-300" /> h-5 w-5 text-slate-300"/>) "
}<span className=" sr-only" >Toggle theme</span> </Button>) 
}
);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;

}
;
