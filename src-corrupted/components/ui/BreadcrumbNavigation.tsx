 interface BreadcrumbNavigationProps {
 items?: BreadcrumbItem[]; className?: string; showHome?: boolean; 
}; export const BreadcrumbNavigation: Reac t.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;

</BreadcrumbNavigationProps>