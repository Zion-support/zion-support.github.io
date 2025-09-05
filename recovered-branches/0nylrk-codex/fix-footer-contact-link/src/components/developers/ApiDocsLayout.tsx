
import React from &quot;react&quot;;
import { Link, useLocation } from &quot;react-router-dom&quot;;
import { Search } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface ApiDocsLayoutProps {
  children: React.ReactNode;
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navigationItems = [
    { title: &quot;Getting Started&quot;, path: &quot;/developers/docs/getting-started&quot; },
    { title: &quot;API Reference&quot;, path: &quot;/developers/docs/reference&quot; },
    { title: &quot;Webhooks&quot;, path: &quot;/developers/docs/webhooks&quot; },
    { title: &quot;Sample Code&quot;, path: &quot;/developers/docs/samples&quot; },
    { title: &quot;Error Codes & Rate Limits&quot;, path: &quot;/developers/docs/errors&quot; }];

  return (
    <div className=&quot;flex min-h-screen bg-zinc-950&quot;>
      {/* Sidebar */}
      <div className=&quot;hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto&quot;>
        <Link to=&quot;/developers/docs&quot; className=&quot;flex items-center mb-8&quot;>
          <div className=&quot;bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center&quot;>
            <span className=&quot;text-white font-bold&quot;>Z</span>
          </div>
          <span className=&quot;font-bold text-white&quot;>API Docs</span>
        </Link>

        <div className=&quot;mb-6&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-2 top-2.5 h-4 w-4 text-zinc-500&quot; />
            <Input 
              placeholder=&quot;Search documentation&quot; 
              className=&quot;pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple&quot;
            />
          </div>
        </div>

        <nav>
          <ul className=&quot;space-y-1&quot;>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    &quot;block px-3 py-2 rounded-md text-sm&quot;,
                    currentPath === item.path
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-zinc-400 hover:text-white hover:bg-zinc-900&quot;
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className=&quot;flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12&quot;>
        {children}
      </div>
    </div>
  );
}

export default ApiDocsLayout;
