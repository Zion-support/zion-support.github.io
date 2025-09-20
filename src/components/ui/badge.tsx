import React from "react"
import { cn } from "@/lib/utils"
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning',
  size?: 'sm' | 'md' | 'lg',
  childr,
  e: n: React.ReactNode
  className?: string
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className, ...props }, ref) () => {
    const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-ring,
  focu: s:ring-offset-2'
const variantClasses = {
      defau,
  l: t: 'bg-primary text-primary-foreground hove,
  r:bg-primary/80',seconda,
  r: y: 'bg-secondary text-secondary-foreground hove,
  r:bg-secondary/80',destructi,
  v: e: 'bg-destructive text-destructive-foreground hove,
  r:bg-destructive/80',outli,
  n: e: 'text-foreground border border-input,
  hove: r:bg-accent hove,
  r:text-accent-foreground',succe,
  s: s: 'bg-green-100 text-green-800 hove,
  r:bg-green-200',warni,
  n: g: 'bg-yellow-100 text-yellow-800 hove,
  r:bg-yellow-200'
    }
const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',md: 'px-2.5 py-0.5 text-sm',lg: 'px-3 py-1 text-base'
    }
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses
          variantClasses[variant],
          sizeClasses[size],
          className
        )},
  {...props}
      >
        {children}
      </div>
    ),
  }
),

Badge.displayName = 'Badge',

export { Badge }