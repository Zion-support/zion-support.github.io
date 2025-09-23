
import {
  Dialog,
  DialogContent,
  DialogHeader,
<<<<<<< HEAD
=======
  DialogTitle} from '@/components/ui/dialog';
import { AIEnhancementPanel } from './AIEnhancementPanel';
import { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';

interface AIEnhancementDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onApply: (content: string) => void;
  defaultOptions: AIEnhancementOptions;
  initialContent?: string;
}

export function AIEnhancementDialog({
  title,
  isOpen,
  onClose,
  onApply,
  defaultOptions,
  initialContent
}: AIEnhancementDialogProps) {
  const handleApply = (content: string) => {
    onApply(content);
    onClose();
  };

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
        />
      </DialogContent>
    </Dialog>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
