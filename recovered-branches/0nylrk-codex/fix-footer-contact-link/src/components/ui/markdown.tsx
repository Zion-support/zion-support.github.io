<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface MarkdownProps {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown",
import { cn } from "@/lib/utils",interface MarkdownProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react";"
import ReactMarkdown from "react-markdown";"
import { cn } from "@/lib/utils";
interface MarkdownProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
interface MarkdownProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import ReactMarkdown from "react-markdown";""
import { cn } from "@/lib/utils";"
interface MarkdownProps {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  content: string;
  className?: string;
}
export function Markdown({ content, className }: MarkdownProps) {}
  return ("
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
  )
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )
import React from "react",;
import ReactMarkdown from "react-markdown",;
import { cn } from "@/lib/utils",;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MarkdownProps {;
  content: string,;
className?: string;
}
=======
  className?: string;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
interface MarkdownProps {;
  content: string,;
  className?: string;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export function Markdown(): any ({ content, className }: MarkdownProps) {;
  return ("
    <div className={cn("prose dark:prose-invert max-w-none", className)}>;
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>;
  );
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from './react';
import ReactMarkdown from './react - markdown';
=======

import React from './react';'
import ReactMarkdown from './react - markdown';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn  } from '@/lib / utils';
interface MarkdownProps {}
  content: string;
  class_name?: string;
}
export /**;
 * Markdown - Function description;
 */
function Markdown() {}
  return ("
    <div className={cn ("prose dark:prose - invert max - w-none", class_name)}>;
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>);
}

  )
=======

  )

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  )

}

;

;

import React from "react",;
import ReactMarkdown from "react-markdown",;
import { cn } from "@/lib/utils",;
;
interface MarkdownProps {;
  content:string,;
  className?:string;
}
;
export function Markdown({ content, className } MarkdownProps) {;
  );
}
  )
  )
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
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from "react";""
import ReactMarkdown from "react-markdown";""
import { cn } from "@/lib/utils";"
interface MarkdownProps {
  // TODO: Implement
}
  content: string;
  className?: string;
export function Markdown({ content, className }: MarkdownProps) {
  return ()"
    <div className={cn("prose dark:prose-invert max-w-none", className)}>"
</div>
      <ReactMarkdown>{content}
    </div>"
    <div className={cn("prose dark:prose-invert max-w-none", className)}>;"
      <ReactMarkdown>{content};
    </div>;"
    <div className={cn ("prose dark:prose - invert max - w-none", class_name)}>;"
    </div>);"
pr-12325
    <div className={cn("prose dark:prose-invert max-w-none", className)}>;"
</div>
      <ReactMarkdown>{content}</ReactMarkdown>;
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
