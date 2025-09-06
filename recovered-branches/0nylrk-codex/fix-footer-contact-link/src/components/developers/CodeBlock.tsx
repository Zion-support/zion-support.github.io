<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  code: string
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
<<<<<<< HEAD


export function CodeBlock(): any ({ ;

=======
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
export function CodeBlock(): any ({ ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {

  code: string
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  language?: string;
  showLineNumbers?: boolean;
  className?: string
}
export function CodeBlock({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  code;

  language = 'bash';
  showLineNumbers = false;
<<<<<<< HEAD
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);
<<<<<<< HEAD
=======



import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

=======
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",



=======
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
export function CodeBlock({ ;
  code;
  language = 'bash';
  showLineNumbers = false;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code),
    setCopied(true),
    setTimeout(() => {
      setCopied(false)
    }, 2000)
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  },


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {i + 1}
=======
                {i + 1}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



;


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export default CodeBlock;
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
