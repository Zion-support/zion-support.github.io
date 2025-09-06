

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode
  className?: string;
  children?: React && React.ReactNode;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}


export function SidebarContent(): any ({ className, children, ...props }: SidebarContentProps) {;

  return (

    <div className={cn("flex-1 px-2 py-4", className)} {...props}>

}
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
