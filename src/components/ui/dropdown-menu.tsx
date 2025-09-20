import React, { createContext, useContext, useState, ReactNode } from "react"
interface DropdownMenuContextType {
  isOp,
  e: n: boolean,setIsOp,
  e: n: (isOpe,
  n: boolean) => void
}

const DropdownMenuContext = createContext<DropdownMenuContextType | undefined>(undefined)
interface DropdownMenuProps {
  childr,
  e: n: ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DropdownMenuContext.Provider value={ isOpen, setIsOpen }>
      <div className="relative">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}

interface DropdownMenuTriggerProps {
  childr,
  e: n: ReactNode
  asChild?: boolean
}

export function DropdownMenuTrigger({ children, asChild = false }: DropdownMenuTriggerProps) {
  const context = useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('DropdownMenuTrigger must be used within DropdownMenu')
  }
  
  if (asChild) {
    return (
      <div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
      </div>
    )
  }
  
  return (
    <div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>
  )
}

interface DropdownMenuContentProps {
  childr,
  e: n: ReactNode
  align?: 'start' | 'center' | 'end',
  className?: string
}

export function DropdownMenuContent({ children, align = 'start', className = '' }: DropdownMenuContentProps) {
  const context = useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('DropdownMenuContent must be used within DropdownMenu')
  }
  
  if (!context.isOpen) {
    return null
  }
  
  const alignClasses = {
    sta,
  r: t: 'left-0',cent,
  e: r: 'left-1/2 transform -translate-x-1/2',e,
  n: d: 'right-0'
  }
  return (
    <div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  )
}

interface DropdownMenuItemProps {
  childr,
  e: n: ReactNode
  onClick?: () => void,
  asChild?: boolean,
  className?: string
}

export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }: DropdownMenuItemProps) {
  const context = useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('DropdownMenuItem must be used within DropdownMenu')
  }
  
  const handleClick = () () => {
    if (onClick) {
      onClick()
    }
    context.setIsOpen(false)
  }
  if (asChild) {
    return (
      <div className={`block w-full text-left px-4 py-2 text-sm text-gray-700,
  hove: r: bg-gray-100 cursor-pointer ${className}`}>
        {children}
      </div>
    )
  }
  
  return (
    <button 
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700,
  hove: r: bg-gray-100,
  focu: s:bg-gray-100 focu,
  s:outline-none ${className}`} 
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
