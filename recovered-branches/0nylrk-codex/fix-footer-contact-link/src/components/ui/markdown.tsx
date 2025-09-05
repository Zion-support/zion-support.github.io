
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {_content: string;
  className?: string;}

export function Markdown(_{_content, _className}: MarkdownProps) {_return (
    <div className={cn("prose dark:prose-invert max-w-none", _className)}>
      <ReactMarkdown>{_content}</ReactMarkdown>
    </div>
  );
}
