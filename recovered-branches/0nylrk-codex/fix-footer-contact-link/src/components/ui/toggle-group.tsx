<<<<<<< HEAD

<<<<<<< HEAD


=======
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"



=======
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {cn} from '@/lib/utils';
import {toggleVariants} from '@/components/ui/toggle';
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: 'default'
  variant: 'default'
});
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
<<<<<<< HEAD
  size: "default",
  variant: "default"})

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
<<<<<<< HEAD
<<<<<<< HEAD
></typeof>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
=======

const ToggleGroupContext = React && React.createContext<ToggleGroupContextProps>({;
  size: 'default',;
  variant: 'default',;
});

const ToggleGroup = React && React.forwardRef<;
  React && React.ElementRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Root> &;
    VariantProps<typeof toggleVariants>;
></typeof>(({ className, variant, size, children, ...props }, ref) => (;
  <ToggleGroupPrimitive&& ToggleGroupPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React from 'react';
import * as React from 'react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}>;
    <ToggleGroupContext && ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext && ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive && ToggleGroupPrimitive.Root>;
));
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps;
    >
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVariants>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


ToggleGroup && ToggleGroup.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React && React.forwardRef<;
  React && React.ElementRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item>,;
  React && React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVa</typeof>riants>;
>(({ className, children, variant, size, ...props }, ref) => {;
  const context = React && React.useContext(;
    ToggleGroupContext;
  ) as ToggleGroupContextProps;
    >;
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {children}
    </ToggleGroupPrimitive && ToggleGroupPrimitive.Item>;
  );
});
<<<<<<< HEAD
<<<<<<< HEAD


=======
export { ToggleGroup, ToggleGroupItem };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as ToggleGroupPrimitive from '@radix - ui / react - toggle - group';
import {type, VariantProps} from 'class - variance - authority';
;
import {cn} from '@/lib / utils';
import {toggle_variants} from '@/components / ui / toggle';
;
type ToggleGroupContextProps = VariantProps < typeof toggle_variants>;
;
const ToggleGroupContext = React.create_context < ToggleGroupContextProps>({
  size: 'default',
  variant: 'default',
});
;
const ToggleGroup = React.forward_ref<;
  React.ElementRef < typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof ToggleGroupPrimitive.Root> &;
    VariantProps < typeof toggle_variants>;
></typeof>(({ class_name, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root;
    ref={ref}
    className={cn ('flex items - center justify - center gap - 1', class_name)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>));
;
ToggleGroup.display_name = ToggleGroupPrimitive.Root.display_name;
;
const ToggleGroupItem = React.forward_ref<;
  React.ElementRef < typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof ToggleGroupPrimitive.Item> &;
    VariantProps < typeof toggle_va</typeof > riants>;
>(({ class_name, children, variant, size, ...props }, ref) => {
  const context = React.useContext (
    ToggleGroupContext) as ToggleGroupContextProps;
;
    >;
      {children}
    </ToggleGroupPrimitive.Item>);
});
;
ToggleGroupItem.display_name = ToggleGroupPrimitive.Item.display_name;
;
export { ToggleGroup, ToggleGroupItem }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";
;
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({;
  size:"default",;
  variant:"default"});
;
const ToggleGroup = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &;
    VariantProps<typeof toggleVariants>;
>(({ className, variant, size, children, ...props }, ref) => (;
  <ToggleGroupPrimitive.Root;
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>;
));
;
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
;
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps;
    >
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVariants>;
>(({ className, children, variant, size, ...props }, ref) => {;
  const context = React.useContext(;
    ToggleGroupContext;
  ) as ToggleGroupContextProps;
  return (;
    <ToggleGroupPrimitive.Item;
      ref={ref}
      className={cn(;
        toggleVariants({;
          variant: context.variant || variant,;
          size: context.size || size});
        className;
      )}
      {...props}
    >;
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem }
export { ToggleGroup, ToggleGroupItem }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
