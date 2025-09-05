
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { MetadataForm } from "./MetadataForm",
import { ScreenshotManager } from "./ScreenshotManager",
import { ChangelogManager } from "./ChangelogManager",
import { ExportPanel } from "./ExportPanel",
import { Button } from "@/components/ui/button",
import { toast } from "sonner",
export type AppPlatform = "ios" | "android",
export type AppPlatform = &quot;ios&quot; | &quot;android&quot;

export type AppMetadataValues = {
  appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
  platform: AppPlatform
},

const defaultValues: AppMetadataValues = {
  appTitle: "Zion AI Marketplace",
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.",
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],
  version: "1.0.0",
  platform: "ios"
},

export const MetadataManager: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),
  const [isSaving, setIsSaving] = useState(false),
  
  // Separate form instances for each platform,
const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,  
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true),
    
    try {
      // This would be implemented with actual API calls in production
      // // // console.log("Saving metadata for", currentPlatform, data),      
      // Simulate API call,
await new Promise(resolve => setTimeout(resolve, 1000)),
      
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error("Failed to save metadata"),
      console.error(error)    } finally {
      setIsSaving(false)
    }
  },
  
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg p-6&quot;>
      <Tabs defaultValue=&quot;ios&quot; className=&quot;w-full&quot;>
        <div className=&quot;flex justify-between items-center mb-6&quot;>
          <TabsList className=&quot;bg-zion-blue&quot;>
            <TabsTrigger value=&quot;ios&quot; onClick={() => setCurrentPlatform(&quot;ios&quot;)}>
              App Store (iOS)
            </TabsTrigger>
            <TabsTrigger value=&quot;android&quot; onClick={() => setCurrentPlatform(&quot;android&quot;)}>
export type AppMetadataValues = {appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[];
  version: string,
  platform: AppPlatform};

const defaultValues: AppMetadataValues = {appTitle: "Zion AI Marketplace", shortDescription: "Hire top AI talent or find global IT jobs on the go.", longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.", keywords: ["AI freelancer", _"tech jobs", _"hire developers", _"IT marketplace", _"artificial intelligence jobs"], version: "1.0.0", platform: "ios"};

export const MetadataManager: React.FC = () => {const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);
  
  // Separate form instances for each platform,
const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios"} });
  const androidForm = useForm<AppMetadataValues>({defaultValues: { ...defaultValues, platform: "android"} });
  
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm;
  
  const handleSaveMetadata = async (data: AppMetadataValues) => {setIsSaving(true);
    
    try {
      // This would be implemented with actual API calls in production

      // Simulate API call,
await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {toast.error("Failed to save metadata")} finally {setIsSaving(false)}
  };
  
  return (_<div className="bg-zion-blue-dark rounded-lg p-6">
      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">
            <TabsTrigger value="ios" onClick={_() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>
            <TabsTrigger value="android" onClick={_() => setCurrentPlatform("android")}>
              Google Play (Android)
            </TabsTrigger>
          </TabsList>
          
          <Button,
onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >
            {isSaving ? &quot;Saving...&quot; : &quot;Save Metadata&quot}
          </Button>
        </div>
        
        <TabsContent value=&quot;ios&quot; className=&quot;mt-0&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;lg:col-span-2 space-y-6&quot;>
              <MetadataForm form={iosForm} />
              <ChangelogManager platform=&quot;ios&quot; />
            </div>
            
            <div className=&quot;space-y-6&quot;>
              <ScreenshotManager platform=&quot;ios&quot; />
              <ExportPanel platform=&quot;ios&quot; metadata={iosForm.getValues()} />            </div>
          </div>
        </TabsContent>
        
        <TabsContent value=&quot;android&quot; className=&quot;mt-0&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;lg:col-span-2 space-y-6&quot;>
              <MetadataForm form={androidForm} />
              <ChangelogManager platform=&quot;android&quot; />
            </div>
            
            <div className=&quot;space-y-6&quot;>
              <ScreenshotManager platform=&quot;android&quot; />
              <ExportPanel platform=&quot;android&quot; metadata={androidForm.getValues()} />            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
},
