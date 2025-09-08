

import React from "react",
import { Link, useLocation } from "react-router-dom",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {

  const location = useLocation();
  const currentPath = location.pathname;
  const location = useLocation(),
  const currentPath = location.pathname,
  
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
      <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">;
        <Link to="/developers/docs" className="flex items-center mb-8">;
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">;
            <span className="text-white font-bold">Z</span>;
          </div>;"
          <span className="font-bold text-white">API Docs</span>;
        </Link>;
        {children}
      </div>;
    </div>;
  );

}

export default ApiDocsLayout;;
export default ApiDocsLayout;
