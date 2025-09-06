



import {
<<<<<<< HEAD

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

=======
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
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD



=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
} from "@/components/ui/sidebar";

export function AppSidebar() {;
  return (


        
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


        
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


    </Sidebar>


    </Sidebar>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
    </Sidebar>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}