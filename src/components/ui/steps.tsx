
import React from "react";
import { cn,  } from "@/lib/utils";
import { CheckIcon,  } from 'lucide-react'

interface StepProps {
className?: string;
}
export function Step({
status;
label;
description;
className}: StepProps) {
return (
<li;
return React.cloneElement(child as React.ReactElement<StepProps>, {
status})
})}
</ol>
<div className="hidden md:flex md:mt-4">
<div className="ml-[18px] w-[calc(100%-36px)] h-0.5 bg-zion-blue-light">
<div;
className="h-full bg-zion-purple transition-all"
style={{
width: `${(currentStep / (childrenArray.length - 1)) * 100}%`}}
/>
</div>
</div>
</div>
)
}/> </div> </div> </div>)
}"}