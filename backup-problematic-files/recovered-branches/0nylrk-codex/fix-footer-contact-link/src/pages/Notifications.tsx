
        </div>;
        <div className="flex-1">;
          <div className="flex justify-between">;
            <div className="flex flex-col">;

                  <Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs">New</Badge>;
                )}
              </div>;
            </div>;

                >;
                  <Check className="h-4 w-4 text-green-400" />;
                  <span className="sr-only">Mark as read</span>;
                </Button>;
              )}

              >;
                <Trash2 className="h-4 w-4 text-red-400" />;
                <span className="sr-only">Dismiss</span>;
              </Button>;
            </div>;
          </div>;

              <ChevronRight className="ml-1 h-4 w-4" />;
            </Button>;
          )}
        </div>;
      </div>;
    </div>;

      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8 min-h-screen">;
        <div className="flex justify-between items-center mb-6">;
          <div>;
            <h1 className="text-3xl font-bold flex items-center">;
              <Bell className="mr-3 h-7 w-7" /> Notifications;
              {unreadCount > 0 && (;
                <Badge className="ml-3 bg-zion-cyan">{unreadCount} unread</Badge>;
              )}
            </h1>;
            <p className="text-muted-foreground">Stay updated with the latest activities and reminders</p>;
          </div>;

              onClick={() => markAllAsRead()}
            >;
              <Check className="mr-2 h-4 w-4" />;
              Mark all as read;
            </Button>;
          )}
        </div>;

        <div className="mb-8">;
          <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as any)}>;
            <TabsList className="grid w-full max-w-md grid-cols-5">;
              <TabsTrigger value="all">All</TabsTrigger>;
              <TabsTrigger value="unread">Unread</TabsTrigger>;
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="system">System</TabsTrigger>;
            </TabsList>;
            <TabsContent value={filter} className="mt-6">;
              {loading ? (;
                <div className="space-y-4">;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                  <Skeleton className="h-24 w-full rounded-lg" />;
                </div>;

                <div className="text-center py-12 bg-muted rounded-lg">;
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />;
                  <h3 className="text-xl font-medium">No notifications found</h3>;
                  <p className="text-muted-foreground mt-1">;

            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;

}