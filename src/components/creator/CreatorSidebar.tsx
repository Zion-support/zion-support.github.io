
import {_Sidebar, _SidebarContent, _SidebarGroup, _SidebarMenuItem, _// SidebarMenu, _// Removed
  // SidebarMenuButton, _// Removed
  // SidebarGroupLabel, _// Not needed
  // SidebarGroupContent, _// Not needed} from "@/components/ui/sidebar";

export function AppSidebar() {_return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/messaging" icon={_<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/notifications" icon={_<Bell size={16} />}>
            <span>Notifications</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
        <SidebarGroup title="Content">
          <SidebarMenuItem href="/publish" icon={_<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/analytics" icon={_<Search size={16} />}>
            <span>Analytics</span>
          </SidebarMenuItem>
        </SidebarGroup>
        
        <SidebarGroup title="Settings">
          <SidebarMenuItem href="/profile" icon={_<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href="/settings" icon={_<Settings size={16} />}>
            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
