<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx

<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx


export function CodeBlock(): any ({ ;

========
export function CodeBlock(): any ({ ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
  code;
  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx



import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {

  code: string

  language?: string;
  showLineNumbers?: boolean;
  className?: string
}
export function CodeBlock({
  code;

  language = 'bash';
  showLineNumbers = false;
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
=======
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
export function CodeBlock({ ;
  code;
  language = 'bash';
  showLineNumbers = false;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code),
    setCopied(true),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setTimeout(() => {
      setCopied(false)
    }, 2000)
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className={cn(
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",
      className
    )}>
      <pre className={cn(
        "p-4 overflow-auto",
        showLineNumbers && "pl-12 relative"
      )}>
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">
            {code.split('\n').map((_, i) => (
              <div key={i} className="h-6 leading-6">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import { useState } from 'react',;
import { Check, Copy } from 'lucide-react',;
import { cn } from "@/lib/utils",;
interface CodeBlockProps {;
  code: string,;
  language?: string,;
  showLineNumbers?: boolean,;
  className?: string;
}
;
export function CodeBlock({;
  code,;
  language = 'bash',;
  showLineNumbers = false,;
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };
  return (
    <divclassName={cn(
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto"
      className
    )}>;
      <preclassName={cn(
        "p-4 overflow-auto"
        showLineNumbers && "pl-12 relative"
      )}>;
        {showLineNumbers && (;
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;
            {code && code.split('\n').map((_, i) => (;
              <div key={i} className="h-6 leading-6">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {i + 1}
=======

import { useState } from 'react',;
import { Check, Copy } from 'lucide-react',;
import { cn } from "@/lib/utils",;
;
interface CodeBlockProps {;
  code:string,;
  language?:string,;
  showLineNumbers?:boolean,;
  className?:string;
}
;
export function CodeBlock({ ;
  code,;
  language = 'bash',;
  showLineNumbers = false,;
  className;
} CodeBlockProps) {;
  const [copied, setCopied] = useState(false),;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCopyClick = async () => {;
    await navigator.clipboard.writeText(code),;
    setCopied(true),;
    setTimeout(() => {;
<<<<<<< HEAD
      setCopied(false),;
    }, 2000),;
  },;
;
=======
      setCopied(false);
    }, 2000);
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className={cn(;
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",;
      className;
    )}>;
      <pre className={cn(;
<<<<<<< HEAD
        "p-4 overflow-auto",;
=======
        "p-4 overflow-auto";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        showLineNumbers && "pl-12 relative";
      )}>;
        {showLineNumbers && (;
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;
            {code.split('\n').map((_, i) => (;
<<<<<<< HEAD
              <div key={i} className="h-6 leading-6">;                {i + 1}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
            ))}
          </div>;
        )}
        <code className="language-javascript">{code}</code>;
      </pre>;
<<<<<<< HEAD
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={handleCopyClick}
        aria-label="Copy code">;
        {copied ? <Check size={16} /> : <Copy size={16} />}
=======
      <button;
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors";
        onClick={handleCopyClick}
        aria-label="Copy code";
      >;
        {copied ? <Check size={16} /> :<Copy size={16} />}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD

export default CodeBlock;

=======



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default CodeBlock;
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import { cn } from '@/lib / utils';
interface CodeBlockProps {
  code: string,
  language?: string;
  showLineNumbers?: boolean;
  class_name?: string;
}
export /**
 * CodeBlock - Function description
 */
function CodeBlock() {
  const [copied, set_copied] = useState (false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  const handleCopyClick = async () => {
    await navigator.clipboard.write_text (code);
    set_copied (true);
    set_timeout (() => {
      set_copied (false);
    }, 2000);
  }
;
  return (
    <div className={cn (
      "relative rounded - md bg - zinc - 900 text - zinc - 50 font - mono text - sm overflow - x-auto";
      class_name)}>;
      <pre className={cn (
        "p - 4 overflow - auto";
        showLineNumbers && "pl - 12 relative")}>;
        {showLineNumbers && (
          <div className="absolute left - 0 top - 0 bottom - 0 w - 8 bg - zinc - 800 flex flex - col items - end pr - 2 text - zinc - 500">;
            {code.split ('\n').map ((_, i) => (
              <div key={i} className="h - 6 leading - 6">;
                {i + 1}
              </div>))}
          </div>)}
        <code className="language - javascript">{code}</code>;
      </pre>;
      <button;
        className="absolute top - 2 right - 2 p - 2 rounded - md hover:bg - zinc - 800 transition - colors";
        on_click={handleCopyClick}
        aria - label="Copy code";
      >;
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>;
      {language && (
        <div className="absolute top - 2 left - 2 px - 2 py - 1 text - xs rounded - md bg - zinc - 800 text - zinc - 400">;
          {language}
        </div>)}
    </div>);
}
export default CodeBlock;
<<<<<<< HEAD

=======
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
;
export default CodeBlock,;
 interface CodeBlockProps {
  code: string;
language?: string;
showLineNumbers?: boolean;
className?: string 
}export function CodeBlock ({
  code;
language = 'bash';
showLineNumbers = false;
className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState (false);
const handleCopyClick = async () => {
  await navigator.clipboard.writeText (code);
setCopied (true);
setTimeout ( () => {
  setCopied (false) 
}, 2000) 
};
return (<div className= {
  cn ("relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto";
className) 
}> <pre className= {
  cn ("p-4 overflow-auto";
showLineNumbers && "pl-12 relative") 
}> {
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {
  code.split ('\n') .map ( (, i) => (<div key= {
  i 
}className="h-6 leading-6" > {
  i + 1 
}
}</div>) 
}> {
  copied ? <Check size= {
  16 
}/> : <Copy size= {
  16 
}/> 
}</button> {
  language 
}</div>) 
}</div>) 
}export default CodeBlock;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/developers/CodeBlock.tsx
=======
              <div key={i} className="h-6 leading-6">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code className="language-javascript">{code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={handleCopyClick}
        aria-label="Copy code"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      {language && (
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">
          {language}
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default CodeBlock;

=======
;
export default CodeBlock;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
