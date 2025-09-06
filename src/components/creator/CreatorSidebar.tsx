<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import {

  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users
} from 'lucide-react'; import {
<<<<<<< HEAD
  Sidebar
  SidebarContent
  SidebarGroup
  SidebarMenuItem

  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
<<<<<<< HEAD
} from '@/components/ui/sidebar'
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar"
  Sidebar
  SidebarContent
  SidebarGroup
  SidebarMenuItem
  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar"
=======
} from "@/components/ui/sidebar";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
<<<<<<< HEAD
        <SidebarGroup title='Dashboard'>
          <SidebarMenuItem href='/creator-dashboard' icon={<Home size={16} />}>
            <span>Home</span>
          </SidebarMenuItem>
          <SidebarMenuItem href='/messaging' icon={<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>
          <SidebarMenuItem href='/notifications' icon={<Bell size={16} />}>
            <span>Notifications</span>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup title='Content'>
          <SidebarMenuItem href='/publish' icon={<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>
          <SidebarMenuItem href='/analytics' icon={<Search size={16} />}>
            <span>Analytics</span>
          </SidebarMenuItem>
        </SidebarGroup>
        <SidebarGroup title='Settings'>
          <SidebarMenuItem href='/profile' icon={<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span>Settings</span>            <span>Home</span>
=======
        <SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
    </Sidebar>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
