

  title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string;
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
}

export function AIEnhancementDialog({;
import React from 'react';
title;
  isOpen;
  onClose;
  onApply;
  defaultOptions;

'
import React from 'react',;
  defaultOptions;import React from 'react',;
  defaultOptions;import React from 'react',;
  defaultOptions;

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



}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose()
};

  title: string
  isOpen: boolean
  onClose: () => void
  onApply: (content: string) => void
  defaultOptions: AIEnhancementOptions

  initialContent?: string
}
export function AIEnhancementDialog({
  initialContent?: string;
}
export function AIEnhancementDialog({;
import React from 'react';'
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
}

'"
    </Dialog>"

