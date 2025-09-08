
    className={cn(




    ref={ref}
    aria - label="breadcrumb";
    className={cn (
      "inline - flex items - center gap - 1 text - sm text - zion - slate - light";
      class_name)}
    {...props}
  />));
Breadcrumb.display_name = "Breadcrumb";
const BreadcrumbList = React.forward_ref<;
  HTMLOListElement;
  React.ComponentPropsWithoutRef<"ol">;
>(({ class_name, ...props }, ref) => (
  <ol;
    ref={ref}
    className={cn ("flex items - center gap - 1.5", class_name)}
    {...props}
  />));
BreadcrumbList.display_name = "BreadcrumbList";
const BreadcrumbItem = React.forward_ref<;
  HTMLLIElement;
  React.ComponentPropsWithoutRef<"li">;
>(({ class_name, ...props }, ref) => (
  <li;
    ref={ref}
    className={cn ("inline - flex items - center gap - 1.5", class_name)}
    {...props}
  />));
BreadcrumbItem.display_name = "BreadcrumbItem";
const BreadcrumbLink = React.forward_ref<;
  HTMLAnchorElement;
  React.ComponentPropsWithoutRef<"a"> & {
    as_child?: boolean;
  }
>(({ class_name, as_child = false, ...props }, ref) => {
  const Comp = as_child ? Slot : "a";



  children;

    className={cn("flex h-9 w-9 items-center justify-center", className)}



  >;
export {
    {...props}>;
    &#8230,;
  </span>;
);
BreadcrumbEllipsis && BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export {;







