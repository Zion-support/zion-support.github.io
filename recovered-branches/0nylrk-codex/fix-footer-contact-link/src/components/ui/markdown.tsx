


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MarkdownProps {
  content: string;
  className?: string
}
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
=======
=======
import {cn} from "@/lib/utils";
interface MarkdownProps {;
  content: string,;
  className?: string;
}

export function Markdown(): any ({ content, className }: MarkdownProps) {;
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>;
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>;
  );
}

=======
  )
  )

}

;

  )
=======
  )

}

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
