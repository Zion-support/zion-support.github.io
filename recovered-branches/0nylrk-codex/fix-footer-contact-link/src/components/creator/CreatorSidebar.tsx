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