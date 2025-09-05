
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { MetadataForm } from &quot;./MetadataForm&quot;;
import { ScreenshotManager } from &quot;./ScreenshotManager&quot;;
import { ChangelogManager } from &quot;./ChangelogManager&quot;;
import { ExportPanel } from &quot;./ExportPanel&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { toast } from &quot;sonner&quot;;
=======
import React, {_useState} from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type AppPlatform = &quot;ios&quot; | &quot;android&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export type AppMetadataValues = {
  appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
  platform: AppPlatform
},

const defaultValues: AppMetadataValues = {
<<<<<<< HEAD
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
  
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,
=======
  appTitle: &quot;Zion AI Marketplace&quot;,
  shortDescription: &quot;Hire top AI talent or find global IT jobs on the go.&quot;,
  longDescription: &quot;Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.&quot;,
  keywords: [&quot;AI freelancer&quot;, &quot;tech jobs&quot;, &quot;hire developers&quot;, &quot;IT marketplace&quot;, &quot;artificial intelligence jobs&quot;],
  version: &quot;1.0.0&quot;,
  platform: &quot;ios&quot;
};

export const MetadataManager: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>(&quot;ios&quot;);
  const [isSaving, setIsSaving] = useState(false);
  
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: &quot;ios&quot; } });
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: &quot;android&quot; } });
  
  const currentForm = currentPlatform === &quot;ios&quot; ? iosForm : androidForm;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true),
    
    try {
      // This would be implemented with actual API calls in production
<<<<<<< HEAD
      // // // console.log("Saving metadata for", currentPlatform, data),
=======
      // console.log(&quot;Saving metadata for&quot;, currentPlatform, data);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error("Failed to save metadata"),
      console.error(error)
=======
      toast.success(`${currentPlatform === &quot;ios&quot; ? &quot;iOS&quot; : &quot;Android&quot;} metadata saved successfully!`);
    } catch (error) {
      toast.error(&quot;Failed to save metadata&quot;);
      console.error(error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
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
=======
export type AppMetadataValues = {_appTitle: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  version: string;
  platform: AppPlatform;};

const defaultValues: AppMetadataValues = {_appTitle: "Zion AI Marketplace", _shortDescription: "Hire top AI talent or find global IT jobs on the go.", _longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, _our app simplifies the process with AI-powered matching, _secure messaging, _and streamlined hiring.", _keywords: ["AI freelancer", _"tech jobs", _"hire developers", _"IT marketplace", _"artificial intelligence jobs"], _version: "1.0.0", _platform: "ios"};

export const MetadataManager: React.FC = () => {_const [currentPlatform, _setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, _setIsSaving] = useState(false);
  
  // Separate form instances for each platform
  const _iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, _platform: "ios"} });
  const _androidForm = useForm<AppMetadataValues>({_defaultValues: { ...defaultValues, _platform: "android"} });
  
  const _currentForm = currentPlatform === "ios" ? iosForm : androidForm;
  
  const _handleSaveMetadata = async (_data: AppMetadataValues) => {_setIsSaving(true);
    
    try {
      // This would be implemented with actual API calls in production
      
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, _1000));
      
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {_toast.error("Failed to save metadata");} finally {_setIsSaving(false);}
  };
  
  return (_<div className="bg-zion-blue-dark rounded-lg p-6">
      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">
            <TabsTrigger value="ios" onClick={_() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>
            <TabsTrigger value="android" onClick={_() => setCurrentPlatform("android")}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Google Play (Android)
            </TabsTrigger>
          </TabsList>
          
          <Button 
            onClick={_currentForm.handleSubmit(handleSaveMetadata)}
            disabled={_isSaving}
          >
<<<<<<< HEAD
            {isSaving ? &quot;Saving...&quot; : &quot;Save Metadata&quot;}
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
              <ExportPanel platform=&quot;ios&quot; metadata={iosForm.getValues()} />
=======
            {_isSaving ? "Saving..." : "Save Metadata"}
          </Button>
        </div>
        
        <TabsContent value="ios" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={_iosForm} />
              <ChangelogManager platform="ios" />
            </div>
            
            <div className="space-y-6">
              <ScreenshotManager platform="ios" />
              <ExportPanel platform="ios" metadata={_iosForm.getValues()} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        </TabsContent>
        
<<<<<<< HEAD
        <TabsContent value=&quot;android&quot; className=&quot;mt-0&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;lg:col-span-2 space-y-6&quot;>
              <MetadataForm form={androidForm} />
              <ChangelogManager platform=&quot;android&quot; />
            </div>
            
            <div className=&quot;space-y-6&quot;>
              <ScreenshotManager platform=&quot;android&quot; />
              <ExportPanel platform=&quot;android&quot; metadata={androidForm.getValues()} />
=======
        <TabsContent value="android" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={_androidForm} />
              <ChangelogManager platform="android" />
            </div>
            
            <div className="space-y-6">
              <ScreenshotManager platform="android" />
              <ExportPanel platform="android" metadata={_androidForm.getValues()} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
},
