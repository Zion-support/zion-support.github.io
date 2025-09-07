
import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Plus } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
interface ScreenshotManagerProps {
  platform: AppPlatform}

type Screenshot = $2;
  url: string,
  file: File},

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]),
  const [isDragging, setIsDragging] = useState($2);
  const fileInputRef = $2;
  const handleFileSelect = $2;
  const addScreenshots = $2;
    if (imageFiles.length === 0) {
      toast.error($2);
      return
    }
    
    // Limit the number of screenshots
    const maxScreenshots = $2;
    const availableSlots = $2;
    if (availableSlots <= 0) {
      toast.error($2);
      return
    }
    
    const filesToAdd = imageFiles.slice($2);
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring($2);
      url: URL.createObjectURL($2);
      file
    })),
    
    setScreenshots($2);
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
    }
  },
  
  const removeScreenshot = (id: string) => {
    setScreenshots($2);
      // Revoke object URL to avoid memory leaks
      const removed = prev.find($2);
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      
      return filtered
    })
  },
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault($2);
    setIsDragging(true)
  },
  
  const handleDragLeave = $2;
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault($2);
    setIsDragging($2);
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
    }
  },
  
  return (
    <Card className = $2;