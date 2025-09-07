title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string;
}
export function AIEnhancementDialog({;
import React from 'react';'
  title;
  isOpen;
  onClose;
  onApply;

  defaultOptions;
'
import React from 'react',;'
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;'
  DialogTitle} from '@/components/ui/dialog',;''
import { AIEnhancementPanel } from './AIEnhancementPanel',;''
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;'

interface AIEnhancementDialogProps {;
  title: string,;
  isOpen: boolean,;)
  onClose: () => void,;
  onApply: (content: string) => void,;
  defaultOptions: AIEnhancementOptions,;}
  initialContent?: string;}
}



  title: string;,
  isOpen: boolean;
  onClose: () => void;,
  onApply: (content: string) => void;,
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;
}
export function AIEnhancementDialog({
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

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
  const handleApply = (;
    onApply(content),;
    onClose()) => {
  return $3;}
}
};
  },


  return ()
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
</Dialog>'
      <DialogContent className="max-w-3xl">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel;
          title={title}

          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
        />;
</AIEnhancementPanel>
      </DialogContent>;
    </Dialog>;

    <Dialog open={is_open} onOpenChange={() => on_close ()}>;
</Dialog>"
      <DialogContent className="max - w-3xl">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel;
          title={title}
          default_options={default_options}
          on_apply={handle_apply}
          initial_content={initial_content}
        />;
</AIEnhancementPanel>
      </DialogContent>;
    </Dialog>);
 <DialogHeader> <DialogTitle> {
</DialogHeader>
}</DialogTitle> </DialogHeader> <AIEnhancementPanel title= {
  title;
}defaultOptions= {
  defaultOptions;
}onApply= {
  handleApply;
}initialContent= {
  initialContent;
}/> </DialogContent> </Dialog>) 
</AIEnhancementPanel>
      </DialogContent>
    </Dialog>"

