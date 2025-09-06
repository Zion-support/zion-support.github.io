<<<<<<< HEAD

=======


import * as React from "react"

import { cn } from "@/lib/utils"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className=&quot;relative w-full overflow-auto&quot;>
    <table
<<<<<<< HEAD
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
/>
  </div>
))

=======
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
))
<<<<<<< HEAD

=======


TableHeader.displayName = "TableHeader"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(

<<<<<<< HEAD
=======

      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD

=======


TableFooter.displayName = "TableFooter"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(

<<<<<<< HEAD
=======

      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD

=======


TableRow.displayName = "TableRow"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(

<<<<<<< HEAD
=======

      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD

=======


TableHead.displayName = "TableHead"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

;

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


export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
