import {
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

<<<<<<< HEAD
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

=======
>>>>>>> main
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/creator-dashboard">
                    <Home size={16} />
                    <span>Home</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/messaging">
                    <Mail size={16} />
                    <span>Messages</span>
<<<<<<< HEAD
                  </Link>
=======
                  </a>
>>>>>>> main
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/notifications">
                    <Bell size={16} />
                    <span>Notifications</span>
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
        
=======

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
        
=======

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
    </Sidebar>
<<<<<<< HEAD
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
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span>Messages</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span>Notifications</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
        <SidebarGroup>;
          <SidebarGroupLabel>Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span>My Content</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span>Analytics</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
        <SidebarGroup>;
          <SidebarGroupLabel>Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span>Profile</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span>Settings</span>;
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
      </SidebarContent>;
    </Sidebar>;
=======
>>>>>>> main
  );
}
;