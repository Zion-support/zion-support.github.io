 export const SidebarInput = React.forwardRef< React.ElementRef<typeof Input>;
React.ComponentProps<typeof Input> > ( (props, ref) => {
  return (<Input ref= {
  ref 
}) 
}{
  ...props 
}/>) 
}) SidebarInput.displayName = "SidebarInput" export const SidebarHeader = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarHeader.displayName = "SidebarHeader" export const SidebarFooter = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarFooter.displayName = "SidebarFooter" export const SidebarSeparator = React.forwardRef< HTMLDivElement;
React.ComponentProps<typeof Separator> > ( (props, ref) => {
  return (<Separator ref= {
  ref 
}/>) 
}) SidebarSeparator.displayName = "SidebarSeparator" export const SidebarContent = React.forwardRef< HTMLDivElement;
) 
}{
  ...props 
}/>) 
}) SidebarContent.displayName = "SidebarContent" export const SidebarGroup = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarGroup.displayName = "SidebarGroup" 