<<<<<<< HEAD


=======
<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
=======
<<<<<<< HEAD
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils";
interface CodeBlockProps {

  code: string
language?: string
showLineNumbers?: boolean
className?: string
}export function CodeBlock ({
  code
language = 'bash'
showLineNumbers = false
className
}: CodeBlockProps) {
  const [copied, setCopied] = useState (false)
const handleCopyClick = async () => {
  await navigator.clipboard.writeText (code)
setCopied (true)
setTimeout ( () => {
<<<<<<< HEAD
  setCopied (false)
}, 2000)
}
}> <pre className= {"
=======
  setCopied (false) ;
}, 2000) ;
};
}> <pre className= {";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  cn ("p-4 overflow-auto";"
showLineNumbers && "pl-12 relative")
}> {"
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {'
  code.split ('\n') .map ( (, i) => (<div key= {
  i "
}className="h-6 leading-6" > {
  i + 1
export function CodeBlock({
<<<<<<< HEAD
  code
  language = 'bash'
  showLineNumbers = false
  className
}: CodeBlockProps) {
=======
=======

import { useState } from 'react',
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils",
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

export function CodeBlock({ 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  code,
  language = 'bash',
  showLineNumbers = false,
  className
}: CodeBlockProps) {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [copied, setCopied] = useState(false)
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
    >
      <pre
        className={cn('p-4 overflow-auto', showLineNumbers && 'pl-12 relative')}
      >
        {showLineNumbers && (
          <div className='absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500'>
            {code.split('\n').map((_, i) => (
              <div key={i} className='h-6 leading-6'>                {i + 1}
              </div>
=======
<<<<<<< HEAD
import { useState } from 'react',
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils",
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [copied, setCopied] = useState(false),

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code),
    setCopied(true),
    setTimeout(() => {
      setCopied(false)
    }, 2000)
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
import { Check, Copy } from 'lucide-react';
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
    await navigator.clipboard.writeText(code),;
    setCopied(true),;
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  },;
  return (;
    <div className={cn(;
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",;
      className;
    )}>;
      <pre className={cn(;
        "p-4 overflow-auto";
        showLineNumbers && "pl-12 relative";
      )}>;
        {showLineNumbers && (;
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;
            {code.split('\n').map((_, i) => (;
              <div key={i} className="h-6 leading-6">;
                {i + 1}
              </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            ))}
          </div>;
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {language}
        </div>;
      )}
<<<<<<< HEAD

    </div>;
  );



=======

=======
    >;
      <pre;
        className={cn ('p - 4 overflow - auto', showLineNumbers && 'pl - 12 relative')}
      >;
        {showLineNumbers && (
          <div className='absolute left - 0 top - 0 bottom - 0 w - 8 bg - zinc - 800 flex flex - col items - end pr - 2 text - zinc - 500'>;
            {code.split ('\n').map ((_, i) => (
              <div key={i} className='h - 6 leading - 6'>                {i + 1}
              </div>))}
          </div>)}
        <code className='language - javascript'>{code}</code>;
      </pre>;
      <button;
        className='absolute top - 2 right - 2 p - 2 rounded - md hover:bg - zinc - 800 transition - colors';
        on_click={handleCopyClick}
        aria - label='Copy code'      >;
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>;
      {language && (
        <div className='absolute top - 2 left - 2 px - 2 py - 1 text - xs rounded - md bg - zinc - 800 text - zinc - 400'>;
          {language}
        </div>)}
    </div>);
export default CodeBlock;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
export default CodeBlock

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default CodeBlock;
;
}
}
}
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    </div>;
  );
}
;
export default CodeBlock;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
