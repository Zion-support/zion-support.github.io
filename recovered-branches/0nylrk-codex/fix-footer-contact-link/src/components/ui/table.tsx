<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
/>
  </div>
))
<<<<<<< HEAD
Table.displayName = &quot;Table&quot;
=======
Table.displayName = "Table"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
<<<<<<< HEAD
TableHeader.displayName = &quot;TableHeader&quot;
=======
TableHeader.displayName = "TableHeader"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
/>
))
<<<<<<< HEAD
TableBody.displayName = &quot;TableBody&quot;
=======
TableBody.displayName = "TableBody"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
<<<<<<< HEAD
      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
=======
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableFooter.displayName = &quot;TableFooter&quot;
=======
TableFooter.displayName = "TableFooter"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
<<<<<<< HEAD
      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
=======
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableRow.displayName = &quot;TableRow&quot;
=======
TableRow.displayName = "TableRow"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
TableHead.displayName = &quot;TableHead&quot;
=======
TableHead.displayName = "TableHead"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
/>
))
<<<<<<< HEAD
TableCell.displayName = &quot;TableCell&quot;
=======
TableCell.displayName = "TableCell"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
/>
))
<<<<<<< HEAD
TableCaption.displayName = &quot;TableCaption&quot;
export {
  Table
  TableHeader
  TableBody
  TableFooter
  TableHead
  TableRow
  TableCell
  TableCaption}
=======
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
