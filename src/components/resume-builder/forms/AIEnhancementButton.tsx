
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string,
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string,
  className?: string
}

export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = $2;
  className
}: AIEnhancementButtonProps) {

      return
    }
    
    setError($2);
    const enhancedContent = await enhanceContent($2);
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }

import { Button } from '@/components / ui / button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string;
  enhancement_type:;
    | 'summary';
    | 'work - description';
    | 'skill - categorization';
    | 'general';
  context?: string;
  on_enhanced: (enhanced_content: string) => void;
  button_text?: string;
  class_name?: string;
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
  const handle_enhance = async () => {
    // Check condition
if (.length < 10) {) {
  $2
}
      set_error ('Please enter at least some basic content before enhancing');
      return;
    }
    set_error (null);
    const enhanced_content = await enhance_content (
      current_content,
      enhancement_type,
      context);
    // Check condition
if ( {) {
  $2
}
      on_enhanced (enhanced_content);
    }

