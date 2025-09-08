

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    {...props}
  />
)
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    {...props}
/>
))
>(({ className, ...props }, ref) => (
))interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  page: number
  isActive?: boolean
}
const PaginationLink = ({

  className,
  isActive,

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
  ({ page, isActive, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
      className={cn(;

        buttonVariants({ variant: 'ghost', size: 'icon' }),;
        isActive && 'bg-green-600 text-white',;

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

PaginationNext.displayName = "PaginationNext"

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