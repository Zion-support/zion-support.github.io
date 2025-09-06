import { useState } from 'react';
<<<<<<< HEAD
import { Copy, Send } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Copy, Send } from 'lucide-react';
=======
import { Copy, Send } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

interface PromptCardProps {
  prompt: Prompt;

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
<<<<<<< HEAD
    setTimeout(() => setCopied(false), 2000);  };

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
=======
<<<<<<< HEAD
<<<<<<< HEAD
    setTimeout(() => setCopied(false), 2000);
=======
    setTimeout(() => setCopied(false), 2000)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setTimeout(() => setCopied(false), 2000)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);
<<<<<<< HEAD
<<<<<<< HEAD
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
=======
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

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
        </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <Button
          variant='secondary'
          size='sm'
          onClick={handleSend}
          aria-label='Send to ZionGPT'
        >
<<<<<<< HEAD
          <Send className='w-4 h-4' />        </Button>
      </div>
    </div>
  );
}
=======
          <Send className='w-4 h-4' />
=======
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank')
  };


  return (
    <div className="p-4 border rounded-md bg-background flex flex-col justify-between">
      <p className="mb-4 text-sm">{prompt.text}</p>
      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" onClick={handleCopy} aria-label="Copy prompt">
          {copied ? 'Copied' : <Copy className="w-4 h-4" />}
        </Button>
        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
          <Send className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <Button variant="secondary" size="sm" onClick={handleSend} aria-label="Send to ZionGPT">
          <Send className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </Button>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
