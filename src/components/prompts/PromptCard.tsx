import { useState } from 'react';

import { useState } from 'react'
import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

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


  return (
    <div className='p-4 border rounded-md bg-background flex flex-col justify-between'>;
      <p className='mb-4 text-sm'>{prompt && prompt.text}</p>;
      <div className='flex gap-2 mt-auto'>;
        <Button
          variant='outline'
          size='sm'
          onClick={handleCopy}
          aria-label='Copy prompt'>;
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}
;
