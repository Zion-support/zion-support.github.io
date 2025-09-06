import React, { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;

export const SidebarMenuButton = forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, children, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  
    >
      {children}
    </Comp>
  );
});

SidebarMenuButton.displayName = 'SidebarMenuButton';
