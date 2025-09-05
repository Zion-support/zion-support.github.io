
<<<<<<< HEAD
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
      <DialogContent className=&quot;max-w-3xl&quot;>
=======
import React from 'react';
import {_Dialog, _DialogContent, _DialogHeader, _DialogTitle} from '@/components/ui/dialog';

interface AIEnhancementDialogProps {_title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (_content: string) => void;
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;}

export function AIEnhancementDialog(_{_title, _isOpen, _onClose, _onApply, _defaultOptions, _initialContent}: AIEnhancementDialogProps) {_const _handleApply = (_content: string) => {
    onApply(content);
    onClose();};

  return (_<Dialog open={_isOpen} onOpenChange={_() => onClose()}>
      <DialogContent className="max-w-3xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <DialogHeader>
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
}
