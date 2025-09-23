
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

<<<<<<< HEAD
=======
export function Markdown({ contentclassName }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none"className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
