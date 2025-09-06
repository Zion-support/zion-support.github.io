<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx

=======

<<<<<<< HEAD
import { useState  } from 'react';
=======
<<<<<<< HEAD
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
import { useState  } from 'react';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  setCopied (false)
}, 2000)
}
}> <pre className= {"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  setCopied (false) ;
}, 2000) ;
};
}> <pre className= {";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  code
  language = 'bash'
  showLineNumbers = false
  className
}: CodeBlockProps) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  code,
  language = 'bash',
  showLineNumbers = false,
  className
}: CodeBlockProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib / utils';
import { cn  } from '@/lib / utils';
interface CodeBlockProps {
  code: string;
language?: string;
showLineNumbers?: boolean;
class_name?: string;
}export /**
 * CodeBlock - Function description
 */
function CodeBlock() {
  const [copied, set_copied] = useState (false);
const handleCopyClick = async () => {
  await navigator.clipboard.write_text (code);
set_copied (true);
set_timeout ( () => {
  set_copied (false);
}, 2000);
}
}> <pre className= {";
  cn ("p - 4 overflow - auto";";
showLineNumbers && "pl - 12 relative");
}> {";
  showLineNumbers && (<div className="absolute left - 0 top - 0 bottom - 0 w - 8 bg - zinc - 800 flex flex - col items - end pr - 2 text - zinc - 500" > {';
  code.split ('\n') .map ( (, i) => (<div key= {
  i ";
}className="h - 6 leading - 6" > {
  i + 1;
export /**
 * CodeBlock - Function description
 */
function CodeBlock() {
  const [copied, set_copied] = useState (false);
  const handleCopyClick = async () => {
    await navigator.clipboard.write_text (code);
    set_copied (true);
    set_timeout (() => {
      set_copied (false);
    }, 2000);
  }
interface CodeBlockProps {;
  code: string;
language?: string;
showLineNumbers?: boolean;
className?: string ;
}export function CodeBlock(): any ({;
  code;
language = 'bash';
showLineNumbers = false;
className ;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState (false);
const handleCopyClick = async () => {;
  await navigator && navigator.clipboard.writeText (code);
setCopied (true);
setTimeout ( () => {;
  setCopied (false) ;
}, 2000) ;
};
}> <preclassName= {"
  cn ("p-4 overflow-auto""
showLineNumbers && "pl-12 relative") 
}> {";
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {';
  code && code.split ('\n') .map ( (, i) => (<divkey= {
  i "
}className="h-6 leading-6"> {;
  i + 1 ;
export function CodeBlock(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  code,;
  language = 'bash',;
  showLineNumbers = false,;
  className;
}: CodeBlockProps) {;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx
  const [copied, setCopied] = useState(false),;
========
  const [copied, setCopied] = useState(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
=======
  const [copied, setCopied] = useState(false),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCopyClick = async () => {;
    await navigator.clipboard.writeText(code),;
    setCopied(true),;
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
  };
    >;
      <pre
        className={cn('p-4 overflow-auto', showLineNumbers && 'pl-12 relative')}>;
        {showLineNumbers && (;
          <div className='absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500'>;
            {code && code.split('\n').map((_, i) => (;
              <div key={i} className='h-6 leading-6'>                {i + 1}
=======

import { useState } from 'react',;
import { Check, Copy } from 'lucide-react';
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
  const handleCopyClick = async () => {;
    await navigator.clipboard.writeText(code),;
    setCopied(true),;
    setTimeout(() => {;
      setCopied(false),;
    }, 2000),;
  },;
;
  return (;
    <div className={cn(;
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",;
      className;
    )}>;
      <pre className={cn(;
        "p-4 overflow-auto",;
        showLineNumbers && "pl-12 relative";
      )}>;
        {showLineNumbers && (;
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;
            {code.split('\n').map((_, i) => (;
              <div key={i} className="h-6 leading-6">;                {i + 1}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
              </div>;
<<<<<<< HEAD

            ))}
          </div>
        )}
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx

          {language}
        </div>
      )}

    </div>;
=======
>>>>>>>             ))}
          </div>
        )}
        <code className='language-javascript'>{code}</code>
      </pre>
========
<<<<<<< HEAD
        <code className='language-javascript'>{code}</code>;
      </pre>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
=======
              </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        )}
<<<<<<< HEAD
        <code className='language-javascript'>{code}</code>
      </pre>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <button
        className='absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors'
        onClick={handleCopyClick}
        aria-label='Copy code'      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx
      </button>
      {language && (
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>
>>>>>>>           {language}
        </div>
      )}
export default CodeBlock

ursor/fix-website-loading-errors-and-merge-6662
          {language}
        </div>;
      )}

========
      </button>;
      {language && (;
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>;
=======
        <code className="language-javascript">{code}</code>;
      </pre>;
      <button;
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors";
        onClick={handleCopyClick}
        aria-label="Copy code";
      >;
        {copied ? <Check size={16} /> :<Copy size={16} />}
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {language}
        </div>;
      )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
    </div>;
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
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
<<<<<<<< HEAD:src/components/developers/CodeBlock.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
xport default CodeBlock;
;
}
}
}
}

>>>>>>>     </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      </button>
      {language && (
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {language}
        </div>
      )}
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
export default CodeBlock

=======
export default CodeBlock;
;
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
export default CodeBlock;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
;
export default CodeBlock,;
 interface CodeBlockProps {;
  code: string;
language?: string;
showLineNumbers?: boolean;
className?: string ;
}export function CodeBlock ({;
  code;
language = 'bash';
showLineNumbers = false;
className ;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState (false);
const handleCopyClick = async () => {;
  await navigator.clipboard.writeText (code);
setCopied (true);
setTimeout ( () => {;
  setCopied (false) ;
}, 2000) ;
};
return (<div className= {;
  cn ("relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto";
className) ;
}> <pre className= {";
  cn ("p-4 overflow-auto";";
showLineNumbers && "pl-12 relative") ;
}> {";
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {';
  code.split ('\n') .map ( (, i) => (<div key= {;
  i ";
}className="h-6 leading-6" > {;
  i + 1 ;
}
}</div>) ;
}> {;
  copied ? <Check size= {;
  16 ;
}/> : <Copy size= {;
  16 ;
}/> ;
}</button> {;
  language ;
}</div>) ;
}</div>) ;
}export default CodeBlock;
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/developers/CodeBlock.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
