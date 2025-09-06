 export type AppPlatform = "ios" | "android";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleSaveMetadata = async (data: AppMetadataValues) => {
  setIsSaving (true);
try {
  //This would be implemented with actual API calls in production //Simulate API call await new Promise (resolve => setTimeout (resolve, 1000) );
}finally {
  setIsSaving (false) 
}
};
return (<div className="bg-zion-blue-dark rounded-lg p-6" > <Tabs defaultValue="ios" className="w-full" > <div className="flex justify-between items-center mb-6" > <TabsList className="bg-zion-blue" > <TabsTrigger value="ios" onClick= {
  () => setCurrentPlatform ("ios") 
}> App Store (iOS) </TabsTrigger> <TabsTrigger value="android" onClick= {
  () => setCurrentPlatform ("android") 
}> currentForm.handleSubmit (handleSaveMetadata) 
}disabled= {
  isSaving 
}> </div> </div> </TabsContent> </div> </div> </TabsContent> </Tabs> </div>) 
};
