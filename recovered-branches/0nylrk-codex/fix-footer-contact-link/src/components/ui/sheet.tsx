      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
const sheetVariants = cva(
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},

    defaultVariants: {
      side: &quot;right&quot;}}=======
    defaultVariants: {
      side: &quot;right&quot;}}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
  VariantProps<typeof sheetVariants> { }
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>
  SheetContentProps

      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>


      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
      "flex flex-col space-y-2 text-center sm:text-left",
=======

      "flex flex-col space-y-2 text-center sm:text-left",

=======
      &quot;flex flex-col space-y-2 text-center sm:text-left&quot;
      "flex flex-col space-y-2 text-center sm:text-left",      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"



==============
SheetHeader.displayName = &quot;SheetHeader&quot;
SheetHeader.displayName = "SheetHeader"
const SheetFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(

      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
=======

      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",

=======
      &quot;flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2&quot;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"



==============
SheetFooter.displayName = &quot;SheetFooter&quot;
SheetFooter.displayName = "SheetFooter"
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
  />));
SheetDescription.display_name = SheetPrimitive.Description.display_name;
export {

export {;

  Sheet, SheetClose;
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">;
        <X className="h-4 w-4" />;
        <span className="sr-only">Close</span>;
      </SheetPrimitive.Close>;
    </SheetPrimitive.Content>;
  </SheetPortal>;
));
SheetContent.displayName = SheetPrimitive.Content.displayName;
;
const SheetHeader = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col space-y-2 text-center sm:text-left",;
      className;
    )}
    {...props}
  />;
);
SheetHeader.displayName = "SheetHeader";
;
const SheetFooter = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLDivElement>) => (;
  <div;
    className={cn(;
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",;
      className;
    )}
    {...props}
  />;
);
SheetFooter.displayName = "SheetFooter";
;
const SheetTitle = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Title>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Title;
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />;
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
;
const SheetDescription = React.forwardRef<;
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ElementRef<typeof SheetPrimitive.Description>;
  React.ElementRef<typeof SheetPrimitive.Description>,;
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;
>(({ className, ...props }, ref) => (;
  <SheetPrimitive.Description;
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
}
; const Sheet = SheetPrimitive.Root const SheetTrigger = SheetPrimitive.Trigger const SheetClose = SheetPrimitive.Close const SheetPortal = SheetPrimitive.Portal const SheetOverlay = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Overlay>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Overlay) 
}{
  ...props 
}ref= {
  ref 
}/>) ) SheetOverlay.displayName = SheetPrimitive.Overlay.displayName) interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>;
VariantProps<typeof sheetVariants> {
  
}const SheetContent = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Content>;
SheetContentProps <SheetPortal> <SheetOverlay /> <SheetPrimitive.Content ref= {
  ref 
}className= {
  cn (sheetVariants ({
  side 
}), className) 
}{
  ...props 
}> </SheetPrimitive.Close> </SheetPrimitive.Content> </SheetPortal>) ) SheetContent.displayName = SheetPrimitive.Content.displayName const SheetHeader = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetHeader.displayName = "SheetHeader" const SheetFooter = ({
  className, ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (<div) 
}{
  ...props 
}/>) SheetFooter.displayName = "SheetFooter" const SheetTitle = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Title>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Title />) ) SheetTitle.displayName = SheetPrimitive.Title.displayName const SheetDescription = React.forwardRef< React.ElementRef<typeof SheetPrimitive.Description>;
React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> > ( ({
  className, ...props 
}, ref) => (<SheetPrimitive.Description />) ) SheetDescription.displayName = SheetPrimitive.Description.displayName export {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger 
}
=======
  />;
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;export {Sheet, SheetClose;
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;
}
export {;
=======

  Sheet, SheetClose;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger;

}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
