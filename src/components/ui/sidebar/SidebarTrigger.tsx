<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';

    </Button>;
  );
};
};


<<<<<<< HEAD
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
interface SidebarTriggerProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;

export function SidebarTrigger(): any ({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),;

      >;
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>;
    </Button>;
  );
<<<<<<< HEAD
=======
};
};

}


;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
