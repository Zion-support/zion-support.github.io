
import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
<<<<<<< HEAD
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (content: string) => void;
  defaultOptions: AIEnhancementOptions;
=======
  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  initialContent?: string
}
export function AIEnhancementDialog({
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
  initialContent
}: AIEnhancementDialogProps) {
<<<<<<< HEAD
  const handleApply = null;
=======
  const handleApply = (content: string) => {
    onApply(content)
    onClose()
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl">
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
  )
}