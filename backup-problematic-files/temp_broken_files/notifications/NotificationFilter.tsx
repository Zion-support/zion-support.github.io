
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
