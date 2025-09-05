
import React from "react";

interface ApiDocsLayoutProps {_children: React.ReactNode;}

export function ApiDocsLayout(_{_children}: ApiDocsLayoutProps) {_const _location = useLocation();
  const _currentPath = location.pathname;
  
  const _navigationItems = [
    { title: "Getting Started", _path: "/developers/docs/getting-started"},
    {_title: "API Reference", _path: "/developers/docs/reference"},
    {_title: "Webhooks", _path: "/developers/docs/webhooks"},
    {_title: "Sample Code", _path: "/developers/docs/samples"},
    {_title: "Error Codes & Rate Limits", _path: "/developers/docs/errors"}];

  return (_<div className="flex min-h-screen bg-zinc-950">
      {_/* Sidebar */}
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
        <Link to="/developers/docs" className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
            <span className="text-white font-bold">Z</span>
          </div>
          <span className="font-bold text-white">API Docs</span>
        </Link>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
            <Input 
              placeholder="Search documentation" 
              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />
          </div>
        </div>

        <nav>
          <ul className="space-y-1">
            {_navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={_item.path}
                  className={_cn(
                    "block px-3 py-2 rounded-md text-sm", _currentPath === item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}
                >
                  {_item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {_/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {_children}
      </div>
    </div>
  );
}

export default ApiDocsLayout;
