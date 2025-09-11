<<<<<<< HEAD
import React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
=======
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
<<<<<<< HEAD
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
=======
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
<<<<<<< HEAD
Textarea.displayName = 'Textarea';
=======
Textarea.displayName = "Textarea";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export { Textarea };