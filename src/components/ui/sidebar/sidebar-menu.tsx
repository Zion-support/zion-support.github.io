
import React, { forwardRef } from "react";
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
    if (href) {
      return (
        <a
          href = $2;
            active && "bg-accent font-medium text-accent-foreground",
            className
          )}
        >
          <div className = $2;
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className = $2;
SidebarMenuItem.displayName = $2;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className = $2;
export { SidebarMenuItem, SidebarMenuGroup },
