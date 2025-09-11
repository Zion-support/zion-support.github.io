import { cn } from "@/lib/utils"

=======const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
=======
Table.displayName = &quot;Table&quot;
Table.displayName = "Table"
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (

TableHeader.displayName = "TableHeader"



  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
=======
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />))
TableHeader.displayName = &quot;TableHeader&quot;
TableHeader.displayName = "TableHeader"


TableHeader.displayName = "TableHeader"


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
=======
TableBody.displayName = &quot;TableBody&quot;
TableBody.displayName = "TableBody"
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(

      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
=======

      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",

=======
      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"



==============
TableFooter.displayName = &quot;TableFooter&quot;
TableFooter.displayName = "TableFooter"
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(

      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
=======

      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",

=======
      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"



==============
TableRow.displayName = &quot;TableRow&quot;
TableRow.displayName = "TableRow"
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(

      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
=======

      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",

=======
      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"



==============
TableHead.displayName = &quot;TableHead&quot;
TableHead.displayName = "TableHead"
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
=======
TableCell.displayName = &quot;TableCell&quot;
TableCell.displayName = "TableCell"
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
/>));
TableCaption.display_name = &quot;TableCaption & quot;
;
=======
TableCaption.displayName = "TableCaption"


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,

;
<<<<<<< HEAD=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
