
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


        )}
const Input = React.forwardRef<HTMLInputElement React.ComponentProps<"input">>(
=======
        )}const Input = React.forwardRef<HTMLInputElement React.ComponentProps<"input">>(
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        )}
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
)}
        ref={ref}
=======
        )}        ref={ref}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {...props}
      />);
  }
export { Input }
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export { Input };

Input.displayName = "Input"

export { Input }
;
export { Input }
export { Input };
Input.displayName = "Input"

export { Input }
;
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
