
<<<<<<< HEAD
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
interface MarkdownProps {
  content: string;
  className?: string
}
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
<<<<<<< HEAD
  );
}
  )
  )
import React from "react",;
import ReactMarkdown from "react-markdown",;
import { cn } from "@/lib/utils",;
=======

import {cn} from "@/lib/utils";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
;
;
=======

=======
import React from './react';
import ReactMarkdown from './react - markdown';
import { cn  } from '@/lib / utils';
interface MarkdownProps {
  content: string;
  class_name?: string;
}
export /**
 * Markdown - Function description
 */
function Markdown() {
  return (
    <div className={cn ("prose dark:prose - invert max - w-none", class_name)}>;
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
=======
  )

}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
