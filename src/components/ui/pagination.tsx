
interface PaginationButtonProps
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
const PaginationLink = ({

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({

        variant: isActive ? "outline" : "ghost",

        size}),
      className
    )}
    {...props}
  />
)

const PaginationButton = React.forwardRef<HTMLButtonElement PaginationButtonProps>(
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className;
      )}
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

const PaginationNext = ({
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
