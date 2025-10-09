import React from 'react',
interface LinkProps {
  href: string,
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export const Link: React.FC<LinkProps> = ({
  href, children, className, target,
  rel,
  onClick,
  'aria-label': ariaLabel,
  ...props;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick()
    }
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault()
      window.location.href = href;
    }
  }
  return (
    <a;
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick} onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  )
}
export default Link;