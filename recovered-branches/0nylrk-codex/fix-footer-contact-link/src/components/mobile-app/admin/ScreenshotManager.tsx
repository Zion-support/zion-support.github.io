
type Screenshot = {
  id: string
  url: string
  file: File
}
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
  }
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
  };
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
import { toast } from "sonner",
interface ScreenshotManagerProps {
  platform: AppPlatform
import React, { useState, useRef } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Upload, Trash2, Plus } from "lucide-react",;
import { AppPlatform } from "./MetadataManager",;
import { toast } from "sonner",;
interface ScreenshotManagerProps {;
  platform: AppPlatform;
}
;
type Screenshot = {;
  id: string,;
  url: string,;
  file: File;
},;
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]),;
  const [isDragging, setIsDragging] = useState(false),;
  const fileInputRef = useRef<HTMLInputElement>(null),;
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      addScreenshots(Array.from(e.target.files));
    }
  },
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useRef } from './react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Upload, Trash2, Plus } from './lucide-react';
import { AppPlatform } from './MetadataManager';
import { toast } from './sonner';

interface ScreenshotManagerProps {
  platform: AppPlatform;
}
type Screenshot = {



  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (imageFiles.length === 0) {
      toast.error("Please select valid image files")
      return
    }
    // Limit the number of screenshots
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {

  

  
  
=======
=======
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Screenshot = {;
  id: string,;
  url: string,;
  file: File;
};
  const addScreenshots = (files: File[]) => {;
    // Filter for image files only;
    const imageFiles = files && files.filter(file => file && file.type.startsWith('image/'));
    if (imageFiles && imageFiles.length === 0) {;
      toast && toast.error("Please select valid image files"),;
      return;
    }
    // Limit the number of screenshots;
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots && screenshots.length;
    if (availableSlots <= 0) {;
      toast && toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
      return;
    }
    const filesToAdd = imageFiles && imageFiles.slice(0, availableSlots);
    const newScreenshots = filesToAdd && filesToAdd.map(file => ({;
      id: Math && Math.random().toString(36).substring(2, 9);
      url: URL && URL.createObjectURL(file),;
      file;
    }));
    setScreenshots(prev => [...prev, ...newScreenshots]);
    if (filesToAdd && filesToAdd.length < imageFiles && imageFiles.length) {;
      toast && toast.warning(`Only added ${filesToAdd && filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);
    }
  };
  const removeScreenshot = (id: string) => {;
    setScreenshots(prev => {;
      const filtered = prev && prev.filter(screenshot => screenshot && screenshot.id !== id);
      // Revoke object URL to avoid memory leaks;
      const removed = prev && prev.find(screenshot => screenshot && screenshot.id === id),;
      if (removed) {;
        URL && URL.revokeObjectURL(removed && removed.url);
      }
      return filtered;
    });
  };
  const handleDragOver = (e: React && React.DragEvent) => {;
    e && e.preventDefault(),;
    setIsDragging(true);
  };
  const handleDragLeave = () => {;
    setIsDragging(false);
  };

  const handleDrop = (e: React && React.DragEvent) => {;
    e && e.preventDefault();
    setIsDragging(false),;
    if (e && e.dataTransfer.files) {;
      addScreenshots(Array && Array.from(e && e.dataTransfer.files));
    }
  };
import React, { useState, useRef } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Upload, Trash2, Plus } from "lucide-react",;
import { AppPlatform } from "./MetadataManager",;
import { toast } from "sonner",;
;
interface ScreenshotManagerProps {;
  platform:AppPlatform;
}
;
type Screenshot = {;
  id:string,;
  url:string,;
  file:File;
},;
;
export const ScreenshotManager:React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]),;
  const [isDragging, setIsDragging] = useState(false),;
  const fileInputRef = useRef<HTMLInputElement>(null),;
  ;
  const handleFileSelect = (e:React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      addScreenshots(Array.from(e.target.files));    }
  },;
  ;
  const addScreenshots = (files:File[]) => {;
    // Filter for image files only;
    const imageFiles = files.filter(file => file.type.startsWith('image/')),;
    ;
    if (imageFiles.length === 0) {;
      toast.error("Please select valid image files"),;
      return;
    }
    ;
    // Limit the number of screenshots;
    const maxScreenshots = platform === "ios" ? 10 :8,;
    const availableSlots = maxScreenshots - screenshots.length,;
    ;
    if (availableSlots <= 0) {;
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" :"Android"}`),;
      return,;
    }
    ;
    const filesToAdd = imageFiles.slice(0, availableSlots),;
    ;
    const newScreenshots = filesToAdd.map(file => ({;
      id:Math.random().toString(36).substring(2, 9),;
      url:URL.createObjectURL(file),;
      file;
    })),;
    ;
    setScreenshots(prev => [...prev, ...newScreenshots]),;
    ;
    if (filesToAdd.length < imageFiles.length) {;
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`),;
    }
  },;
  ;
  const removeScreenshot = (id:string) => {;
    setScreenshots(prev => {;
      const filtered = prev.filter(screenshot => screenshot.id !== id),;
      ;
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find(screenshot => screenshot.id === id),;
      if (removed) {;
        URL.revokeObjectURL(removed.url);
      }
      ;
      return filtered,;
    }),;
  },;
  ;
  const handleDragOver = (e:React.DragEvent) => {;
    e.preventDefault(),;
    setIsDragging(true);
  },;
  ;
  const handleDragLeave = () => {;
    setIsDragging(false),;
  },;
  ;
  const handleDrop = (e:React.DragEvent) => {;
    e.preventDefault(),;
    setIsDragging(false),;
    ;
    if (e.dataTransfer.files) {;
      addScreenshots(Array.from(e.dataTransfer.files));
    }
  },;
  ;
  return (;
=======

  return (    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;

