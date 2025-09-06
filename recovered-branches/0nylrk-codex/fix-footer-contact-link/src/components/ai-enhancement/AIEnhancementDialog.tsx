
<<<<<<< HEAD
import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
<<<<<<< HEAD
=======
  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string
}

export function AIEnhancementDialog({;
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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