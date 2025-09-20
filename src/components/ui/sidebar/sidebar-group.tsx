import React, { forwardRef } from 'react';
import { ChevronDown } from "lucide-react";origin/main
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
