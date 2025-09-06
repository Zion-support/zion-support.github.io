


import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",

interface ApiDocsLayoutProps {
  children: React.ReactNode
}


interface ApiDocsLayoutProps {
  children: React.ReactNode
}




interface ApiDocsLayoutProps {
  children: React.ReactNode
}


export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {;
  const location = useLocation();
  const currentPath = location.pathname;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
  const currentPath = location.pathname;
  const location = useLocation(),
  const currentPath = location.pathname,
  

  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]


  return (
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}


                <Link
                  to={item && item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm"
                    currentPath === item && item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}>;
                  {item && item.title}
                </Link>;
              </li>;
            ))}

          </ul>;
        </nav>;
      </div>;


      {/* Main content */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">;
        {children}
      </div>;
    </div>;
  );
}

;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


export default ApiDocsLayout;

