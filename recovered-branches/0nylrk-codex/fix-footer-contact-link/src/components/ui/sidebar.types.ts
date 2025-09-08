
import React from "react";


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

export type SidebarContext = {


// Helper for dealing with refs in complex situations





