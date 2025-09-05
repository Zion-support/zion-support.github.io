 export interface MobileMenuProps {
  unreadCount?: number;
onClose: () => void 
}export function MobileMenu ({
  unreadCount = 0, onClose 
}: MobileMenuProps) {
  const location = useLocation ();
const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const navItems = [ {
  name: "Home";
href: "/";
icon: Home;
matches: (path: string) => path === "/" 
};
{
  name: "Browse";
href: "/talent";
icon: Search;
matches: (path: string) => path.startsWith ("/talent") || path.startsWith ("/categories") || path.startsWith ("/marketplace") 
};
{
  name: "Community";
href: "/community";
icon: MessageCircle;
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
};
{
  name: "Post Job";
href: "/post-job";
icon: BriefcaseIcon;
matches: (path: string) => path.startsWith ("/post-job");
authRequired: true 
};
{
  name: "Messages";
href: "/messages";
icon: MessageSquare;
matches: (path: string) => path.startsWith ("/messages") || path.startsWith ("/inbox");
badge: unreadCount;
authRequired: true 
};
{
  name: "Dashboard";
href: "/dashboard";
icon: User;
matches: (path: string) => path.startsWith ("/dashboard");
authRequired: true 
}];
return () 
}onClick= {
  onClose 
}> {
  item.badge > 9 ? '9+' : item.badge 
}</span>) 
}</div> {
  item.name 
}</Link>) ) 
}</nav> </div>) 
}