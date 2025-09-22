
=======
import * as React from "react";
;
import { cn } from "@/lib/utils";
;
const Card = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    ref={ref}
    className={cn(;
      "rounded-lg border bg-card text-card-foreground shadow-sm",;
      className;
    )}
    {...props}
  />;
));
<<<<<<< HEAD

    ref={ref}
    className={cn(;
      "text-2xl font-semibold leading-none tracking-tight",;
      className;
    )}
    {...props}
  />;
));
