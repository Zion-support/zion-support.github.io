

<<<<<<< HEAD
=======
  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users


import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
  Users,;
} from 'lucide-react';import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenuItem,;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
  // SidebarGroupContent, // Not needed;
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
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;

        <SidebarGroup title="Content">;
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;

        <SidebarGroup title="Settings">;
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>;
            <span>Profile</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>;
            <span>Settings</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
      </SidebarContent>;

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'

    </Sidebar>;
  );
}
  );
}
}
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
