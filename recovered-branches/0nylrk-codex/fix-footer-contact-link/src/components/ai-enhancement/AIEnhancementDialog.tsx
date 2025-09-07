
title: string,
  isOpen: boolean,
  onClose: () => void,
  onApply: (content: string) => void,
  defaultOptions: AIEnhancementOptions,
  initialContent?: string;

}

export function AIEnhancementDialog({;
import React from 'react';

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


  initialContent;
}: AIEnhancementDialogProps) {;
  const handleApply = (content: string) => {;
    onApply(content),;
    onClose();
  };


    <Dialog open={isOpen} onOpenChange={() => onClose()}>;
      <DialogContent className="max-w-3xl">;
        <DialogHeader>;
          <DialogTitle>{title}</DialogTitle>;
        </DialogHeader>;

}
