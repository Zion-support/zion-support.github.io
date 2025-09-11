<<<<<<< HEAD
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
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",




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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}


export function CodeBlock(): any ({ ;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  code;

  language = 'bash';
  showLineNumbers = false;
<<<<<<< HEAD
<<<<<<< HEAD
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);



import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

=======
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function CodeBlock({ ;
  code;
  language = 'bash';
  showLineNumbers = false;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code),
    setCopied(true),
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setTimeout(() => {
      setCopied(false)
    }, 2000)


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                {i + 1}

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
      <button;
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors";
        onClick={handleCopyClick}
        aria-label="Copy code";
      >;
        {copied ? <Check size={16} /> :<Copy size={16} />}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
<<<<<<< HEAD



;


export default CodeBlock;
=======
  );
}



=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default CodeBlock;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
<<<<<<< HEAD
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
              <div key={i} className="h-6 leading-6">;
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

;
export default CodeBlock;

;
export default CodeBlock;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;
export default CodeBlock;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
