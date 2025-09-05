
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;
}
<<<<<<< HEAD

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter,
  onFilterChange
}) => {
  return (
    <div className=&quot;border-b border-zion-blue-light&quot;>
      <Tabs 
        defaultValue={filter} 
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >
        <TabsList className=&quot;bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full&quot;>
          <TabsTrigger value=&quot;all&quot; className=&quot;text-xs&quot;>All</TabsTrigger>
          <TabsTrigger value=&quot;unread&quot; className=&quot;text-xs&quot;>Unread</TabsTrigger>
          <TabsTrigger value=&quot;onboarding&quot; className=&quot;text-xs&quot;>Onboarding</TabsTrigger>
          <TabsTrigger value=&quot;messages&quot; className=&quot;text-xs&quot;>Messages</TabsTrigger>
          <TabsTrigger value=&quot;system&quot; className=&quot;text-xs&quot;>System</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
},
=======
;
export const NotificationFilter: React.FC<NotificationFilterProps> = ({;
  filter;
  onFilterChange;
}) => {;
  return (;
    <div className="border-b border-zion-blue-light">;
      <Tabs;
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
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
