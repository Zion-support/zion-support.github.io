
import React from 'react',
// This file fixes the ref type issues in sidebar components

// Export a placeholder to ensure the file is recognized as a module
<<<<<<< HEAD
export const SIDEBAR_REF_TYPE_FIX = true,
=======
export const _SIDEBAR_REF_TYPE_FIX = true;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,

// Helper type for component refs
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,

// Helper for dealing with refs in complex situations
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = 
<<<<<<< HEAD
  React.PropsWithChildren<Props & { as?: T }>,
=======
  React.PropsWithChildren<Props & {_as?: T}>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>,

// Sidebar specific types
<<<<<<< HEAD
export type SidebarState = "expanded" | "collapsed",
=======
export type SidebarState = &quot;expanded&quot; | &quot;collapsed&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export type SidebarContext = {
  state: SidebarState,
  open: boolean,
  setOpen: (open: boolean) => void,
  openMobile: boolean,
  setOpenMobile: (open: boolean) => void,
  isMobile: boolean,
  toggleSidebar: () => void
},
=======
export type SidebarContext = {_state: SidebarState;
  open: boolean;
  setOpen: (_open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (_open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
