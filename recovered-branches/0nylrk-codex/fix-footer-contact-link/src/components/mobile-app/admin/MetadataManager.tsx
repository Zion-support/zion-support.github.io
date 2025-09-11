




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
==============
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
  
==============
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSaveMetadata = async (data: AppMetadataValues) => {
    setIsSaving(true)
    try {
      // This would be implemented with actual API calls in production
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
=======
      console.log("Saving metadata for", currentPlatform, data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));      // // // console.log("Saving metadata for", currentPlatform, data),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      toast.success(`${currentPlatform === "ios" ? "iOS" : "Android"} metadata saved successfully!`)
    } catch (error) {
      toast.error("Failed to save metadata"),
      console.error(error)
    } finally {
      setIsSaving(false)
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  



          <Button
          <Button 
=======
=======
          <Button 



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
