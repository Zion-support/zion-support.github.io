
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {

  code: string

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}


export function CodeBlock(): any ({ ;

  code;

  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;
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
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}


export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,

  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)


=======

  },


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

  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {i + 1}
              </div>;
            ))}
          </div>;
        )}
        <code className="language-javascript">{code}</code>;
      </pre>;
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={handleCopyClick}
        aria-label="Copy code">;
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
  );
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
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
