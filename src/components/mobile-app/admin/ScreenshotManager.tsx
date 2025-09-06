import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string,
  url: string,
  file: File
};

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>,) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
  };

  const addScreenshots = (files: File[],) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;