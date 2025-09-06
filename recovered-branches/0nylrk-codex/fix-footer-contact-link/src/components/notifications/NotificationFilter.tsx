
<<<<<<< HEAD
export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
=======
import React from './react';
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
;
export type FilterType =;
  | "all";
  | "unread";
  | "onboarding";
  | "messages";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  | "system";
;

interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
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
  );
=======

import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

  )
},
<<<<<<< HEAD
};
  )
},
=======

=======

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
