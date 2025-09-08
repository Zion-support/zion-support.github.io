<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
'use client';"";
import * as React from 'react';"";
import * as AccordionPrimitive from '@radix-ui/react-accordion';"";
import { ChevronDown     } from 'lucide-react';
<<<<<<< HEAD
:src_backup/components/ui/accordion.jsx
export default function Page() {import { cn  } from '@/lib/utils';
=======
=======
<<<<<<< HEAD
'use client;";
import * as React from react';";
import * as AccordionPrimitive from '@radix-ui/react-accordion;";
import { ChevronDown     } from lucide-react';
<<<<<<< HEAD:src_backup/components/ui/accordion.jsx
export default function Page() {import { cn  } from '@/lib/utils;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props}/>))AccordionItem.displayName = 'AccordionItem';
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open]>svg]: rotate-180', className)} {...props}>{children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200'/>;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>))AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props}>;
    <div className={cn('pb-4 pt-0', className)}>{children}</div>;
  </AccordionPrimitive.Content>))AccordionContent.displayName = AccordionPrimitive.Content.displayName;
=======
'use client';\"\";
import * as React from 'react';\"\";
import * as AccordionPrimitive from '@radix-ui/react-accordion';\"\";
import { ChevronDown     } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function Page() {import { cn  } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props}/>))AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className='flex' />;
    <AccordionPrimitive.Trigger ref={ref} className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover: underline [&[data-state=open] />svg]: rotate-180', className)} {...props}>{children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200'/>;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>))AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm transition-all data-[state=closed]: animate-accordion-up data-[state=open]: animate-accordion-down' {...props} />;
    <div className={cn('pb-4 pt-0', className)} />{children}</div>;
  </AccordionPrimitive.Content>))AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
<<<<<<< HEAD

\"\";

=======
<<<<<<< HEAD
"";
=======
<<<<<<< HEAD
";
=======
\"\";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}}}}