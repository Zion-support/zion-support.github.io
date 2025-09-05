
import React from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { AIEnhancementPanel } from './AIEnhancementPanel',;
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
interface AIEnhancementDialogProps {;
  title: string,;
  isOpen: boolean,;
  onClose: () => void,;
  onApply: (content: string) => void,;
  defaultOptions: AIEnhancementOptions,;
  initialContent?: string;
}
<<<<<<< HEAD

export function AIEnhancementDialog({
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
  initialContent
}: AIEnhancementDialogProps) {
  const handleApply = (content: string) => {
    onApply(content),
    onClose()
  },

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className=&quot;max-w-3xl&quot;>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <AIEnhancementPanel
=======
;
export function AIEnhancementDialog({;
  title,;
  isOpen,;
  onClose,;
  onApply,;
  defaultOptions,;
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content);
    onClose();
  };
  return (;
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;