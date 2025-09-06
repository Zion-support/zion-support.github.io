const Table = React.forwardRef<
  HTMLTableElement
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
const TableHeader = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (


TableHeader.displayName = "TableHeader"



  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = &quot;TableHeader&quot;
const TableBody = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
const TableFooter = React.forwardRef<
  HTMLTableSectionElement
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  />
))
const TableRow = React.forwardRef<
  HTMLTableRowElement
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  />
))
const TableHead = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  />
))
const TableCell = React.forwardRef<
  HTMLTableCellElement
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
