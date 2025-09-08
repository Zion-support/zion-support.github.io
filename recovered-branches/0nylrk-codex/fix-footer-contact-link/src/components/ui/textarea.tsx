
import * as React from "react"



import * as React from "react"

import { cn } from "@/lib/utils"




const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea



          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          className
        )}


import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
export type TextareaProps = React.ComponentProps<&quot;textarea & quot;>;

  ({ class_name, ...props }, ref) => {

    return (
        className={cn (
          &quot;flex min - h-[80px] w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 & quot;,
          class_name)}


import * as React from "react";
;
import { cn } from "@/lib/utils";
;
export type TextareaProps = React.ComponentProps<"textarea">;
;
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(;
  ({ className, ...props }, ref) => {;
    return (;
      <textarea;
        className={cn(;
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",;
          className;
        )}


        ref={ref}
        {...props}
      />);
  }

export { Textarea };
"
Textarea.displayName = "Textarea"

export { Textarea };
;
export { Textarea }

"
Textarea.displayName = "Textarea"

export { Textarea };
;
;

);


export { Textarea };


Textarea.displayName = "Textarea"

export { Textarea }

;





