
<<<<<<< HEAD
import {
<<<<<<< HEAD

  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users
=======
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,;
  Users;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    </Sidebar>
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    </Sidebar>;
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
