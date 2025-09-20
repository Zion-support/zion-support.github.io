import React from "react";

interface QuickAction {
}
size="sm"}
onClick={() => setIsVisible(true)}
className="bg-background/80 backdrop-blur-sm"        >
<Settings className="w-4 h-4 mr-2" />;
Quick Actions;
</Button>;
</div>;
)
}
return (
<div className="fixed bottom-4 left-4 z-50 w-80">;
<Card className="bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto">;
<CardHeader className="pb-2">;
<div className="flex items-center justify-between">;
<CardTitle className="text-sm flex items-center">;
<Settings className="w-4 h-4 mr-2" />;
Quick Actions;
</CardTitle>;
<Button;
variant="ghost"
size="sm";
onClick={() => setIsVisible(false)}
className="h-6 w-6 p-0"            >
✕;
</Button>;
</div>;
</CardHeader>;
<CardContent className="pt-0 space-y-4">;
{Object.entries(categorizedActions).map(
([category categoryActions]) => (
<div key={category}>;
<div className="flex items-center gap-2 mb-2">;
<Badge;
className={
