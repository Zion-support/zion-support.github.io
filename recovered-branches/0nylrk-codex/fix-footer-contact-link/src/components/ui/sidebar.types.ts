import React from "react";
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
import React from "react";"
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true;

// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent<T, P = {}> = React.ForwardRefExoticComponent<

  React.PropsWithoutRef<P> & React.RefAttributes<T>

export type ElementRef<T extends React.ElementType> =
"
  React.ComponentPropsWithRef<T>["ref"];"

export type PolymorphicRef<T extends React.ElementType> = React.Ref<

  React.ElementRef<T>

pr-12325
export type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & { as?: T }>;

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React && React.Ref<T>;

// Sidebar specific types
export type SidebarState = "expanded" | "collapsed";
import React from './react';
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true;
;
// Define a type that makes the ref forwards compatible;
export type SafeRef<T> = React && React.Ref<T>;

pr-12325
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
  setOpenMobile: (open: boolean) => void
};
export type ElementRef < T extends React.ElementType> =;"
  React.ComponentPropsWithRef < T>["ref"];"
// Helper type for wrapping refs that fixes the mismatch errors;
export type PolymorphicRef < T extends React.ElementType> = React.Ref<;
  React.ElementRef < T>;
// Helper for dealing with refs in complex situations;
export type PolymorphicComponentProp<;
> = React.PropsWithChildren < Props & { as?: T }>;
// Safe ref casting helper type - this is the key to fixing our issues;"
// We need to use a type that is compatible with both Slot's ref and React's ref handling;
export type SafeRef < T> = React.Ref < T>;
// Sidebar specific types;
export type SidebarState = "expanded" | "collapsed";"
export type SidebarContext = {
  state: SidebarState;,
  open: boolean;
  set_open: (open: boolean) => void;,
  open_mobile: boolean;
  setOpenMobile: (open: boolean) => void;,
  isMobile: boolean;
  toggleSidebar: () => void;
};"
import React from 'react',;
// This file fixes the ref type issues in sidebar components;
// Export a placeholder to ensure the file is recognized as a module;
export const SIDEBAR_REF_TYPE_FIX = true,;
// Define a type that makes the ref forwards compatible;
export type ForwardRefComponent<T P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>,;

export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'],;

export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>,;

export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = ;

  React.PropsWithChildren<Props & { as?:T }>,;

export type SafeRef<T> = React.Ref<T>,;

// This file fixes the ref type issues in sidebar components // Export a placeholder to ensure the file is recognized as a module // Define a type that makes the ref forwards compatible export type ForwardRefComponent<T P = {
  
}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

// Helper type for component refs export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// Helper type for wrapping refs that fixes the mismatch errors export type PolymorphicRef<T extends React.ElementType> = React.Ref<React.ElementRef<T>>;

// Helper for dealing with refs in complex situations export type PolymorphicComponentProp<T extends React.ElementType, Props = {
  
}> = // Safe ref casting helper type - this is the key to fixing our issues // We need to use a type that is compatible with both Slot's ref and React's ref handling export type SafeRef<T> = React.Ref<T>;


  React.PropsWithChildren<Props & { as?: T }>;

export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = 

  React.PropsWithChildren<Props & { as?: T }>,

export type SafeRef<T> = React.Ref<T>,




export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> =;

  React.PropsWithChildren<Props & { as?: T }>,;

pr-12325
