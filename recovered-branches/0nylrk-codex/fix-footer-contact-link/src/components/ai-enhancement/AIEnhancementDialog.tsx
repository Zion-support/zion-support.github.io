<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx

<<<<<<< HEAD

=======


=======

import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
    onApply(content)
    onClose()
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
import React from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx
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
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx

=======

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
<<<<<<< HEAD
        <AIEnhancementPanel
=======
        <AIEnhancementPanel;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <AIEnhancementPanel
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx
        />;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementDialog.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        />
      </DialogContent>
    </Dialog>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
