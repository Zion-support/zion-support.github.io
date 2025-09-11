;

import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';





import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';
import {cn} from '@/lib/utils';
"use client"
"use client"

"use client"
"use client"


import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

;
import * as React from 'react';
import * as CheckboxPrimitive from '@radix - ui / react - checkbox';
import {Check} from 'lucide-react';
const Checkbox = React && React.forwardRef<;
  React && React.ElementRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof CheckboxPrimitive && CheckboxPrimitive.Root>;
></typeof>(({ className, ...props }, ref) => (;
  <CheckboxPrimitive&& CheckboxPrimitive.Root
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",


    {...props}
  >;
    <CheckboxPrimitive.Indicator;
      className={cn("flex items-center justify-center text-current")}
    >;
      <Check className="h-3 w-3" />;
    </CheckboxPrimitive.Indicator>;
  </CheckboxPrimitive.Root>;
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
;
export { Checkbox } "use client" const Checkbox = React.forwardRef< React.ElementRef<typeof CheckboxPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> > ( ({
  className, ...props 
}, ref) => (<CheckboxPrimitive.Root) 
}{
  ...props 
}> <CheckboxPrimitive.Indicator > <Check className="h-3 w-3" /> </CheckboxPrimitive.Indicator> </CheckboxPrimitive.Root>) ) Checkbox.displayName = CheckboxPrimitive.Root.displayName export {
  Checkbox 
}