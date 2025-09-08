  code: string
import {useState} from 'react';

import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";
interface CodeBlockProps {;
  code: string,;

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}  code;

  language = 'bash';
  showLineNumbers = false;
  className;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState(false);

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {cn} from "@/lib/utils";export function CodeBlock({ 
  code,
  language = $2;
  showLineNumbers = $2;
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState($2);
export function CodeBlock({ 

  code,
  language = 'bash',
  showLineNumbers = false,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false),

  },

    <div className={cn(

      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto",
      className;
    )}>
      <pre className={cn("
        "p-4 overflow-auto","
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
                {i + 1}
      </button>;
      {language && (;"
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">;
          {language}
        </div>;
      )}
    </div>;
  );
}
export default CodeBlock;

import {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import { cn } from '@/lib / utils';
interface CodeBlockProps {}
  code: string,

  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}
export /**
 * CodeBlock - Function description
 */
function CodeBlock() {
  const [copied, set_copied] = useState (false);
;
export default CodeBlock;
