
<<<<<<< HEAD
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
=======


>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main

  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
<<<<<<< HEAD
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
=======
=======
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {AIEnhancementPanel} from './AIEnhancementPanel';
import {AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {;
  title: string,;
  isOpen: boolean,;
  onClose: () => void,;
  onApply: (content: string) => void,;
  defaultOptions: AIEnhancementOptions,;
  initialContent?: string;
}

export function AIEnhancementDialog(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title;
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

=======

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
>>>>>>> main
        <AIEnhancementPanel
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
<<<<<<< HEAD
        />
      </DialogContent>
    </Dialog>
  )
}
=======

        />;
      </DialogContent>;
    </Dialog>;
  );
}

=======
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components / ui / dialog';
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
