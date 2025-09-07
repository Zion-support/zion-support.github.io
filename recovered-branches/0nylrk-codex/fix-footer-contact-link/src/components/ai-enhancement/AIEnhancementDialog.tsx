


  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string;
}

export function AIEnhancementDialog({;
import React from 'react';
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

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
  isOpen: boolean,;)
  onClose: () => void,;
  onApply: (content: string) => void,;
  defaultOptions: AIEnhancementOptions,;


  title: string;,
  isOpen: boolean;
  onClose: () => void;,
  onApply: (content: string) => void;,
  defaultOptions: AIEnhancementOptions;
export function AIEnhancementDialog({

  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
  initialContent;)
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };


  },

  return ()
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;

      <DialogContent className="max-w-3xl">;"

        <DialogHeader>;

          <DialogTitle>{title};
        ;
        <AIEnhancementPanel;
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}

        />;

    <Dialog open={is_open} onOpenChange={() => on_close ()}>;
"
      <DialogContent className="max - w-3xl">;"


          default_options={default_options}
          on_apply={handle_apply}
          initial_content={initial_content}

    );
 <DialogHeader> <DialogTitle> {

}  <AIEnhancementPanel title= {
}defaultOptions= {
}onApply= {
  handleApply;
}initialContent= {
}/>  ) 

      