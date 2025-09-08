import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/textarea';

interface AIListingGeneratorProps {
  onGenerate: (content: string) => void;
  isLoading?: boolean;
}

export const AIListingGenerator: React.FC<AIListingGeneratorProps> = ({
  onGenerate,
  isLoading = false,
}) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          AI Listing Generator
        </label>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to list (e.g., 'A premium web development service for small businesses')"
          className="w-full"
          rows={3}
        />
      </div>
      <Button
        onClick={handleGenerate}
        disabled={!prompt.trim() || isLoading}
        className="w-full"
      >
        {isLoading ? 'Generating...' : 'Generate Listing'}
      </Button>
    </div>
  );
};