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
/>));
TableCaption.display_name = &quot;TableCaption & quot;
;
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption}