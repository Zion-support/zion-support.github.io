


import {cn} from '@/lib/utils';''
import {buttonVariants} from '@/components/ui/button';'
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;'
import * as React from "react"""
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"""
import * as React from "react"""
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"""
import { cn } from "@/lib/utils"""
import { buttonVariants } from "@/components/ui/button""
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
</typeof>
></typeof>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay;
const AlertDialog = AlertDialogPrimitive && AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive && AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive && AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>,;
</AlertDialogPrimitive>
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Overlay>;
</typeof>)
></typeof>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Overlay;
    className={cn("
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0''
    className={cn(
'
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","
      className;
      className;)
    )}
    {...props}
    ref={ref}
  />;
</AlertDialogPrimitive>
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.C</typeof>ontent>
  <AlertDialogPortal>
</AlertDialogPortal>
    <AlertDialogOverlay />
</AlertDialogOverlay>

    <AlertDialogPrimitive.Content;
AlertDialogOverlay && AlertDialogOverlay.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React && React.forwardRef<;

  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Content>,;
</AlertDialogPrimitive>
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.C</typeof>ontent>;
  <AlertDialogPortal>;
</AlertDialogPortal>
    <AlertDialogOverlay />;
</AlertDialogOverlay>
    <AlertDialogPrimitive&& AlertDialogPrimitive.Content;
const AlertDialogContent = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Content>,;
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
</typeof>
  <AlertDialogPortal>;
</AlertDialogPortal>
    <AlertDialogOverlay />;
</AlertDialogOverlay>
    <AlertDialogPrimitive.Content;


      ref={ref}
      className={cn("
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;
      ref={ref}
      className={cn('
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg''
        className;)

      )}
      {...props}

    />
</AlertDialogPrimitive>
  </AlertDialogPortal>

))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
className={cn(

      \"flex flex-col space-y-2 text-center sm:text-left\",

      className;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
;
const AlertDialogHeader = ({;
  className,;}
  ...props;}
} React.HTMLAttributes<HTMLDivElement />) => (;
  <div;
    className={cn(;}
      \"flex flex-col space-y-2 text-center sm:text-left\",;}
      className;      ref={ref}
      className={cn(
        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",}
        className;}
ref={ref}
      className={cn(;
        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",;}
        className;}
      )}
      {...props}
const AlertDialogHeader = ({
  className}
  ...props}
}: React.HTMLAttributes<H</HTMLDivElement />TMLDivElement>) => (
  <div;
className={cn(
      'flex flex-col space-y-2 text-center sm:text-left'
      \"flex flex-col space-y-2 text-center sm:text-left\",
      className;
const AlertDialogFooter = ({;
  className,;}
  ...props;}
}: React</HTMLDivElement />.HTMLAttributes<HTMLDivElement />) => (;
  <div;
className={cn(

AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title />,;}
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title />;}
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title;
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      className;
    )}
    {...props}
  />;
);
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title />,;
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title />;
>(({ className, ...props }, ref) => (;
  <AlertDialogPrimitive.Title;
    ref={ref}
    className={cn(\"text-lg font-semibold\", className)}

}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
</H>)
}: React && React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (;
</H>
  <div;
    className={cn(

'
      "flex flex-col space-y-2 text-center sm:text-left","
      className;
      ref={ref}
      className={cn("
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg","
        className;
      ref={ref}
      className={cn(;"
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",;"
        className;)
      )}
      {...props}
const AlertDialogHeader = ({
  className;
  ...props;)
}: React.HTMLAttributes<H</HTMLDivElement>TMLDivElement>) => (
</div>
  <div;
    className={cn("
      'flex flex-col space-y-2 text-center sm:text-left'''
      "flex flex-col space-y-2 text-center sm:text-left","
      className;)
    )}
    {...props}
  />
</div>
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (
</HTMLDivElement>)
}: React</HTMLDivElement>.HTMLAttributes<HTMLDivElement>) => (;
</HTMLDivElement>
  <div;
    className={cn(
"
AlertDialogFooter && AlertDialogFooter.displayName = 'AlertDialogFooter';'
const AlertDialogTitle = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>,;
</div>
  React && React.Component</typeof>PropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Title>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Title;'
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2''
      className;)
    )}
    {...props}
  />;
</AlertDialogPrimitive>
const AlertDialogOverlay = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Overlay>;
></typeof>(({ class_name, ...props }, ref) => (
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
  <AlertDialogPrimitive.Title;'
AlertDialogFooter.displayName = "AlertDialogFooter";"
;
const AlertDialogTitle = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Title>,;
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
</typeof>
  <AlertDialogPrimitive.Title;
    ref={ref})"
    className={cn("text-lg font-semibold", className)}"

    {...props}
  />;
</AlertDialogPrimitive>
const AlertDialogDescription = React.forwardRef<;

  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
</typeof>
  <AlertDialogPrimitive.Description;
    className={cn ('text - lg font - semibold', class_name)}
    {...props}
  />));
AlertDialogTitle.display_name = AlertDialogPrimitive.Title.display_name;
;

'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2","
      className;
    )}
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
</typeof>
  <AlertDialogPrimitive.Title;
    ref={ref}"
    className={cn('text-lg font-semibold', className)}'
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>
</typeof>
  React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive.Description>
</typeof>
  <AlertDialogPrimitive.Description;
AlertDialogTitle && AlertDialogTitle.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React && React.Compon</typeof>entPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Description>;
</typeof>

const AlertDialogDescription = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Description>,
  React.Compon</typeof > entPropsWithoutRef < typeof AlertDialogPrimitive.Description>;
>(({ class_name, ...props }, ref) => (

  <AlertDialogPrimitive.Description;

  <AlertDialogPrimitive.Description;


    ref={ref})'
    className={cn ('text - sm text - muted - foreground', class_name)}'
    {...props}
const AlertDialogDescription = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Description>,;
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
</typeof>
  <AlertDialogPrimitive.Description;
    ref={ref}'
    className={cn('text-sm text-muted-foreground', className)}'
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>
</typeof>
</typeof>  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
</typeof>
  <AlertDialogPrimitive.Action;
AlertDialogDescription && AlertDialogDescription.displayName =;
  AlertDialogPrimitive && AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>,;
</AlertDialogPrimitive>
</typeof>  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Action>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Action;
    ref={ref}'
    className={cn ('text - sm text - muted - foreground', class_name)}'

    {...props}
  />));
</AlertDialogPrimitive>
const AlertDialogAction = React.forward_ref<;
  React.ElementRef < typeof AlertDialogPrimitive.Action>,
</typeof>  React.ComponentPropsWithoutRef < typeof AlertDialogPrimitive.Action>;
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Action;
    ref={ref})
    className={cn(buttonVariants(), className)}
    {...props}


AlertDialogAction && AlertDialogAction.displayName = AlertDialogPrimitive && AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React && React.forwardRef<;
  React && React.ElementRef<typeof AlertDialogPrimitive.</typeof>Cancel>,;
</AlertDialogPrimitive>
  React && React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive && AlertDialogPrimitive.Cancel>;
</typeof>
  <AlertDialogPrimitive&& AlertDialogPrimitive.Cancel;
    ref={ref}



const AlertDialogAction = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Action>,;
</AlertDialogPrimitive>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
</typeof>
  <AlertDialogPrimitive.Action;
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
</AlertDialogPrimitive>
const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
</typeof>
  <AlertDialogPrimitive.Cancel;
    ref={ref}



    className={cn()'
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
      className;
    className={cn()"
      buttonVariants({ variant: "outline" }),""
      "mt-2 sm:mt-0","
  />;
</AlertDialogPrimitive>
const AlertDialogCancel = React.forwardRef<;
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,;
</typeof>
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
</typeof>
  <AlertDialogPrimitive.Cancel;
    ref={ref}
    className={cn(;)"
      buttonVariants({ variant:"outline" }),;""
      "mt-2 sm:mt-0",;"
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
>(({ class_name, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel;
    ref={ref}
    className={cn ()'
      button_variants ({ variant: 'outline' }),''
      'mt - 2 sm:mt - 0','
      class_name)}
    {...props}
  />));
</AlertDialogPrimitive>'
  AlertDialogCancel}import * as React from "react" import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog" const AlertDialog = AlertDialogPrimitive.Root const AlertDialogTrigger = AlertDialogPrimitive.Trigger const AlertDialogPortal = AlertDialogPrimitive.Portal const AlertDialogOverlay = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Overlay>;"
</typeof>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> > ( ({
</typeof>)
}, ref) => (<AlertDialogPrimitive.Overlay) 
}{
  ...props;
}ref= {
  ref;
}/>) ) AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName const AlertDialogContent = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Content>;
</AlertDialogPrimitive>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> > ( ({
</typeof>)
}, ref) => (<AlertDialogPortal> <AlertDialogOverlay /> <AlertDialogPrimitive.Content) 
</AlertDialogPortal>
}/> </AlertDialogPortal>) ) AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName const AlertDialogHeader = ({)
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
</HTMLDivElement>
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
</HTMLDivElement>"
}/>) AlertDialogFooter.displayName = "AlertDialogFooter" const AlertDialogTitle = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Title>;"
</typeof>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> > ( ({
</typeof>)
}, ref) => (<AlertDialogPrimitive.Title />) ) AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName const AlertDialogDescription = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Description>;
</AlertDialogPrimitive>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> > ( ({
</typeof>)
}, ref) => (<AlertDialogPrimitive.Description />) ) AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName const AlertDialogAction = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Action>;
</AlertDialogPrimitive>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> > ( ({
</typeof>)
}, ref) => (<AlertDialogPrimitive.Action ref= {
  ref;
}className= {)
  cn (buttonVariants (), className) 
}{
  ...props;
}/>) ) AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName const AlertDialogCancel = React.forwardRef< React.ElementRef<typeof AlertDialogPrimitive.Cancel>;
</AlertDialogPrimitive>
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> > ( ({
</typeof>)
}, ref) => (<AlertDialogPrimitive.Cancel className) 
}{
  ...props;
}/>) ) AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName export {
</AlertDialogPrimitive>"

