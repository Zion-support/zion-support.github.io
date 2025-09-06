

import { cn } from "@/lib/utils"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (

=======

    { className, orientation = "horizontal", decorative = true, ...props },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(

=======

        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        className
      )}
      {...props}
    />;
  );
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
