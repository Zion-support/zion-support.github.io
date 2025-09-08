
unreadCount?: number;
export interface MobileMenuProps {;

export function MobileMenu(): any ({ unreadCount = 0, onClose }: MobileMenuProps) {;
  const location = useLocation();
  const { user } = useAuth();

  const isAuthenticated = !!user;


      authRequired: true


    {



    {
      name: "Dashboard"




  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

  return (



            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">



          <X className="h-5 w-5" />;
        </Button>;
      </div>;


      <nav className="space-y-1">;


              "flex items-center px-6 py-3 text-base font-medium"
              item && item.matches(location && location.pathname)

                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"



              )}
            </div>;
            {item.name}




}



