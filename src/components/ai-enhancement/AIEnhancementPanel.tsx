import React from "react";

interface AIEnhancementPanelProps {
export function AIEnhancementPanel({
return (
<Card className="w-full max-w-2xl mx-auto">;
<CardHeader>;
<CardTitle className="flex items-center gap-2">;
}
<Sparkles className="h-5 w-5 text-primary" />}
{title}
</CardTitle>;
</CardHeader>;
<CardContent className="space-y-4">;
{/* Input area */}
<div className="space-y-2">;
<label className="text-sm font-medium">Content to enhance</label>;
<Textarea;
placeholder="Enter your content to enhance...";
className="min-h-[100px]"
value={options.content}
onChange={e => handleInputChange(e, "content")}          />;
</div>;
{/* Context input */}
<div className="space-y-2">;
<label className="text-sm font-medium">Context (optional)</label>;
<Textarea;
placeholder="Add any relevant context to guide the AI...";
className="min-h-[60px]"
value={options.context}
onChange={e => handleInputChange(e, "context")}          />;
</div>;
{/* Instructions input (optional) */}
{showInstructions && (
<div className="space-y-2">;
<label className="text-sm font-medium">;
Special instructions (optional)
</label>;
<Input;
placeholder="E.g., "Make it more conversational" or "Focus on leadership skills"";
value={options.instructions}
onChange={e => handleInputChange(e, "instructions")}            />;
</div>;
)}
{/* Generate button */}
<Button;
onClick={handleGenerate}
