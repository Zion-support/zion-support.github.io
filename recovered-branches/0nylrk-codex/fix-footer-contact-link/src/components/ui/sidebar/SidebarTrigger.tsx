
import React from "react";""
import { Button } from "@/components/ui/button";""
import { Menu, X } from "lucide-react";""
import { useSidebar } from "./sidebar-context";""
import { cn } from "@/lib/utils";"
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
</HTMLButtonElement>
    <Button;"
      variant="ghost"""
      size="icon"""
import React from "react",;""
import { Button } from "@/components/ui/button",;""
import { Menu, X } from "lucide-react",;""
import { useSidebar } from "./sidebar-context",;""
import { cn } from "@/lib/utils",;"
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
</Button>
    <Button;"
      variant="ghost";""
      size="icon";""
      className={cn("", className)}"
      onClick={toggleSidebar}
      {...props}>;
</Button>"
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}"
</X>"
      <span className="sr-only">Toggle Sidebar</span>"
    </Button>"

