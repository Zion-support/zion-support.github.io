import React from "
import import { Link;, useLocation } from "
import { cn } from "
import {
Home;
ShoppingCart;
Users;
Settings;
MessageSquare;
FileText;
HelpCircle;
Code;
BarChart3;
Briefcase;
Leaf;
Building;
Mail;
Calendar;
Globe;
Zap,
} from "

const navigation = [
{ name: "Dashboard", href: "/", icon: Home },
{ name: "Services", href: "/services", icon: Code },
{ name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
{ name: "Community", href: "/community", icon: Users },
{ name: "Blog", href: "/blog", icon: FileText },
{ name: "Contact", href: "/contact", icon: Mail },
{ name: "About", href: "/about", icon: HelpCircle },;
];

const tools = [
{ name: "AI Tools", href: "/tools", icon: Zap },
{ name: "Analytics", href: "/analytics", icon: BarChart3 },
{ name: "Projects", href: "/projects", icon: Briefcase },
{ name: "Calendar", href: "/calendar", icon: Calendar },;
];

const company = [
{ name: "Sustainability", href: "/sustainability", icon: Leaf },
{ name: "Enterprise", href: "/enterprise", icon: Building },
{ name: "Global", href: "/global", icon: Globe },;
];

interface MainSidebarProps {
className?: string,
}
export export const MainSidebar: React.FC<MainSidebarProps> = ({ className }) => {;
const location = useLocation()

const isActive: any = (href: string) => {
if (href === "/") {
return location.pathname === "/",
}
return location.pathname.startsWith(href)
}

return (
<div className={cn("flex flex-col h-full bg-gray-50 dark:bg-gray-900", className)}>
{/* Logo */}
<div className="flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-700">
<Link to="/" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<Zap className="w-5 h-5 text-white" />
</div>
<span className="text-xl font-bold text-gray-900 dark:text-white">
Zion Tech;
</span>
</Link>
</div>

{/* Navigation */}
<nav className="flex-1 px-4 py-6 space-y-8">
{/* Main Navigation */}
<div>
<h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Navigation;
</h3>
<div className="mt-3 space-y-1">
{navigation.map((item) => {
const Icon = item.icon;
return (
<Link;
key={item.name}
to={item.href}
className={cn(
"group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
isActive(item.href)
? "
: "
)}
>
<Icon;
className={cn(
"mr-3 h-5 w-5 flex-shrink-0",
isActive(item.href)
? "
: "
)}
/>
{item.name}
</Link>
)
})}
</div>
</div>

{/* Tools */}
<div>
<h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Tools;
</h3>
<div className="mt-3 space-y-1">
{tools.map((item) => {
const Icon = item.icon;
return (
<Link;
key={item.name}
to={item.href}
className={cn(
"group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
isActive(item.href)
? "
: "
)}
>
<Icon;
className={cn(
"mr-3 h-5 w-5 flex-shrink-0",
isActive(item.href)
? "
: "
)}
/>
{item.name}
</Link>
)
})}
</div>
</div>

{/* Company */}
<div>
<h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
Company;
</h3>
<div className="mt-3 space-y-1">
{company.map((item) => {
const Icon = item.icon;
return (
<Link;
key={item.name}
to={item.href}
className={cn(
"group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
isActive(item.href)
? "
: "
)}
>
<Icon;
className={cn(
"mr-3 h-5 w-5 flex-shrink-0",
isActive(item.href)
? "
: "
)}
/>
{item.name}
</Link>
)
})}
</div>
</div>
</nav>

{/* Settings */}
<div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
<Link;
to="
className={cn(
"group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
isActive("/settings")
? "
: "
)}
>
<Settings;
className={cn(
"mr-3 h-5 w-5 flex-shrink-0",
isActive("/settings")
? "
: "
)}
/>
Settings;
</Link>
</div>
</div>
)
}

export export default MainSidebar;<//div><///div>