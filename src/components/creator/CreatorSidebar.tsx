
<<<<<<< HEAD
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react';
import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenuItem,;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
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
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        ;
        <SidebarGroup title="Content">;
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
        ;
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
  ),;
=======
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar",import {_Sidebar, _SidebarContent, _SidebarGroup, _SidebarMenuItem, _// SidebarMenu, _// Removed
  // SidebarMenuButton, _// Removed
  // SidebarGroupLabel, _// Not needed
  // SidebarGroupContent, _// Not needed} from "@/components/ui/sidebar";

export function AppSidebar() {_return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup title=&quot;Dashboard&quot;>
          <SidebarMenuItem href=&quot;/creator-dashboard&quot; icon={<Home size={16} />}>
            <span>Home</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/messaging&quot; icon={<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/notifications&quot; icon={<Bell size={16} />}>            <span>Notifications</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
        <SidebarGroup title=&quot;Content&quot;>
          <SidebarMenuItem href=&quot;/publish&quot; icon={<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/analytics&quot; icon={<Search size={16} />}>            <span>Analytics</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
        <SidebarGroup title=&quot;Settings&quot;>
          <SidebarMenuItem href=&quot;/profile&quot; icon={<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/settings&quot; icon={<Settings size={16} />}>            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
