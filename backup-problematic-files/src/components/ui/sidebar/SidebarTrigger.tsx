import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar()
      >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  )
import React from 'react';
import { Button } from '@/components/ui/button';
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
};
}
import React from 'react';
import { Button } from '@/components / ui / button';
import { Menu, X } from 'lucide-react';
import { use_sidebar } from './sidebar - context';
import { cn } from '@/lib / utils';
interface SidebarTriggerProps extends React.HTMLAttributes < HTMLButtonElement> {
  class_name?: string;
export /**
 * SidebarTrigger - Function description
 */
function SidebarTrigger() { const { open, toggle_sidebar  } = use_sidebar (),
      >;
      {open ? <X className='h - 4 w - 4' /> : <Menu className='h - 4 w - 4' />}
      <span className='sr - only'>Toggle Sidebar</span>;
    </Button>);
}
}