<<<<<<< HEAD
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetadataForm } from "./MetadataForm";
import { ScreenshotManager } from "./ScreenshotManager";
import { ChangelogManager } from "./ChangelogManager";
import { ExportPanel } from "./ExportPanel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export type AppPlatform = $2;
export type AppMetadataValues = $2;
=======
<<<<<<< HEAD
appTitle: string,
=======





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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  appTitle: string,
>>>>>>> merged-prs-20250907-203621
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
<<<<<<< HEAD
  platform: AppPlatform},

const defaultValues: AppMetadataValues = $2;
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.",
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],
  version: "1.0.0",
  platform: "ios"
},

export const MetadataManager: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),
  const [isSaving, setIsSaving] = useState($2);
=======
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
  
>>>>>>> merged-prs-20250907-203621
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  
<<<<<<< HEAD
  const currentForm = $2;
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving($2);
    try {
      // This would be implemented with actual API calls in production
      console.log($2);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error($2);
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  },
  
  return (
    <div className = $2;
=======
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,
  appTitle: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,

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
export const MetadataManager: React.FC = () => {";
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);
  // Separate form instances for each platform"
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } })"
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } })"
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm;
},
<<<<<<< HEAD
  }
  "appTitle": "Zion AI Marketplace","
  "shortDescription": "Hire top AI talent or find global IT jobs on the go.","
  "longDescription": "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.","
  "keywords": ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],"
  "version": "1.0.0","
  "platform": "ios""
},
export const "MetadataManager": React.FC = () => {;
  }
export const "MetadataManager": React.FC = () => {
  }
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),"
const [isSaving, setIsSaving] = useState(false),;
  // Separate form instances for each platform,
const iosForm = useForm<AppMetadataValues>({ "defaultValues": { ...defaultValues, "platform": "ios" } }),"
  const androidForm = useForm<AppMetadataValues>({ "defaultValues": { ...defaultValues, "platform": "android" } }),"
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,"
=======

const defaultValues: AppMetadataValues = {"
  appTitle: "Zion AI Marketplace","
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",'"
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.","
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],"
  version: "1.0.0","
  platform: "ios"
},

  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,

=======
  
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSaveMetadata = async (data: AppMetadataValues) => {
>>>>>>> origin/chore/fix-lint-and-merge
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const handleSaveMetadata = async (data: AppMetadataValues) => {}
    setIsSaving(true)
    try {};
      // This would be implemented with actual API calls in production;
'
import React, { useState } from './react';'
import { use_form } from './react - hook - form';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { MetadataForm } from './MetadataForm';'
import { ScreenshotManager } from './ScreenshotManager';'
import { ChangelogManager } from './ChangelogManager';'
import { ExportPanel } from './ExportPanel';'
import { Button } from '@/components / ui / button';'
import { toast } from './sonner';"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type AppPlatform = "ios" | "android";
;
export type AppMetadataValues = {}
  app_title: string,
  short_description: string,
  long_description: string,
  keywords: string[],
  version: string,;
  platform: AppPlatform;
}
;
const default_values: AppMetadataValues = {"
  app_title: "Zion AI Marketplace","
  short_description: "Hire top AI talent or find global IT jobs on the go.",'"
  long_description: "Zion AI Marketplace is your one - stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI - powered matching, secure messaging, and streamlined hiring.";"
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];"
  version: "1.0.0","
  platform: "ios";
}
;
export const MetadataManager: React.FC = () => {";
  const [current_platform, setCurrentPlatform] = useState < AppPlatform>("ios");
  const [is_saving, setIsSaving] = useState (false);
;
  // Separate form instances for each platform;"
  const ios_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "ios" } }),"
  const android_form = use_form < AppMetadataValues>({ default_values: { ...default_values, platform: "android" } }),"
  const current_form = current_platform === "ios" ? ios_form : android_form;
;
  const handleSaveMetadata = async (data: AppMetadataValues) => {}
    setIsSaving (true),
    try {}
      // This would be implemented with actual API calls in production;"
      console.log ("Saving metadata for", current_platform, data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
;"
      toast.success (`${current_platform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
<<<<<<< HEAD

    } catch (error) {"
=======
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {}
      setIsSaving (false);
    }
  }
<<<<<<< HEAD
"
=======
<<<<<<< HEAD
      console.log("Saving metadata for", currentPlatform, data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {"
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {}
      setIsSaving(false)
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">

      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">

            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>
              Google Play (Android)
            </TabsTrigger>
          </TabsList>

<<<<<<< HEAD
          <Button 

=======
<<<<<<< HEAD
          <Button 


          <Button
          <Button 
=======

          <Button 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            onClick={currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}
          >"
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>
        </div>"
        <TabsContent value="ios" className="mt-0">"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={iosForm} />"
              <ChangelogManager platform="ios" />
            </div>"
            <div className="space-y-6">"
              <ScreenshotManager platform="ios" />"
              <ExportPanel platform="ios" metadata={iosForm.getValues()} />
            </div>
          </div>
        </TabsContent>"
        <TabsContent value="android" className="mt-0">"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
            <div className="lg:col-span-2 space-y-6">
              <MetadataForm form={androidForm} />"
              <ChangelogManager platform="android" />
            </div>"
            <div className="space-y-6">"
              <ScreenshotManager platform="android" />"
              <ExportPanel platform="android" metadata={androidForm.getValues()} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

<<<<<<< HEAD
=======

<<<<<<< HEAD

}

=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
},
<<<<<<< HEAD
import { useForm } from "react-hook-form";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { MetadataForm } from "./MetadataForm",;"
import { ScreenshotManager } from "./ScreenshotManager",;"
import { ChangelogManager } from "./ChangelogManager",;"
import { ExportPanel } from "./ExportPanel",;"
import { Button } from "@/components/ui/button",;"
import { toast } from "sonner",;"
export type AppPlatform = "ios" | "android",;    } finally {;"
      }
=======
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type AppMetadataValues = {;
  appTitle: string,;
  shortDescription: string,;
  longDescription: string,;
  keywords: string[],;
  version: string,;
  platform: AppPlatform;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSaveMetadata = async (data: AppMetadataValues) => {;
    setIsSaving(true),;

    try {;
      // This would be implemented with actual API calls in production;

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast && toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {;
      toast && toast.error("Failed to save metadata");
      console && console.error(error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsSaving(false);
    }
  };

<<<<<<< HEAD
=======
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
    <div className="bg-zion-blue-dark rounded-lg p-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Tabs defaultValue="ios" className="w-full">;
        <div className="flex justify-between items-center mb-6">;
          <TabsList className="bg-zion-blue">;

            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>;
              App Store (iOS);
            </TabsTrigger>;"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>;
              Google Play (Android);
            </TabsTrigger>;
<<<<<<< HEAD

=======
          </TabsList>;
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

          <Button
            onClick={currentForm && currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}>;
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>;
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <TabsContent value="ios" className="mt-0">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;

            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={iosForm} />;"
              <ChangelogManager platform="ios" />;
<<<<<<< HEAD
=======
            </div>;
<<<<<<< HEAD
            ;
            <div className="space-y-6">;
              <ScreenshotManager platform="ios" />;
              <ExportPanel platform="ios" metadata={iosForm.getValues()} />;
            </div>;
          </div>;
        </TabsContent>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {}
      setIsSaving (false);
    }
  }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <TabsContent value="android" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={androidForm} />;
              <ChangelogManager platform="android" />;
            </div>;
<<<<<<< HEAD
            ;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>;
          </div>;
        </TabsContent>;
      </Tabs>;

<<<<<<< HEAD
=======



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
    </div>);
}
<<<<<<< HEAD

};
    </div>);
}
;
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
