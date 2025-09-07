import React from 'react'
import Link from 'next/link'
interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({

  children
  variant = "primary"
  size = "md"
  className = ""
  onClick
  disabled = false
  type = "button"
  asChild = false
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100'
  }
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  const content = <>{children}</>
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
export default Button