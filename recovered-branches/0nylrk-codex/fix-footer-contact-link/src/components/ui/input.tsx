<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"

import { cn } from "@/lib/utils"

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        )}
=======
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        ref={ref}
        {...props}
      />);
  }
<<<<<<< HEAD
<<<<<<< HEAD
)
Input.displayName = &quot;Input&quot;
export { Input }
export { Input };
Input.displayName = "Input"

export { Input }
;
;
=======

);
Input.display_name = &quot;Input & quot;

export { Input }
=======

export { Input };

=======
Input.displayName = "Input"

export { Input }


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export { Input }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
