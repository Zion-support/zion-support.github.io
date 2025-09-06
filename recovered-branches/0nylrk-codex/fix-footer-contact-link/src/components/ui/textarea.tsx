import * as React from 'react';

import { cn } from '@/lib/utils';

export type TextareaProps = React.ComponentProps<'textarea'>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
