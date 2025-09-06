<<<<<<< HEAD

=======
<<<<<<< HEAD
import { useState  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
>>>>>>> import type { Prompt } from '@/types/prompts';

interface PromptCardProps {;
  prompt: Prompt;

export function PromptCard(): any ({ prompt }: PromptCardProps) {;
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {;
    navigator && navigator.clipboard.writeText(prompt && prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);  };
  const handleSend = () => {;
    const encoded = encodeURIComponent(prompt && prompt.text);
    window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {;
    const encoded = encodeURIComponent(prompt && prompt.text);
    window && window.open(`/zion-gpt?prompt=${encoded}`, '_blank');


=======
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';
interface PromptCardProps {
  prompt: Prompt
export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className='p-4 border rounded-md bg-background flex flex-col justify-between'>
      <p className='mb-4 text-sm'>{prompt.text}</p>
      <div className='flex gap-2 mt-auto'>
        <Button
          variant='outline'
          size='sm'
          onClick={handleCopy}
          aria-label='Copy prompt'
        >
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>
        <Button
          variant='secondary'
          size='sm'
          onClick={handleSend}
          aria-label='Send to ZionGPT'
        >
          <Send className='w-4 h-4' />        </Button>
      </div>
    </div>
  )
}        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from 'react',;
import { Copy, Send } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import type { Prompt } from '@/types/prompts',;
interface PromptCardProps {;
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false),

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text),
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank')
  },

  return (
    <div className="p-4 border rounded-md bg-background flex flex-col justify-between">
      <p className="mb-4 text-sm">{prompt.text}</p>
      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" onClick={handleCopy} aria-label="Copy prompt">
          {copied ? 'Copied' : <Copy className="w-4 h-4" />}
        </Button>
        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
<<<<<<< HEAD
<<<<<<< HEAD

          <Send className="w-4 h-4" />

        </Button>
=======
          <Send className="w-4 h-4" />
>>>>>>>         </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Send className="w-4 h-4" />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Button
          variant='secondary'
          size='sm'
          onClick={handleSend}
          aria-label='Send to ZionGPT'
        >
          <Send className='w-4 h-4' />        </Button>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

}

}
;

=======
}
}
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
}        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
          <Send className="w-4 h-4" />
        </Button>
      </div>;
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
