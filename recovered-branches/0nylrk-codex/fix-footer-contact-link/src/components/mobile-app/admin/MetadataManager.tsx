
import { MetadataForm } from "./MetadataForm";
import { ScreenshotManager } from "./ScreenshotManager";
import { ChangelogManager } from "./ChangelogManager";
import { ExportPanel } from "./ExportPanel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type AppPlatform = "ios" | "android";

export type AppMetadataValues = {
  appTitle: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  version: string;
  platform: AppPlatform;
};

const defaultValues: AppMetadataValues = {
  appTitle: "Zion AI Marketplace",
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",
  version: "1.0.0",
  platform: "ios"
};

export const MetadataManager: React.FC = () => {
  
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm;
  
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true);
    
    try {
      // This would be implemented with actual API calls in production
      
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {
      toast.error("Failed to save metadata");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">
      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">
            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>
              Google Play (Android)
            </TabsTrigger>
          </TabsList>
          
          <Button 
            onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>
        </div>
        
        <TabsContent value="ios" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={iosForm} />
              <ChangelogManager platform="ios" />
            </div>
            
            <div className="space-y-6">
              <ScreenshotManager platform="ios" />
              <ExportPanel platform="ios" metadata={iosForm.getValues()} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="android" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={androidForm} />
              <ChangelogManager platform="android" />
            </div>
            
            <div className="space-y-6">
              <ScreenshotManager platform="android" />
              <ExportPanel platform="android" metadata={androidForm.getValues()} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
