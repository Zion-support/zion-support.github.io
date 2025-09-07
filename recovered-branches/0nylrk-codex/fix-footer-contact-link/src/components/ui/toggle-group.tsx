<<<<<<< HEAD
import {cn} from '@/lib/utils';'
import {toggleVariants} from '@/components/ui/toggle';'
=======
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
<<<<<<< HEAD

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

import {toggleVariants} from '@/components/ui/toggle';
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';
>>>>>>> merged-prs-20250907-203621
import {cn} from '@/lib/utils';
import {toggleVariants} from '@/components/ui/toggle';
>>>>>>> origin/resolved-merge-conflicts
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  }
  'size': 'size','
'variant': 'default';'
});
<<<<<<< HEAD
import * as React from 'react''
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group''
import { type VariantProps } from 'class-variance-authority''
import * as React from 'react''
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group''
import { type VariantProps } from 'class-variance-authority'const ToggleGroup = React.forwardRef<'
=======

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = $2;
  variant: "default"})

const ToggleGroup = $2;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
=======
});
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {type, VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

<<<<<<< HEAD
import {toggleVariants} from '@/components/ui/toggle';
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({'
  size: 'default''
  variant: 'default'
});
import * as React from "react""
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group""
import { type VariantProps } from "class-variance-authority""
<<<<<<< HEAD
import { type VariantProps } from "class-variance-authority"const ToggleGroup = React.forwardRef<"
>>>>>>> origin/resolved-merge-conflicts
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
import React from 'react';'
import * as React from 'react';import React from 'react';'
import * as React from 'react';'
<<<<<<< HEAD
=======
=======
import * as React from "react""
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group""
import { type VariantProps } from "class-variance-authority"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { cn } from "@/lib/utils"

import { toggleVariants } from "@/components/ui/toggle"

type ToggleGroupContextProps = VariantProps<typeof toggleVariants>

<<<<<<< HEAD
const ToggleGroup = React.forwardRef<
=======
<<<<<<< HEAD
const ToggleGroup = React.forwardRef<
=======
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
  size: "default",
  variant: "default"})

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
<<<<<<< HEAD
=======
></typeof>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from 'react';
import * as React from 'react';import React from 'react';
import * as React from 'react';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}'
    {...props}>;
    <ToggleGroupContext && ToggleGroupContext.Provider value={ variant, size }>;
      {children}
    </ToggleGroupContext && ToggleGroupContext.Provider>;
  </ToggleGroupPrimitive && ToggleGroupPrimitive.Root>;
<<<<<<< HEAD
));import {type, VariantProps} from 'class - variance - authority';'
;
import {cn} from '@/lib / utils';'
import {toggle_variants} from '@/components / ui / toggle';'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
));
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>

  ) as ToggleGroupContextProps;
    >
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &;
    VariantProps<typeof toggleVariants>;

ToggleGroup && ToggleGroup.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Root.displayName;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {children}
    </ToggleGroupPrimitive && ToggleGroupPrimitive.Item>;
  );
});
<<<<<<< HEAD

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

=======
<<<<<<< HEAD

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

=======
export { ToggleGroup, ToggleGroupItem };

ToggleGroupItem && ToggleGroupItem.displayName = ToggleGroupPrimitive && ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem };
import * as ToggleGroupPrimitive from '@radix - ui / react - toggle - group';
import {type, VariantProps} from 'class - variance - authority';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
;
type ToggleGroupContextProps = VariantProps < typeof toggle_variants>;
;
const ToggleGroupContext = React.create_context < ToggleGroupContextProps>({
  }
  'size': 'default','
'variant': 'default',;'
});
;
const ToggleGroup = React.forward_ref<;
  React.ElementRef < typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof ToggleGroupPrimitive.Root> &;
    VariantProps < typeof toggle_variants>;
></typeof>(({ class_name, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root;
<<<<<<< HEAD
    ref={ref}
=======
    ref={ref}'
    className={cn ('flex items - center justify - center gap - 1', class_name)}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
<<<<<<< HEAD
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = $2;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVa</typeof>riants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(
    ToggleGroupContext
  ) as ToggleGroupContextProps

  return($2);
        className
      )}
      {...props}
    >;
=======
    ref={ref})'
>>>>>>> origin/resolved-merge-conflicts
    className={cn ('flex items - center justify - center gap - 1', class_name)}'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {...props}
  >;
<<<<<<< HEAD
    <ToggleGroupContext.Provider value={ variant, size }>;
      {children}
=======
</ToggleGroupPrimitive>
    <ToggleGroupContext.Provider value={{ variant, size }}>;
<<<<<<< HEAD
      {children}
    ref={ref})'
    className={cn ('flex items - center justify - center gap - 1', class_name)}'
    {...props}

  >;
</ToggleGroupPrimitive>
    <ToggleGroupContext.Provider value={{ variant, size }}>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</ToggleGroupContext>

>>>>>>> origin/resolved-merge-conflicts
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
}
const context = React.useContext (;
    ToggleGroupContext) as ToggleGroupContextProps;
<<<<<<< HEAD
;
    >;
=======
;}
    >;}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      {children}
    </ToggleGroupPrimitive.Item>);
});
;
ToggleGroupItem.display_name = ToggleGroupPrimitive.Item.display_name;
;
<<<<<<< HEAD
export { ToggleGroup, ToggleGroupItem }
;
=======
export { ToggleGroup, ToggleGroupItem };
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
;
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { toggleVariants } from "@/components/ui/toggle";
;
type ToggleGroupContextProps = VariantProps<typeof toggleVariants>;
;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({;
  size:"default",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  variant:"default"});
;
const ToggleGroup = React.forwardRef<;
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &;
    VariantProps<typeof toggleVariants>;
>(({ className, variant, size, children, ...props }, ref) => (;
  <ToggleGroupPrimitive.Root;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >;
    <ToggleGroupContext.Provider value={{ variant, size }}>;
      {children}
    </ToggleGroupContext.Provider>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  </ToggleGroupPrimitive.Root>;
>(({ className, variant, size, children, ...props }, ref) => (

    className={cn('flex items-center justify-center gap-1', className)}
    {...props}

  >

    <ToggleGroupContext.Provider value={{ variant, size }}>

    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <ToggleGroupPrimitive.Item;
      ref={ref}
      className={cn(;
        toggleVariants({;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          variant: context.variant || variant,;)
          size: context.size || size});
        className;
      )}

    </ToggleGroupPrimitive.Item>

<<<<<<< HEAD
;
=======
;
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
