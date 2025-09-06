<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  defaultOptions;
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from 'react',;
=======
  defaultOptions;import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  defaultOptions;import React from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;'
  DialogTitle} from '@/components/ui/dialog',;'
import { AIEnhancementPanel } from './AIEnhancementPanel',;'
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (content: string) => void;
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;
}
export function AIEnhancementDialog({};
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
<<<<<<< HEAD

  initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
<<<<<<< HEAD
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  initialContent;
}: AIEnhancementDialogProps) {}
  const handleApply = (content: string) => {}
    onApply(content)
    onClose()

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };


<<<<<<< HEAD
  const handleApply = (content: string) => {
    onApply(content)
    onClose()
  }
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose()
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose()
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },

  return (
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
<<<<<<< HEAD
        <AIEnhancementPanel
=======



        <AIEnhancementPanel;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}

<<<<<<< HEAD
        />;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components / ui / dialog';'
import {AIEnhancementPanel} from './AIEnhancementPanel';'
import {AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementDialogProps {}
  title: string,
  is_open: boolean,
  on_close: () => void,
  on_apply: (content: string) => void,
  default_options: AIEnhancementOptions,
  initial_content?: string;
}
export /**;
 * AIEnhancementDialog - Function description;
 */
function AIEnhancementDialog() {}
  const handle_apply = (content: string) =>: any {}
    on_apply (content),
    on_close ();
  }
;
  return (
    <Dialog open={is_open} onOpenChange={() => on_close ()}>;"
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
