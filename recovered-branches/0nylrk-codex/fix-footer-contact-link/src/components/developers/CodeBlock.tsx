<<<<<<< HEAD


import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {
  code: string;
=======
  code: string
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

  code: string;
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";"
pr-12325
interface CodeBlockProps {;
  code: string,;
>>>>>>> origin/main

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}  code;

<<<<<<< HEAD
export function CodeBlock({ 
  code;

  language;

=======
  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

  },

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
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000)
};

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
                {i + 1}
      </button>;
      {language && (;
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
  );
}

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
;
export default CodeBlock;
}


export function CodeBlock(): any ({ ;

  code;"
  language = 'bash';
  showLineNumbers = false;
  className;)
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);
import { useState } from 'react',;
import { Check, Copy } from 'lucide-react',;
import { cn } from "@/lib/utils",""
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";"
interface CodeBlockProps {
  // TODO: Implement
export function CodeBlock({
  code;
"



  // TODO: Implement
  code: string,
  language?: string,
  showLineNumbers?: boolean,


  code,"
  language = 'bash',
  showLineNumbers = false,

}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
    await navigator.clipboard.writeText(code),
    setCopied(true),



  },


  return (
    <div className={cn(
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto","
    )}>
</div>
      <pre className={cn("
        "p-4 overflow-auto",""
        showLineNumbers && "pl-12 relative"")
</pre>"
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">"
</div>"
              <div key={i} className="h-6 leading-6">"
    <divclassName={cn("
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto""
    )}>;
</divclassName>
      <preclassName={cn("
        "p-4 overflow-auto"""
</preclassName>"
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">;"
              <div key={i} className="h-6 leading-6">;"
              </div>;
          </div>;"
        <code className="language-javascript">{code}</code>;"
      </pre>;
      <button;"
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors""
        onClick={handleCopyClick}"
        aria-label="Copy code">;"
</button>
        {copied ? <Check size={16} /> : <Copy size={16} />}

      </button>;"
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;"
return (<div className= {"
  cn ("relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto";")
className) 
}> <pre className= {
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {"
</div>)"
  code.split ('\n') .map ( (, i) => (<div key= {
  i;
}className="h-6 leading-6" > {"
</div>)
}</div>) 
  copied ? <Check size= {
  16;
}/> : <Copy size= {

}</button> {
}</div>) "
        <code className="language-javascript">{code}</code>"
      </pre>
        aria-label="Copy code""
      >

      </button>"
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">"
pr-12325
>>>>>>> origin/main
