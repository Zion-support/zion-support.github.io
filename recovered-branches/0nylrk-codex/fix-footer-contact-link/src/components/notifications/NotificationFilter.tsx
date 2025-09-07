<<<<<<< HEAD;
import React from 'react';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void;}
import React from 'react';}
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;export type FilterType =
=======}
import React from \"react\";}
import { Tabs, TabsList, TabsTrigger } from \"@/components/ui/tabs\";

export type FilterType =
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;
  | \"all\"
  | \"unread\"
  | \"onboarding\"
  | \"messages\"
  | \"system\";
<<<<<<< HEAD;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;
interface NotificationFilterProps {
  filter: FilterType;}
  onFilterChange: (filter: FilterType) => void;}
}
<<<<<<< HEAD;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;
export const NotificationFilter: React.FC<NotificationFilterProps /> = ({
  filter,}
  onFilterChange,}
}) => {
  return (
    <div className=\"border-b border-zion-blue-light\" />}
      <Tabs;}
defaultValue={filter}
        onValueChange={(value) = /> onFilterChange(value as FilterType)}
      >
        <TabsList className=\"bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full\" />
          <TabsTrigger value=\"all\" className=\"text-xs\" />
            All;
          </TabsTrigger>
          <TabsTrigger value=\"unread\" className=\"text-xs\" />
            Unread;
          </TabsTrigger>
          <TabsTrigger value=\"onboarding\" className=\"text-xs\" />
            Onboarding;
          </TabsTrigger>
          <TabsTrigger value=\"messages\" className=\"text-xs\" />
            Messages;
          </TabsTrigger>
          <TabsTrigger value=\"system\" className=\"text-xs\" />
            System;
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
<<<<<<< HEAD;
  )
},
  ),;
},; export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';
<Tabs defaultValue= {}
  filter }
}onValueChange= {}
  (value) = /> onFilterChange (value as FilterType) }
}> <TabsList className=\"bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full\"  /> <TabsTrigger value=\"all\" className=\"text-xs\"  />All</TabsTrigger> <TabsTrigger value=\"unread\" className=\"text-xs\"  />Unread</TabsTrigger> <TabsTrigger value=\"onboarding\" className=\"text-xs\"  />Onboarding</TabsTrigger> <TabsTrigger value=\"messages\" className=\"text-xs\"  />Messages</TabsTrigger> <TabsTrigger value=\"system\" className=\"text-xs\"  />System</TabsTrigger> </TabsList> </Tabs> </div>) 
};
  );
}
  )
},
};
  )
},
=======
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1;