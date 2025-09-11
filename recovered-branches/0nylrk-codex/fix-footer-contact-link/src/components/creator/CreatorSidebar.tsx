
import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react";
import {



import {

import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
=======

  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,

  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/publish">
                    <FileText size={16} />
                    <span>My Content</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/analytics">
                    <Search size={16} />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/profile">
                    <Users size={16} />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings size={16} />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

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

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;

                <SidebarMenuButton as_child>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span > Messages</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;

                <SidebarMenuButton as_child>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span > Notifications</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;

        <SidebarGroup>;
          <SidebarGroupLabel > Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span > My Content</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;

                <SidebarMenuButton as_child>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span > Analytics</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;

        <SidebarGroup>;
          <SidebarGroupLabel > Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span > Profile</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;

                <SidebarMenuButton as_child>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span > Settings</span>;

                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
      </SidebarContent>;
    </Sidebar>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
;
