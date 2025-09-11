<<<<<<< HEAD
<<<<<<< HEAD

import { useState  } from 'react';
import { useState } from 'react'
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
import { useState  } from 'react';
  setCopied (false)
}, 2000)
}
}> <pre className= {"
  setCopied (false) ;
}, 2000) ;
};
}> <pre className= {";
  cn ("p-4 overflow-auto";"
showLineNumbers && "pl-12 relative")
}> {"
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {'
  code.split ('\n') .map ( (, i) => (<div key= {
  i "
}className="h-6 leading-6" > {
  i + 1
export function CodeBlock({
  code
  language = 'bash'
  showLineNumbers = false
  className
}: CodeBlockProps) {

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
  code,;
  language = 'bash',;
  showLineNumbers = false,;
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);
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
  };
    >;
      <pre
        className={cn('p-4 overflow-auto', showLineNumbers && 'pl-12 relative')}>;
        {showLineNumbers && (;
          <div className='absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500'>;
            {code && code.split('\n').map((_, i) => (;
              <div key={i} className='h-6 leading-6'>                {i + 1}

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
              </div>;
))}
          </div>;
        )}
          </div>
        )}
        <code className='language-javascript'>{code}</code>
      </pre>
              </div>;
            ))}
          </div>
        )}
        <code className='language-javascript'>{code}</code>
      </pre>
=======
))}
          </div>;
        )}
        <code className='language-javascript'>{code}</code>
      </pre>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <button
        className='absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors'
        onClick={handleCopyClick}
        aria-label='Copy code'      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
<<<<<<< HEAD
=======
))}
          </div>;
        )}


=======
      </button>
      {language && (
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          {language}
        </div>;
      )}

<<<<<<< HEAD
      </button>;
      {language && (;
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>;
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
          {language}
        </div>;
      )}
    </div>;
=======
    </div>;
  );



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export default CodeBlock;
;
}
}
}
}

    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
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
export default CodeBlock;
=======
export default CodeBlock;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default CodeBlock;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
