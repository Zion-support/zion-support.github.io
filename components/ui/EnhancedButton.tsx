export default function EnhancedButton ({
  className, variant = 'primary', size = 'md', fullWidth, ...props 
}: EnhancedButtonProps) {
  return (<button className= {
  clsx (baseStyles, sizeStyles[size], variantStyles[variant], fullWidth && 'w-full', className) 
}{
  ...props 
}/>) 
}