<<<<<<< HEAD
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
;
import { cn } from "@/lib/utils";
;
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
      className={cn(;
        "shrink-0 bg-border",;
        orientation === "horizontal" ? "h-[1px] w-full" :"h-full w-[1px]",;
        className;
      )}
      {...props}
    />;
  );
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
;
export { Separator }
=======
import * as React from &quot;react&quot;
import * as SeparatorPrimitive from &quot;@radix-ui/react-separator&quot;

import { cn } from &quot;@/lib/utils&quot;      )}
      {_...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export {_Separator}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
