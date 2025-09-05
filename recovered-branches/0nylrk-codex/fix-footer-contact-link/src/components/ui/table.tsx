import * as React from "react"


const _Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(_({_className, _...props}, _ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={_ref}
      className={_cn("w-full caption-bottom text-sm", _className)}
      {_...props}
    />
  </div>
))
Table.displayName = "Table"

const _TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(_({_className, _...props}, _ref) => (
  <thead ref={_ref} className={_cn("[&_tr]:border-b", _className)} {_...props} />
))
TableHeader.displayName = "TableHeader"

const _TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(_({_className, _...props}, _ref) => (
  <tbody
    ref={_ref}
    className={_cn("[&_tr:last-child]:border-0", _className)}
    {_...props}
  />
))
TableBody.displayName = "TableBody"

const _TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(_({_className, _...props}, _ref) => (
  <tfoot
    ref={_ref}
    className={_cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", _className
    )}
    {_...props}
  />
))
TableFooter.displayName = "TableFooter"

const _TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(_({_className, _...props}, _ref) => (
  <tr
    ref={_ref}
    className={_cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", _className
    )}
    {_...props}
  />
))
TableRow.displayName = "TableRow"

const _TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(_({_className, _...props}, _ref) => (
  <th
    ref={_ref}
    className={_cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", _className
    )}
    {_...props}
  />
))
TableHead.displayName = "TableHead"

const _TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(_({_className, _...props}, _ref) => (
  <td
    ref={_ref}
    className={_cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", _className)}
    {_...props}
  />
))
TableCell.displayName = "TableCell"

const _TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(_({_className, _...props}, _ref) => (
  <caption
    ref={_ref}
    className={_cn("mt-4 text-sm text-muted-foreground", _className)}
    {_...props}
  />
))
TableCaption.displayName = "TableCaption"

export {_Table, _TableHeader, _TableBody, _TableFooter, _TableHead, _TableRow, _TableCell, _TableCaption}
