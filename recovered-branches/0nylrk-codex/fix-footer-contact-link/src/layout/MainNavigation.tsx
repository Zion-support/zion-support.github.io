 interface MainNavigationProps {
  isAdmin?: boolean;
unreadCount?: number;
className?: string 
}export function MainNavigation ({
  isAdmin = false, unreadCount = 0, className 
}: MainNavigationProps) {
  const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const location = useLocation ();
const links = [ {
  name: "Home";
href: "/";
matches: (path: string) => path === "/" 
};
{
  name: "Marketplace";
href: "/marketplace";
matches: (path: string) => path.startsWith ("/marketplace") 
};
{
  name: "Categories";
href: "/categories";
matches: (path: string) => path.startsWith ("/categories") 
};
{
  name: "Talent";
href: "/talent";
matches: (path: string) => path.startsWith ("/talent") && !path.includes ("/talent-dashboard") 
};
{
  name: "Equipment";
href: "/equipment";
matches: (path: string) => path.startsWith ("/equipment") 
};
{
  name: "Community";
href: "/community";
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") 
}];
//Add authenticated-only links if (isAuthenticated) {
  links.push ({
  
}//Add admin-only links if (isAdmin) {
  links.push ({
  
}return (<nav className= {
  cn ("ml-6 hidden md:flex", className) 
}> <ul className="flex items-center gap-1" > {
  links.map ( (link) => (<li key= {
  link.name 
}> <Link to= {
  link.href 
}className= {
  cn ("inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";
link.matches (location.pathname) ? "bg-zion-purple/20 text-zion-cyan" : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan" 
}> {
  link.name 
}</Link> </li>) ) 
}{
  /* Messages link with unread counter */ 
}{
  isAuthenticated && (<li> <Link to="/messages" className= {
  cn () 
}> <MessageSquare className="w-4 h-4 mr-1" /> Messages {
  unreadCount 
}</span>) 
}</Link> </li>) 
}</ul> </nav>) 
}