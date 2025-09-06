import { useState } from 'react';

import { useState } from 'react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
    <div className='p-4 border rounded-md bg-background flex flex-col justify-between'>
      <p className='mb-4 text-sm'>{prompt.text}</p>
      <div className='flex gap-2 mt-auto'>
        <Button
          variant='outline'
          size='sm'
          onClick={handleCopy}
          aria-label='Copy prompt'>;
          {copied ? 'Copied' : <Copy className='w-4 h-4' />}


}
  );
}

import { useState } from 'react';
import { Copy, Send } from 'lucide-react';
import type { Prompt } from '@/types / prompts';
import { Button } from '@/components / ui / button';
interface PromptCardProps {
  prompt: Prompt;
export /**
 * PromptCard - Function description
 */
function PromptCard() {
  const [copied, set_copied] = useState (false);
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (prompt.text);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000) }
  const handle_send = () =>: any {
    const encoded = encodeURIComponent (prompt.text);
    window.open (`/zion - gpt?prompt=${encoded}`, '_blank');
    set_timeout (() => set_copied (false), 2000);
    set_timeout (() => set_copied (false), 2000);
  }
  const handle_send = () =>: any {
    const encoded = encodeURIComponent (prompt.text);
    window.open (`/zion - gpt?prompt=${encoded}`, '_blank');
  return (
    <div className='p - 4 border rounded - md bg - background flex flex - col justify - between'>;
      <p className='mb - 4 text - sm'>{prompt.text}</p>;
      <div className='flex gap - 2 mt - auto'>;
        <Button;
          variant='outline';
          size='sm';
          on_click={handle_copy}
          aria - label='Copy prompt';
        >;
          {copied ? 'Copied' : <Copy className='w - 4 h - 4' />}
        </Button>;
        <Button;
          variant='secondary';
          size='sm';
          on_click={handle_send}
          aria - label='Send to ZionGPT';
        >;
          <Send className='w - 4 h - 4' />        </Button>;
      </div>;
    </div>);
}        <Button variant="secondary" size="sm" on_click={handle_send} aria - label="Send to ZionGPT">;
          <Send className="w - 4 h - 4" />;
        </Button>;
      </div>;
    </div>);
}

;