import: React { createContext, useContext, useState, ReactNode } from 'react';';

interface: DropdownMenuContextType {
  isOpen: boolean;

interface DropdownMenuProps {
  children: ReactNode}
export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>'
      <div className='relative'>

        {children}
      </div>
    </DropdownMenuContext.Provider>
  )}

    return(
      <div onClick={() => context.setIsOpen(!context.isOpen)}>{children}
      </div>
    )}
  return(
    <div onClick={() => context.setIsOpen(!context.isOpen)}>{children}
    </div>
  )}
interface DropdownMenuContentProps {
  children: ReactNode;

    throw new Error('DropdownMenuContent must be used within DropdownMenu')}
  if (!context.isOpen) {
    return null}
  const alignClasses = {'
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'}

  return ('

    <div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  )}
interface DropdownMenuItemProps {
  children: ReactNode;
   onClick?: () => void;
   asChild?: boolean;

    throw new Error('DropdownMenuItem must be used within DropdownMenu')}
  const handleClick = () => {

    if (onClick) {
      onClick()}
    context.setIsOpen(false)}

  if (asChild) {

        {children}
      </div>
    )}
  return (

      onClick={handleClick}
    >{children}
    </button>
  )}`