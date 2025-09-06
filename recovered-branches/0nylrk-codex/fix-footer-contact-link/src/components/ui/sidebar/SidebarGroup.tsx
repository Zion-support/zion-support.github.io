

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function SidebarGroup({
  className
  children
  ...props
}: SidebarGroupProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>

}
;
