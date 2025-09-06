<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
import {toggleVariants} from '@/components/ui/toggle';
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: 'default'
  variant: 'default'
});
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
=======
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: "default",
  variant: "default"})

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
<<<<<<< HEAD
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps;
    >
=======
<<<<<<< HEAD
=======
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
<<<<<<< HEAD
=======
<<<<<<< HEAD

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
<<<<<<< HEAD
export { ToggleGroup, ToggleGroupItem }
=======
export { ToggleGroup, ToggleGroupItem }
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}>;
    <ToggleGroupContext && ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext && ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive && ToggleGroupPrimitive.Root>;
));


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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {children}
    </ToggleGroupPrimitive && ToggleGroupPrimitive.Item>;
  );
});


ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
