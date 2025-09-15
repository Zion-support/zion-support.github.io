import React from 'react'

export const AlertDialog = ({ open, onOpenChange, children }: any) => {
  if (!open) return null
  return (
    <div role="alertdialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={() => onOpenChange?.(false)} />
      <div className="relative z-10 w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-white">
        {children}
      </div>
    </div>
  )
}

export const AlertDialogContent = ({ className = '', children, ...props }: any) => (
  <div className={className} {...props}>{children}</div>
)
export const AlertDialogHeader = ({ children }: any) => <div className="mb-3">{children}</div>
export const AlertDialogFooter = ({ children }: any) => <div className="mt-4 flex gap-2 justify-end">{children}</div>
export const AlertDialogTitle = ({ children }: any) => <h2 className="text-lg font-semibold">{children}</h2>
export const AlertDialogDescription = ({ children }: any) => <p className="text-sm text-zinc-400">{children}</p>
export const AlertDialogAction = ({ children, onClick, className = '' }: any) => (
  <button onClick={onClick} className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${className}`}>{children}</button>
)
export const AlertDialogCancel = ({ children, onClick, className = '' }: any) => (
  <button onClick={onClick} className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium border ${className}`}>{children}</button>
)

export const Dialog = AlertDialog
export const DialogTrigger = ({ asChild, children, ...props }: any) => React.cloneElement(children, props)
export const DialogContent = AlertDialogContent
export const DialogHeader = AlertDialogHeader
export const DialogFooter = AlertDialogFooter
export const DialogTitle = AlertDialogTitle
export const DialogDescription = AlertDialogDescription

export default AlertDialog

