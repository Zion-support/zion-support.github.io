
import React from 'react';
<<<<<<< HEAD
import { CheckCircle } from 'lucide-react';
=======
import { CheckCircle } from "lucide-react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
return (
<TooltipProvider>
<Tooltip>
<TooltipTrigger asChild>
<span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />          <span className="inline-flex text-blue-500">
<CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
</span>
</TooltipTrigger>
<TooltipContent>
<p>{label}</p>
</TooltipContent>
</Tooltip>
</TooltipProvider>
)
}