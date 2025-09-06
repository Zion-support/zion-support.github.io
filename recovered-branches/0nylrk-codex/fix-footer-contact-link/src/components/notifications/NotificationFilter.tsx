<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx
import React from './react';
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
;
export type FilterType =;
  | "all";
  | "unread";
  | "onboarding";
  | "messages";
  | "system";
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx
=======
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
  | "system";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx


import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;

<<<<<<< HEAD
}

=======


}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
=======

interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
filter
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onFilterChange
}) => {
  return (
    <div className="border-b border-zion-blue-light">
      <Tabs
        defaultValue={filter}
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">
          <TabsTrigger value="all" className="text-xs">
            All
          </TabsTrigger>
          <TabsTrigger value="unread" className="text-xs">
            Unread
          </TabsTrigger>
          <TabsTrigger value="onboarding" className="text-xs">
            Onboarding
          </TabsTrigger>
          <TabsTrigger value="messages" className="text-xs">
            Messages
          </TabsTrigger>
          <TabsTrigger value="system" className="text-xs">
            System
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
);

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};

  )
},

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;
}
export const NotificationFilter: React.FC<NotificationFilterProps> = ({;
  filter,;
  onFilterChange;
}) => {;
  return (
    <div className="border-b border-zion-blue-light">;
      <Tabs
        defaultValue={filter} 
=======

import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
;
interface NotificationFilterProps {;
  filter:FilterType,;
  onFilterChange:(filter:FilterType) => void;
}
;
export const NotificationFilter:React.FC<NotificationFilterProps> = ({;
  filter,;
  onFilterChange;
}) => {;
  return (;
    <div className="border-b border-zion-blue-light">;
      <Tabs ;
        defaultValue={filter} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >;
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">;
          <TabsTrigger value="all" className="text-xs">All</TabsTrigger>;
          <TabsTrigger value="unread" className="text-xs">Unread</TabsTrigger>;
          <TabsTrigger value="onboarding" className="text-xs">Onboarding</TabsTrigger>;
          <TabsTrigger value="messages" className="text-xs">Messages</TabsTrigger>;
          <TabsTrigger value="system" className="text-xs">System</TabsTrigger>;
        </TabsList>;
      </Tabs>;
    </div>;
<<<<<<< HEAD
  );
=======

  )
},

=======

};
export const NotificationFilter: React.FC < NotificationFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className="border - b border - zion - blue - light">;
      <Tabs;
        default_value={filter}
        onValueChange={(value) => onFilterChange (value as FilterType)}
      >;
        <TabsList className="bg - zion - blue - dark / 30 grid grid - cols - 5 h - 9 w - full">;
          <TabsTrigger value="all" className="text - xs">;
            All;
          </TabsTrigger>;
          <TabsTrigger value="unread" className="text - xs">;
            Unread;
          </TabsTrigger>;
          <TabsTrigger value="onboarding" className="text - xs">;
            Onboarding;
          </TabsTrigger>;
          <TabsTrigger value="messages" className="text - xs">;
            Messages;
          </TabsTrigger>;
          <TabsTrigger value="system" className="text - xs">;
            System;
          </TabsTrigger>;
        </TabsList>;
      </Tabs>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
<Tabs defaultValue= {
  filter 
}onValueChange= {
  (value) => onFilterChange (value as FilterType) 
}> <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full" > <TabsTrigger value="all" className="text-xs" >All</TabsTrigger> <TabsTrigger value="unread" className="text-xs" >Unread</TabsTrigger> <TabsTrigger value="onboarding" className="text-xs" >Onboarding</TabsTrigger> <TabsTrigger value="messages" className="text-xs" >Messages</TabsTrigger> <TabsTrigger value="system" className="text-xs" >System</TabsTrigger> </TabsList> </Tabs> </div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/notifications/NotificationFilter.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
