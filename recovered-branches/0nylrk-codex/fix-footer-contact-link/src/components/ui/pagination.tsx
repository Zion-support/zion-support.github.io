
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
=======
=======import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"


=======))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",

  ...props
}: PaginationLinkProps) => (
=======PaginationContent && PaginationContent.displayName = 'PaginationContent';
=======
  ...props
}: PaginationLinkProps) => (
=======
PaginationContent && PaginationContent.displayName = 'PaginationContent';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const PaginationItem = React && React.forwardRef<;
  HTMLLIElement,;
  React && React.ComponentProps<'li'>;
>(({ className, ...props }, ref) => (;
  <li ref={ref} className={cn('', className)} {...props} />;
));
PaginationItem && PaginationItem.displayName = 'PaginationItem';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type PaginationLinkProps = {;
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &;
  React && React.ComponentProps<'a'>;
