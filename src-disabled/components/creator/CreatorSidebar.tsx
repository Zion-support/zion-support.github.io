<<<<<<< HEAD
} from 'lucide-react'; import {
  Sidebar
  SidebarContent
  SidebarGroup
  SidebarMenuItem

<<<<<<< HEAD
<<<<<<< HEAD
} from "@/components/ui/sidebar";

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
=======
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Sidebar;
  SidebarContent;
  SidebarGroup;
  SidebarMenuItem;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
} from "@/components/ui/sidebar",

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
<SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>
=======

export function AppSidebar() {}
  return (
    <Sidebar>
      <SidebarContent>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          </SidebarMenuItem>
=======
"
        <SidebarGroup title="Dashboard">"
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>

          </SidebarMenuItem>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>
            <span>Messages</span>
          </SidebarMenuItem>"
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>
            <span>Notifications</span>
          </SidebarMenuItem>
</SidebarGroup>
<<<<<<< HEAD
        <SidebarGroup title="Content">
=======
        </SidebarGroup>"
        <SidebarGroup title="Content">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>
            <span>My Content</span>
          </SidebarMenuItem>"
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>
            <span>Analytics</span>
          </SidebarMenuItem>
</SidebarGroup>
<<<<<<< HEAD
        <SidebarGroup title="Settings">
=======
        </SidebarGroup>"
        <SidebarGroup title="Settings">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>
            <span>Profile</span>
          </SidebarMenuItem>"
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>
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
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>
origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Settings</span>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
<<<<<<< HEAD
    </Sidebar>
  )
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react';

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {;
=======
;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
  Users,;'
} from 'lucide-react';import {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenuItem,;
  // SidebarMenu, // Removed;
  // SidebarMenuButton, // Removed;
  // SidebarGroupLabel, // Not needed;
// SidebarGroupContent, // Not needed;
} from "@/components/ui/sidebar";
export function AppSidebar() {;
  return (;
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup title="Dashboard">;
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>;
            <span>Home</span>;
          </SidebarMenuItem>;
          <SidebarMenuItem href='/creator-dashboard' icon={<Home size={16} />}>;
            <span>Home</span>;
          </SidebarMenuItem>;'
          <SidebarMenuItem href='/messaging' icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;'
          <SidebarMenuItem href='/notifications' icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
'
        <SidebarGroup title='Content'>;'
          <SidebarMenuItem href='/publish' icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;'
          <SidebarMenuItem href='/analytics' icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
'
        <SidebarGroup title='Settings'>;'
          <SidebarMenuItem href='/profile' icon={<Users size={16} />}>;
            <span>Profile</span>;
          </SidebarMenuItem>;'
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span>Settings</span>            <span>Home</span>;
</SidebarMenuItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;
            <span>Messages</span>;
          </SidebarMenuItem>;"
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;
            <span>Notifications</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
<SidebarGroup title="Content">;
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;
            <span>My Content</span>;
          </SidebarMenuItem>;"
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;
            <span>Analytics</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
<SidebarGroup title="Settings">;
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>;
            <span>Profile</span>;
          </SidebarMenuItem>;"
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>;
            <span>Settings</span>;
          </SidebarMenuItem>;
        </SidebarGroup>;
      </SidebarContent>;

    </Sidebar>;
  );
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    </Sidebar>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
    </Sidebar>;
  );
}
;
    </Sidebar>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
} from 'lucide-react'; import {
  // TODO: Implement
}
} from "@/components/ui/sidebar";"
export function AppSidebar() {
  return (
    <Sidebar>

      <SidebarContent>

"
        <SidebarGroup title="Dashboard">"
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>"

            <span>Home</span>

          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>"

            <span>Messages</span>
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>"

            <span>Notifications</span>
        <SidebarGroup title="Content">"
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>"

            <span>My Content</span>
          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>"

            <span>Analytics</span>
        <SidebarGroup title="Settings">"
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>"

            <span>Profile</span>
          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>"

            <span>Settings</span>
    <Sidebar>;

      <SidebarContent>;
        <SidebarGroup title='Dashboard'>;

          <SidebarMenuItem href='/creator-dashboard' icon={<Home size={16} />}>;

            <span>Home</span>;
          ;
          <SidebarMenuItem href='/messaging' icon={<Mail size={16} />}>;

            <span>Messages</span>;
          <SidebarMenuItem href='/notifications' icon={<Bell size={16} />}>;

            <span>Notifications</span>;
        <SidebarGroup title='Content'>;

          <SidebarMenuItem href='/publish' icon={<FileText size={16} />}>;

            <span>My Content</span>;
          <SidebarMenuItem href='/analytics' icon={<Search size={16} />}>;

            <span>Analytics</span>;
        <SidebarGroup title='Settings'>;

          <SidebarMenuItem href='/profile' icon={<Users size={16} />}>;

            <span>Profile</span>;
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span>Settings</span>            <span>Home</span>;

          <SidebarMenuItem href="/messaging" icon={<Mail size={16} />}>;"

          ;"
          <SidebarMenuItem href="/notifications" icon={<Bell size={16} />}>;"

        <SidebarGroup title="Content">;"
          <SidebarMenuItem href="/publish" icon={<FileText size={16} />}>;"

          <SidebarMenuItem href="/analytics" icon={<Search size={16} />}>;"

        <SidebarGroup title="Settings">;"
          <SidebarMenuItem href="/profile" icon={<Users size={16} />}>;"

          <SidebarMenuItem href="/settings" icon={<Settings size={16} />}>;"

            <span>Settings</span>;

          <SidebarMenuItem href='/creator - dashboard' icon={<Home size={16} />}>;

            <span > Home</span>;

            <span > Messages</span>;

            <span > Notifications</span>;

            <span > My Content</span>;

            <span > Analytics</span>;

            <span > Profile</span>;
          <SidebarMenuItem href='/settings' icon={<Settings size={16} />}>            <span > Settings</span>            <span > Home</span>;

            <span > Settings</span>;
      ;)
    );"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
