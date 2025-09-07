


import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {
  // TODO: Implement
}
  currentContent: string;,
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;


  buttonText?: string;
  className?: string;
export function AIEnhancementButton({

  currentContent;
  enhancementType;
  context;
  onEnhanced;

  buttonText = "Enhance with AI";")
  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
"
      setError('Please enter at least some basic content before enhancing');
      return;



    setError(null);
    const enhancedContent = await enhanceContent(;
      context;)
    );


    if (enhancedContent) {;
      onEnhanced(enhancedContent);
  };



  buttonText = "Enhance with AI";"
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
</string>
    if (!currentContent |currentContent.trim().length < 10) {"
    const enhancedContent = await enhanceContent(
    if (enhancedContent) {
      onEnhanced(enhancedContent)

  buttonText = "Enhance with AI";""
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react',;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
interface AIEnhancementButtonProps {;
  currentContent: string,;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;

  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI","
  className;)
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
    if (!currentContent || currentContent.trim().length < 10) {"
      setError('Please enter at least some basic content before enhancing'),


  
    
    
;
    setError(null),;
      currentContent,;
      enhancementType,;
  },
  
  
  
  return (
    <Button;
      type="button"""
      variant="ghost"""
      size="sm""
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
        <Loader2 className="h-3 w-3 animate-spin" />;"
</Loader2>"
        <Sparkles className="h-3 w-3" />;"
      <span className="text-xs">{buttonText}</span>;"
    ;)
  const [error, set_error] = useState < string | null>(null);



"`;