import * as React from 'react';
import {ChevronLeft, ChevronRight, MoreHorizontal} from 'lucide-react';
;
import {cn} from '@/lib / utils';
import {ButtonProps, button_variants} from '@/components / ui / button';
;
const Pagination = ({ class_name, ...props }: React.ComponentProps<'nav'>) =>: any (
  <nav;
    role='navigation';
    aria - label='pagination';
    className={cn ('mx - auto flex w - full justify - center', class_name)}
    {...props}
  />);
Pagination.display_name = 'Pagination';
;
const PaginationContent = React.forward_ref<;
  HTMLUListElement,
  React.ComponentProps<'ul'>;
>(({ class_name, ...props }, ref) => (
  <ul;
    ref={ref}
    className={cn ('flex flex - row items - center gap - 1', class_name)}
    {...props}
  />));
PaginationContent.display_name = 'PaginationContent';
;
const PaginationItem = React.forward_ref<;
  HTMLLIElement,
  React.ComponentProps<'li'>;
>(({ class_name, ...props }, ref) => (
  <li ref={ref} className={cn ('', class_name)} {...props} />));
PaginationItem.display_name = 'PaginationItem';
;
type PaginationLinkProps = {
  is_active?: boolean;
} & Pick < ButtonProps, 'size'> &;
  React.ComponentProps<'a'>;
;
const PaginationLink = ({
  class_name,
  is_active,
  size = 'icon',
  ...props;
}: PaginationLinkProps) =>: any (
  <a;
    aria - current={is_active ? 'page' : undefined}
    className={cn (
      button_variants ({
        variant: is_active ? 'outline' : 'ghost',
        size,
      }),
      class_name)}
    {...props}
  />);
PaginationLink.display_name = 'PaginationLink';
;
const PaginationPrevious = ({
  class_name,
  ...props;
}: React.ComponentProps < typeof PaginationLink>) =>: any</typeof> (
  <PaginationLink;
    aria - label='Go to previous page';
    size='default';
    className={cn ('gap - 1 pl - 2.5', class_name)}
    {...props}
  >;
    <ChevronLeft className='h - 4 w - 4' />;
    <span > Previous</span>;
  </PaginationLink>);
PaginationPrevious.display_name = 'PaginationPrevious';
;
const PaginationNext = ({
  class_name,
  ...props;
}: React.ComponentProps < typeof Pagination</typeof > Link>) =>: any (
  <PaginationLink;
    aria - label='Go to next page';
    size='default';
    className={cn ('gap - 1 pr - 2.5', class_name)}
    {...props}
  >;
    <span > Next</span>;
    <ChevronRight className='h - 4 w - 4' />;
  </PaginationLink>);
PaginationNext.display_name = 'PaginationNext';
;
const PaginationEllipsis = ({
  class_name,
  ...props;
}: React.ComponentProps<'span'>) =>: any (
  <span;
    aria - hidden;
    className={cn ('flex h - 9 w - 9 items - center justify - center', class_name)}
    {...props}
  >;
    <MoreHorizontal className='h - 4 w - 4' />;
    <span className='sr - only'>More pages</span>;
  </span>);
PaginationEllipsis.display_name = 'PaginationEllipsis';
;
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
;