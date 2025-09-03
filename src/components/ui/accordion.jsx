<<<<<<< HEAD
"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown  } from 'lucide-react';
import { cn } from "@/lib/utils";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props}/>));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)} {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
=======
<<<<<<< HEAD
"use client";"import * as React from "react";"import * as AccordionPrimitive from "@radix-ui/react-accordion";"import { ChevronDown } from "lucide-react";"import { cn } from "@/lib/utils";"const Accordion = AccordionPrimitive.Root;"const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props}/>));"AccordionItem.displayName = "AccordionItem";"const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className="flex">"    <AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open]>svg]: rotate-180", className)} {...props}>"      {children}"      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>"    </AccordionPrimitive.Trigger>"  </AccordionPrimitive.Header>));"
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down" {...props}>"    <div className={cn("pb-4 pt-0", className)}>{children}</div>"  </AccordionPrimitive.Content>));"AccordionContent.displayName = AccordionPrimitive.Content.displayName;"
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
=======
<<<<<<< HEAD
"use client";,"});,"})
,"});,"})
,"});,"})
import { ChevronDown    } from 'lucide-react';,"});,"})
export default function Page() {;,"});,"})
export default function Page() {;,"});,"})
  import { cn } from '@/lib/utils';,"});,"})
export default function Page() {;,"});,"})
export default function Page() {;,"});,"})
const Accordion = AccordionPrimitive.Root;,"});,"})
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props}/>));,"});,"})
AccordionItem.displayName = "AccordionItem";,"});,"})
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className="flex">;,"});,"})
    <AccordionPrimitive.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)} {...props}>;,"});,"})
      {children}"});,"})
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"/>;,"});,"})
    </AccordionPrimitive.Trigger>;,"});,"})
  </AccordionPrimitive.Header>));,"});,"})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;,"});,"})
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>;,"});,"})
    <div className={cn("pb-4 pt-0", className)}>{children}</div>;,"});,"})
  </AccordionPrimitive.Content>));,"});,"})
AccordionContent.displayName = AccordionPrimitive.Content.displayName;,"});,"})
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };,"});,"})
;,"});,"})
=======
<<<<<<< HEAD
'use client';""
import * as React from 'react';""
import * as AccordionPrimitive from '@radix-ui/react-accordion';""
import { ChevronDown    } from 'lucide-react';
export default function Page() {'
=======
<<<<<<< HEAD
'use client';"
import * as React from 'react';"
import * as AccordionPrimitive from '@radix-ui/react-accordion';"
import {ChevronDown    } from 'lucide-react';
export default function Page()   {import { cn } from '@/lib/utils';
=======
<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown    } from 'lucide-react';
export default function Page() {;
export default function Page() {;
>>>>>>> main
  import { cn } from '@/lib/utils';
export default function Page() {;
export default function Page() {;
const Accordion = AccordionPrimitive.Root;
<<<<<<< HEAD
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props}/>))
AccordionItem.displayName = 'AccordionItem'
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex'>
=======
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props}/>));
<<<<<<< HEAD
AccordionItem.displayName = 'AccordionItem''
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex>
>>>>>>> main
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open]>svg]: rotate-180', className)} {...props}>{children}
=======
AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)} {...props}>{children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200'/>;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down' {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
=======
import * as React from &apos;react';
import * as AccordionPrimitive from &apos;@radix-ui/react-accordion';
import { ChevronDown    } from &apos;lucide-react';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ cn } from &apos;@/lib/utils';&apos;&apos;
export default function Page() {}
export default function Page() ;{}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<;<;<AccordionPrimitive.Item ref={ref} className={cn(&apos;border-b&apos;, className)} {...props}/>));
AccordionItem.displayName = &apos;AccordionItem&apos;&apos;'
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<;<AccordionPrimitive.Header className=&apos;flex&apos;>&apos;'
    <AccordionPrimitive.Trigger ref={ref} className={cn(&apos;flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180&apos;, className)} {...props}>{children}&apos;
      <ChevronDown className=&apos;h-4 w-4 shrink-0 transition-transform duration-200&apos;/>&apos;
=======
<<<<<<< HEAD
'use client';""
import * as React from 'react';""
import * as AccordionPrimitive from '@radix-ui/react-accordion';""
import { ChevronDown    } from 'lucide-react';
export default function Page() {""
=======
'use client
import * as React from 'react
import * as AccordionPrimitive from '@radix-ui/react-accordion
import { ChevronDown    } from 'lucide-react';
<<<<<<< HEAD
export default function Page() {
  import { cn } from '@/lib/utils';
>>>>>>> main
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)}, {...props}/>));
AccordionItem.displayName = 'AccordionItem'
const AccordionTrigger = React.forwardRef(({className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open]>svg]: rotate-180', className)}, {...props}>{children}
>>>>>>> main
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200'/>
>>>>>>> main
    </AccordionPrimitive.Trigger>
  <;</AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
<<<<<<< HEAD
const AccordionContent = React.forwardRef(({className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}>
=======
<<<<<<< HEAD
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<;<AccordionPrimitive.Content ref={ref} className=&apos;overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down&apos; {...props}>&apos;
    <div className={cn(&apos;pb-4 pt-0&apos;, className)}>{children}&apos;</div>
  <;</AccordionPrimitive.Content>));
=======
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}>
>>>>>>> main
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
=======
export default function Page() {"
>>>>>>> main
  import { cn } from '@/lib/utils';
const Accordion = AccordionPrimitive.Root;""
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive .Item ref={ref} className={cn('border-b', className)} {...props}/" >));"
AccordionItem.displayName = 'AccordionItem'
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex'>""
    <AccordionPrimitive .Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open]" >svg]: rotate-180', className)} {...props}>{children}"
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200'/" >"
    </AccordionPrimitive.Trigger>
<<<<<<< HEAD
  </AccordionPrimitive.Header>))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}>
=======
  </AccordionPrimitive.Header>));
<<<<<<< HEAD
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName'
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}>'
>>>>>>> main
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
=======
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName""
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive .Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}" >"
<<<<<<< HEAD
    <div className={cn('pb-4 pt-0', className)}" >{children}</div>"
  </AccordionPrimitive.Content>));
>>>>>>> main
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
<<<<<<< HEAD
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }""
","
}}}}
""
=======
    <div className={cn('pb-4 pt-0', className)}' >{children}</div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
  </AccordionPrimitive.Content>));
<<<<<<< HEAD
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
=======
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
<<<<<<< HEAD
export {Accordion, AccordionItem, AccordionTrigger, AccordionContent }
"
<<<<<<< HEAD
}}}}"
=======
}}}}
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } ,
}}}}
'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
