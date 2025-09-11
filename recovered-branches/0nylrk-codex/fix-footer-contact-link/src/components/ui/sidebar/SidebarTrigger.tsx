



import React from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {useSidebar} from "./sidebar-context";
import {cn} from "@/lib/utils";

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from "lucide-react",
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>;
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
