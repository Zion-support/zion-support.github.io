
<<<<<<< HEAD
<<<<<<< HEAD
import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react",
=======
import { Bell, FileText, Home, Mail, Search, Settings, Users } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
<<<<<<< HEAD
  SidebarGroupContent} from "@/components/ui/sidebar",
=======
  SidebarGroupContent} from &quot;@/components/ui/sidebar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_Sidebar, _SidebarContent, _SidebarGroup, _SidebarMenu, _SidebarMenuItem, _SidebarMenuButton, _SidebarGroupLabel, _SidebarGroupContent} from "@/components/ui/sidebar";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function AppSidebar() {_return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href=&quot;/creator-dashboard&quot;>
                    <Home size={16} />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/messaging&quot;>
                    <Mail size={16} />
=======
                  <a href="/messaging">
                    <Mail size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/notifications&quot;>
                    <Bell size={16} />
=======
                  <a href="/notifications">
                    <Bell size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/publish&quot;>
                    <FileText size={16} />
=======
                  <a href="/publish">
                    <FileText size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>My Content</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/analytics&quot;>
                    <Search size={16} />
=======
                  <a href="/analytics">
                    <Search size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/profile&quot;>
                    <Users size={16} />
=======
                  <a href="/profile">
                    <Users size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
<<<<<<< HEAD
                  <a href=&quot;/settings&quot;>
                    <Settings size={16} />
=======
                  <a href="/settings">
                    <Settings size={_16} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
