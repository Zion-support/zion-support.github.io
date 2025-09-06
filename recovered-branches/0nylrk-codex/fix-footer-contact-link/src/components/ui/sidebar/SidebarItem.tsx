 interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode;
active?: boolean 
}className, children, active, ...props 
}: SidebarItemProps) {
  return (<div className= {
  cn () 
}{
  ...props 
}> {
  children 
}</div>) 
}