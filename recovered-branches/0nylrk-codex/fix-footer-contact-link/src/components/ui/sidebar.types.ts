
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts

// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>,

// Sidebar specific types
export type SidebarState = "expanded" | "collapsed",

};

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts
// Sidebar specific types
export type SidebarState = "expanded" | "collapsed";
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
export type ElementRef < T extends React.ElementType> =;
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
// Safe ref casting helper type - this is the key to fixing our issues;
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef < T> = React.Ref < T>;
;
// Sidebar specific types;
export type SidebarState = "expanded" | "collapsed";
;
export type SidebarContext = {
  state: SidebarState;
  open: boolean;
  set_open: (open: boolean) => void;
  open_mobile: boolean;
  setOpenMobile: (open: boolean) => void;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts
  is_mobile: boolean;
  toggle_sidebar: () => void;
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts

=======

import React from 'react',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// This file fixes the ref type issues in sidebar components
// Export a placeholder to ensure the file is recognized as a module

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const SIDEBAR_REF_TYPE_FIX = true,

// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,

// Helper type for component refs
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,

// Helper for dealing with refs in complex situations
<<<<<<< HEAD

};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
// Helper type for component refs;
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],;
;
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,;
;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = ;
  React.PropsWithChildren<Props & { as?:T }>,;
;
// Safe ref casting helper type - this is the key to fixing our issues;
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef<T> = React.Ref<T>,;
;
// Sidebar specific types;
export type SidebarState = "expanded" | "collapsed",;
;
export type SidebarContext = {;
  state:SidebarState,;
  open:boolean,;
  setOpen:(open:boolean) => void,;
  openMobile:boolean,;
  setOpenMobile:(open:boolean) => void,;
  isMobile:boolean,;
  toggleSidebar:() => void;
},; import React from 'react';
// This file fixes the ref type issues in sidebar components // Export a placeholder to ensure the file is recognized as a module // Define a type that makes the ref forwards compatible export type ForwardRefComponent<T P = {
  
}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
// Helper type for component refs export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];
// Helper type for wrapping refs that fixes the mismatch errors export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>;
// Helper for dealing with refs in complex situations export type PolymorphicComponentProp<T extends React.ElementType, Props = {
  
}> = // Safe ref casting helper type - this is the key to fixing our issues // We need to use a type that is compatible with both Slot's ref and React's ref handling export type SafeRef<T> = React.Ref<T>;
// Sidebar specific types 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar.types.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
