import {Link, useLocation} from "react-router-dom";""
import {cn} from "@/lib/utils";""
import {useAuth} from "@/hooks/useAuth";""
import {MessageSquare} from "lucide-react";"
interface MainNavigationProps {;
"
import { Link, useLocation } from "react-router-dom",""
import { cn } from "@/lib/utils",""
import { useAuth } from "@/hooks/useAuth";""
import { MessageSquare } from "lucide-react";""
import { useAuth } from "@/hooks/useAuth",""
import { MessageSquare } from "lucide-react","
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation(): any ({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();




interface MainNavigationProps {
  // TODO: Implement
  isAdmin?: boolean,
  unreadCount?: number,


export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const location = useLocation(),
  
  const links = [
    {"
      name: "Home"","
  href: "/"""
      matches: (path: string) => path === "/""
    },


      name: "Marketplace"","
  href: "/marketplace"""
      matches: (path: string) => path.startsWith("/marketplace")"


      name: "Categories"","
  href: "/categories"""
      matches: (path: string) => path.startsWith("/categories")"


      name: "Talent"","
  href: "/talent"""
      matches: (path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")"


      name: "Equipment"","
  href: "/equipment"""
      matches: (path: string) => path.startsWith("/equipment")"


      name: "Community"","
  href: "/community"""
      matches: (path: string) => path.startsWith("/community") |path.startsWith("/forum")"

]
  ],
  


  // Add authenticated-only links;
  if (isAuthenticated) {
    links.push({"
      name: "Dashboard"","
  href: "/dashboard"")"
      matches: (path: string) => path === "/dashboard" |path === "/client-dashboard" |path === "/talent-dashboard""
    })
  // Add admin-only links;
  if (isAdmin) {
      name: "Analytics"","
  href: "/analytics"")"
      matches: (path: string) => path.startsWith("/analytics")"


  return ()"
    <nav className={cn("ml-6 hidden md:flex", className)}>"
</nav>"
      <ul className="flex items-center gap-1">"
</ul>
          <li key={link.name}>
</li>
            <Link;
              to={link.href}
              className={cn("
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",")
                link.matches(location.pathname)"
                  ? "bg-zion-purple/20 text-zion-cyan"""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"""
import { Link, useLocation } from "react-router-dom",;""
import { cn } from "@/lib/utils",;""
import { useAuth } from "@/hooks/useAuth",;""
import { MessageSquare } from "lucide-react",;"
  isAdmin?: boolean,;
  unreadCount?: number,;
;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const location = useLocation(),;

  const links = [;
    {;"
      name: "Home",;""
      href: "/",;""
      matches: (path: string) => path === "/";"
    <nav className={cn("ml-6 hidden md:flex", className)}>;"
      <ul className="flex items-center gap-1">;"
          <li key={link && link.name}>;
              to={link && link.href}
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"")
                link && link.matches(location && location.pathname)"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan""
              )}>;
</ul>"
          <li key={link.name}>;
              className={cn(;"
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors";")
                link.matches(location.pathname);"
                  ? "bg-zion-purple/20 text-zion-cyan";""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan";"
              )}
            >

            
          <li>;
            <Link;"
              to="/messages""
              className={cn(

                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative"""
                location && location.pathname === "/messages" || location && location.pathname === "/inbox"""
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",""
                location.pathname === "/messages" || location.pathname === "/inbox"""
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"")

            
          </li>;

              to="/messages";"
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",;""
                location.pathname === "/messages" || location.pathname === "/inbox";""
                  :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";")
            >;
              <MessageSquare className="w-4 h-4 mr-1" />;"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;"
</span>
                </span>;
      </ul>;
    </nav>;"
    <nav className={cn ("ml - 6 hidden md:flex", class_name)}>;"
      <ul className="flex items - center gap - 1">;"
              className={cn ("
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors";")
                link.matches (location.pathname);"
                  ? "bg - zion - purple / 20 text - zion - cyan";""
                  : "text - white hover:bg - zion - purple / 10 hover:text - zion - cyan")}"

          </li>))}
                "inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors relative";""
                  ? "bg - zion - purple / 20 text - zion - cyan";")"
              <MessageSquare className="w - 4 h - 4 mr - 1" />;"
                <span className="absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center">;"
                </span>)}
          </li>)}
    </nav>);
}return (<nav className= {)"
  cn ("ml-6 hidden md:flex", className)""
}> <ul className="flex items-center gap-1" > {"
</nav>
  links.map ( (link) => (<li key= {
  link.name;
}> <Link to= {
</li>)
} </li>) ) "
  isAuthenticated && (<li> <Link to="/messages" className= {"
</li>"
}> <MessageSquare className="w-4 h-4 mr-1" /> Messages {"
)
}</span>) 
} </li>) 
}</ul> </nav>) "
              <MessageSquare className="w-4 h-4 mr-1" />"
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">"
            
    </nav>]"