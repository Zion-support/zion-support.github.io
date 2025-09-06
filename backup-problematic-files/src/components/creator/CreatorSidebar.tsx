<<<<<<< HEAD
import {
  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users
} from 'lucide-react'; import {
} from "@/components/ui/sidebar";
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>
            <span>Notifications</span>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup title="Content">
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>
            <span>Analytics</span>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup title="Settings">
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>
            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
  Users,;
} from 'lucide-react';import {;
=======

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react';
import {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenuItem,;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
<<<<<<< HEAD
} from '@/components/ui/sidebar';
  // SidebarGroupContent, // Not needed;
} from "@/components/ui/sidebar";
import {;
  Sidebar;
  SidebarContent;
  SidebarGroup;
  SidebarMenuItem;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
} from "@/components/ui/sidebar";
export function AppSidebar() {;
  return (
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup title='Dashboard'>;
          <SidebarMenuItem href='/creator-dashboard' icon={<Home size={16} />}>;
            <span>Home</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/messaging' icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/notifications' icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title='Content'>;
          <SidebarMenuItem href='/publish' icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/analytics' icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title='Settings'>;
          <SidebarMenuItem href='/profile' icon={<Users size={16} />}>;
            <span>Profile</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span>Settings</span>            <span>Home</span>;
          </SidebarMenuItem>;
=======
} from "@/components/ui/sidebar",;
;
export function AppSidebar() {;
  return (;
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup title="Dashboard">;
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>;
            <span>Home</span>;
          </SidebarMenuItem>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <SidebarGroup title="Content">;
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <SidebarGroup title="Settings">;
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>;
            <span>Profile</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>;
            <span>Settings</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
      </SidebarContent>;
    </Sidebar>;
<<<<<<< HEAD
  );
}
  );
}
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
} from '@/components / ui / sidebar';
  // SidebarGroupContent, // Not needed;
} from "@/components / ui / sidebar";
  Sidebar;
  SidebarContent;
  SidebarGroup;
  SidebarMenuItem;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
} from "@/components / ui / sidebar";
export /**
 * AppSidebar - Function description
 */
function AppSidebar() {
  return (
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup title='Dashboard'>;
          <SidebarMenuItem href='/creator - dashboard' icon={<Home size={16} />}>;
            <span > Home</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/messaging' icon={<Mail size={16} />}>;
            <span > Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/notifications' icon={<Bell size={16} />}>;
            <span > Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title='Content'>;
          <SidebarMenuItem href='/publish' icon={<FileText size={16} />}>;
            <span > My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/analytics' icon={<Search size={16} />}>;
            <span > Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title='Settings'>;
          <SidebarMenuItem href='/profile' icon={<Users size={16} />}>;
            <span > Profile</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span > Settings</span>            <span > Home</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;
            <span > Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;
            <span > Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title="Content">;
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;
            <span > My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;
            <span > Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        <SidebarGroup title="Settings">;
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>;
            <span > Profile</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>;
            <span > Settings</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
      </SidebarContent>;
    </Sidebar>);
}
=======
  ),;}
 return (<Sidebar> <SidebarContent> <SidebarGroup title="Dashboard" > <SidebarMenuItem href="/creator-dashboard" icon= {;
  <Home size= {;
  16 ;
}/> ;
}> <span>Home</span> </SidebarMenuItem> <span>Notifications</span> </SidebarMenuItem> </SidebarGroup> <span>Analytics</span> </SidebarMenuItem> </SidebarGroup> <span>Settings</span> </SidebarMenuItem> </SidebarGroup> </SidebarContent> </Sidebar>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
