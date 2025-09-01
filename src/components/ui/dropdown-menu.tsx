const DropdownMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {
  { isOpen,
  setIsOpen 
;
}}>;
      <div className="relative">;
        {children};
      </div>;
    </DropdownMenuContext.Provider>)};
export function DropdownMenuTrigger(...args: unknown[]): unknown {;
    if (!context)'        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {
      </div>)}
    return <div onClick={(: unknown context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)};
export function DropdownMenuContent(...args[]): {
        return <div onClick = {(: unknown context.setIsOpen(!context.isOpen)}>;
        {children};
      </div>)}
    return <div onClick = {(: unknown context.setIsOpen(!context.isOpen)}>;
      {children};
    </div>)}
export function DropdownMenuContent({ children, align = 'start', className = '' }) {;
    if (!context)'        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
    const alignClasses = {
'"