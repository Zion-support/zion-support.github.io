<<<<<<< HEAD
code: string
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
code: string
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';

import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;

  language?: string;
  showLineNumbers?: boolean;
  className?: string;

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {
<<<<<<< HEAD

  code: string

  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;

import { cn } from "@/lib/utils",

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

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",

interface CodeBlockProps {

  code: string,
  language?: string,
  showLineNumbers?: boolean,;
  className?: string;
}
<<<<<<< HEAD
import {cn} from "@/lib/utils";export function CodeBlock({ 
=======

export function CodeBlock({ 

>>>>>>> origin/chore/fix-lint-and-merge
  code,
  language = 'bash',
  showLineNumbers = false,

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  code: string
=======
export function CodeBlock(): any ({ ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  code;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  language = 'bash';
  showLineNumbers = false;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  className;
}: CodeBlockProps) {;

<<<<<<< HEAD
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
=======
import { cn } from "@/lib/utils",

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

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CodeBlockProps {

>>>>>>> merged-prs-20250907-203621
  code: string,
  language?: string,
  showLineNumbers?: boolean,;
  className?: string;
}
<<<<<<< HEAD
export function CodeBlock({
  code;

export function CodeBlock({ 
  code,
  language = $2;
  showLineNumbers = $2;
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState($2);
=======
<<<<<<< HEAD
import {cn} from "@/lib/utils";export function CodeBlock({ 
=======

<<<<<<< HEAD
export function CodeBlock({ ;
  code;
  language = 'bash';
  showLineNumbers = false;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function CodeBlock({ 

>>>>>>> origin/chore/fix-lint-and-merge
  code,
  language = 'bash',
  showLineNumbers = false,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code),
    setCopied(true),
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setTimeout(() => {
      setCopied(false)
    }, 2000)

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    await navigator.clipboard.writeText(code),
    setCopied(true),
    setTimeout(() => {}
      setCopied(false)
    }, 2000)
<<<<<<< HEAD

  },

  }
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  }
  },

<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

    <div className={cn(

      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",
      className;
    )}>
      <pre className={cn("
        "p-4 overflow-auto","
        showLineNumbers && "pl-12 relative"
      )}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">
            {code.split('\n').map((_, i) => (
              <div key = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {showLineNumbers && ("
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">'
            {code.split('\n').map((_, i) => ("
              <div key={i} className="h-6 leading-6">
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <divclassName={cn(

      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto"
      className;
    )}>;
      <preclassName={cn("
        "p-4 overflow-auto""
        showLineNumbers && "pl-12 relative"
      )}>;
        {showLineNumbers && (;"
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;'
            {code && code.split('\n').map((_, i) => (;"
              <div key={i} className="h-6 leading-6">;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {i + 1}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>;
            ))}
          </div>;
        )}"
        <code className="language-javascript">{code}</code>;
      </pre>;
      <button"
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={handleCopyClick}"
        aria-label="Copy code">;
        {copied ? <Check size={16} /> : <Copy size={16} />}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </button>;
      {language && (;"
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;

<<<<<<< HEAD
;

export default CodeBlock;
<<<<<<< HEAD

=======
'
import {useState} from 'react';'
import {Check, Copy} from 'lucide-react';'
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======


;


export default CodeBlock;
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { cn } from '@/lib / utils';
interface CodeBlockProps {}
  code: string,

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
<<<<<<< HEAD
export function CodeBlock(): any ({ ;
  code;
}  code;
=======
<<<<<<< HEAD
export function CodeBlock(): any ({ ;
  code;
}  code;
=======
export default CodeBlock;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
