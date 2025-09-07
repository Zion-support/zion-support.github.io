export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
<<<<<<< HEAD
  }
  "filter": FilterType,
  "onFilterChange": ("filter": FilterType) => void,
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';'
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;'
=======
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void

import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
>>>>>>> origin/chore/fix-lint-and-merge
interface NotificationFilterProps {;
  filter: FilterType,;

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
<<<<<<< HEAD

interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;

}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
filter
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  filter,
  onFilterChange,
}) => {}
  return ("
    <div className="border-b border-zion-blue-light">;
      <Tabs;
        defaultValue={filter}
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >"
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">"
          <TabsTrigger value="all" className="text-xs">
            All;
          </TabsTrigger>"
          <TabsTrigger value="unread" className="text-xs">
            Unread;
          </TabsTrigger>"
          <TabsTrigger value="onboarding" className="text-xs">
            Onboarding;
          </TabsTrigger>"
          <TabsTrigger value="messages" className="text-xs">
            Messages;
          </TabsTrigger>"
          <TabsTrigger value="system" className="text-xs">
            System;
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
<<<<<<< HEAD
);

}
};

  )
},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
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
  ),;
},; export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
<Tabs defaultValue= {
  filter 
}onValueChange= {
  (value) => onFilterChange (value as FilterType) 
}> <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full" > <TabsTrigger value="all" className="text-xs" >All</TabsTrigger> <TabsTrigger value="unread" className="text-xs" >Unread</TabsTrigger> <TabsTrigger value="onboarding" className="text-xs" >Onboarding</TabsTrigger> <TabsTrigger value="messages" className="text-xs" >Messages</TabsTrigger> <TabsTrigger value="system" className="text-xs" >System</TabsTrigger> </TabsList> </Tabs> </div>) 
};
  );
}

  )
},
};
  )
},