export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
  | "system";
=======
=======
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

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
=======import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;


}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
filter
==============  onFilterChange
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
}
};

  )
},

=======
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
=======

import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;
}
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
  )
},

};
=======
=======

};=======export const NotificationFilter: React.FC < NotificationFilterProps> = ({
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
  )
},
};
  )
},
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
