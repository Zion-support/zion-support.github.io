import { useState } from 'react';
<<<<<<< HEAD
import { Copy, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

interface PromptCardProps {
  prompt: Prompt;

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
=======
import { Copy, Send } from 'lucide-react'
import { Button } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';
interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {

  const [ copied, setCopied ] = useState(false),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
<<<<<<< HEAD
    setTimeout(() => setCopied(false), 2000);
=======
    setTimeout(() => setCopied(false), 2000)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);
<<<<<<< HEAD
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
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
        <Button
          variant='secondary'
          size='sm'
          onClick={handleSend}
          aria-label='Send to ZionGPT'
        >
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
        </Button>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
