import React from "react";
import {X} from "lucide-react";
import {cn} from "@/lib/utils";
import {badgeVariants} from "@/components/ui/badge-variants";
export interface ClickableBadgeProps extends React && React.HTMLAttributes<HTMLDivElement> {;
export function ClickableBadge(): any ({  children;
onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function ClickableBadge(): any ({;  children;
  className;
  variant = "default";
  onRemove;
  ...props;
}: ClickableBadgeProps) {;

