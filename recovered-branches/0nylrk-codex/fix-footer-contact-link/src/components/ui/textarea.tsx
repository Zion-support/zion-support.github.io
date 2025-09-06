<<<<<<< HEAD
=======


import * as React from "react"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(

<<<<<<< HEAD
=======

          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          className
        )}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ref={ref}
        {...props}
      />);
  }
<<<<<<< HEAD
)

=======

);
Textarea.display_name = &quot;Textarea & quot;

export { Textarea }
=======

export { Textarea };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
Textarea.displayName = "Textarea"

export { Textarea }

<<<<<<< HEAD
;

=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
