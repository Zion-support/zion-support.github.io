<<<<<<< HEAD

const Input = React.forwardRef<HTMLInputElement React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef<HTMLInputElement React.ComponentProps<"input">>(;
  ({ className, type, ...props }, ref) => {;
    return (;
      <input;
        type={type}
        className={cn(;
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
          className;
=======


import * as React from "react"

import { cn } from "@/lib/utils"


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        )}
=======
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ref={ref}
        {...props}
      />);
  }
<<<<<<< HEAD
)

=======

);
Input.display_name = &quot;Input & quot;

export { Input }
=======

export { Input };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
Input.displayName = "Input"

export { Input }

<<<<<<< HEAD
;

=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
