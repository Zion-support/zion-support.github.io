import React from 'react';
<<<<<<< HEAD

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
export type FilterType = any;

=======
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system';

interface NotificationFilterProps {
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void
import React from 'react',;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs',;
export type FilterType = 'all' | 'unread' | 'onboarding' | 'messages' | 'system',;
interface NotificationFilterProps {;
  filter: FilterType,;
  onFilterChange: (filter: FilterType) => void;export type FilterType =
  | "all"
  | "unread"
  | "onboarding"
  | "messages"
  | "system";

interface NotificationFilterProps {
  filter: FilterType;

import React from "react";""
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";"
export type FilterType ="
  | "all"""
  | "unread"""
  | "onboarding"""
  | "messages"""
  | "system";"
interface NotificationFilterProps {
  // TODO: Implement
}
  filter: FilterType;,
  onFilterChange: (filter: FilterType) => void;
}

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
  filter,
  onFilterChange,
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
</NotificationFilterProps>"
    <div className="border-b border-zion-blue-light">"
</div>
      <Tabs;
        defaultValue={filter})
        onValueChange={(value) => onFilterChange(value as FilterType)}
</Tabs>"
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">"
</TabsList>"
          <TabsTrigger value="all" className="text-xs">"
</TabsTrigger>
          </TabsTrigger>"
          <TabsTrigger value="unread" className="text-xs">"
</TabsTrigger>
          </TabsTrigger>"
          <TabsTrigger value="onboarding" className="text-xs">"
</TabsTrigger>
          </TabsTrigger>"
          <TabsTrigger value="messages" className="text-xs">"
</TabsTrigger>
          </TabsTrigger>"
          <TabsTrigger value="system" className="text-xs">"
</TabsTrigger>

          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );

  )
},

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
import React from "react";""
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";"
export type FilterType ="
  | "all"""
  | "unread"""
  | "onboarding"""
  | "messages"""
  | "system";"
interface NotificationFilterProps {
  // TODO: Implement
}
  filter: FilterType;,
  onFilterChange: (filter: FilterType) => void;

export const NotificationFilter: React.FC<NotificationFilterProps> = ({
"
    <div className="border-b border-zion-blue-light">"
</div>
      <Tabs;
        defaultValue={filter})
        onValueChange={(value) => onFilterChange(value as FilterType)}
        <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full">"
          <TabsTrigger value="all" className="text-xs">"

          <TabsTrigger value="unread" className="text-xs">"

          <TabsTrigger value="onboarding" className="text-xs">"

          <TabsTrigger value="messages" className="text-xs">"

          <TabsTrigger value="system" className="text-xs">"

          
        
      

export const NotificationFilter: React.FC < NotificationFilterProps> = ({
  filter,
  onFilterChange,)
}) => {
  return ("
    <div className="border - b border - zion - blue - light">;"
        default_value={filter})
        onValueChange={(value) => onFilterChange (value as FilterType)}
        <TabsList className="bg - zion - blue - dark / 30 grid grid - cols - 5 h - 9 w - full">;"
          <TabsTrigger value="all" className="text - xs">;"

          ;"
          <TabsTrigger value="unread" className="text - xs">;"

          <TabsTrigger value="onboarding" className="text - xs">;"

          <TabsTrigger value="messages" className="text - xs">;"

          <TabsTrigger value="system" className="text - xs">;"

          ;
    </div>);
<Tabs defaultValue= {
  filter;
}onValueChange= {
  (value) => onFilterChange (value as FilterType) 
}> <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full" > <TabsTrigger value="all" className="text-xs" >All <TabsTrigger value="unread" className="text-xs" >Unread <TabsTrigger value="onboarding" className="text-xs" >Onboarding <TabsTrigger value="messages" className="text-xs" >Messages <TabsTrigger value="system" className="text-xs" >System   </div>)""
pr-12325
</Tabs>"
}> <TabsList className="bg-zion-blue-dark/30 grid grid-cols-5 h-9 w-full" > <TabsTrigger value="all" className="text-xs" >All</TabsTrigger> <TabsTrigger value="unread" className="text-xs" >Unread</TabsTrigger> <TabsTrigger value="onboarding" className="text-xs" >Onboarding</TabsTrigger> <TabsTrigger value="messages" className="text-xs" >Messages</TabsTrigger> <TabsTrigger value="system" className="text-xs" >System</TabsTrigger> </TabsList> </Tabs> </div>)""

>>>>>>> origin/main
