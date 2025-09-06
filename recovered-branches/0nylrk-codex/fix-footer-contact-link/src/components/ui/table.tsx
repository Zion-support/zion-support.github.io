<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx

=======


=======
import * as React from &quot;react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div className=&quot;relative w-full overflow-auto&quot;>
    <table
<<<<<<< HEAD
=======
  <div className="relative w-full overflow-auto">
    <table
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
/>
  </div>
))
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
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
      ref={ref}
      className={cn (&quot;w - full caption - bottom text - sm & quot;, class_name)}
      {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx


Table.displayName = "Table"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
Table.displayName = &quot;Table&quot;
=======
Table.displayName = "Table"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
))
<<<<<<< HEAD

=======


TableHeader.displayName = "TableHeader"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
<<<<<<< HEAD
TableHeader.displayName = &quot;TableHeader&quot;
=======
TableHeader.displayName = "TableHeader"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
/>
))
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
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
    ref={ref}
    className={cn (&quot;[&_tr:last - child]:border - 0&quot;, class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx


TableBody.displayName = "TableBody"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
TableBody.displayName = &quot;TableBody&quot;
=======
TableBody.displayName = "TableBody"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;border-t bg-muted/50 font-medium [&>tr]:last:border-b-0&quot;
=======
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD

=======


TableFooter.displayName = "TableFooter"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
TableFooter.displayName = &quot;TableFooter&quot;
=======
TableFooter.displayName = "TableFooter"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted&quot;
=======
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD

=======


TableRow.displayName = "TableRow"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
TableRow.displayName = &quot;TableRow&quot;
=======
TableRow.displayName = "TableRow"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0&quot;
=======
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
))
<<<<<<< HEAD
<<<<<<< HEAD

=======


TableHead.displayName = "TableHead"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
TableHead.displayName = &quot;TableHead&quot;
=======
TableHead.displayName = "TableHead"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
/>
))
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
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
    ref={ref}
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx


TableCell.displayName = "TableCell"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
TableCell.displayName = &quot;TableCell&quot;
=======
TableCell.displayName = "TableCell"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
/>
))
<<<<<<< HEAD

;

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
/>));
TableCaption.display_name = &quot;TableCaption & quot;
;
=======

TableCaption.displayName = "TableCaption"


=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  TableCaption}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/table.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
