<<<<<<< HEAD
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',
import { AIEnhancementPanel } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
  title: string,
=======
<<<<<<< HEAD
title: string,
=======



<<<<<<< HEAD
import React from 'react';
import { Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle } from '@/components/ui/dialog';
import { AIEnhancementPanel  } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
interface AIEnhancementDialogProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
<<<<<<< HEAD
  initialContent?: string
}
=======
  initialContent?: string;

}

export function AIEnhancementDialog({;
<<<<<<< HEAD
import React from 'react';

=======
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;

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
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (content: string) => void;
  defaultOptions: AIEnhancementOptions;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
  initialContent
}: AIEnhancementDialogProps) {

  const handleApply = (content: string) => {
<<<<<<< HEAD
    onApply($2);
    onClose()
  },

  return (
=======
    onApply(content)
    onClose()
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  initialContent?: string;
}
export function AIEnhancementDialog({};
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

<<<<<<< HEAD
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };

<<<<<<< HEAD
  title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;import React from 'react',;
  defaultOptions;

  },

  return (

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
        <AIEnhancementPanel;
  }
  },

  return (
>>>>>>> merged-prs-20250907-203621
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
<<<<<<< HEAD
        <AIEnhancementPanel
          title={title}
          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <AIEnhancementPanel
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          title={title}

          defaultOptions={defaultOptions}
          onApply={handleApply}
          initialContent={initialContent}
<<<<<<< HEAD
=======

<<<<<<< HEAD
'
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components / ui / dialog';'
import {AIEnhancementPanel} from './AIEnhancementPanel';'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </DialogContent>;
    </Dialog>;
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components / ui / dialog';
import {AIEnhancementPanel} from './AIEnhancementPanel';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementDialogProps {}

  title: string,
  is_open: boolean,
  on_close: () => void,
  on_apply: (content: string) => void,
  default_options: AIEnhancementOptions,
  initial_content?: string;
}

    on_apply (content),
    on_close ();
  }
;
  return (

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

  ),;});
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
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
        />
      </DialogContent>
    </Dialog>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
