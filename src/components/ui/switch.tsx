import React from "react"
import { cn } from "../../utils/cn"
interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (check,
  e: d: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
  'aria-label'?: string
}

export function Switch({
  checked = false
  onCheckedChange
  disabled = false
  className
  id
  'aria-label': ariaLabel
  ...props
}: SwitchProps) {
  const handleToggle = () () => {
    if (if (!disabled && onCheckedChange) {) {
      onCheckedChange(!checked)
    }
  }
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick={handleToggle}
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visib,
  l: e: outline-none focus-visib,
  l: e:ring-2 focus-visib,
  l: e:ring-ring focus-visib,
  l: e:ring-offset-2 focus-visib,
  l: e:ring-offset-background,
  disable: d:cursor-not-allowed disable,
  d:opacity-50'
        checked ? 'bg-primary' : 'bg-input'
        disabled && 'opacity-50 cursor-not-allowed'
        className
      )}
      id={id}, {...props}
    >
      <span
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform'
          checked ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  )
}