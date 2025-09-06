
import * as React from "react"
"
import { cn } from "@/lib/utils"




const Table = React.forwardRef<;
  HTMLTableElement;
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
"
  <div className="relative w-full overflow-auto">
    <table;
      ref={ref}"
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}



const TableHeader = React.forwardRef<
  HTMLTableSectionElement;
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (


"
TableHeader.displayName = "TableHeader"






const TableBody = React.forwardRef<
  HTMLTableSectionElement;
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody;
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


    ref={ref}"
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}

const TableFooter = React.forwardRef<
  HTMLTableSectionElement;
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot;
    ref={ref}
    className={cn(



      className;
    )}
    {...props}
  />
))



const TableRow = React.forwardRef<
  HTMLTableRowElement;
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr;
    ref={ref}
    className={cn(



      className;
    )}
    {...props}
  />
))



const TableHead = React.forwardRef<
  HTMLTableCellElement;
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th;
    ref={ref}
    className={cn(



      className;
    )}
    {...props}
  />
))



const TableCell = React.forwardRef<
  HTMLTableCellElement;
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td;
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


    ref={ref}

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement;
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption;
    ref={ref}
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}
    {...props}

/>));
TableCaption.display_name = &quot;TableCaption & quot;
;
"
TableCaption.displayName = "TableCaption"




    ref={ref}
    className={cn (&quot;mt - 4 text - sm text - muted - foreground & quot;, class_name)}
    {...props}"
TableCaption.displayName = "TableCaption"



export {}
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,


;
;



  TableCaption}

"