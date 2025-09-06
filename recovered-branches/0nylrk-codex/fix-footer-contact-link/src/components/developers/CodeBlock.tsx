
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from "@/lib/utils";
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

export function CodeBlock({ 
  code,
  language = $2;
  showLineNumbers = $2;
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState($2);
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText($2);
    setCopied($2);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  },

  return (
    <div className = $2;
      className
    )}>
      <pre className = $2;
        showLineNumbers && "pl-12 relative"
      )}>
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">
            {code.split('\n').map((_, i) => (
              <div key = $2;