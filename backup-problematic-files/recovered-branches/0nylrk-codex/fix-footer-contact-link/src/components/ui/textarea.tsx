<<<<<<< HEAD
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        ref={ref}
        {...props}
      />);
  }
);
<<<<<<< HEAD
Textarea.display_name = &quot;Textarea & quot;
export { Textarea }
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
