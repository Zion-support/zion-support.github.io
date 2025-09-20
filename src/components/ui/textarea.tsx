<<<<<<< HEAD
import React from "react";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
className?: string};
export function Textarea({ className, ...props }: TextareaProps) {;
import React from "react",;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {,
className?: string}
export function Textarea({ className, ...props }: TextareaProps) {,;
return (,;
<textarea;
className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "placeholder": text-muted-foreground focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
{...props}
/>);
}
}
</textarea>,
</HTMLTextAreaElement>,
import React from "react"; interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { className?: string} export function Textarea({ className,...props }: TextareaProps) { return ( <textarea className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder: text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} /> )} </textarea> </HTMLTextAreaElement>,",",;<//HTMLTextAreaElement><///HTMLTextAreaElement>
=======
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
