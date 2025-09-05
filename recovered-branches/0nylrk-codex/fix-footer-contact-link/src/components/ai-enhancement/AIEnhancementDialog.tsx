
<<<<<<< HEAD
import React from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { AIEnhancementPanel } from './AIEnhancementPanel',;
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
;
interface AIEnhancementDialogProps {;
  title:string,;
  isOpen:boolean,;
  onClose:() => void,;
  onApply:(content:string) => void,;
  defaultOptions:AIEnhancementOptions,;
  initialContent?:string;
}
;
export function AIEnhancementDialog({;
  title,;
  isOpen,;
  onClose,;
  onApply,;
  defaultOptions,;
  initialContent;
} AIEnhancementDialogProps) {;
  const handleApply = (content:string) => {;
    onApply(content),;
    onClose();
  },;
;
  return (;
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel;
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
        />;
      </DialogContent>;
    </Dialog>;
  ),;
=======
import React from 'react',
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',
import { AIEnhancementPanel } from './AIEnhancementPanel',
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
interface AIEnhancementDialogProps {
  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string
}

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
      <DialogContent className=&quot;max-w-3xl&quot;>        <DialogHeader>
          <DialogTitle>{_title}</DialogTitle>
        </DialogHeader>
        <AIEnhancementPanel
          title={_title}
          defaultOptions={_defaultOptions}
          onApply={_handleApply}
          initialContent={_initialContent}
        />
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
