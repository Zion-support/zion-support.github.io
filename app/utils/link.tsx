
interface LinkProps {
  href: string,
    children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string;}
}
export const Link: React.FC<LinkProps>= ({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  'aria-label': ariaLabel,
  ...props}
}) => {
  const handleClick = useCallback((...args) => {
    if (onClick) {
      onClick();}
    }
    // Handle internal navigation
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault()
      window.location.href = href;}
    }
 </LinkProps> </LinkProps>}</LinkProps>
  return <//LinkProps>(<//LinkProps><a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >{childre</a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >n</a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >}</a>
  <//a> <//a> </a>
  )
}
export default Lin<//a>k<//a>