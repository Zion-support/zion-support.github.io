import React from "react";

interface QuickAction {
id: string;,
label: string;,
description: string;,
icon: React.ReactNode;,
action: () => void;,
category: 'performance' | 'development' | 'maintenance';
dangerous?: boolean,
export function QuickActions() {
if (!isVisible) {
return (
<div className='fixed bottom-4 left-4 z-50'>
<Button,
variant='outline'
size='sm';
onClick={() => setIsVisible(true)}
className='bg-background/80 backdrop-blur-sm'        >
<Settings className='w-4 h-4 mr-2' />
Quick Actions;
</Button>
</div>
)
}
return (
<div className='fixed bottom-4 left-4 z-50 w-80'>
<Card className='bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto'>
<CardHeader className='pb-2'>
<div className='flex items-center justify-between'>
<CardTitle className='text-sm flex items-center'>
<Settings className='w-4 h-4 mr-2' />
Quick Actions;
</CardTitle>
<Button,
variant='ghost'
size='sm';
onClick={() => setIsVisible(false)}
className='h-6 w-6 p-0'            >
✕;
</Button>
</div>
</CardHeader>
<CardContent className='pt-0 space-y-4'>
{Object.entries(categorizedActions).map(
([category categoryActions]) => (
<div key={category}>
<div className='flex items-center gap-2 mb-2'>
<Badge,
className={
categoryColors[category as keyof typeof categoryColors];
}
variant='outline'
>;
{category}
</Badge>
</div>
<div className='space-y-2'>
{categoryActions.map(action => (
<div key={action.id} className='space-y-1'>
<Button,
variant={action.dangerous ? 'destructive' : 'outline'}
size='sm';
onClick={() => executeAction(action.id action.action)}
disabled={isProcessing === action.id}
className='w-full justify-start h-auto p-3'
>;
<div className='flex items-start gap-3 w-full'>
<div className='mt-0.5'>
{isProcessing === action.id ? (
<RefreshCw className='w-4 h-4 animate-spin' />
) : (
action.icon;
)}
</div>
<div className='flex-1 text-left'>
<div className='font-medium text-sm'>
{action.label}
</div>
<div className='text-xs opacity-70 mt-1'>
{action.description}
</div>                          </div>
</div>
</Button>
</div>
))}
</div>
</div>
)
)}
</CardContent>
</Card>
</div>
)
}
}
}