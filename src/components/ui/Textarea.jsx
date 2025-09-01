<<<<<<< HEAD
import React from 'react';'''
import { cn } from '../../lib/utils';'''
import React from 'react';'''
import { cn } from '../../lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {}
  return()
    <textarea'
      className={cn(''
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className;
      )}
      ref={ref}
      {...props}
    />
  );'
});''
'''
Textarea.displayName = 'Textarea';
;
export { Textarea };
'
=======
<<<<<<< HEAD
import { cn } from '../../lib/utils';
=======
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import * as React from "react";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {

    return (<textarea className = {

  cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  className)

} ref={ref} {...props}/>)});
Textarea.displayName = "Textarea";
export { Textarea };
=======
import React from 'react';
import { cn } from "../../lib/utils";
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const Textarea = React.forwardRef(({ className, ...props }, ref) => {

  return (
    <textarea
      className = {

  cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  className
      )






}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
