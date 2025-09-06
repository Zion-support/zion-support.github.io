<<<<<<< HEAD
import {;
  Bell,;
  FileText,;
  Home,;
  Mail,;
  Search,;
  Settings,;
  Users,;
} from "lucide-react";
=======

import { Bell, FileText, Home, Mail, Search, Settings, Users } from "lucide-react",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  Sidebar,;
  SidebarContent,;
  SidebarGroup,;
  SidebarMenu,;
  SidebarMenuItem,;
  SidebarMenuButton,;
  SidebarGroupLabel,;
<<<<<<< HEAD
  SidebarGroupContent,;
} from "@/components/ui/sidebar";
export function AppSidebar() {;
  return (
=======
  SidebarGroupContent} from "@/components/ui/sidebar",;
;
export function AppSidebar() {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup>;
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/creator-dashboard">;
                    <Home size={16} />;
                    <span>Home</span>;
<<<<<<< HEAD
  Bell,
  FileText,
  Home,
  Mail,
  Search,
  Settings,
  Users,
} from './lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components / ui / sidebar';
;
export /**
 * AppSidebar - Function description
 */
function AppSidebar() {
  return (
    <Sidebar>;
      <SidebarContent>;
        <SidebarGroup>;
          <SidebarGroupLabel > Dashboard</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/creator - dashboard">;
                    <Home size={16} />;
                    <span > Home</span>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton as_child>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span > Messages</span>;
=======
                <SidebarMenuButton asChild>;
                  <a href="/messaging">;
                    <Mail size={16} />;
                    <span>Messages</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton as_child>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span > Notifications</span>;
=======
                <SidebarMenuButton asChild>;
                  <a href="/notifications">;
                    <Bell size={16} />;
                    <span>Notifications</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD
        <SidebarGroup>;
          <SidebarGroupLabel > Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span > My Content</span>;
=======
        ;
        <SidebarGroup>;
          <SidebarGroupLabel>Content</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/publish">;
                    <FileText size={16} />;
                    <span>My Content</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton as_child>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span > Analytics</span>;
=======
                <SidebarMenuButton asChild>;
                  <a href="/analytics">;
                    <Search size={16} />;
                    <span>Analytics</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
<<<<<<< HEAD
        <SidebarGroup>;
          <SidebarGroupLabel > Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton as_child>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span > Profile</span>;
=======
        ;
        <SidebarGroup>;
          <SidebarGroupLabel>Settings</SidebarGroupLabel>;
          <SidebarGroupContent>;
            <SidebarMenu>;
              <SidebarMenuItem>;
                <SidebarMenuButton asChild>;
                  <a href="/profile">;
                    <Users size={16} />;
                    <span>Profile</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
              <SidebarMenuItem>;
<<<<<<< HEAD
                <SidebarMenuButton as_child>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span > Settings</span>;
=======
                <SidebarMenuButton asChild>;
                  <a href="/settings">;
                    <Settings size={16} />;
                    <span>Settings</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </a>;
                </SidebarMenuButton>;
              </SidebarMenuItem>;
            </SidebarMenu>;
          </SidebarGroupContent>;
        </SidebarGroup>;
      </SidebarContent>;
<<<<<<< HEAD
    </Sidebar>);
}
=======
    </Sidebar>;
  ),;}
 import {
  Sidebar;
SidebarContent;
SidebarGroup;
SidebarMenu;
SidebarMenuItem;
SidebarMenuButton;
SidebarGroupLabel;
return (<Sidebar> <SidebarContent> <SidebarGroup> <SidebarGroupLabel>Dashboard</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <a href="/creator-dashboard" > <Home size= {
  16 
}/> <span>Home</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Messages</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Notifications</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> <SidebarGroup> <SidebarGroupLabel>Content</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <span>My Content</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Analytics</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> <SidebarGroup> <SidebarGroupLabel>Settings</SidebarGroupLabel> <SidebarGroupContent> <SidebarMenu> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Profile</span> </Link> </SidebarMenuButton> </SidebarMenuItem> <SidebarMenuItem> <SidebarMenuButton asChild> <span>Settings</span> </Link> </SidebarMenuButton> </SidebarMenuItem> </SidebarMenu> </SidebarGroupContent> </SidebarGroup> </SidebarContent> </Sidebar>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
