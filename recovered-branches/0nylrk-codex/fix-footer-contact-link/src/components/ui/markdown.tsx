
import React from "react",
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
interface MarkdownProps {
  content: string;
<<<<<<< HEAD
  className?: string
}
=======
  className?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}