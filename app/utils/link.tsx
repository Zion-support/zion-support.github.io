import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
  'aria-label': ariaLabel
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <RouterLink
      to={href}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </RouterLink>
  )
}

export default Link