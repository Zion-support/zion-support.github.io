





    >
      {children}






DialogHeader.displayName = 'DialogHeader'
onst DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
ursor/fix-website-loading-errors-and-merge-6662
DialogHeader.displayName = "DialogHeader"



const DialogFooter = ({

      <DialogPrimitive && DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover: opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>;



    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      'flex flex-col space-y-1.5 text-center sm:text-left'
      "flex flex-col space-y-1.5 text-center sm:text-left",


DialogHeader.displayName = 'DialogHeader'
DialogHeader.displayName = "DialogHeader"



const DialogFooter = ({
  className
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>
  React.Comp</typeof>onentPropsWithoutRef<typeof DialogPrimitive.Title>
DialogFooter.displayName = "DialogFooter"

DialogFooter.displayName = "DialogFooter"