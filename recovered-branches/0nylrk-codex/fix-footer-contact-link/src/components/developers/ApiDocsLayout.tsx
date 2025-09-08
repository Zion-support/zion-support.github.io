
<<<<<<< HEAD

  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]

=======
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input",

import { cn } from "@/lib/utils",
interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Link
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"

<<<<<<< HEAD

=======
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
      <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {children}
      </div>
    </div>
  )
}
export default ApiDocsLayout;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;
import { Link, useLocation } from "react-router-dom",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ApiDocsLayoutProps {;
  }
  "children": React.ReactNode;
}
;
export function ApiDocsLayout() {;
  }
  const navigationItems = [;
    { "title": "Getting Started", "path": "/developers/docs/getting-started" },;"
    { "title": "API Reference", "path": "/developers/docs/reference" },;"
    { "title": "Webhooks", "path": "/developers/docs/webhooks" },;"
    { "title": "Sample Code", "path": "/developers/docs/samples" },;"
    { "title": "Error Codes & Rate Limits", "path": "/developers/docs/errors" }],;"
  return (;
    <div className="flex min-h-screen bg-zinc-950">;"
<<<<<<< HEAD

      {/* Sidebar */}

=======
  const location = useLocation(),
  const currentPath = location.pathname,

  const navigationItems = [
    { title: "Getting Started", path: "/developers/docs/getting-started" }
    { title: "API Reference", path: "/developers/docs/reference" }
    { title: "Webhooks", path: "/developers/docs/webhooks" }
    { title: "Sample Code", path: "/developers/docs/samples" }

    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }]

  return ("
    <div className="flex min-h-screen bg-zinc-950">;
      {/* Sidebar */}

                <Link;
                  to={item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm",
                    currentPath === item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
>>>>>>> origin/cursor/delete-old-data-records-6bba


            <span className="text-white font-bold">Z</span>;
          </div>;"
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
        <div className="mb-6">;"
          <div className="relative">;"
            <Search className="absolute left-2 top-2 && 2.5 h-4 w-4 text-zinc-500" />;
            <Input"
              placeholder="Search documentation" "

              className="pl-8 bg-zinc-900 border-zinc-800 focus:border-zion-purple"
            />;
          </div>;
        </div>;

                  to={item && item.path}
                  className={cn("
                    "block px-3 py-2 rounded-md text-sm"
                    currentPath === item && item.path"
                      ? "bg-zion-purple/20 text-zion-cyan""

                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}>;
                  {item && item.title}
                </Link>;
              </li>;
            ))}


        {children}
      </div>;
    </div>;
  );

}

<<<<<<< HEAD



;


export default ApiDocsLayout;



=======
export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {


export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
