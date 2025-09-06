
<<<<<<< HEAD
import React from "react";
import ReactMarkdown from "react-markdown";
import {cn} from "@/lib/utils";
=======
import React from "react",
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface MarkdownProps {
  content: string,
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
<<<<<<< HEAD
=======
import React from "react",;
import ReactMarkdown from "react-markdown",;
import { cn } from "@/lib/utils",;
interface MarkdownProps {;
  content: string;
  className?: string;
}
;
export function Markdown({ content, className }: MarkdownProps) {;
  return (;
    <div className={cn("prose dark:prose-invert max-w-none", className)}>;
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;