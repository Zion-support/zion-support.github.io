<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Bell
  FileText
  Home
  Mail
  Search
  Settings
  Users
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
} from 'lucide-react'; import {

} from "@/components/ui/sidebar";


=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,;
  Users;
} from 'lucide-react'; import {
  Sidebar
  SidebarContent
  SidebarGroup
  SidebarMenuItem

  // SidebarMenu, // Removed
  // SidebarMenuButton, // Removed
  // SidebarGroupLabel, // Not needed
  // SidebarGroupContent, // Not needed
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
<<<<<<< HEAD

        <SidebarGroup title="Dashboard">
          <SidebarMenuItem href="/creator-dashboard" icon={<Home size={16} />}>
            <span>Home</span>

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    </Sidebar>;
  );
};

import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'

=======
    </Sidebar>
  )
}
    </Sidebar>;
  );
};
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
>>>>>>> >>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
    </Sidebar>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Sidebar>
  )
}
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
    </Sidebar>;
  );
};
import { Bell, FileText, Home, Mail, Search, Settings, Users } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
