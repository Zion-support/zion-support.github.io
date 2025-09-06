


<<<<<<< HEAD

import {

import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
=======

=======
import {



import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react";
import {

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,

<<<<<<< HEAD
  Users,;
} from "lucide-react";
=======
import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenu,;
  SidebarMenuItem,;
  SidebarMenuButton,;
  SidebarGroupLabel,;
<<<<<<< HEAD
  SidebarGroupContent,;



} from "@/components/ui/sidebar";

export function AppSidebar() {;
  return (


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
} from "@/components/ui/sidebar";
export function AppSidebar() {;
  return (
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
        


        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                  </a>
=======
                  </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/analytics">
                    <Search size={16} />
                    <span>Analytics</span>
<<<<<<< HEAD
                  </a>
=======
                  </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                  </a>
=======
                  </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings size={16} />
                    <span>Settings</span>
<<<<<<< HEAD
                  </a>
=======
                  </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
<<<<<<< HEAD

=======
    </Sidebar>
  );
}
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
  SidebarGroupContent} from "@/components/ui/sidebar",;
;
export function AppSidebar() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD

                <SidebarMenuButton as_child>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span > Messages</span>;

=======
                <SidebarMenuButton asChild>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span>Messages</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD

                <SidebarMenuButton as_child>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span > Notifications</span>;

=======
                <SidebarMenuButton asChild>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span>Notifications</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD

        <SidebarGroup>;
          <SidebarGroupLabel > Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span > My Content</span>;

=======
        ;
        <SidebarGroup>;
          <SidebarGroupLabel>Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span>My Content</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD

                <SidebarMenuButton as_child>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span > Analytics</span>;

=======
                <SidebarMenuButton asChild>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span>Analytics</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD

        <SidebarGroup>;
          <SidebarGroupLabel > Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span > Profile</span>;

=======
        ;
        <SidebarGroup>;
          <SidebarGroupLabel>Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span>Profile</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD

                <SidebarMenuButton as_child>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span > Settings</span>;

=======
                <SidebarMenuButton asChild>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span>Settings</span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
      </SidebarContent>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    </Sidebar>


    </Sidebar>;
  );
<<<<<<< HEAD
=======
    </Sidebar>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
    </Sidebar>);
}
    </Sidebar>);
}
    </Sidebar>;
  ),;}
 import {
  Sidebar;
SidebarContent;
SidebarGroup;
SidebarMenu;
SidebarMenuItem;
SidebarMenuButton;
SidebarGroupLabel;
return (<Sidebar> <SidebarContent> <SidebarGroup> <SidebarGroupLabel>Dashboard</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <a href="/creator-dashboard" > <Home size= {
  16 
}/> <span>Home</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Messages</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Notifications</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> <SidebarGroup> <SidebarGroupLabel>Content</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <span>My Content</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Analytics</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> <SidebarGroup> <SidebarGroupLabel>Settings</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Profile</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Settings</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> </SidebarContent> </Sidebar>) 
}
    </Sidebar>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
