

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from "react";"
import {useForm} from "react-hook-form";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {MetadataForm} from "./MetadataForm";"
import {ScreenshotManager} from "./ScreenshotManager";"
import {ChangelogManager} from "./ChangelogManager";"
import {ExportPanel} from "./ExportPanel";"
import {Button} from "@/components/ui/button";"
import {toast} from "sonner";"
export type AppPlatform = "ios" | "android";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import React, { useState } from "react","
import { useForm } from "react-hook-form","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { MetadataForm } from "./MetadataForm","
import { ScreenshotManager } from "./ScreenshotManager","
import { ChangelogManager } from "./ChangelogManager","
import { ExportPanel } from "./ExportPanel","
import { Button } from "@/components/ui/button","
import { toast } from "sonner","
export type AppPlatform = "ios" | "android",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



export type AppMetadataValues = {

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type AppMetadataValues = {
<<<<<<< HEAD

  platform: AppPlatform
=======
=======
export type AppMetadataValues = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  appTitle: string
  shortDescription: string
  longDescription: string
  keywords: string[]
  version: string
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type AppMetadataValues = {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
;
export type AppMetadataValues = {};
  appTitle: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[]
  version: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export type AppMetadataValues = {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  appTitle: string,
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  platform: AppPlatform;
};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  platform: AppPlatform
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  platform: AppPlatform;
};
  platform: AppPlatform
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
const defaultValues: AppMetadataValues = {
  appTitle: "Zion AI Marketplace"
  shortDescription: "Hire top AI talent or find global IT jobs on the go."
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.";
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];
  version: "1.0.0"
=======

  platform: AppPlatform;
}
const defaultValues: AppMetadataValues = {"
  appTitle: "Zion AI Marketplace""
  shortDescription: "Hire top AI talent or find global IT jobs on the go.""
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.";"
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"];"
  version: "1.0.0""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

const defaultValues: AppMetadataValues = {"
  appTitle: "Zion AI Marketplace","
  shortDescription: "Hire top AI talent or find global IT jobs on the go.",'"
  longDescription: "Zion AI Marketplace is your one-stop solution for connecting with top AI and tech talent worldwide. Whether you're a business looking to hire specialized talent or a professional seeking your next opportunity, our app simplifies the process with AI-powered matching, secure messaging, and streamlined hiring.","
  keywords: ["AI freelancer", "tech jobs", "hire developers", "IT marketplace", "artificial intelligence jobs"],"
  version: "1.0.0","
  platform: "ios"
},

<<<<<<< HEAD
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),

=======
export const MetadataManager: React.FC = () => {;"
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios");
  const [isSaving, setIsSaving] = useState(false);
export const MetadataManager: React.FC = () => {"
  const [currentPlatform, setCurrentPlatform] = useState<AppPlatform>("ios"),
  const [isSaving, setIsSaving] = useState(false),
  
  // Separate form instances for each platform"
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),"
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const currentForm = currentPlatform === "ios" ? iosForm : androidForm,
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

    } catch (error) {"
      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {}
      setIsSaving (false);
    }
  }
"
      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {"
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {}
      setIsSaving(false)
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">
=======
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production    <div className="bg-zion-blue-dark rounded-lg p-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production    <div className="bg-zion-blue-dark rounded-lg p-6">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production

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


      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      

      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {
      setIsSaving(false)
    }

  },
  


  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <Tabs defaultValue="ios" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="bg-zion-blue">
=======



  return ("
    <div className="bg-zion-blue-dark rounded-lg p-6">"
      <Tabs defaultValue="ios" className="w-full">"
        <div className="flex justify-between items-center mb-6">"
          <TabsList className="bg-zion-blue">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>
              App Store (iOS)
            </TabsTrigger>"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>
              Google Play (Android)
            </TabsTrigger>
          </TabsList>
<<<<<<< HEAD
          <Button
          <Button 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

          <Button 


<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Button 


          <Button
          <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


          <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

=======
=======

}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
},"
import React, { useState } from "react",;"
import { useForm } from "react-hook-form",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { MetadataForm } from "./MetadataForm",;"
import { ScreenshotManager } from "./ScreenshotManager",;"
import { ChangelogManager } from "./ChangelogManager",;"
import { ExportPanel } from "./ExportPanel",;"
import { Button } from "@/components/ui/button",;"
import { toast } from "sonner",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type AppPlatform = "ios" | "android",;



=======
export type AppPlatform = "ios" | "android",;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type AppMetadataValues = {;
  appTitle: string,;
  shortDescription: string,;
  longDescription: string,;
  keywords: string[],;
  version: string,;
  platform: AppPlatform;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleSaveMetadata = async (data: AppMetadataValues) => {;
    setIsSaving(true),;

    try {;
      // This would be implemented with actual API calls in production;
<<<<<<< HEAD



    } finally {;
=======
export type AppPlatform = "ios" | "android",;    } finally {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export type AppPlatform = "ios" | "android",;    } finally {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      console && console.log("Saving metadata for", currentPlatform, data);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast && toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`);
    } catch (error) {;
      toast && toast.error("Failed to save metadata");
      console && console.error(error);
    } finally {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSaving(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return (    <div className="bg-zion-blue-dark rounded-lg p-6">;
=======
  return (
    <div className="bg-zion-blue-dark rounded-lg p-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <Tabs defaultValue="ios" className="w-full">;
        <div className="flex justify-between items-center mb-6">;
          <TabsList className="bg-zion-blue">;
=======


"
    <div className="bg-zion-blue-dark rounded-lg p-6">;"
      <Tabs defaultValue="ios" className="w-full">;"
        <div className="flex justify-between items-center mb-6">;"
          <TabsList className="bg-zion-blue">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <TabsTrigger value="ios" onClick={() => setCurrentPlatform("ios")}>;
              App Store (iOS);
            </TabsTrigger>;"
            <TabsTrigger value="android" onClick={() => setCurrentPlatform("android")}>;
              Google Play (Android);
            </TabsTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
          </TabsList>;        <TabsContent value="ios" className="mt-0">;
=======
          </TabsList>;

          <Button
            onClick={currentForm && currentForm.handleSubmit(handleSaveMetadata)}
            disabled={isSaving}>;
            {isSaving ? "Saving..." : "Save Metadata"}
          </Button>;
        </div>;

        <TabsContent value="ios" className="mt-0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
=======
          </TabsList>;


"
        <TabsContent value="ios" className="mt-0">;"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={iosForm} />;"
              <ChangelogManager platform="ios" />;
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;    } catch (error) {
=======
            </div>;


"
        <TabsContent value="android" className="mt-0">;"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={androidForm} />;"
              <ChangelogManager platform="android" />;
            </div>;


            ;"
            <div className="space-y-6">;"
              <ScreenshotManager platform="android" />;"
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;"
            <div className="space-y-6">;"
              <ScreenshotManager platform="android" />;"
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;


    } catch (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            </div>;

            <div className="space-y-6">;
              <ScreenshotManager platform="ios" />;
              <ExportPanel platform="ios" metadata={iosForm && iosForm.getValues()} />;
            </div>;
          </div>;
        </TabsContent>;

        <TabsContent value="android" className="mt-0">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
            <div className="lg:col-span-2 space-y-6">;
              <MetadataForm form={androidForm} />;
              <ChangelogManager platform="android" />;
            </div>;

            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm && androidForm.getValues()} />;
            ;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
            <div className="space-y-6">;
              <ScreenshotManager platform="android" />;
              <ExportPanel platform="android" metadata={androidForm.getValues()} />;
    } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error ("Failed to save metadata");
      console.error (error);
    } finally {}
      setIsSaving (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </div>;
        </TabsContent>;
      </Tabs>;
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </div>;
          </div>;
        </TabsContent>;
<<<<<<< HEAD
      </Tabs>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </div>;
          </div>;
        </TabsContent>;
      </Tabs>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
    </div>);
}
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
      </Tabs>;




};
    </div>);
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
    </div>);
}
;
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
