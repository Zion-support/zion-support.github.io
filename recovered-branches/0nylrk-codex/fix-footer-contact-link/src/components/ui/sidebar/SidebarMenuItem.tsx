 interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarMenuItemProps) {
  return (<li className= {
  cn ("", className) 
}{
  ...props 
}> {
  children 
}</li>) 
}