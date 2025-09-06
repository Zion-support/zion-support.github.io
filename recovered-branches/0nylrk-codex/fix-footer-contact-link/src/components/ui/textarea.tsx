import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
=======
export type TextareaProps = React.ComponentProps<"textarea">

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />;
    );
  }
)
<<<<<<< HEAD
Textarea.displayName = &quot;Textarea&quot;
export { Textarea };
=======
Textarea.displayName = "Textarea"

export { Textarea }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;