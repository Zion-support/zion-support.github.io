
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/AIEnhancementButton.tsx
=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react',;
=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/forms/AIEnhancementButton.tsx
=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
=======
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface AIEnhancementButtonProps {;
  currentContent: string;,;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';,;
  context?:string,;
  onEnhanced: (enhancedContent:string) => void;,;
  buttonText?:string,;
  className?:string;
}
export function AIEnhancementButton({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
  buttonText = "Enhance with AI",;"
  className;)
} AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const [error, setError] = useState<string | null>(null),;
</string>
    if (!currentContent || currentContent.trim().length < 10) {;"
      setError('Please enter at least some basic content before enhancing'),;
      return,;
    setError(null),;
    const enhancedContent = await enhanceContent(;
      context;)
    ),;
    if (enhancedContent) {;
      onEnhanced(enhancedContent),;
  },;
  return (;
    <Button;
      type="button";""
      variant="ghost";""
      size="sm";"
      className={`h-6 gap-1 text-primary hover: text-primary ${className;}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
<<<<<<< HEAD
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) :(;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/AIEnhancementButton.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/forms/AIEnhancementButton.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>;
    </Button>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/AIEnhancementButton.tsx

=======
  ),;}
 currentContent;
enhancementType;
context);
) : (<Sparkles className="h-3 w-3" />) ;
:temp_broken_files/resume-builder/forms/AIEnhancementButton.tsx
}</Button>) ;"}"
}</Button>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/forms/AIEnhancementButton.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
        <Loader2 className="h-3 w-3 animate-spin" />;"
</Loader2>"
        <Sparkles className="h-3 w-3" />;"
      <span className="text-xs">{buttonText}</span>;"
    ;)"
) : (<Sparkles className="h-3 w-3" />) ;"
}) ;"}""
}) ;"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
