
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useResumeEnhancer } from "@/hooks/useResumeEnhancer";
interface AIEnhancementButtonProps {
currentContent: string;,
enhancementType: "summary" | "work-description" | "skill-categorization" | "general";
context?: string;,
onEnhanced: (enhancedContent: string) => void;
buttonText?: string;
className?: string;
export function AIEnhancementButton({
return (
<Button;
type="button"
variant="ghost"
}
size="sm"}
className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
onClick = {handleEnhance}
disabled = {isEnhancing}
>;
{isEnhancing ? (
<Loader2 className="h-3 w-3 animate-spin" />
) : (
<Sparkles className="h-3 w-3" />
)}
<span className="text-xs">{buttonText}</span>
</Button>
);      onClick={handleEnhance}
disabled={isEnhancing}
>;
{isEnhancing ? (
<Loader2 className="h-3 w-3 animate-spin" />
) : (
<Sparkles className="h-3 w-3" />
)}
<span className="text-xs">{buttonText}</span>
</Button>
)
}