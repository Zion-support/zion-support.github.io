<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
  | "system";
;

interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

=======
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
onFilterChange: (filter: FilterType) => void;
<<<<<<< HEAD
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter
  onFilterChange
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export type FilterType =
=======
  onFilterChange: (filter: FilterType) => void;export type FilterType =
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onFilterChange: (filter: FilterType) => void;export type FilterType =
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
=======
import React from "react";"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type FilterType ="
  | "all""
  | "unread""
  | "onboarding""
  | "messages"";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  | "system";

interface NotificationFilterProps {}
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
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

  )
},
};
<<<<<<< HEAD
  )
},
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export const NotificationFilter: React.FC < NotificationFilterProps> = ({}
  filter,
  onFilterChange,
}) => {}
  return (";
    <div className="border - b border - zion - blue - light">;
      <Tabs;
        default_value={filter}
        onValueChange={(value) => onFilterChange (value as FilterType)}
      >;"
        <TabsList className="bg - zion - blue - dark / 30 grid grid - cols - 5 h - 9 w - full">;"
          <TabsTrigger value="all" className="text - xs">;
            All;
          </TabsTrigger>;"
          <TabsTrigger value="unread" className="text - xs">;
            Unread;
          </TabsTrigger>;"
          <TabsTrigger value="onboarding" className="text - xs">;
            Onboarding;
          </TabsTrigger>;"
          <TabsTrigger value="messages" className="text - xs">;
            Messages;
          </TabsTrigger>;"
          <TabsTrigger value="system" className="text - xs">;
            System;
          </TabsTrigger>;
        </TabsList>;
      </Tabs>;
    </div>);
}
;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from 'react';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
