import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuickReplyButtonProps {
  text: string;
  onClick: () => void;
}

export function QuickReplyButton({ text, onClick }: QuickReplyButtonProps) {
  
    >
      {text}
    </Button>
  );
