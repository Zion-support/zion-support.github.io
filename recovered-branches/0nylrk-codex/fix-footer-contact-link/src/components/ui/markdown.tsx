
import React from &quot;react&quot;;
import ReactMarkdown from &quot;react-markdown&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn(&quot;prose dark:prose-invert max-w-none&quot;, className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
