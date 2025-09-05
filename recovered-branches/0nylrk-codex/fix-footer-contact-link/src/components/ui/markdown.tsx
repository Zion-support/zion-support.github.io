
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import ReactMarkdown from &quot;react-markdown&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MarkdownProps {
  content: string,
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn(&quot;prose dark:prose-invert max-w-none&quot;, className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;