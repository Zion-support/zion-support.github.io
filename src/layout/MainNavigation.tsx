 import {
  {
  {
  Heart, MessageSquare, CreditCard, ShoppingCart, Wallet 
}from 'lucide-react' import {
  {
  {
  LanguageSelector 
}from '@/components/header/LanguageSelector';
import {
  {
  {
  HoverCard, HoverCardTrigger, HoverCardContent 
}from '@/components/ui/hover-card';
import {
  {
  {
  MiniCartPreview 
}from '@/components/cart/MiniCartPreview';
import {
  {
  {
  LoginModal 
}from '@/components/auth/LoginModal';
interface MainNavigationProps {
  isAdmin?: boolean;
unreadCount?: number;
className?: string 
}export function MainNavigation ({
  isAdmin = false, unreadCount = 0, className 
}: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false), //Add state const {
  user 
}= useAuth ();
const isAuthenticated = !!user;
const [loginOpen, setLoginOpen] = useState (false);
const {
  count 
}= useFavorites ();
const {
  items 
}= useCart ();
const cartCount = items.length;
const router = useRouter (), //Changed from useLocation const {
  t 
}= useTranslation ();
const handleCartClick = (e: React.MouseEvent) => {
  if (!isAuthenticated) {
  e.preventDefault ();
setLoginOpen (true);
return 
}setIsMobileMenuOpen (false) 
};
const baseLinks = [ {
  key: 'home';
href: '/';
matches: (path: string) => path === '/' 
};
{
  key: 'marketplace';
href: '/marketplace';
matches: (path: string) => path.startsWith ('/marketplace') 
};
{
  key: 'categories';
href: '/categories';
matches: (path: string) => path.startsWith ('/categories') 
};
{
  key: 'talent';
href: '/talent';
matches: (path: string) => path.startsWith ('/talent') && !path.includes ('/talent-dashboard') 
};
{
  key: 'equipment';
href: '/equipment';
matches: (path: string) => path.startsWith ('/equipment') 
};
{
  key: 'community';
href: '/community';
matches: (path: string) => path.startsWith ('/community') || path.startsWith ('/forum') 
}];
const links = baseLinks.map (link => ({
  ...link, name: t (`nav.$ {
  link.key 
}`) 
}) );
//Add authenticated-only links if (isAuthenticated) {
  links.push ({
  key: 'dashboard';
name: t ('nav.dashboard');
href: '/dashboard';
matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard' 
}) 
}//Add admin-only links if (isAdmin) {
  links.push ({
  key: 'analytics';
name: t ('nav.analytics');
href: '/analytics';
matches: (path: string) => path.startsWith ('/analytics') 
}) 
}return (<> <button > <span className="navbar-toggler-icon" ></span> </button> <nav) 
}> {
  link.name 
}</Link> </li>) ) 
}<Link href="/wishlist" aria-label="Wishlist" onClick= {
  () => setIsMobileMenuOpen (false) 
}{
  count 
}</span>) 
}</Link> </li>) 
}<Link href="/wallet" aria-label="Wallet" onClick= {
  () => setIsMobileMenuOpen (false) 
}) 
}> <Wallet className="w-4 h-4" /> </Link> </li>) 
}<Link href="/messages" aria-label="Messages" onClick= {
  () => setIsMobileMenuOpen (false) 
}{
  unreadCount > 9 ? '9+' : unreadCount 
}</span>) 
}</Link> </li>) 
}? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan') 
}> {
  cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" > cartCount 
}</span>) 
}</Link> </HoverCardTrigger> <HoverCardContent> <MiniCartPreview /> </HoverCardContent> </HoverCard> </li> </ul> <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto" > <LanguageSelector /> </div> </div> </nav> <LoginModal isOpen= {
  loginOpen 
}onOpenChange= {
  setLoginOpen 
}/> </>) 
}