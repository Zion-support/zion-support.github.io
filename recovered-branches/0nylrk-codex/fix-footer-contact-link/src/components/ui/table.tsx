




import { cn } from "@/lib/utils"



      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}


const Table = React.forwardRef<
  HTMLTableElement

  React.HTMLAttributes<HTMLTableElement>

const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (

  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
))

TableHeader.displayName = "TableHeader"


const TableBody = React.forwardRef<
  HTMLTableSectionElement

  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (

  <tbody

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
TableBody.displayName = &quot;TableBody&quot;
TableBody.displayName = "TableBody"


const TableFooter = React.forwardRef<
  HTMLTableSectionElement;
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot;
    ref={ref}
    className={cn(



      className

    )}
    {...props}
  />
))

TableFooter.displayName = "TableFooter"





const TableRow = React.forwardRef<
  HTMLTableRowElement;
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr;
    ref={ref}

    className={cn(


      className

    )}
    {...props}
  />
))

TableRow.displayName = "TableRow"





const TableHead = React.forwardRef<

  HTMLTableCellElement

  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th;
    ref={ref}
    className={cn(



      className

    )}
    {...props}
  />
))

TableHead.displayName = "TableHead"





const TableCell = React.forwardRef<
  HTMLTableCellElement;
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (

  <td

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
TableCell.displayName = &quot;TableCell&quot;
TableCell.displayName = "TableCell"


const TableCaption = React.forwardRef<
  HTMLTableCaptionElement;
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (

  <caption

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

TableCaption.displayName = "TableCaption"
      ref={ref})
      className={cn (&quot;w - full caption - bottom text - sm & quot;, class_name)}

"
Table.displayName = "Table""
const TableHeader = React.forwardRef<
  HTMLTableSectionElement;

  React.HTMLAttributes<HTMLTableSectionElement>
  <thead ref={ref} className={cn(&quot;[&_tr]:border-b&quot;, className)} {...props} />
</thead>
const TableBody = React.forwardRef<

  <tbody;
/>;
</tbody>
  </div>));
const TableHeader = React.forward_ref<;
  HTMLTableSectionElement,
  React.HTMLAttributes < HTMLTableSectionElement>;
>(({ class_name, ...props }, ref) => ()
  <thead ref={ref} className={cn (&quot;[&_tr]:border - b&quot;, class_name)} {...props} />));
const TableBody = React.forward_ref<;
    className={cn (&quot;[&_tr:last - child]:border - 0&quot;, class_name)}

TableBody.displayName = "TableBody""
    className={cn("[&_tr:last-child]:border-0", className)}"
const TableFooter = React.forwardRef<
  <tfoot;
    ref={ref}
    className={cn(

      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0","
</tfoot>
const TableRow = React.forwardRef<
  HTMLTableRowElement;
  React.HTMLAttributes<HTMLTableRowElement>

  <tr;

      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted","
      className;)
    )}
</tr>
const TableHead = React.forwardRef<
  HTMLTableCellElement;
  React.HTMLAttributes<HTMLTableCellElement>

  <th;

)"
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0","
      className;
</th>
const TableCell = React.forwardRef<

  <td;
/>));
</td>
const TableFooter = React.forward_ref<;
    className={cn (
      &quot;border - t bg - muted / 50 font - medium [&>tr]:last:border - b-0 & quot;,
const TableRow = React.forward_ref<;
  HTMLTableRowElement,
  React.HTMLAttributes < HTMLTableRowElement>;)
      &quot;border - b transition - colors hover:bg - muted / 50 data-[state = selected]:bg - muted & quot;,)
      class_name)}
const TableHead = React.forward_ref<;
  HTMLTableCellElement,
  React.HTMLAttributes < HTMLTableCellElement>;
    className={cn ()
      &quot;h - 12 px - 4 text - left align - middle font - medium text - muted - foreground [&:has ([role = checkbox])]:pr - 0&quot;,
const TableCell = React.forward_ref<;
    className={cn (&quot;p - 4 align - middle [&:has ([role = checkbox])]:pr - 0&quot;, class_name)}

TableCell.displayName = "TableCell""
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement;
  React.HTMLAttributes<HTMLTableCaptionElement>
  <caption;
</caption>
const TableCaption = React.forward_ref<;
  HTMLTableCaptionElement,
  React.HTMLAttributes < HTMLTableCaptionElement>;
    className={cn (&quot;mt - 4 text - sm text - muted - foreground & quot;, class_name)}



export {

  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,

;
;


