<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
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
<<<<<<< HEAD
=======



=======
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: "default",
  variant: "default"})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}>;
    <ToggleGroupContext && ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext && ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive && ToggleGroupPrimitive.Root>;
));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======


ToggleGroup && ToggleGroup.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React && React.forwardRef<;
  React && React.ElementRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item>,;
  React && React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVa</typeof>riants>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>(({ className, children, variant, size, ...props }, ref) => {;
  const context = React && React.useContext(;
    ToggleGroupContext;
  ) as ToggleGroupContextProps;


    >;
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {children}
    </ToggleGroupPrimitive && ToggleGroupPrimitive.Item>;
  );
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
<<<<<<< HEAD
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem }
export { ToggleGroup, ToggleGroupItem }
;
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
