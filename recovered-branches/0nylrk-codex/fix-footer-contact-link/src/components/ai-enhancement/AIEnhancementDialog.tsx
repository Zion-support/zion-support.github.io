


export function AIEnhancementDialog({;
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

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

  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
  const handleApply = (content: string) => {
    onApply(content)
    onClose()
export function AIEnhancementDialog(): any ({;  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };

  },


  return (

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
  }
  },

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
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
        />;
      </DialogContent>;
    </Dialog>;

        />;
      </DialogContent>;
    </Dialog>;
  );
}

import {AIEnhancementPanel} from './AIEnhancementPanel';
import {AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementDialogProps {
  title: string,
  is_open: boolean,
  on_close: () => void,
  on_apply: (content: string) => void,
  default_options: AIEnhancementOptions,
  initial_content?: string;
}
export /**
 * AIEnhancementDialog - Function description
 */
function AIEnhancementDialog() {
  const handle_apply = (content: string) =>: any {
    on_apply (content),
    on_close ();
  }
;
  return (
    <Dialog open={is_open} onOpenChange={() => on_close ()}>;
      <DialogContent className="max - w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
        <AIEnhancementPanel;
          title={title}
          default_options={default_options}
          on_apply={handle_apply}
          initial_content={initial_content}
        />;
      </DialogContent>;
    </Dialog>);
}
  ),;}
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
        />
      </DialogContent>
    </Dialog>
  )
}
