
<<<<<<< HEAD
import React from 'react',
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',
=======
import React from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',

<<<<<<< HEAD
interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter,
  onFilterChange
}) => {
  return (
    <div className=&quot;border-b border-zion-blue-light&quot;>
=======
interface NotificationFilterProps {_filter: FilterType;
  onFilterChange: (_filter: FilterType) => void;}

export const NotificationFilter: React.FC<NotificationFilterProps> = (_{_filter, _onFilterChange}) => {_return (_<div className="border-b border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Tabs 
        defaultValue={filter} 
        onValueChange={_(value) => onFilterChange(value as FilterType)}
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
