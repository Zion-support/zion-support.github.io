<<<<<<< HEAD
import * as React from 'react';
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn  } from "../../utils/cn";

const Separator = React.forwardRef<;
  React.ElementRef<typeof SeparatorPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
>(;
  (;
    { className, orientation = "horizontal", decorative = true, ...props },;
    ref;
  ) => (;
    <SeparatorPrimitive.Root;
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className = {;
  cn(;
        "shrink-0 bg-border",;
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",;
  className;
      );

<<<<<<< HEAD
<<<<<<< HEAD
=======
;

;

;
>>>>>>> main
}
      {...props};
    />;
  );
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
;
export { Separator };
<<<<<<< HEAD
</SeparatorPrimitive>
</typeof>';
</typeof>;';;';
=======
export { Separator }
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
</SeparatorPrimitive>;
</typeof>;
</typeof>
=======
<<<<<<< HEAD
export { Separator }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
<<<<<<< HEAD

=======
export { Separator }
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
