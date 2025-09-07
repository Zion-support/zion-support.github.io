<div className="bg-zion-blue-dark rounded-lg p-6">;
      <Tabs defaultValue="ios" className="w-full">;
        <div className="flex justify-between items-center mb-6">;
          <TabsList className="bg-zion-blue">;
            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>;
              App Store (iOS);
            </TabsTrigger>;
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>;
              Google Play (Android);
            </TabsTrigger>;
          </TabsList>;

        <TabsContent value="ios" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={iosForm} />;
              <ChangelogManager platform="ios" />;
            </div>;

        <TabsContent value="android" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={androidForm} />;
              <ChangelogManager platform="android" />;
            </div>;

            </div>;
          </div>;
        </TabsContent>;
      </Tabs>;