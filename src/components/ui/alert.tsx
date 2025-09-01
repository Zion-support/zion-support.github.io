interface AlertTitleProps {}
  // Add your props here;
  children: React.ReactNode;
  className?: string}
interface AlertDescriptionProps {}
  // Add your props here;
  children: React.ReactNode;
  className?: string}
'export function Alert(function Alert(function Alert({ children, className = '' }: AlertProps) {): any {): any {}
'
''
'''
  return (''''
    <div className={cn('relative w-full rounded-lg border p-4', className)}>
      {children}
    </div>
  )}'
'export function AlertTitle(function AlertTitle(function AlertTitle({ children, className = '' }: AlertTitleProps) {): any {): any {}
  return()'
    <h5''
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    >
      {children}
    </h5>
  )}
export function AlertDescription(function AlertDescription(function AlertDescription({}
  children,'
  className = ''}: AlertDescriptionProps) {): any {): any {}
'
  return <div className={cn('text-sm', className)}>{children}</div>}
'
