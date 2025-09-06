<<<<<<< HEAD
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AIEnhancementPanel } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';

interface AIEnhancementDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (content: string) => void;
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;
}

export function AIEnhancementDialog({
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
  initialContent,
}: AIEnhancementDialogProps) {
  const handleApply = (content: string) => {
    onApply(content);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className='max-w-3xl'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <AIEnhancementPanel
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
        />
      </DialogContent>
    </Dialog>
  );
}
=======
 <DialogHeader> <DialogTitle> {
  title 
}</DialogTitle> </DialogHeader> <AIEnhancementPanel title= {
  title 
}defaultOptions= {
  defaultOptions 
}onApply= {
  handleApply 
}initialContent= {
  initialContent 
}/> </DialogContent> </Dialog>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
