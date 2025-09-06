
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import React from "react";
import ReactMarkdown from "react-markdown";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from "react",
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  );
}
  )
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
