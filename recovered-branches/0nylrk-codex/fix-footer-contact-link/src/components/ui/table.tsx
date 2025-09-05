import * as React from &quot;react&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <div className=&quot;relative w-full overflow-auto&quot;>
    <table
      ref={ref}
      className={cn(&quot;w-full caption-bottom text-sm&quot;, className)}
      {...props}
=======
>(_({_className, _...props}, _ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={_ref}
      className={_cn("w-full caption-bottom text-sm", _className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  </div>
))
Table.displayName = &quot;Table&quot;

const _TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
=======
>(_({_className, _...props}, _ref) => (
  <thead ref={_ref} className={_cn("[&_tr]:border-b", _className)} {_...props} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
))
TableHeader.displayName = &quot;TableHeader&quot;

const _TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(_({_className, _...props}, _ref) => (
  <tbody
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;[&_tr:last-child]:border-0&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("[&_tr:last-child]:border-0", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
TableBody.displayName = &quot;TableBody&quot;

const _TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(_({_className, _...props}, _ref) => (
  <tfoot
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
TableFooter.displayName = &quot;TableFooter&quot;

const _TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(_({_className, _...props}, _ref) => (
  <tr
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
TableRow.displayName = &quot;TableRow&quot;

const _TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(_({_className, _...props}, _ref) => (
  <th
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
TableHead.displayName = &quot;TableHead&quot;

const _TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(_({_className, _...props}, _ref) => (
  <td
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;p-4 align-middle [&:has([role=checkbox])]:pr-0&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
TableCell.displayName = &quot;TableCell&quot;

const _TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(_({_className, _...props}, _ref) => (
  <caption
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;mt-4 text-sm text-muted-foreground&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("mt-4 text-sm text-muted-foreground", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
TableCaption.displayName = &quot;TableCaption&quot;

export {_Table, _TableHeader, _TableBody, _TableFooter, _TableHead, _TableRow, _TableCell, _TableCaption}
