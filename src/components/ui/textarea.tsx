import React from "react";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {,
<<<<<<< HEAD
className?: string}
export function Textarea({ className, ...props }: TextareaProps) {;
return (;
<textarea;
className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "placeholder": text-muted-foreground focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
{...props}
/>);
}
=======
  className?: string,
}
export function Textarea({ className, ...props }: TextareaProps) {,;
  return (,;
    <textarea;
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "placeholder": text-muted-foreground focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />);
};
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
</textarea>,
</HTMLTextAreaElement>,
import React from "react", interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { className?: string} export function Textarea({ className,...props }: TextareaProps) { return ( <textarea className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder: text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} /> )} </textarea> </HTMLTextAreaElement>,",";<//HTMLTextAreaElement><///HTMLTextAreaElement>