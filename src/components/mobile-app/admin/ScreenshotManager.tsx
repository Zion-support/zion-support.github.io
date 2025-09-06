
import React, { useState, useRef } from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Upload, Trash2, Plus} from 'lucide-react'
import {AppPlatform} from "./MetadataManager";
import {toast} from "sonner";
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string,
  url: string,
  file: File
};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
    
      
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
