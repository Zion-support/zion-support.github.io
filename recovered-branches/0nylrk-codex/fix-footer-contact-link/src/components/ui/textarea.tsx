<<<<<<< HEAD


<<<<<<< HEAD
import * as React from "react"




import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
export type TextareaProps = React.ComponentProps<"textarea">

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
export type TextareaProps = React.ComponentProps<"textarea">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",


          className
        )}
=======
          &quot;flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ref={ref}
        {...props}
      />);
  }

);
<<<<<<< HEAD

export { Textarea };

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
Textarea.display_name = &quot;Textarea & quot;

export { Textarea }
=======

export { Textarea };

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Textarea.displayName = "Textarea"

export { Textarea }


;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
