
export type ForwardRefComponent<T, P = {}> = React && React.ForwardRefExoticComponent<React && React.PropsWithoutRef<P> & React && React.RefAttributes<T>>;
// Helper type for component refs
export type ElementRef<T extends React && React.ElementType> = React && React.ComponentPropsWithRef<T>['ref'];

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React && React.ElementType> = React && React.Ref<React && React.ElementRef<T>>;

// Helper for dealing with refs in complex situations
export type PolymorphicComponentProp<T extends React && React.ElementType, Props = {}> = 
  React && React.PropsWithChildren<Props & { as?: T }>;

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React && React.Ref<T>;


// Sidebar specific types
export type SidebarState = "expanded" | "collapsed";
=======
// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module

import React from 'react';
import React from 'react',
// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module

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
=======

import React from 'react',
// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const SIDEBAR_REF_TYPE_FIX = true,

// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,

// Helper type for component refs
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,

// Helper for dealing with refs in complex situations
// Sidebar specific types
export type SidebarState = "expanded" | "collapsed",

export type SidebarContext = {;
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean,
  toggleSidebar: () => void
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
};
=======
};>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
