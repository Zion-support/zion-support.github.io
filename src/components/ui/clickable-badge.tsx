import React from 'react';
<<<<<<< HEAD
import { X } from 'lucide-react';
=======
import { X } from "lucide-react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
onRemove?: () => void;
variant?: "default" | "secondary" | "destructive" | "outline"
}
export function ClickableBadge({
children;
className;
variant;
onRemove()
}}
className="ml-1 rounded-full p-0.5 hover:bg-background/20"
aria-label="Remove";
>;
<X className="h-3 w-3" />
</button>
)}
</div>
)
}