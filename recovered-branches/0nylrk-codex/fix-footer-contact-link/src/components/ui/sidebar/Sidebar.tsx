

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
}
export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <div

        className

      )}
      {...props}
    >
      {children}
    </div>
  )
}