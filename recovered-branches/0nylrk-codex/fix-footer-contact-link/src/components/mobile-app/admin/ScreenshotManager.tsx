
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from "lucide-react",
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState, useRef } from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Upload, Trash2, Plus} from "lucide-react";
import {AppPlatform} from "./MetadataManager";
=======
import React, { useState, useRef } from "react";"
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Upload, Trash2, Plus} from "lucide-react";"
import {AppPlatform} from "./MetadataManager";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toast} from "sonner";
interface ScreenshotManagerProps {}
  platform: AppPlatform;
}

type Screenshot = {}
  id: string;
  url: string;
  file: File;
}
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {};
};

  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {}
    if (e.target.files) {}
      addScreenshots(Array.from(e.target.files))
    }
"
import { AppPlatform } from "./MetadataManager","
import { toast } from "sonner",
interface ScreenshotManagerProps {}
  platform: AppPlatform";
import React, { useState, useRef } from "react",;"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Upload, Trash2, Plus } from "lucide-react",;"
import { AppPlatform } from "./MetadataManager",;"
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
<<<<<<< HEAD
<<<<<<< HEAD
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState, useRef } from './react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Upload, Trash2, Plus } from './lucide-react';
import { AppPlatform } from './MetadataManager';
=======

import React, { useState, useRef } from './react';'
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Upload, Trash2, Plus } from './lucide-react';'
import { AppPlatform } from './MetadataManager';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from './sonner';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string
  url: string
  file: File

  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }

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
<<<<<<< HEAD
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

  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
type Screenshot = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (imageFiles.length === 0) {
=======
  },    if (imageFiles.length === 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  },    if (imageFiles.length === 0) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface ScreenshotManagerProps {}
  platform: AppPlatform;
}
type Screenshot = {}
  const addScreenshots = (files: File[]) => {}
    // Filter for image files only'
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    



    if (imageFiles.length === 0) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.error("Please select valid image files")
      return;
    }
<<<<<<< HEAD
    // Limit the number of screenshots
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {

  

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
      return
    }
    
    const filesToAdd = imageFiles.slice(0, availableSlots);
    
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring(2, 9);
      url: URL.createObjectURL(file),
      file
    }));
    
    setScreenshots(prev => [...prev, ...newScreenshots]);
    
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
    }
  };
  
  const removeScreenshot = (id: string) => {
    setScreenshots(prev => {
      const filtered = prev.filter(screenshot => screenshot.id !== id);
      
      // Revoke object URL to avoid memory leaks
      const removed = prev.find(screenshot => screenshot.id === id),
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      
      return filtered
    })
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(),
    setIsDragging(true)
  };
  
  const handleDragLeave = () => {
    setIsDragging(false)
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false),
    
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
    }
  };
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    // Limit the number of screenshots;
"
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
      return;
  },;
  const addScreenshots = (files: File[]) => {;
    // Filter for image files only;'
    const imageFiles = files.filter(file => file.type.startsWith('image/')),;
    if (imageFiles.length === 0) {;"
      toast.error("Please select valid image files"),;
      return;
    }
;
    // Limit the number of screenshots;"
    const maxScreenshots = platform === "ios" ? 10 : 8,;
    const availableSlots = maxScreenshots - screenshots.length,;
    if (availableSlots <= 0) {;"`
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),;
      return;
    }
;
    const filesToAdd = imageFiles.slice(0, availableSlots),;
    const newScreenshots = filesToAdd.map(file => ({;
      id: Math.random().toString(36).substring(2, 9),;
      url: URL.createObjectURL(file),;
      file;
    })),;
    setScreenshots(prev => [...prev, ...newScreenshots]),;
    if (filesToAdd.length < imageFiles.length) {;`
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);
    }
  },;
  const removeScreenshot = (id: string) => {;
    setScreenshots(prev => {;
      const filtered = prev.filter(screenshot => screenshot.id !== id),;
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find(screenshot => screenshot.id === id),;
      if (removed) {;
        URL.revokeObjectURL(removed.url);
      }
;
      return filtered;
    });
  },;
  const handleDragOver = (e: React.DragEvent) => {;
    e.preventDefault(),;
    setIsDragging(true);
  },;
  const handleDragLeave = () => {;
    setIsDragging(false);
  },;
  const handleDrop = (e: React.DragEvent) => {;
    e.preventDefault(),;
    setIsDragging(false),;
    if (e.dataTransfer.files) {;
      addScreenshots(Array.from(e.dataTransfer.files));
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  

<<<<<<< HEAD
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>"
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState, useRef } from "react";
=======
  import React, { useState, useRef } from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  import React, { useState, useRef } from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Upload, Trash2, Plus} from "lucide-react";
import {AppPlatform} from "./MetadataManager";
=======


"
import React, { useState, useRef } from "react";"
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Upload, Trash2, Plus} from "lucide-react";"
import {AppPlatform} from "./MetadataManager";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toast} from "sonner";
interface ScreenshotManagerProps {;
  platform: AppPlatform;
}
type Screenshot = {;
  id: string,;
  url: string,;
  file: File
};
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    if (e && e.target.files) {;
      addScreenshots(Array && Array.from(e && e.target.files));
    }
  };
    if (imageFiles && imageFiles.length === 0) {;"
      toast && toast.error("Please select valid image files"),;
      return;
    }
    if (availableSlots <= 0) {;"`
      toast && toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
      return;
    }
    const newScreenshots = filesToAdd && filesToAdd.map(file => ({;
      id: Math && Math.random().toString(36).substring(2, 9);
      url: URL && URL.createObjectURL(file),;
      file;
    }));
    if (filesToAdd && filesToAdd.length < imageFiles && imageFiles.length) {;`
      toast && toast.warning(`Only added ${filesToAdd && filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);
    }
  };
      // Revoke object URL to avoid memory leaks;
      const removed = prev && prev.find(screenshot => screenshot && screenshot.id === id),;
      if (removed) {;
        URL && URL.revokeObjectURL(removed && removed.url);
      }
  const handleDragOver = (e: React && React.DragEvent) => {;
    e && e.preventDefault(),;
    setIsDragging(true)
};
    if (e && e.dataTransfer.files) {;
      addScreenshots(Array && Array.from(e && e.dataTransfer.files));
    }
  };

<<<<<<< HEAD
  return (    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${

=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

"
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;"
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

            isDragging "
              ? "border-zion-cyan bg-zion-cyan/10" 


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10"
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              : "border-zion-purple/30"
=======

=======              : "border-zion-purple/30"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======              : "border-zion-purple/30"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>;
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />;
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;          onDrop={handleDrop}>;
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />;
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

        <div;`
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${}
            isDragging"
              ? "border-zion-cyan bg-zion-cyan/10"
"
              : "border-zion-purple/30"`
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


          onDrop={handleDrop}>;"
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />;"
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;

          <input;
            ref={fileInputRef}"
            type="file"
            multiple"
            accept="image/*"
            onChange={handleFileSelect}"
            className="hidden"
"
            className="mt-2";
          >;"
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;


"
                alt="App screenshot""
                className="w-full h-auto rounded border border-zion-purple/20"
              />;
              <button;
                onClick={() => removeScreenshot(screenshot && screenshot.id)}


"
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity";
              >;"
                <Trash2 className="h-3 w-3" />;
              </button>;
            </div>;
          ))}
<<<<<<< HEAD
        </div>
      </CardContent>
    </Card>
  )
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
      </CardContent>;
    </Card>;
  );






=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

};
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  id: string,
  url: string,
  file: File;
}
;
export const ScreenshotManager: React.FC < ScreenshotManagerProps> = ({ platform }) => {};
  const [screenshots, set_screenshots] = useState < Screenshot[]>([]);
  const [is_dragging, setIsDragging] = useState (false);
  const fileInputRef = useRef < HTMLInputElement>(null);
;
  const handleFileSelect = (e: React.ChangeEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      add_screenshots (Array.from (e.target.files));
    }
  }
;
  const add_screenshots = (files: File[]) =>: any {}
    // Filter for image files only;'
    const image_files = files.filter (file => file.type.starts_with ('image/'));
;
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Please select valid image files"),
      return;
    }
    // Limit the number of screenshots;"
    const max_screenshots = platform === "ios" ? 10 : 8;
    const available_slots = max_screenshots - screenshots.length;
;
    // Check condition;
if ( {) {}
  $2;
}"`
      toast.error (`Maximum ${max_screenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
      return;
    }
    const filesToAdd = image_files.slice (0, available_slots);
;
    const new_screenshots = filesToAdd.map (file => ({}
      id: Math.random ().to_string (36).substring (2, 9);
      url: URL.createObjectURL (file),
      file;
    }));
;
    set_screenshots (prev => [...prev, ...new_screenshots]);
;
    // Check condition;
if ( {) {}
  $2;
}`
      toast.warning (`Only added ${filesToAdd.length} screenshots. Maximum is ${max_screenshots}.`);
    }
  }
;
  const remove_screenshot = (id: string) =>: any {}
    set_screenshots (prev => {}
      const filtered = prev.filter (screenshot => screenshot.id !== id);
;
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find (screenshot => screenshot.id === id),
      // Check condition;
if ( {) {}
  $2;
}
        URL.revokeObjectURL (removed.url);
      }
      return filtered;
    });
  }
;
  const handleDragOver = (e: React.DragEvent) =>: any {}
    e.prevent_default (),
    setIsDragging (true);
  }
;
  const handleDragLeave = () =>: any {}
    setIsDragging (false);
  }
;
  const handle_drop = (e: React.DragEvent) =>: any {}
    e.prevent_default ();
    setIsDragging (false),
    // Check condition;
if ( {) {}
  $2;
}
      add_screenshots (Array.from (e.data_transfer.files));
    }
  }
;
<<<<<<< HEAD
  return (
    <Card className="bg - zion - blue border - zion-purple / 30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
=======
  return ("
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;"
        <CardTitle className="text - lg">App Screenshots</CardTitle>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </CardHeader>;
      <CardContent>;
        <div;`
          className={`border - 2 border - dashed rounded - lg p - 4 mb - 4 text - center transition - colors ${}
            is_dragging;"
              ? "border - zion - cyan bg - zion - cyan / 10";"
              : "border - zion - purple / 30";`
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          on_drop={handle_drop}
<<<<<<< HEAD
        >;
          <Upload className="mx - auto h - 8 w - 8 text - gray - 400 mb-2" />;
          <p className="text - sm mb-2">Drag & drop screenshots here</p>;
=======
        >;"
          <Upload className="mx - auto h - 8 w - 8 text - gray - 400 mb - 2" />;"
          <p className="text - sm mb - 2">Drag & drop screenshots here</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <input;
            ref={fileInputRef}"
            type="file";
            multiple;"
            accept="image/*";
            on_change={handleFileSelect}"
            className="hidden";
          />;
          <Button;"
            variant="outline";
<<<<<<< HEAD
            on_click={() => fileInputRef.current?.click ()}
            className="mt-2";
          >;
            <Plus className="mr - 2 h - 4 w-4" />;
            Select Files;
          </Button>;
        </div>;
        <div className="text - xs text - gray - 400 mb-4">;
          {platform === "ios";
            ? "Recommended size: 1290x2796 pixels for i_phone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;
        <div className="grid grid - cols - 2 gap-3">;
          {screenshots.map ((screenshot) => (
            <div key={screenshot.id} className="relative group">;
              <img;
                src={screenshot.url}
                alt="App screenshot";
                className="w - full h - auto rounded border border - zion-purple / 20";
              />;
              <button;
                on_click={() => remove_screenshot (screenshot.id)}
                className="absolute top - 1 right - 1 bg - red - 500 / 80 text - white p - 1 rounded - full opacity - 0 group - hover:opacity - 100 transition-opacity";
              >;
                <Trash2 className="h - 3 w-3" />;
=======
            on_click={() => fileInputRef.current?.click ()}"
            className="mt - 2";
          >;"
            <Plus className="mr - 2 h - 4 w - 4" />;
            Select Files;
          </Button>;
        </div>;"
        <div className="text - xs text - gray - 400 mb - 4">;"
          {platform === "ios";"
            ? "Recommended size: 1290x2796 pixels for i_phone. Max 10 screenshots.";"
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;"
        <div className="grid grid - cols - 2 gap - 3">;
          {screenshots.map ((screenshot) => ("
            <div key={screenshot.id} className="relative group">;
              <img;
                src={screenshot.url}"
                alt="App screenshot";"
                className="w - full h - auto rounded border border - zion - purple / 20";
              />;
              <button;
                on_click={() => remove_screenshot (screenshot.id)}"
                className="absolute top - 1 right - 1 bg - red - 500 / 80 text - white p - 1 rounded - full opacity - 0 group - hover:opacity - 100 transition - opacity";
              >;"
                <Trash2 className="h - 3 w - 3" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </button>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
;

<<<<<<< HEAD
        </div>;
      </CardContent>;
    </Card>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
