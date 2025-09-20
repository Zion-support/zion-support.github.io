import React, { forwardRef } from 'react'
import { ChevronDown,,  } from 'lucide-react'
import { cn,,  } from "
import { SafeRef,,  } from "
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
