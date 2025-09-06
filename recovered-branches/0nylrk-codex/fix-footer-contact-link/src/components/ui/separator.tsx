<<<<<<< HEAD

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
=======
=======
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props }
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root

      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border'
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />;
  );
);
<<<<<<< HEAD

Separator.displayName = SeparatorPrimitive.Root.displayName;


=======

Separator && Separator.displayName = SeparatorPrimitive && SeparatorPrimitive.Root.displayName;
=======

export { Separator }
;

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export { Separator };
export { Separator }
;
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
