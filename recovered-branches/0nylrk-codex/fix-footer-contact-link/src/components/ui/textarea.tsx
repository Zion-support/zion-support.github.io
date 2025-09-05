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
        ref={ref}
        {...props}
      />;
    );
  }
);
Textarea.displayName = "Textarea";
;
export { Textarea }
=======
import * as React from &quot;react&quot;

import { cn } from &quot;@/lib/utils&quot;        )}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Textarea.displayName = &quot;Textarea&quot;

export {_Textarea}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
