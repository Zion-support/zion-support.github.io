'use client'
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
  external?: boolean
  prefetch?: boolean
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
  'aria-label': ariaLabel,
  external = false,
  prefetch = false
}) => {
  // Determine if it's an external link
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  // Handle click events
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick()
    }

    // For external links, let the browser handle the navigation
    if (isExternal) {
      return
    }

    // For internal links, prevent default and use router navigation
    e.preventDefault()
    // Router navigation would be handled by React Router
  }

  // External link component
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  // Internal link component
  return (
    <RouterLink
      to={href}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </RouterLink>
  )
}

// Styled Link Component
export const StyledLink: React.FC<LinkProps & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'underline'
  size?: 'sm' | 'md' | 'lg'
}> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium transition-colors duration-200'

  const variantClasses = {
    primary: 'text-blue-600 hover:text-blue-700 focus:text-blue-700',
    secondary: 'text-gray-600 hover:text-gray-700 focus:text-gray-700',
    ghost: 'text-gray-500 hover:text-gray-700 focus:text-gray-700',
    underline: 'text-blue-600 hover:text-blue-700 focus:text-blue-700 underline hover:no-underline'
  }

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <Link
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    />
  )
}

// Button Link Component
export const ButtonLink: React.FC<LinkProps & {
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}> = ({
  variant = 'solid',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <Link
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    />
  )
}

// Icon Link Component
export const IconLink: React.FC<LinkProps & {
  icon: React.ReactNode
  iconPosition?: 'left' | 'right'
}> = ({
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </Link>
  )
}

export default Link