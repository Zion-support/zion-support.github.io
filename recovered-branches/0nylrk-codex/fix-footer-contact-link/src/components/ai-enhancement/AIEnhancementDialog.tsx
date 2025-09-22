<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string;
=======
import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {

  initialContent?: string
  initialContent?: string;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
  defaultOptions;

import React from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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
initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };

const handleApply = (content: string) => {
    onApply(content)
    onClose()
  }
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
=======
  initialContent?: string;
}
export function AIEnhancementDialog({;
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;import React from 'react',;
  defaultOptions;

title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
  initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
onClose()
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },

  return (

    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
<AIEnhancementPanel
          title={title}

          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}

/>;
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ),;}

    );
 <DialogHeader> <DialogTitle> {

}  <AIEnhancementPanel title= {
}defaultOptions= {
}onApply= {
  handleApply;
}initialContent= {
}/>  ) 

pr-12325
  initialContent;
}/> </DialogContent> </Dialog>) 
</AIEnhancementPanel>
      </DialogContent>
    </Dialog>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Dialog>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
