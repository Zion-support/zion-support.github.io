<<<<<<< HEAD
=======
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { useState  } from 'react';
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils";
interface CodeBlockProps {
<<<<<<< HEAD
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string
}

export function CodeBlock({ 
  code;
<<<<<<< HEAD
  language;
=======
  code: string
language?: string
showLineNumbers?: boolean
className?: string
}export function CodeBlock ({
  code
language = 'bash'
showLineNumbers = false
className
=======
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

export function CodeBlock({
  code,
  language = 'bash',
  showLineNumbers = false,
  className,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}: CodeBlockProps) {
  const [copied, setCopied] = useState (false)
const handleCopyClick = async () => {
  await navigator.clipboard.writeText (code)
setCopied (true)
setTimeout ( () => {
  setCopied (false)
}, 2000)
}
}> <pre className= {"
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
  const [copied, setCopied] = useState(false)
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => {
<<<<<<< HEAD
      setCopied(false)
    }, 2000)
  }
=======
      setCopied(false);
    }, 2000);
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    >
      <pre
        className={cn('p-4 overflow-auto', showLineNumbers && 'pl-12 relative')}
      >
        {showLineNumbers && (
          <div className='absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500'>
            {code.split('\n').map((_, i) => (
              <div key={i} className='h-6 leading-6'>                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code className='language-javascript'>{code}</code>
      </pre>
      <button
        className='absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors'
        onClick={handleCopyClick}
        aria-label='Copy code'      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      {language && (
        <div className='absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400'>
          {language}
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
export default CodeBlock
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
}

export default CodeBlock;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
