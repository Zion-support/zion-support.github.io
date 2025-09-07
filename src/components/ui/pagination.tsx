
interface PaginationButtonProps
  page: number
  isActive?: boolean
}
const PaginationLink = ({
<<<<<<< HEAD
  className
  isActive
  size = &quot;icon&quot;
  size = &quot;icon&quot;
ursor/fix-website-loading-errors-and-merge-6662
  className
  isActive
  size = &quot;icon&quot;
  className,
  isActive,
  size = &quot;icon&quot;
  size = "icon",
=======


  className,
  isActive,


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ...props
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
<<<<<<< HEAD
        size})
        variant: isActive ? "outline" : "ghost",
        variant: isActive ? "outline&quot; : &quot;ghost&quot;
        size})
        variant: isActive ? "outline" : "ghost",
        size}),

  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        variant: isActive ? "outline" : "ghost",

        size}),
      className
    {...props}
  />
)
<<<<<<< HEAD
PaginationLink.displayName = &quot;PaginationLink&quot;
PaginationLink.displayName = &quot;PaginationLink&quot;
PaginationLink.displayName = "PaginationLink"

=======

const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;
<<<<<<< HEAD
        buttonVariants({ variant: 'ghost', size: 'icon' });
        isActive && 'bg-green-600 text-white';
ursor/fix-website-loading-errors-and-merge-6662
        buttonVariants({ variant: 'ghost', size: 'icon' });
        isActive && 'bg-green-600 text-white';
=======

        className;
      {...props}
    >;
      {page}
</button>
  )
)
PaginationButton.displayName = 'PaginationButton'
const PaginationPrevious = ({
  className
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
<<<<<<< HEAD
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
PaginationPrevious.displayName = &quot;PaginationPrevious&quot;
PaginationPrevious.displayName = "PaginationPrevious"

=======

const PaginationNext = ({
  className
  ...props
}: Omit<PaginationLinkProps 'size'>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
<<<<<<< HEAD
PaginationNext.displayName = &quot;PaginationNext&quot;
PaginationNext.displayName = &quot;PaginationNext&quot;
PaginationNext.displayName = "PaginationNext"

=======

const PaginationEllipsis = ({
  className
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
<<<<<<< HEAD
PaginationEllipsis.displayName = &quot;PaginationEllipsis"
export {
  Pagination
  PaginationContent
  PaginationEllipsis
  PaginationItem
  PaginationLink
  PaginationButton
  PaginationNext
  PaginationPrevious}
=======

