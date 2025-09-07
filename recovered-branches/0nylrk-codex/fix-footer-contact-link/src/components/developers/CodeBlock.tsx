<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  code: string
import {useState} from 'react';
=======


  code: string;
import {useState} from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
<<<<<<< HEAD
<<<<<<< HEAD
}  code;
=======
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




=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { Check, Copy  } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {

  code: string
<<<<<<< HEAD

  language?: string;
  showLineNumbers?: boolean;
  className?: string
}
export function CodeBlock({
  code;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
}

  code;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;
<<<<<<< HEAD
  const [copied, setCopied] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
=======
  const [copied, setCopied] = useState(false);'
import { useState } from 'react','
import { Check, Copy } from 'lucide-react',"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils",



<<<<<<< HEAD
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



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";

<<<<<<< HEAD
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
=======



interface CodeBlockProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  code: string,
  language?: string,
  showLineNumbers?: boolean,;
  className?: string;
}

<<<<<<< HEAD
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
=======



import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
<<<<<<< HEAD
import {cn} from "@/lib/utils";export function CodeBlock({ 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";export function CodeBlock({ 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {cn} from "@/lib/utils";

interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}


export function CodeBlock({ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  code,
  language = 'bash',
  showLineNumbers = false,

  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {
<<<<<<< HEAD
=======



export function CodeBlock({}
  code,'
  language = 'bash',
  showLineNumbers = false,


;
  className;
}: CodeBlockProps) {}
  const [copied, setCopied] = useState(false),


  const handleCopyClick = async () => {}
    await navigator.clipboard.writeText(code);
    setCopied(true);
  const handleCopyClick = async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    await navigator.clipboard.writeText(code),
    setCopied(true),
    setTimeout(() => {}
      setCopied(false)
    }, 2000)

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    await navigator.clipboard.writeText(code),
    setCopied(true),
    setTimeout(() => {
      setCopied(false)
    }, 2000)

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  },


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
=======
  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className={cn(
=======
  return (
    <div className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",
      className;
    )}>
      <pre className={cn("
        "p-4 overflow-auto","
        showLineNumbers && "pl-12 relative"
      )}>
        {showLineNumbers && ("
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">'
            {code.split('\n').map((_, i) => ("
              <div key={i} className="h-6 leading-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from 'react',;
import { Check, Copy } from 'lucide-react',;
=======
'
import { useState } from 'react',;'
import { Check, Copy } from 'lucide-react',;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import { useState } from 'react',;
import { Check, Copy } from 'lucide-react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { cn } from "@/lib/utils",;
interface CodeBlockProps {;
  code: string,;
  language?: string,;
  showLineNumbers?: boolean,;
  className?: string;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleCopyClick = async () => {;
    await navigator && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {;
      setCopied(false);
    }, 2000);
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <divclassName={cn(
=======
export function CodeBlock() { return null; }
    }, 2000);
  };




  return (
    <divclassName={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {i + 1}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                {i + 1}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            {code && code.split('\n').map((_, i) => (;
              <div key={i} className="h-6 leading-6">;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </button>;
      {language && (;"
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


  );
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

;


export default CodeBlock;
'
import {useState} from 'react';'
import {Check, Copy} from 'lucide-react';'
import { cn } from '@/lib / utils';
interface CodeBlockProps {}
  code: string,
=======
  code: string;
import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";"
pr-12325
interface CodeBlockProps {;
  code: string,;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
<<<<<<< HEAD
export /**;
 * CodeBlock - Function description;
 */
function CodeBlock() {}
  const [copied, set_copied] = useState (false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default CodeBlock;


<<<<<<< HEAD
;
export default CodeBlock;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default CodeBlock;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default CodeBlock;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default CodeBlock;
;
  ),;}
;
export default CodeBlock,;
 interface CodeBlockProps {
  code: string;
=======

export function CodeBlock(): any ({ ;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
export function CodeBlock(): any ({ ;
  code;
}  code;


<<<<<<< HEAD
;
export default CodeBlock;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
