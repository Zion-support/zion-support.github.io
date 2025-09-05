
<<<<<<< HEAD
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
<<<<<<< HEAD
} from "@/components/ui/sidebar",
=======
} from &quot;@/components/ui/sidebar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_Sidebar, _SidebarContent, _SidebarGroup, _SidebarMenuItem, _// SidebarMenu, _// Removed
  // SidebarMenuButton, _// Removed
  // SidebarGroupLabel, _// Not needed
  // SidebarGroupContent, _// Not needed} from "@/components/ui/sidebar";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function AppSidebar() {_return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup title=&quot;Dashboard&quot;>
          <SidebarMenuItem href=&quot;/creator-dashboard&quot; icon={<Home size={16} />}>
            <span>Home</span>
          </SidebarMenuItem>
<<<<<<< HEAD
          <SidebarMenuItem href=&quot;/messaging&quot; icon={<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/notifications&quot; icon={<Bell size={16} />}>
=======
          <SidebarMenuItem href="/messaging" icon={_<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/notifications" icon={_<Bell size={16} />}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <span>Notifications</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
<<<<<<< HEAD
        <SidebarGroup title=&quot;Content&quot;>
          <SidebarMenuItem href=&quot;/publish&quot; icon={<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/analytics&quot; icon={<Search size={16} />}>
=======
        <SidebarGroup title="Content">
          <SidebarMenuItem href="/publish" icon={_<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/analytics" icon={_<Search size={16} />}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <span>Analytics</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
<<<<<<< HEAD
        <SidebarGroup title=&quot;Settings&quot;>
          <SidebarMenuItem href=&quot;/profile&quot; icon={<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href=&quot;/settings&quot; icon={<Settings size={16} />}>
=======
        <SidebarGroup title="Settings">
          <SidebarMenuItem href="/profile" icon={_<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/settings" icon={_<Settings size={16} />}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
