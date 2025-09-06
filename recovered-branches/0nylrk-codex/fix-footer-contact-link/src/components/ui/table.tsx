<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
=======


>>>>>>> main
import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
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
=======
  <div className=&quot;relative w-full overflow-auto&quot;>
    <table
=======
import * as React from &quot;react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const Table = React.forward_ref<;
  HTMLTableElement,
  React.HTMLAttributes < HTMLTableElement>;
>(({ class_name, ...props }, ref) => (
  <div className=&quot;relative w - full overflow - auto & quot;>;
    <table;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      ref={ref}
      className={cn (&quot;w - full caption - bottom text - sm & quot;, class_name)}
      {...props}


Table.displayName = "Table"



>>>>>>> main
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
<<<<<<< HEAD
TableHeader.displayName = &quot;TableHeader&quot;
=======
TableHeader.displayName = "TableHeader"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
))


TableHeader.displayName = "TableHeader"



>>>>>>> main
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
<<<<<<< HEAD
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
=======
=======
/>;
  </div>));
Table.display_name = &quot;Table & quot;
;
const TableHeader = React.forward_ref<;
  HTMLTableSectionElement,
  React.HTMLAttributes < HTMLTableSectionElement>;
>(({ class_name, ...props }, ref) => (
  <thead ref={ref} className={cn (&quot;[&_tr]:border - b&quot;, class_name)} {...props} />));
TableHeader.display_name = &quot;TableHeader & quot;
;
const TableBody = React.forward_ref<;
  HTMLTableSectionElement,
  React.HTMLAttributes < HTMLTableSectionElement>;
>(({ class_name, ...props }, ref) => (
  <tbody;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (&quot;[&_tr:last - child]:border - 0&quot;, class_name)}
    {...props}


TableBody.displayName = "TableBody"



>>>>>>> main
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
=======
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",


>>>>>>> main
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD
TableFooter.displayName = &quot;TableFooter&quot;
=======
TableFooter.displayName = "TableFooter"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


TableFooter.displayName = "TableFooter"



>>>>>>> main
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
=======
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",


>>>>>>> main
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD
TableRow.displayName = &quot;TableRow&quot;
=======
TableRow.displayName = "TableRow"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


TableRow.displayName = "TableRow"



>>>>>>> main
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",


>>>>>>> main
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD
TableHead.displayName = &quot;TableHead&quot;
=======
TableHead.displayName = "TableHead"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


TableHead.displayName = "TableHead"



>>>>>>> main
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
<<<<<<< HEAD
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
=======
=======
/>));
TableBody.display_name = &quot;TableBody & quot;
;
const TableFooter = React.forward_ref<;
  HTMLTableSectionElement,
  React.HTMLAttributes < HTMLTableSectionElement>;
>(({ class_name, ...props }, ref) => (
  <tfoot;
    ref={ref}
    className={cn (
      &quot;border - t bg - muted / 50 font - medium [&>tr]:last:border - b-0 & quot;,
      class_name)}
    {...props}
  />));
TableFooter.display_name = &quot;TableFooter & quot;
;
const TableRow = React.forward_ref<;
  HTMLTableRowElement,
  React.HTMLAttributes < HTMLTableRowElement>;
>(({ class_name, ...props }, ref) => (
  <tr;
    ref={ref}
    className={cn (
      &quot;border - b transition - colors hover:bg - muted / 50 data-[state = selected]:bg - muted & quot;,
      class_name)}
    {...props}
  />));
TableRow.display_name = &quot;TableRow & quot;
;
const TableHead = React.forward_ref<;
  HTMLTableCellElement,
  React.HTMLAttributes < HTMLTableCellElement>;
>(({ class_name, ...props }, ref) => (
  <th;
    ref={ref}
    className={cn (
      &quot;h - 12 px - 4 text - left align - middle font - medium text - muted - foreground [&:has ([role = checkbox])]:pr - 0&quot;,
      class_name)}
    {...props}
  />));
TableHead.display_name = &quot;TableHead & quot;
;
const TableCell = React.forward_ref<;
  HTMLTableCellElement,
  React.HTMLAttributes < HTMLTableCellElement>;
>(({ class_name, ...props }, ref) => (
  <td;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}


TableCell.displayName = "TableCell"



>>>>>>> main
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
<<<<<<< HEAD
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

=======
=======
/>));
TableCell.display_name = &quot;TableCell & quot;
;
const TableCaption = React.forward_ref<;
  HTMLTableCaptionElement,
  React.HTMLAttributes < HTMLTableCaptionElement>;
>(({ class_name, ...props }, ref) => (
  <caption;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (&quot;mt - 4 text - sm text - muted - foreground & quot;, class_name)}
    {...props}

/>));
TableCaption.display_name = &quot;TableCaption & quot;
;
=======

TableCaption.displayName = "TableCaption"


>>>>>>> main
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
<<<<<<< HEAD
<<<<<<< HEAD
  TableCaption};
=======
  TableCaption}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
