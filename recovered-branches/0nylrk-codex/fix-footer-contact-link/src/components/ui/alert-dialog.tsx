import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {buttonVariants} from '@/components/ui/button';
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;


import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

<<<<<<< HEAD

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal




=======
const AlertDialog = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className = $2;
      className
    )}
    {...props}
    ref = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
>>>>>>> origin/cursor/delete-old-data-records-6bba
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
></typeof>(({ className, ...props }, ref) => (

    ref={ref}
  />;
pr-12325

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
;
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
;
const AlertDialog = AlertDialogPrimitive.Root;
;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
;
const AlertDialogOverlay = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Overlay;
    className={cn(;
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",;
      className;
    )}
    {...props}
    ref={ref}
  />
));

<<<<<<< HEAD

      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
=======
const AlertDialogContent = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
>>>>>>> origin/cursor/delete-old-data-records-6bba


const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPortal>;
    <AlertDialogOverlay />;
    <AlertDialogPrimitive.Content;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'

      ref={ref}

      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
<<<<<<< HEAD


        className

      ref={ref}
      className={cn(;
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
=======

        className

>>>>>>> origin/cursor/delete-old-data-records-6bba

      )}
      {...props}

    />
</AlertDialogPrimitive>
  </AlertDialogPortal>

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (


AlertDialogContent && AlertDialogContent.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({;
  className,;
  ...props;
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;

<<<<<<< HEAD
  <div
    className={cn(


    className={cn(

  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
className={cn(

      "flex flex-col space-y-2 text-center sm:text-left",

      className

=======

    className={cn(

  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;

        className;
      )}
      {...props}
  }
  className
  ...props
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title

      \"flex flex-col space-y-2 text-center sm:text-left\",

      className;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;}
  ...props;}
} React.HTMLAttributes<HTMLDivElement />) => (;

  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
      ref={ref}

    className={cn(;}
      \"flex flex-col space-y-2 text-center sm:text-left\",;}
      className;      ref={ref}
      className={cn(

        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className;
      ref={ref}
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;
        className;
      )}
      {...props}
const AlertDialogHeader = ({}
  className;
  ...props;
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
  <div;
    className={cn('
      'flex flex-col space-y-2 text-center sm:text-left'"
      "flex flex-col space-y-2 text-center sm:text-left",


>>>>>>> origin/cursor/delete-old-data-records-6bba
    )}
    {...props}
  />

const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      'flex flex-col space-y-2 text-center sm:text-left'
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
const AlertDialogFooter = ({
  className
  ...props
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (

>>>>>>> origin/cursor/delete-old-data-records-6bba
AlertDialogHeader && AlertDialogHeader.displayName = 'AlertDialogHeader';
const AlertDialogFooter = ({;
  className,;
  ...props;
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
<<<<<<< HEAD

  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
AlertDialogHeader.displayName = "AlertDialogHeader";
;
const AlertDialogFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",;
      className;
=======


    className={cn(
'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'

    )}
    {...props}
  />;
);

      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className
>>>>>>> origin/cursor/delete-old-data-records-6bba

    )}
    {...props}
  />;
);
<<<<<<< HEAD


=======

import * as AlertDialogPrimitive from '@radix - ui / react - alert - dialog';
;
import {cn} from '@/lib / utils';
import {button_variants} from '@/components / ui / button';
;
const AlertDialog = AlertDialogPrimitive.Root;
;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
;
</AlertDialogPrimitive>
const AlertDialogOverlay = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
    className={cn (
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
  />));

  <AlertDialogPrimitive.Overlay;
    className={cn ('
      'fixed inset - 0 z - 50 bg - black / 80  data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0',')
      class_name)}
    {...props}
    ref={ref}
  />));
</AlertDialogPrimitive>
const AlertDialogContent = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.C</typeof > ontent>;
>(({ class_name, ...props }, ref) => (

        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')

  ));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
      'flex flex - col space - y-2 text - center sm:text - left',')
  />);
}: React.HTMLAttributes < HTMLDivElement>) =>: any (
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
const AlertDialogTitle = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Title>,
  React.Component</typeof > PropsWithoutRef < typeof AlertDialogPrimitive.Title>;
  <AlertDialogPrimitive.Title;
  <AlertDialogPortal>;
</AlertDialogPortal>
    <AlertDialogOverlay />;
</AlertDialogOverlay>
    <AlertDialogPrimitive.Content;
      ref={ref}
      className={cn ('
        'fixed left-[50%] top-[50%] z - 50 grid w - full max - w-lg translate - x-[-50%] translate - y-[-50%] gap - 4 border bg - background p - 6 shadow - lg duration - 200 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[state = closed]:slide - out - to - left - 1/2 data-[state = closed]:slide - out - to - top-[48%] data-[state = open]:slide - in - from - left - 1/2 data-[state = open]:slide - in - from - top-[48%] sm:rounded - lg',')
        class_name)}
      {...props}
    />;
</AlertDialogPrimitive>
  </AlertDialogPortal>));
}: React.HTMLAttributes < H</HTMLDivElement > TMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col space - y-2 text - center sm:text - left',')
      class_name)}
    {...props}
  />);
</div>
}: React</HTMLDivElement>.HTMLAttributes < HTMLDivElement>) =>: any (
  <div;
    className={cn ('
      'flex flex - col - reverse sm:flex - row sm:justify - end sm:space - x-2',')
      class_name)}
    {...props}
  />);
</div>
const AlertDialogTitle = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Title>,
  React.Component</typeof > PropsWithoutRef < typeof AlertDialogPrimitive.Title>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Title;
AlertDialogFooter.displayName = "AlertDialogFooter";

  <AlertDialogPrimitive.Title;'
AlertDialogFooter.displayName = "AlertDialogFooter";"
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title>,;

  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
    ref={ref})"
    className={cn("text-lg font-semibold", className)}"

const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
  <AlertDialogPrimitive.Description;
    ref={ref}"
    className={cn("text-sm text-muted-foreground", className)}"

const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;

  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn ('text - lg font - semibold', class_name)}

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

      className

    )}
    {...props}
  />


);
AlertDialogFooter.displayName = 'AlertDialogFooter';
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>


)

AlertDialogFooter.displayName = "AlertDialogFooter"

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
pr-12325

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>

>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;


const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (


AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;


    className={cn ('text - lg font - semibold', class_name)}
    {...props}


  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;
</typeof>

const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (

  <AlertDialogPrimitive.Description;


  <AlertDialogPrimitive.Description;

    ref={ref}

    className={cn ('text - sm text - muted - foreground', class_name)}
    {...props}

const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Description;
    ref={ref}


));
AlertDialogDescription.displayName =;
  AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;
    ref={ref}

    )}
    {...props} />
);

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>
  React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive.Title>
)

  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ref = $2;
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = $2;
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className = $2;
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold, className)}
    {...props}
  />
<<<<<<< HEAD
=======
))
AlertDialogTitle.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

    ref={ref}

    {...props}
    className={cn('text-lg font-semibold', className)}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (

AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Description;    ref={ref}

=======
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;

  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;

    ref={ref})
    className={cn ('text - sm text - muted - foreground', class_name)}

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
>>>>>>> origin/cursor/delete-old-data-records-6bba

AlertDialogDescription && AlertDialogDescription.displayName =;

  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;

<<<<<<< HEAD

=======
  />));
AlertDialogDescription.display_name =;
  AlertDialogPrimitive.Description.display_name;
;
</AlertDialogPrimitive>
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;
    ref={ref}'
    className={cn ('text - sm text - muted - foreground', class_name)}'

    {...props}
  />));
</AlertDialogPrimitive>
>>>>>>> origin/cursor/delete-old-data-records-6bba
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}

AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
>(({ className, ...props }, ref) => (;
<<<<<<< HEAD

  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel

    ref={ref}


=======


    ref={ref}
    className={cn('text-sm text-muted-foreground, className)}
    {...props}
  />
))
AlertDialogDescription.displayName = $2;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action

>>>>>>> origin/cursor/delete-old-data-records-6bba
const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Action;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
<<<<<<< HEAD


      className


=======

));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}

    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",

      buttonVariants({ variant: "outline" }),

      "mt-2 sm:mt-0",
    ref={ref}
    className={cn('
      buttonVariants({ variant: 'outline' })'
      'mt-2 sm:mt-0'


>>>>>>> origin/cursor/delete-old-data-records-6bba
    )}
    {...props}
  />;
));

AlertDialogCancel && AlertDialogCancel.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Cancel.displayName;

<<<<<<< HEAD
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;

=======

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export {;
  AlertDialog,;
  AlertDialogPortal,;
  AlertDialogOverlay,;
  AlertDialogTrigger,;
  AlertDialogContent,;
  AlertDialogHeader,;
  AlertDialogFooter,;
  AlertDialogTitle,;
  AlertDialogDescription,;
  AlertDialogAction,;


<<<<<<< HEAD
=======
  AlertDialogCancel,;
};

  />));
AlertDialogAction.display_name = AlertDialogPrimitive.Action.display_name;
;
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel;
    ref={ref}

      'mt - 2 sm:mt - 0',
      class_name)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {...props}
  />));
AlertDialogCancel.display_name = AlertDialogPrimitive.Cancel.display_name;
;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export {

  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
<<<<<<< HEAD



  AlertDialogCancel}

=======
  AlertDialogCancel,;
};
export {;
  AlertDialog,;
  AlertDialogPortal,;
  AlertDialogOverlay,;
  AlertDialogTrigger,;
  AlertDialogContent,;
  AlertDialogHeader,;
  AlertDialogFooter,;
  AlertDialogTitle,;
  AlertDialogDescription;
  AlertDialogAction;
  AlertDialogCancel}
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;

<<<<<<< HEAD
=======

const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
    ref={ref})
    className={cn(buttonVariants(), className)}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel;

const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
  <AlertDialogPrimitive.Cancel;

    className={cn()
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
    className={cn()"

    className={cn(;)"
      buttonVariants({ variant:"outline" }),;""
      "mt-2 sm:mt-0",;"
      buttonVariants({ variant: 'outline' })
      'mt-2 sm:mt-0

      className;
    className={cn()"
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
    ref={ref}
    className={cn()"
      buttonVariants({ variant: 'outline' })''
      'mt-2 sm:mt-0''

      className;
    )}
    {...props}
  />;

</AlertDialogPrimitive>
const AlertDialogCancel = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.</typeof > Cancel>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Cancel>;
    className={cn ()
      button_variants ({ variant: 'outline' }),
      'mt - 2 sm:mt - 0',

  AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;"
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> > ( ({
}, ref) => (<AlertDialogPrimitive.Overlay) 
}{
  ...props;
}ref= {
  ref;
}/>) ) AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName const AlertDialogContent = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Content>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> > ( ({
}, ref) => (<AlertDialogPortal> <AlertDialogOverlay /> <AlertDialogPrimitive.Content) 

}/> ) ) AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName const AlertDialogHeader = ({)
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 

}/>) AlertDialogFooter.displayName = "AlertDialogFooter" const AlertDialogTitle = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Title>;"
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> > ( ({
}, ref) => (<AlertDialogPrimitive.Title />) ) AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName const AlertDialogDescription = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Description>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> > ( ({
}, ref) => (<AlertDialogPrimitive.Description />) ) AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName const AlertDialogAction = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Action>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> > ( ({
}, ref) => (<AlertDialogPrimitive.Action ref= {
}className= {)
  cn (buttonVariants (), className) 
}/>) ) AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName const AlertDialogCancel = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Cancel>;

React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> > ( ({
}, ref) => (<AlertDialogPrimitive.Cancel className) 
}/>) ) AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName export {
  AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel 
}
  AlertDialogCancel,
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
