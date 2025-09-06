
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode
}

const SidebarMenuItem = null;
