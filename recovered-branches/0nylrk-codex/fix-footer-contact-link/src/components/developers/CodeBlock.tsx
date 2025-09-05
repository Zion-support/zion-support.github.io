
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',
import { Check, Copy } from 'lucide-react',
import { cn } from "@/lib/utils",
=======
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
      &quot;relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto&quot;,
      className
    )}>
      <pre className={cn(
        &quot;p-4 overflow-auto&quot;,
        showLineNumbers && &quot;pl-12 relative&quot;
      )}>
        {showLineNumbers && (
          <div className=&quot;absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500&quot;>
            {code.split('\n').map((_, i) => (
              <div key={i} className=&quot;h-6 leading-6&quot;>
                {i + 1}
=======

interface CodeBlockProps {_code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;}

export function CodeBlock(_{_code, _language = 'bash', _showLineNumbers = false, _className}: CodeBlockProps) {_const [copied, _setCopied] = useState(false);

  const _handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout__(() => {
      setCopied(false);}, 2000);
  };

  return (
    <div className={_cn(
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto", _className
    )}>
      <pre className={_cn(
        "p-4 overflow-auto", _showLineNumbers && "pl-12 relative"
      )}>
        {_showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">
            {code.split('\n').map(_(_, _i) => (
              <div key={i} className="h-6 leading-6">
                {_i + 1}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        )}
<<<<<<< HEAD
        <code className=&quot;language-javascript&quot;>{code}</code>
      </pre>
      <button
        className=&quot;absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors&quot;
        onClick={handleCopyClick}
        aria-label=&quot;Copy code&quot;
=======
        <code className="language-javascript">{_code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={_handleCopyClick}
        aria-label="Copy code"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        {_copied ? <Check size={16} /> : <Copy size={_16} />}
      </button>
<<<<<<< HEAD
      {language && (
        <div className=&quot;absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400&quot;>
=======
      {_language && (
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {language}
        </div>
      )}
    </div>
  )
}

export default CodeBlock,
