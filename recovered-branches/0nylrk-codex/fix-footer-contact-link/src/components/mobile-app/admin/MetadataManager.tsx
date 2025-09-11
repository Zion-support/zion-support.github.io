




import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {MetadataForm} from "./MetadataForm";
import {ScreenshotManager} from "./ScreenshotManager";
import {ChangelogManager} from "./ChangelogManager";
import {ExportPanel} from "./ExportPanel";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
export type AppPlatform = "ios" | "android";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
export type AppMetadataValues = {
  appTitle: string
  shortDescription: string
  longDescription: string
  keywords: string[]
  version: string
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type AppMetadataValues = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



export type AppMetadataValues = {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
<<<<<<< HEAD
<<<<<<< HEAD
  platform: AppPlatform;
};
  platform: AppPlatform
}
const defaultValues: AppMetadataValues = {
  appTitle: "Zion AI Marketplace"
  shortDescription: "Hire top AI talent or find global IT jobs on the go."
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.";
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];
  version: "1.0.0"
  platform: "ios"
}
export const MetadataManager: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } })
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } })
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm;
},
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const defaultValues: AppMetadataValues = {
  appTitle: "Zion AI Marketplace",
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.",
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],
  version: "1.0.0",
  platform: "ios"
},

export const MetadataManager: React.FC = () => {;
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);
export const MetadataManager: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),
  const [isSaving, setIsSaving] = useState(false),
  
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,
<<<<<<< HEAD
  appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,

  
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import { use_form } from './react - hook - form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { MetadataForm } from './MetadataForm';
import { ScreenshotManager } from './ScreenshotManager';
import { ChangelogManager } from './ChangelogManager';
import { ExportPanel } from './ExportPanel';
import { Button } from '@/components / ui / button';
import { toast } from './sonner';
export type AppPlatform = "ios" | "android";
;
export type AppMetadataValues = {
  app_title: string,
  short_description: string,
  long_description: string,
  keywords: string[],
  version: string,
  platform: AppPlatform;
}
;
const default_values: AppMetadataValues = {
  app_title: "Zion AI Marketplace",
  short_description: "Hire top AI talent or find global IT jobs on the go.",
  long_description: "Zion AI Marketplace is your one - stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI - powered matching, secure messaging, and streamlined hiring.";
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];
  version: "1.0.0",
  platform: "ios";
}
;
export const MetadataManager: React.FC = () => {
  const [current_platform, setCurrentPlatform] = useState < AppPlatform>("ios");
  const [is_saving, setIsSaving] = useState (false);
;
  // Separate form instances for each platform;
  const ios_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "ios" } }),
  const android_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "android" } }),
  const current_form = current_platform === "ios" ? ios_form : android_form;
;
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving (true),
    try {
      // This would be implemented with actual API calls in production;
      console.log ("Saving metadata for", current_platform, data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
;
      toast.success (`${current_platform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {
      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {
      setIsSaving (false);
    }
  }
<<<<<<< HEAD
      console.log("Saving metadata for", currentPlatform, data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.log("Saving metadata for", currentPlatform, data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {
      setIsSaving(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
          <Button 


          <Button
          <Button 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Button 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  )


<<<<<<< HEAD
<<<<<<< HEAD

}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { MetadataForm } from "./MetadataForm",;
import { ScreenshotManager } from "./ScreenshotManager",;
import { ChangelogManager } from "./ChangelogManager",;
import { ExportPanel } from "./ExportPanel",;
import { Button } from "@/components/ui/button",;
import { toast } from "sonner",;
export type AppPlatform = "ios" | "android",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type AppMetadataValues = {;
  appTitle: string,;
  shortDescription: string,;
  longDescription: string,;
  keywords: string[],;
  version: string,;
  platform: AppPlatform;
<<<<<<< HEAD
<<<<<<< HEAD
},;
const defaultValues: AppMetadataValues = {;
  appTitle: "Zion AI Marketplace",;
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",;
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.",;
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],;
  version: "1.0.0",;
  platform: "ios";
},;
export const MetadataManager: React.FC = () => {;
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),;
  const [isSaving, setIsSaving] = useState(false),;
  // Separate form instances for each platform;
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),;
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),;
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,;
  const handleSaveMetadata = async (data: AppMetadataValues) => {;
    setIsSaving(true),;
    try {;
      // This would be implemented with actual API calls in production;
      // // // console.log("Saving metadata for", currentPlatform, data),;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {;
      toast.error("Failed to save metadata"),;
      console.error(error);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

const defaultValues: AppMetadataValues = {;
  appTitle: "Zion AI Marketplace",;
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",;
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.";
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];
  version: "1 && 1.0.0",;
  platform: "ios";
};

export const MetadataManager: React.FC = () => {;
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);

  // Separate form instances for each platform;
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),;
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),;

  const currentForm = currentPlatform === "ios" ? iosForm : androidForm;

  const handleSaveMetadata = async (data: AppMetadataValues) => {;
    setIsSaving(true),;

    try {;
      // This would be implemented with actual API calls in production;
      console && console.log("Saving metadata for", currentPlatform, data);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast && toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {;
      toast && toast.error("Failed to save metadata");
      console && console.error(error);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {;
      setIsSaving(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { MetadataForm } from "./MetadataForm",;
import { ScreenshotManager } from "./ScreenshotManager",;
import { ChangelogManager } from "./ChangelogManager",;
import { ExportPanel } from "./ExportPanel",;
import { Button } from "@/components/ui/button",;
import { toast } from "sonner",;
;
export type AppPlatform = "ios" | "android",;
;
export type AppMetadataValues = {;
  appTitle:string,;
  shortDescription:string,;
  longDescription:string,;
  keywords:string[],;
  version:string,;
  platform:AppPlatform;
},;
;
const defaultValues:AppMetadataValues = {;
  appTitle:"Zion AI Marketplace",;
  shortDescription:"Hire top AI talent or find global IT jobs on the go.",;
  longDescription:"Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.",;
  keywords:["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],;
  version:"1.0.0",;
  platform:"ios";
},;
;
export const MetadataManager:React.FC = () => {;
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),;
  const [isSaving, setIsSaving] = useState(false),;
  ;
  // Separate form instances for each platform;
  const iosForm = useForm<AppMetadataValues>({ defaultValues:{ ...defaultValues, platform:"ios" } }),;
  const androidForm = useForm<AppMetadataValues>({ defaultValues:{ ...defaultValues, platform:"android" } }),;
  ;
  const currentForm = currentPlatform === "ios" ? iosForm :androidForm,;
  ;
  const handleSaveMetadata = async (data:AppMetadataValues) => {;
    setIsSaving(true),;
    ;
    try {;
      // This would be implemented with actual API calls in production;
      // // // console.log("Saving metadata for", currentPlatform, data),;
      ;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      ;
      toast.success(`${currentPlatform === "ios" ? "iOS" :"Android"} metadata saved successfully!`),;
    } catch (error) {;
      toast.error("Failed to save metadata"),;
      console.error(error),;
    } finally {;
      setIsSaving(false),;
    }
  },;
  ;
  return (;
  return (;
=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          ;
          <Button ;
            onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >;
            {isSaving ? "Saving..." :"Save Metadata"}
          </Button>;
        </div>;
        ;
          <Button;
            onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >;
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>;
        </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Button
            onClick={currentForm && currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}>;
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>;
        </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TabsContent value="ios" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={iosForm} />;
              <ChangelogManager platform="ios" />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            <div className="space-y-6">;
              <ScreenshotManager platform="ios" />;
              <ExportPanel platform="ios" metadata={iosForm.getValues()} />;
            </div>;
          </div>;
        </TabsContent>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="space-y-6">;
              <ScreenshotManager platform="ios" />;
              <ExportPanel platform="ios" metadata={iosForm && iosForm.getValues()} />;
            </div>;
          </div>;
        </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TabsContent value="android" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={androidForm} />;
              <ChangelogManager platform="android" />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm && androidForm.getValues()} />;
=======
;
  return (
    <div className="bg - zion - blue - dark rounded - lg p - 6">;
      <Tabs default_value="ios" className="w - full">;
        <div className="flex justify - between items - center mb - 6">;
          <TabsList className="bg - zion - blue">;
            <TabsTrigger value="ios" on_click={() => setCurrentPlatform ("ios")}>;
              App Store (iOS);
            </TabsTrigger>;
            <TabsTrigger value="android" on_click={() => setCurrentPlatform ("android")}>;
              Google Play (Android);
            </TabsTrigger>;
          </TabsList>;
          <Button;
            on_click={current_form.handle_submit (handleSaveMetadata)}
            disabled={is_saving}
          >;
            {is_saving ? "Saving..." : "Save Metadata"}
          </Button>;
        </div>;
        <TabsContent value="ios" className="mt - 0">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            <div className="lg:col - span - 2 space - y-6">;
              <MetadataForm form={ios_form} />;
              <ChangelogManager platform="ios" />;
            </div>;
            <div className="space - y-6">;
              <ScreenshotManager platform="ios" />;
              <ExportPanel platform="ios" metadata={ios_form.get_values ()} />;
            </div>;
          </div>;
        </TabsContent>;
        <TabsContent value="android" className="mt - 0">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
            <div className="lg:col - span - 2 space - y-6">;
              <MetadataForm form={android_form} />;
              <ChangelogManager platform="android" />;
            </div>;
            <div className="space - y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={android_form.get_values ()} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </TabsContent>;
      </Tabs>;




<<<<<<< HEAD
<<<<<<< HEAD
};
    </div>);
}
;
    </div>);
}
;
    </div>;
  ),;
},; export type AppPlatform = "ios" | "android";
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
    </div>;
  );
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
