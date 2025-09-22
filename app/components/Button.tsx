import { ReactNode, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  ariaLabel?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-pressed'?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  loadingText,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-pressed': ariaPressed,
  ...props
}, ref) => {
  const baseStyles = [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95 transform',
    'relative overflow-hidden',
    fullWidth && 'w-full'
  ]
  
  const variants = {
    primary: [
      'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
      'hover:from-blue-600 hover:to-purple-700 hover:shadow-lg',
      'focus:ring-blue-500 focus:ring-offset-2',
      'dark:from-blue-600 dark:to-purple-700'
    ],
    secondary: [
      'bg-gray-800 text-white hover:bg-gray-700',
      'focus:ring-gray-500 focus:ring-offset-2',
      'dark:bg-gray-700 dark:hover:bg-gray-600'
    ],
    outline: [
      'border border-gray-300 text-gray-700',
      'hover:bg-gray-50 hover:border-gray-400',
      'focus:ring-gray-500 focus:ring-offset-2',
      'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500'
    ],
    ghost: [
      'text-gray-600 hover:bg-gray-100',
      'focus:ring-gray-500 focus:ring-offset-2',
      'dark:text-gray-400 dark:hover:bg-gray-800'
    ],
    destructive: [
      'bg-red-600 text-white hover:bg-red-700',
      'focus:ring-red-500 focus:ring-offset-2',
      'dark:bg-red-700 dark:hover:bg-red-800'
    ],
    success: [
      'bg-green-600 text-white hover:bg-green-700',
      'focus:ring-green-500 focus:ring-offset-2',
      'dark:bg-green-700 dark:hover:bg-green-800'
    ]
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-md gap-1.5',
    md: 'px-4 py-2.5 text-base rounded-lg gap-2',
    lg: 'px-6 py-3 text-lg rounded-lg gap-2.5',
    xl: 'px-8 py-4 text-xl rounded-xl gap-3'
  }

  const isDisabled = disabled || loading
  const displayText = loading && loadingText ? loadingText : children

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-busy={loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <Loader2 
          className="animate-spin h-4 w-4" 
          aria-hidden="true"
        />
      )}
      
      {/* Left icon */}
      {!loading && leftIcon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      
      {/* Button text */}
      <span className={loading ? 'opacity-70' : ''}>
        {displayText}
      </span>
      
      {/* Right icon */}
      {!loading && rightIcon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
      
      {/* Ripple effect overlay */}
      <span 
        className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        aria-hidden="true"
      />
    </button>
  )
})

Button.displayName = 'Button'

export default Button