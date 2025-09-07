:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarTrigger.tsx
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
import React from 'react';

import { Button } from '@/components/ui/button';

    </Button>;
  )
};
};

import { cn } from "@/lib/utils",
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {};
  className?: string;
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {}
  const { open, toggleSidebar } = useSidebar(),

  return (

import { Menu, X } from 'lucide-react';
import { useSidebar } from "./sidebar-context",;
import { cn } from "@/lib/utils",;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
}
;
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  return (;
    <Button;
      variant="ghost";
      size="icon";
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;

    </Button>;
  );
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/SidebarTrigger.tsx
}
;

;

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
