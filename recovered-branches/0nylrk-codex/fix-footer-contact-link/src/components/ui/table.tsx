<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
<<<<<<< HEAD
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
  <div className=&quot;relative w-full overflow-auto&quot;>
    <table
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
<<<<<<< HEAD
/>
  </div>
))
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from &quot;react & quot;
=======
>(({ className, ...props }, ref) => (import * as React from &quot;react & quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
import { cn } from &quot;@/lib / utils & quot;
;
const Table = React.forward_ref<;
  HTMLTableElement,
  React.HTMLAttributes < HTMLTableElement>;
>(({ class_name, ...props }, ref) => (
  <div className=&quot;relative w - full overflow - auto & quot;>;
    <table;
      ref={ref}
      className={cn (&quot;w - full caption - bottom text - sm & quot;, class_name)}
      {...props}

Table.displayName = "Table"

<<<<<<< HEAD


=======
Table.displayName = &quot;Table&quot;
Table.displayName = "Table"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
))
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


TableHeader.displayName = "TableHeader"



<<<<<<< HEAD
=======
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = &quot;TableHeader&quot;
TableHeader.displayName = "TableHeader"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
<<<<<<< HEAD
    {...props}
/>
))
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/>;
=======
    {...props}/>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    ref={ref}
    className={cn (&quot;[&_tr:last - child]:border - 0&quot;, class_name)}
    {...props}

TableBody.displayName = "TableBody"

    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(

      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
<<<<<<< HEAD


=======
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",


      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
=======
<<<<<<< HEAD


TableFooter.displayName = "TableFooter"



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
TableFooter.displayName = &quot;TableFooter&quot;
TableFooter.displayName = "TableFooter"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",


=======
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",


      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
=======
<<<<<<< HEAD


TableRow.displayName = "TableRow"



<<<<<<< HEAD
=======
TableRow.displayName = &quot;TableRow&quot;
TableRow.displayName = "TableRow"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TableHead = React.forwardRef<
=======
    className={cn(const TableHead = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",


=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",


      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
=======
<<<<<<< HEAD


TableHead.displayName = "TableHead"



<<<<<<< HEAD
=======
TableHead.displayName = &quot;TableHead&quot;
TableHead.displayName = "TableHead"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
/>
))
<<<<<<< HEAD

    ref={ref}
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}


TableCell.displayName = "TableCell"



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/>));
=======
    ref={ref}/>));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
    ref={ref}
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}

TableCell.displayName = "TableCell"

<<<<<<< HEAD


=======
TableCell.displayName = &quot;TableCell&quot;
TableCell.displayName = "TableCell"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}
/>
))
<<<<<<< HEAD
<<<<<<< HEAD

;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
/>));
TableCell.display_name = &quot;TableCell & quot;
;
const TableCaption = React.forward_ref<;
  HTMLTableCaptionElement,
  React.HTMLAttributes < HTMLTableCaptionElement>;
>(({ class_name, ...props }, ref) => (
  <caption;
    ref={ref}
    className={cn (&quot;mt - 4 text - sm text - muted - foreground & quot;, class_name)}
    {...props}
TableCaption.display_name = &quot;TableCaption & quot;
;

TableCaption.displayName = "TableCaption"

<<<<<<< HEAD

<<<<<<< HEAD
=======
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
TableCaption.displayName = "TableCaption"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    ref={ref}
    className={cn (&quot;mt - 4 text - sm text - muted - foreground & quot;, class_name)}
    {...props}
TableCaption.displayName = "TableCaption"


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  TableCaption}
import * as React from "react";
;
import { cn } from "@/lib/utils";
;
const Table = React.forwardRef<;
  HTMLTableElement,;
  React.HTMLAttributes<HTMLTableElement>;
>(({ className, ...props }, ref) => (;
  <div className="relative w-full overflow-auto">;
    <table;
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />;
  </div>;
));
Table.displayName = "Table";
;
const TableHeader = React.forwardRef<;
  HTMLTableSectionElement,;
  React.HTMLAttributes<HTMLTableSectionElement>;
>(({ className, ...props }, ref) => (;
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />;
));
TableHeader.displayName = "TableHeader";
;
const TableBody = React.forwardRef<;
  HTMLTableSectionElement,;
  React.HTMLAttributes<HTMLTableSectionElement>;
>(({ className, ...props }, ref) => (;
  <tbody;
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />;
));
TableBody.displayName = "TableBody";
;
const TableFooter = React.forwardRef<;
  HTMLTableSectionElement,;
  React.HTMLAttributes<HTMLTableSectionElement>;
>(({ className, ...props }, ref) => (;
  <tfoot;
    ref={ref}
    className={cn(;
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",;
      className;
    )}
    {...props}
  />;
));
TableFooter.displayName = "TableFooter";
;
const TableRow = React.forwardRef<;
  HTMLTableRowElement,;
  React.HTMLAttributes<HTMLTableRowElement>;
>(({ className, ...props }, ref) => (;
  <tr;
    ref={ref}
    className={cn(;
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",;
      className;
    )}
    {...props}
  />;
));
TableRow.displayName = "TableRow";
;
const TableHead = React.forwardRef<;
  HTMLTableCellElement,;
  React.HTMLAttributes<HTMLTableCellElement>;
>(({ className, ...props }, ref) => (;
  <th;
    ref={ref}
    className={cn(;
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",;
      className;
    )}
    {...props}
  />;
));
TableHead.displayName = "TableHead";
;
const TableCell = React.forwardRef<;
  HTMLTableCellElement,;
  React.HTMLAttributes<HTMLTableCellElement>;
>(({ className, ...props }, ref) => (;
  <td;
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />;
));
TableCell.displayName = "TableCell";
;
const TableCaption = React.forwardRef<;
  HTMLTableCaptionElement,;
  React.HTMLAttributes<HTMLTableCaptionElement>;
>(({ className, ...props }, ref) => (;
  <caption;
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />;
));
TableCaption.displayName = "TableCaption";
;
export {;
  Table,;
  TableHeader,;
  TableBody,;
  TableFooter,;
  TableHead,;
  TableRow,;
  TableCell,;
  TableCaption}import * as React from "react" const Table = React.forwardRef< HTMLTableElement;
React.HTMLAttributes<HTMLTableElement> /> </div>) ) Table.displayName = "Table" const TableHeader = React.forwardRef< HTMLTableSectionElement;
React.HTMLAttributes<HTMLTableSectionElement>) ) TableHeader.displayName = "TableHeader" const TableBody = React.forwardRef< HTMLTableSectionElement;
React.HTMLAttributes<HTMLTableSectionElement> > ( ({
  className, ...props 
}, ref) => (<tbody />) ) TableBody.displayName = "TableBody" const TableFooter = React.forwardRef< HTMLTableSectionElement;
React.HTMLAttributes<HTMLTableSectionElement> > ( ({
  className, ...props 
}, ref) => (<tfoot) 
}{
  ...props 
}/>) ) TableFooter.displayName = "TableFooter" const TableRow = React.forwardRef< HTMLTableRowElement;
React.HTMLAttributes<HTMLTableRowElement> > ( ({
  className, ...props 
}, ref) => (<tr) 
}{
  ...props 
}/>) ) TableRow.displayName = "TableRow" const TableHead = React.forwardRef< HTMLTableCellElement;
React.HTMLAttributes<HTMLTableCellElement> > ( ({
  className, ...props 
}, ref) => (<th) 
}{
  ...props 
}/>) ) TableHead.displayName = "TableHead" const TableCell = React.forwardRef< HTMLTableCellElement;
React.HTMLAttributes<HTMLTableCellElement> > ( ({
  className, ...props 
}, ref) => (<td />) ) TableCell.displayName = "TableCell" const TableCaption = React.forwardRef< HTMLTableCaptionElement;
React.HTMLAttributes<HTMLTableCaptionElement> > ( ({
  className, ...props 
}, ref) => (<caption />) ) TableCaption.displayName = "TableCaption" export {
  Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption 
}
  TableCaption};
  TableCaption}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  TableCaption}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
