<<<<<<< HEAD
<<<<<<< HEAD

import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react";
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import {
<<<<<<< HEAD

  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users
} from "lucide-react";
import {
  Sidebar
  SidebarContent
  SidebarGroup
  SidebarMenu
  SidebarMenuItem
  SidebarMenuButton
  SidebarGroupLabel
  SidebarGroupContent
=======
=======




import {

import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
=======

>>>>>>> main
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
<<<<<<< HEAD
  Users,;
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/sidebar";

import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react",
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent} from "@/components/ui/sidebar",

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/messaging">
                    <Mail size={16} />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/notifications">
                    <Bell size={16} />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  Users,;
} from "lucide-react";
import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenu,;
  SidebarMenuItem,;
  SidebarMenuButton,;
  SidebarGroupLabel,;
  SidebarGroupContent,;



} from "@/components/ui/sidebar";

export function AppSidebar() {;
  return (


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/publish">
                    <FileText size={16} />
                    <span>My Content</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/analytics">
                    <Search size={16} />
                    <span>Analytics</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/profile">
                    <Users size={16} />
                    <span>Profile</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings size={16} />
                    <span>Settings</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </Sidebar>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react",;
import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenu,;
  SidebarMenuItem,;
  SidebarMenuButton,;
  SidebarGroupLabel,;
  SidebarGroupContent} from "@/components/ui/sidebar";
export function AppSidebar() {;
  return (;
=======

>>>>>>> main
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup>;
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/creator-dashboard">;
                    <Home size={16} />;
                    <span>Home</span>;
<<<<<<< HEAD
=======
=======
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
  Users,
} from './lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components / ui / sidebar';
;
export /**
 * AppSidebar - Function description
 */
function AppSidebar() {
  return (
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup>;
          <SidebarGroupLabel > Dashboard</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/creator - dashboard">;
                    <Home size={16} />;
                    <span > Home</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton asChild>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span>Messages</span>;
=======

                <SidebarMenuButton as_child>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span > Messages</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton asChild>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span>Notifications</span>;
=======

                <SidebarMenuButton as_child>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span > Notifications</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD
        <SidebarGroup>;
          <SidebarGroupLabel>Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span>My Content</span>;
=======

        <SidebarGroup>;
          <SidebarGroupLabel > Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span > My Content</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton asChild>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span>Analytics</span>;
=======

                <SidebarMenuButton as_child>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span > Analytics</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD
        <SidebarGroup>;
          <SidebarGroupLabel>Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span>Profile</span>;
=======

        <SidebarGroup>;
          <SidebarGroupLabel > Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span > Profile</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton asChild>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span>Settings</span>;
=======

                <SidebarMenuButton as_child>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span > Settings</span>;

>>>>>>> main
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
      </SidebarContent>;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </Sidebar>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


    </Sidebar>


    </Sidebar>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
    </Sidebar>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> main
