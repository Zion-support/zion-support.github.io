
<<<<<<< HEAD
import React from 'react';
=======
import React from 'react',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const SIDEBAR_REF_TYPE_FIX = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export const SIDEBAR_REF_TYPE_FIX = true;
// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T, P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
// Helper type for component refs
export type ElementRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];
// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React.ElementType> = React.Ref<
  React.ElementRef<T>
>;
// Helper for dealing with refs in complex situations
export type PolymorphicComponentProp<
  T extends React.ElementType
  Props = {}
> = React.PropsWithChildren<Props & { as?: T }>;
// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>;
// Sidebar specific types
export type SidebarState = "expanded" | "collapsed";
export type SidebarContext = {
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

=======
export const SIDEBAR_REF_TYPE_FIX = true,

// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,

// Helper type for component refs
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,

// Helper for dealing with refs in complex situations
<<<<<<< HEAD
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = ;
  React.PropsWithChildren<Props & { as?: T }>;
=======
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = 
  React.PropsWithChildren<Props & { as?: T }>,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>,

// Sidebar specific types
export type SidebarState = "expanded" | "collapsed",

<<<<<<< HEAD
export type SidebarContext = {;
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean,
  toggleSidebar: () => void
=======
export type SidebarContext = {
  state: SidebarState,
  open: boolean,
  setOpen: (open: boolean) => void,
  openMobile: boolean,
  setOpenMobile: (open: boolean) => void,
  isMobile: boolean,
  toggleSidebar: () => void
},
import React from 'react',;
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true,;
// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,;
// Helper type for component refs;
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],;
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> =;
  React.PropsWithChildren<Props & { as?: T }>,;
// Safe ref casting helper type - this is the key to fixing our issues;
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef<T> = React.Ref<T>,;
// Sidebar specific types;
export type SidebarState = "expanded" | "collapsed",;
export type SidebarContext = {;
  state: SidebarState,;
  open: boolean,;
  setOpen: (open: boolean) => void,;
  openMobile: boolean,;
  setOpenMobile: (open: boolean) => void,;
  isMobile: boolean;
  toggleSidebar: () => void;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
