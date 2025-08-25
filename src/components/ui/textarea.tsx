<<<<<<< HEAD

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

<<<<<<< HEAD
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
=======
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
          {label}
        </label>
      )}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
=======
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
