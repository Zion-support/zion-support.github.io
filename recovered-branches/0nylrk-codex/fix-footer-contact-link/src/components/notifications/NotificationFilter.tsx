<<<<<<< HEAD
import React from 'react';'
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';'
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';'
interface NotificationFilterProps {
=======
<<<<<<< HEAD
export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"

import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
=======
<<<<<<< HEAD
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
export type FilterType = $2;
interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
}
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
  onFilterChange
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className = $2;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
<<<<<<< HEAD
=======
  | "system";
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  }
  "filter": FilterType,
  "onFilterChange": ("filter": FilterType) => void,
import React from 'react';'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';'
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;'
<<<<<<< HEAD
interface NotificationFilterProps {;
  }
  "filter": FilterType,;
  "onFilterChange": ("filter": FilterType) => void;export type FilterType =
  | "all""
  | "unread""
  | "onboarding""
  | "messages""
  | "system";"
interface NotificationFilterProps {
  }
  "filter": FilterType;
  "onFilterChange": ("filter": FilterType) => void;
}
export const "NotificationFilter": React.FC<NotificationFilterProps> = ({
  }
=======
=======
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
>>>>>>> origin/chore/fix-lint-and-merge
interface NotificationFilterProps {;
  filter: FilterType,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  onFilterChange: (filter: FilterType) => void;


}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
<<<<<<< HEAD

interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
<<<<<<< HEAD
  filter
=======
filter
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onFilterChange

export type FilterType =

  | "all"
  | "unread"
  | "onboarding"
  | "messages"

  | "system";

interface NotificationFilterProps {}
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

>>>>>>> origin/resolved-merge-conflicts
  filter,
  onFilterChange}) => {
}
return (;
    <div className="border-b border-zion-blue-light">"
      <Tabs,
defaultValue={filter}
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">"
          <TabsTrigger value="all" className="text-xs">"
            All
          </TabsTrigger>
          <TabsTrigger value="unread" className="text-xs">"
            Unread
          </TabsTrigger>
          <TabsTrigger value="onboarding" className="text-xs">"
            Onboarding
          </TabsTrigger>
          <TabsTrigger value="messages" className="text-xs">"
            Messages
          </TabsTrigger>
          <TabsTrigger value="system" className="text-xs">"
            System
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
<<<<<<< HEAD
  );
  )
},

=======
<<<<<<< HEAD

  );
=======
<<<<<<< HEAD
);

}
};

  )
},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
  );
=======
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
<<<<<<< HEAD
=======
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  )
},

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  ),;
},; export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';'
<Tabs defaultValue= {
  }
  filter
}onValueChange= {
  (value) => onFilterChange (value as FilterType)
}> <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full" > <TabsTrigger value="all" className="text-xs" >All</TabsTrigger> <TabsTrigger value="unread" className="text-xs" >Unread</TabsTrigger> <TabsTrigger value="onboarding" className="text-xs" >Onboarding</TabsTrigger> <TabsTrigger value="messages" className="text-xs" >Messages</TabsTrigger> <TabsTrigger value="system" className="text-xs" >System</TabsTrigger> </TabsList> </Tabs> </div>)"
};
  );
}

  )
};
  )
},