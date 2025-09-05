
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
  );
}
