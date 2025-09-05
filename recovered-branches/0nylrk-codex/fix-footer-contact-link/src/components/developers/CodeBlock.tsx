
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from &quot;@/lib/utils&quot;;

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ 
  code,
  language = 'bash',
  showLineNumbers = false,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

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
              </div>
            ))}
          </div>
        )}
        <code className=&quot;language-javascript&quot;>{code}</code>
      </pre>
      <button
        className=&quot;absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors&quot;
        onClick={handleCopyClick}
        aria-label=&quot;Copy code&quot;
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      {language && (
        <div className=&quot;absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400&quot;>
          {language}
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
