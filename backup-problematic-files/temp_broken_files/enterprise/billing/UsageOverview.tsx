<Card>;
      <CardHeader>;
        <CardTitle>Usage Overview</CardTitle>;
        <CardDescription>Track your team's resource usage across the platform</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs defaultValue="current">;
          <TabsList className="mb-4">;
            <TabsTrigger value="current">Current Period</TabsTrigger>;
            <TabsTrigger value="historical">Historical</TabsTrigger>;
          </TabsList>;

          <TabsContent value="current" className="space-y-6">;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;

              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Interviews Conducted</p>;
                  <p className="text-sm text-muted-foreground">;

              Historical usage data will be available after your first full billing cycle.;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;