
import React from "react";
import ReactMarkdown from "react-markdown";
import {cn} from "@/lib/utils";
import React from "react",
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface MarkdownProps {
  content: string;
  className?: string
}
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
  )
  )
import React from "react",;
import ReactMarkdown from "react-markdown",;
import { cn } from "@/lib/utils",;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
}
<<<<<<< HEAD
;
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
