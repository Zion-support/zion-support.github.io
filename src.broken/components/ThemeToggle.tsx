<<<<<<< HEAD
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
}

export default function ThemeToggle(): JSX.Element {
  const { mode, toggleTheme } = useTheme();

  
    >
      {mode === 'dark' ? (
        <Sun className='h-5 w-5' />
      ) : (
        <Moon className='h-5 w-5' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
=======
import React from "react",
import { Moon, Sun } from "lucide-react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/context/ThemeContext",
export default function ThemeToggle(): JSX.Element {
  const { mode, toggleTheme } = useTheme(),

  return (
    <Button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
    >
      {mode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
import React from "react",;
import { Moon, Sun } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/context/ThemeContext",;
export default function ThemeToggle(): JSX.Element {;
  const { mode, toggleTheme } = useTheme();
  return (;
    <Button;
      aria-label="Toggle theme";
      onClick={toggleTheme}
      variant="ghost";
      size="icon";
    >;
      {mode === "dark" ? (;
        <Sun className="h-5 w-5" />;
      ) : (;
        <Moon className="h-5 w-5" />;
      )}
      <span className="sr-only">Toggle theme</span>;
    </Button>;
  );
}
;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
