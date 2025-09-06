          <TabsTrigger value="team">Team Management</TabsTrigger>;
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>;
          <TabsTrigger value="activity">Team Activity</TabsTrigger>;
        </TabsList>;
  );
=======
        <TabsContent value="team" className="space - y-8">;
          <TeamManagement />;
        </TabsContent>;
        <TabsContent value="roles" className="space - y-8">;
          <RoleManagement />;
        </TabsContent>;
        <TabsContent value="usage" className="space - y-8">;
          <UsageStats />;
        </TabsContent>;
        <TabsContent value="activity" className="space - y-8">;
          <TeamActivity />;
        </TabsContent>;
      </Tabs>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}