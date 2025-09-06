
=======
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
)),
CardFooter.displayName = "CardFooter",

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
