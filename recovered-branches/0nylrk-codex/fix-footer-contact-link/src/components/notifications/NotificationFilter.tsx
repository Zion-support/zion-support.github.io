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