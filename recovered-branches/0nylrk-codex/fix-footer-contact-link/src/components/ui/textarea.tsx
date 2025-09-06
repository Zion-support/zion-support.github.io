

<<<<<<< HEAD
import * as React from "react"




import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
export type TextareaProps = React.ComponentProps<"textarea">

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",


          className
        )}
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
export type TextareaProps = React.ComponentProps<&quot;textarea & quot;>;
const Textarea = React.forward_ref < HTMLTextAreaElement TextareaProps>(
  ({ class_name, ...props }, ref) => {
    return (
      <textarea;
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

);

export { Textarea };

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
Textarea.displayName = "Textarea"

export { Textarea }


;
<<<<<<< HEAD
export { Textarea }
Textarea.displayName = "Textarea";
;
export { Textarea }import * as React from "react" export type TextareaProps = React.ComponentProps<"textarea" >) 
}ref= {
  ref 
}{
  ...props 
}/>) 
}) Textarea.displayName = "Textarea" export {
  Textarea 
}
          &quot;flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />;
    );
  }
)
Textarea.displayName = &quot;Textarea&quot;
export { Textarea }
export { Textarea };
Textarea.displayName = "Textarea"

export { Textarea }
;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
