
import { cn } from "@/lib/utils";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

