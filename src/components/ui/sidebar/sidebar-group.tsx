import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import React from "react",
import React from "react",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
