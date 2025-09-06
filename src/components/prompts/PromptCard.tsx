import { useState } from 'react';
import { Copy, Send } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');

  };

  const handleSend = () => {
    const encoded = encodeURIComponent(prompt.text);

        </Button>
      </div>
    </div>
  );