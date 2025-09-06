import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer'
interface AIEnhancementButtonProps {
  currentContent: string
  enhancementType:
    | 'summary'
    | 'work-description'
    | 'skill-categorization'
    | 'general'
  context?: string
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string

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
      on_enhanced (enhanced_content);
    }
