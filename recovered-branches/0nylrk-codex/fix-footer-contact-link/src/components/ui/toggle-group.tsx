<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {cn} from '@/lib/utils';
=======

import {cn} from '@/lib/utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toggleVariants} from '@/components/ui/toggle';
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({'
  size: 'default''
  variant: 'default'
});
import * as React from "react""
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group""
import { type VariantProps } from "class-variance-authority""
import * as React from "react""
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group""
import { type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { cn } from "@/lib/utils"
=======

"
import { cn } from "@/lib/utils""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
size: "default",
  variant: "default"})

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const ToggleGroup = React.forwardRef<
=======
import { type VariantProps } from "class-variance-authority"const ToggleGroup = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"const ToggleGroup = React.forwardRef<
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>

import React from 'react';
import * as React from 'react';import React from 'react';
import * as React from 'react';
    ref={ref}
=======

';
import React from 'react';'
import * as React from 'react';

    ref={ref}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}>;
    <ToggleGroupContext && ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext && ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive && ToggleGroupPrimitive.Root>;
<<<<<<< HEAD
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {}
  const context = React.useContext(
    ToggleGroupContext;
  ) as ToggleGroupContextProps;
    >
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVariants>;

<<<<<<< HEAD
ToggleGroup && ToggleGroup.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React && React.forwardRef<;
  React && React.ElementRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item>,;
  React && React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive && ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVa</typeof>riants>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, children, variant, size, ...props }, ref) => {;
  const context = React && React.useContext(;
    ToggleGroupContext;
  ) as ToggleGroupContextProps;
    >;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {children}
    </ToggleGroupPrimitive && ToggleGroupPrimitive.Item>;
  );
});
<<<<<<< HEAD

ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

'
import * as ToggleGroupPrimitive from '@radix - ui / react - toggle - group';'
import {type, VariantProps} from 'class - variance - authority';

=======
import * as ToggleGroupPrimitive from '@radix - ui / react - toggle - group';
import {type, VariantProps} from 'class - variance - authority';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
import {cn} from '@/lib / utils';
=======
;'
import {cn} from '@/lib / utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toggle_variants} from '@/components / ui / toggle';
type ToggleGroupContextProps = VariantProps < typeof toggle_variants>;
;
const ToggleGroupContext = React.create_context < ToggleGroupContextProps>({'
  size: 'default','
  variant: 'default',
});
;
const ToggleGroup = React.forward_ref<;
  React.ElementRef < typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof ToggleGroupPrimitive.Root> &;
    VariantProps < typeof toggle_variants>;
></typeof>(({ class_name, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root;
    ref={ref}'
    className={cn ('flex items - center justify - center gap - 1', class_name)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    ref={ref})'
    className={cn ('flex items - center justify - center gap - 1', class_name)}'
    {...props}

  >;
</ToggleGroupPrimitive>
    <ToggleGroupContext.Provider value={{ variant, size }}>;
</ToggleGroupContext>

    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>));
;
ToggleGroup.display_name = ToggleGroupPrimitive.Root.display_name;
;
    className={cn ('flex items - center justify - center gap - 1', class_name)}
    {...props}
  >;

    <ToggleGroupContext.Provider value={{ variant, size }}>;

    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>));
ToggleGroup.display_name = ToggleGroupPrimitive.Root.display_name;
pr-12325
const ToggleGroupItem = React.forward_ref<;
  React.ElementRef < typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof ToggleGroupPrimitive.Item> &;
    VariantProps < typeof toggle_va</typeof > riants>;
>(({ class_name, children, variant, size, ...props }, ref) => {}
  const context = React.useContext (
  const context = React.useContext ()
    ToggleGroupContext) as ToggleGroupContextProps;
;}
    >;}
      {children}
    </ToggleGroupPrimitive.Item>);
});
;
ToggleGroupItem.display_name = ToggleGroupPrimitive.Item.display_name;
;
export { ToggleGroup, ToggleGroupItem };
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
origin/cursor/automate-test-improve-and-merge-code-20a4ursor/fix-website-loading-errors-and-merge-6662
  const context = React.useContext ()
    ToggleGroupContext) as ToggleGroupContextProps;
      {children}
    </ToggleGroupPrimitive.Item>);
ToggleGroupItem.display_name = ToggleGroupPrimitive.Item.display_name;
export { ToggleGroup, ToggleGroupItem }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

"
import * as React from "react";"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";"
import { type VariantProps } from "class-variance-authority";
;"
import { cn } from "@/lib/utils";"
import { toggleVariants } from "@/components/ui/toggle";
;
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({;"
  size:"default",;"
  variant:"default"});
;
const ToggleGroup = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &;
    VariantProps<typeof toggleVariants>;
>(({ className, variant, size, children, ...props }, ref) => (;
  <ToggleGroupPrimitive.Root;
ref={ref}"
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive.Root>;
>(({ className, variant, size, children, ...props }, ref) => (
<ToggleGroupPrimitive.Root;
    ref={ref}'
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >

    <ToggleGroupContext.Provider value={{ variant, size }}>

    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {}
  const context = React.useContext(
    ToggleGroupContext;
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
          variant: context.variant || variant,;)
          size: context.size || size});
        className;
      )}

    </ToggleGroupPrimitive.Item>

export { ToggleGroup, ToggleGroupItem };
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem }
export { ToggleGroup, ToggleGroupItem };
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { ToggleGroup, ToggleGroupItem }
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
