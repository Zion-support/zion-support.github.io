
import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {icon?: React.ReactNode;
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode}
=======
active?: boolean;
href?: string;
target?: string;
badge?: React.ReactNode}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
