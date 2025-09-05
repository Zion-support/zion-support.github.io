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
        </Button>
      </div>
    </div>
  );
}
