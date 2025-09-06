import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';

import { Copy, Send } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import type { Prompt } from '@/types/prompts';
interface PromptCardProps {
  prompt: Prompt
export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = null;
  return (
    <div className='p-4 border rounded-md bg-background flex flex-col justify-between'>;
      <p className='mb-4 text-sm'>{prompt && prompt.text}</p>;
      <div className='flex gap-2 mt-auto'>;
        <Button
          variant='outline'
          size='sm'
          onClick={handleCopy}
}

import { useState } from 'react';
import { Copy, Send } from 'lucide-react';
}

;
