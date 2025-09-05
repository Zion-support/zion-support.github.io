 />) Pagination.displayName = "Pagination" const PaginationContent = React.forwardRef< HTMLUListElement;
/>) ) PaginationContent.displayName = "PaginationContent" const PaginationItem = React.forwardRef< HTMLLIElement;
) ) PaginationItem.displayName = "PaginationItem" React.ComponentProps<"a"> 
}{
  ...props 
}/>) PaginationLink.displayName = "PaginationLink" const PaginationPrevious = ({
  className, ...props 
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <ChevronLeft className="h-4 w-4" /> <span>Previous</span> </PaginationLink>) PaginationPrevious.displayName = "PaginationPrevious" const PaginationNext = ({
  className, ...props 
}: React.ComponentProps<typeof PaginationLink>) => (<PaginationLink > <span>Next</span> <ChevronRight className="h-4 w-4" /> </PaginationLink>) PaginationNext.displayName = "PaginationNext" <span aria-hidden className= {
  cn ("flex h-9 w-9 items-center justify-center", className) 
}{
  ...props 
}> <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >More pages</span> </span>) PaginationEllipsis.displayName = "PaginationEllipsis" export {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
}