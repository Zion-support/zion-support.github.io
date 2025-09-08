import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


interface NotificationFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className="border-b border-zion-blue-light">
      <Tabs
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
<<<<<<< HEAD




=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
