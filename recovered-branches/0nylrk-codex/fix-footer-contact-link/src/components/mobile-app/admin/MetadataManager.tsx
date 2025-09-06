
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
  shortDescription: string,
  longDescription: string,
  keywords: string[],
  version: string,
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
  // Separate form instances for each platform
  const iosForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "ios" } }),
  const androidForm = useForm<AppMetadataValues>({ defaultValues: { ...defaultValues, platform: "android" } }),
  
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