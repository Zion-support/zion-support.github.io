 //Switch to video tab if not already there if (activeTab !== 'video') {
  setActiveTab ('video') 
}
};
const endVideoCall = () => {
  
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
};
return (<> End Call </Button>) 
}<Button variant="outline" >Invite Team Member</Button> </div> </div> </TabsTrigger> <TabsTrigger value="files" className="flex items-center gap-2" > <FileText className="h-4 w-4" /> <span className="hidden sm:inline" >Files</span> </TabsTrigger> </span>) 
}</TabsTrigger> <TabsTrigger value="calendar" className="flex items-center gap-2" > <Calendar className="h-4 w-4" /> <span className="hidden sm:inline" >Calendar</span> </TabsTrigger> <TabsTrigger value="team" className="flex items-center gap-2" > <Users className="h-4 w-4" /> <span className="hidden sm:inline" >Team</span> </TabsTrigger> <TabsTrigger value="settings" className="flex items-center gap-2" > <Settings className="h-4 w-4" /> <span className="hidden sm:inline" >Settings</span> </TabsTrigger> </TabsList> <TabsContent value="chat" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Chat</CardTitle> <CardDescription>Communicate with your team members</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Chat functionality will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="files" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Files</CardTitle> <CardDescription>Manage documents and files</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >File management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="video" className="space-y-4" > <Card> <CardHeader> <CardTitle>Video Meetings</CardTitle> <CardDescription>Schedule and join video calls</CardDescription> </CardHeader> <VideoCallRoom roomId= {
  `project-$ {
  projectId 
}` 
}participants= {
  callParticipants 
}onLeave= {
  endVideoCall 
}/> Simulate user joining (demo only) </Button> </div> </div>) : (Start Video Call </Button> </div> <div className="text-xs text-muted-foreground mt-4" > <p>Recent calls:</p> <p>No recent calls for this project</p> </div> </div>) 
}</CardContent> </Card> </TabsContent> <TabsContent value="calendar" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Calendar</CardTitle> <CardDescription>Schedule and manage events</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Calendar will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="team" className="space-y-4" > <Card> <CardHeader> <CardTitle>Team Members</CardTitle> <CardDescription>Manage project participants</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Team management will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> <TabsContent value="settings" className="space-y-4" > <Card> <CardHeader> <CardTitle>Project Settings</CardTitle> <CardDescription>Configure project parameters</CardDescription> </CardHeader> <CardContent className="h-[400px]" > <div className="flex items-center justify-center h-full" > <p className="text-muted-foreground" >Settings will be implemented soon</p> </div> </CardContent> </Card> </TabsContent> </Tabs> </main> <Footer /> </>) 
}