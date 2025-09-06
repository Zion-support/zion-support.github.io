 function Badge ({
  className, variant, ...props 
}: BadgeProps) {
  return (<span className= {
  cn (badgeVariants ({
  variant 
}), className) 
}{
  ...props 
}/>) 
}export {
  Badge, badgeVariants 
}