


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface MarkdownProps {
  content: string;
  className?: string
}
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>

  )
=======
  )

}

;

