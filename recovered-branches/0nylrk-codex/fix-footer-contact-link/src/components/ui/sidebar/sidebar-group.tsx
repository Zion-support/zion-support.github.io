 interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
icon?: React.ReactNode;
defaultExpanded?: boolean;
showChevron?: boolean 
}const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps> ( ({
  title, icon, defaultExpanded = true, showChevron = true, className, children, ...props 
}, ref) => {
  const [expanded, setExpanded] = React.useState (defaultExpanded);
ref as SafeRef<HTMLDivElement> 
}</div> {
  showChevron && (<ChevronDown />) 
}</button>) 
}</div>) 
});
