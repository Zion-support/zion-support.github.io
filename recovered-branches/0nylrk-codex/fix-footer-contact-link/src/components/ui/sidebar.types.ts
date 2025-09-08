<<<<<<< HEAD

import React from "react";

=======
import React from "react";

// This file fixes the ref type issues in sidebar components

// Export a placeholder to ensure the file is recognized as a module
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
export type PolymorphicComponentProp<T extends React.ElementType, Props = $2;
// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>,

<<<<<<< HEAD

// Helper type for component refs
export type ElementRef<T extends React.ElementType> =

  React.ComponentPropsWithRef<T>["ref"];

// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef<T extends React.ElementType> = React.Ref<
  React.ElementRef<T>;
>;

// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},;
> = React.PropsWithChildren<Props & { as?: T }>;

=======
// Sidebar specific types
export type SidebarState = $2;
export type SidebarContext = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Safe ref casting helper type - this is the key to fixing our issues;
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef<T> = React && React.Ref<T>;

// Sidebar specific types

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true;
;
// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent < T, P = {}> = React.ForwardRefExoticComponent<;
  React.PropsWithoutRef < P> & React.RefAttributes < T>;
>;
;
// Helper type for component refs;
export type ElementRef < T extends React.ElementType> =;"
  React.ComponentPropsWithRef < T>["ref"];
;
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef < T extends React.ElementType> = React.Ref<;
  React.ElementRef < T>;
>;
;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<;
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren < Props & { as?: T }>;
;
// Safe ref casting helper type - this is the key to fixing our issues;'
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef < T> = React.Ref < T>;
;
// Sidebar specific types;"
export type SidebarState = "expanded" | "collapsed";
;


<<<<<<< HEAD
export type SidebarContext = {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  state: SidebarState;
  open: boolean;
  set_open: (open: boolean) => void;
  open_mobile: boolean;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from 'react',;
;
// This file fixes the ref type issues in sidebar components;
;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true,;
;
// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,;
;

export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],;
;
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,;
;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = ;
  React.PropsWithChildren<Props & { as?:T }>,;
;


export type SidebarState = "expanded" | "collapsed",;
;
export type SidebarContext = {;
  state:SidebarState,;
  open:boolean,;
  setOpen:(open:boolean) => void,;
  openMobile:boolean,;
  setOpenMobile:(open:boolean) => void,;
  isMobile:boolean,;

export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = ;
  React.PropsWithChildren<Props & { as?: T }>;
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = 
  React.PropsWithChildren<Props & { as?: T }>,


export type SidebarContext = {;
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean,

>>>>>>> origin/cursor/delete-old-data-records-6bba

  state: SidebarState,
  open: boolean,
  setOpen: (open: boolean) => void,
  openMobile: boolean,
  setOpenMobile: (open: boolean) => void,

import React from 'react',;
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true,;
// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,;

export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],;
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> =;
  React.PropsWithChildren<Props & { as?: T }>,;

<<<<<<< HEAD

// Helper for dealing with refs in complex situations





=======

export type SidebarState = "expanded" | "collapsed",;
export type SidebarContext = {;
  state: SidebarState,;
  open: boolean,;
  setOpen: (open: boolean) => void,;
  openMobile: boolean,;
  setOpenMobile: (open: boolean) => void,;
  isMobile: boolean;

  toggleSidebar: () => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba
