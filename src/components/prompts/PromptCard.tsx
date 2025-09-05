<<<<<<< HEAD
import { useState } from 'react',
import { Copy, Send } from 'lucide-react'
import { Button } from '@/components/ui/button',
import type { Prompt } from '@/types/prompts',
interface PromptCardProps {
  prompt: Prompt
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
    <div className=&quot;p-4 border rounded-md bg-background flex flex-col justify-between&quot;>
      <p className=&quot;mb-4 text-sm&quot;>{prompt.text}</p>
      <div className=&quot;flex gap-2 mt-auto&quot;>
        <Button variant=&quot;outline&quot; size=&quot;sm&quot; onClick={handleCopy} aria-label=&quot;Copy prompt&quot;>
          {copied ? 'Copied' : <Copy className=&quot;w-4 h-4&quot; />}
        </Button>
        <Button variant=&quot;secondary&quot; size=&quot;sm&quot; onClick={handleSend} aria-label=&quot;Send to ZionGPT&quot;>
          <Send className=&quot;w-4 h-4&quot; />
=======
import type {_Prompt} from '@/types/prompts';

interface PromptCardProps {_prompt: Prompt;}

export function PromptCard(_{_prompt}: PromptCardProps) {_const [copied, _setCopied] = useState(false);

  const _handleCopy = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout__(() => setCopied(false), _2000);};

  const _handleSend = () => {_const _encoded = encodeURIComponent(prompt.text);
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
  };

  return (
    <div className="p-4 border rounded-md bg-background flex flex-col justify-between">
      <p className="mb-4 text-sm">{_prompt.text}</p>
      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" onClick={_handleCopy} aria-label="Copy prompt">
          {_copied ? 'Copied' : <Copy className="w-4 h-4" />}
        </Button>
        <Button variant="secondary" size="sm" onClick={_handleSend} aria-label="Send to ZionGPT">
          <Send className="w-4 h-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Button>
      </div>
    </div>
  )
}
