

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;

interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}

