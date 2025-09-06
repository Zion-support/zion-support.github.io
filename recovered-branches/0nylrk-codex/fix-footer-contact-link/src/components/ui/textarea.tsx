
import * as React from "react"

import { cn } from "@/lib/utils"


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

export { Textarea };

=======
Textarea.displayName = "Textarea"

export { Textarea }


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
