import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
export type TextareaProps = React.ComponentProps<&quot;textarea&quot;>
const Textarea = React.forwardRef<HTMLTextAreaElement TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className = $2;
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
;