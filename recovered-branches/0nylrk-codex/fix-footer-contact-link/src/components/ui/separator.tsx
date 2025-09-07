import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import {cn} from '@/lib/utils';

import { cn } from "@/lib/utils"

const Separator = $2;
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props }
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref = $2;
        orientation = $2;
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator }