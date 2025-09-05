
import React from "react",
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",interface MarkdownProps {
  content: string,
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn(&quot;prose dark:prose-invert max-w-none&quot;, className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {_content: string;
  className?: string;}

export function Markdown(_{_content, _className}: MarkdownProps) {_return (
    <div className={cn("prose dark:prose-invert max-w-none", _className)}>
      <ReactMarkdown>{_content}</ReactMarkdown>
    </div>
  )
}
