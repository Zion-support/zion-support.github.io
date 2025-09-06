<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import {
  Sidebar;
  SidebarContent;
  SidebarGroup;
  SidebarMenuItem;
  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
<<<<<<< HEAD
  // SidebarGroupContent, // Not needed;
} from '@/components/ui/sidebar';
=======

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
import {
  Sidebar;
  SidebarContent;
  SidebarGroup;
  SidebarMenuItem;
  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar";
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
<<<<<<< HEAD
<<<<<<< HEAD
        <SidebarGroup title='Dashboard'>
          <SidebarMenuItem href='/creator-dashboard' icon={<Home size={16} />}>
=======
        <SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
