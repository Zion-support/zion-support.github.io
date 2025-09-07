


pr-12325
  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string
  initialContent?: string;
pr-12325
}

export function AIEnhancementDialog({;
import React from 'react';
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;import React from 'react',;
  defaultOptions;

import React from 'react',;
pr-12325
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

}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose()
};
  },

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel
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
pr-12325
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}

        />;
      </DialogContent>;
    </Dialog>;
  );
}

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

      
pr-12325
