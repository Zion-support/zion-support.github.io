<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
import React, { useState, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Trash2, Plus } from 'lucide-react'import { AppPlatform } from "./MetadataManager"
import { toast } from "sonner"
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string
  url: string
  file: File
}
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>,) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
  }
  const addScreenshots = (files: File[],) => {
    // Filter for image files only;
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
};    // Limit the number of screenshots
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
    const maxScreenshots = platform === "ios" ? 10 : 8
    const availableSlots = maxScreenshots - screenshots.length
    if (availableSlots <= 0) {
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`)
      return
    }
    const filesToAdd = imageFiles.slice(0, availableSlots)
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring(2, 9)
      url: URL.createObjectURL(file)
      file
    }))
    setScreenshots(prev => [...prev, ...newScreenshots])
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
    }
  }
  const removeScreenshot = (id: string,) => {
    setScreenshots(prev => {
      const filtered = prev.filter(screenshot => screenshot.id !== id)
      // Revoke object URL to avoid memory leaks
      const removed = prev.find(screenshot => screenshot.id === id)
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      return filtered
    })
  }
  const handleDragOver = (e: React.DragEvent,) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = () => {
    setIsDragging(false)
  }
  const handleDrop = (e: React.DragEvent,) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
    }
  }
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from 'lucide-react'
import { AppPlatform } from "./MetadataManager",
import { toast } from "sonner",
interface ScreenshotManagerProps {
  platform: AppPlatform
import React, { useState, useRef } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Upload, Trash2, Plus } from 'lucide-react';
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
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
    if (imageFiles.length === 0) {
      toast.error("Please select valid image files"),
      return
    }
    
    // Limit the number of screenshots
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
      return;
    }
    
    const filesToAdd = imageFiles.slice(0, availableSlots),
    
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      url: URL.createObjectURL(file),
      file
    })),
    
    setScreenshots(prev => [...prev, ...newScreenshots]),
    
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
    }
  },
  
  const removeScreenshot = (id: string,) => {
    setScreenshots(prev => {
      const filtered = prev.filter(screenshot => screenshot.id !== id),
      
      // Revoke object URL to avoid memory leaks
      const removed = prev.find(screenshot => screenshot.id === id),
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      
      return filtered
    })
  },
  
  const handleDragOver = (e: React.DragEvent,) => {
    e.preventDefault(),
    setIsDragging(true)
  },
  
  const handleDragLeave = () => {
    setIsDragging(false)
  },
  
  const handleDrop = (e: React.DragEvent,) => {
    e.preventDefault(),
    setIsDragging(false),
    
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
      return
  },;
  const addScreenshots = (files: File[]) => {;
    // Filter for image files only;
    const imageFiles = files.filter(file => file.type.startsWith('image/')),;
    if (imageFiles.length === 0) {;
      toast.error("Please select valid image files"),;
      return;
    }
;
    // Limit the number of screenshots;
    const maxScreenshots = platform === "ios" ? 10 : 8,;
    const availableSlots = maxScreenshots - screenshots.length,;
    if (availableSlots <= 0) {;
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
    if (filesToAdd.length < imageFiles.length) {;
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
  
    }
  },
  
  return (
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
=======

type Screenshot = {;
  id: string,;
  url: string,;
  file: File;
};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);  ;
  const handleFileSelect = (e: React && React.ChangeEvent<HTMLInputElement>,) => {;
    if (e && e.target.files) {;
      addScreenshots(Array && Array.from(e && e.target.files));
    }
  };

  const addScreenshots = (files: File[],) => {;
    // Filter for image files only;
    const imageFiles = files && files.filter(file => file && file.type.startsWith('image/'));

    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots && screenshots.length;


};    // Limit the number of screenshots;
    const maxScreenshots = platform === "ios" ? 10 : 8,;
    const availableSlots = maxScreenshots - screenshots && screenshots.length,;

    if (availableSlots <= 0) {;
      toast && toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),;
      return;
    }

    const filesToAdd = imageFiles && imageFiles.slice(0, availableSlots),;

    const newScreenshots = filesToAdd && filesToAdd.map(file => ({;
      id: Math && Math.random().toString(36).substring(2, 9),;
      url: URL && URL.createObjectURL(file),;
      file;
    })),;

    setScreenshots(prev => [...prev, ...newScreenshots]),;

    if (filesToAdd && filesToAdd.length < imageFiles && imageFiles.length) {;
      toast && toast.warning(`Only added ${filesToAdd && filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);
    }
  },;

  const removeScreenshot = (id: string,) => {;
    setScreenshots(prev => {;
      const filtered = prev && prev.filter(screenshot => screenshot && screenshot.id !== id),;

      // Revoke object URL to avoid memory leaks;
      const removed = prev && prev.find(screenshot => screenshot && screenshot.id === id),;
      if (removed) {;
        URL && URL.revokeObjectURL(removed && removed.url);
      }

      return filtered;
    });
  },;

  const handleDragOver = (e: React && React.DragEvent,) => {;
    e && e.preventDefault(),;
    setIsDragging(true);
  },;

  const handleDragLeave = () => {;
    setIsDragging(false);
  },;

  const handleDrop = (e: React && React.DragEvent,) => {;
    e && e.preventDefault(),;
    setIsDragging(false),;

    if (e && e.dataTransfer.files) {;
      addScreenshots(Array && Array.from(e && e.dataTransfer.files));
    }
  },;

  return (
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10"
              : "border-zion-purple/30"
          }`}
          onDragOver = {handleDragOver,}
          onDragLeave = {handleDragLeave,}
          onDrop = {handleDrop,}
        <div 
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
              : "border-zion-purple/30"
          }`}
<<<<<<< HEAD
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
<<<<<<< HEAD
          onDragOver = {handleDragOver,}
          onDragLeave = {handleDragLeave,}
          onDrop = {handleDrop,}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input
<<<<<<< HEAD
            className="hidden"
          />
          <Button
            variant="outline"
            onClick = {(,) => fileInputRef.current?.click(),}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="hidden"
          />
          <Button 
            variant="outline" 
<<<<<<< HEAD
          />
          <Button 
            variant="outline" 
            onClick={() => fileInputRef.current?.click()}
            onClick = {(,) => fileInputRef.current?.click(),}
ursor/fix-website-loading-errors-and-merge-6662
            onClick={() => fileInputRef.current?.click()}
            onClick = {(,) => fileInputRef.current?.click(),}
            onClick={() => fileInputRef.current?.click()}

            className="mt-2"
=======


            className="mt-2"
          >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
<<<<<<< HEAD
        <div className="text-xs text-gray-300 mb-4">
          {platform === "ios"
        
          {platform === "ios" 
        <div className="text-xs text-gray-300 mb-4">
          {platform === "ios"
        
        <div className="text-xs text-gray-300 mb-4">
=======



        

        <div className="text-xs text-gray-300 mb-4">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {platform === "ios" 
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."
          }
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot,) => (
            <div key={screenshot.id} className="relative group">



        

        <div className="text-xs text-gray-300 mb-4">
          {platform === "ios" 
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."
          }
        </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
          <Button
            variant="outline" 
            onClick = {(,) => fileInputRef && fileInputRef.current?.click(),}
            className="mt-2";
          >;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;

        <div className="text-xs text-gray-300 mb-4">;
          {platform === "ios" ;
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;

        <div className="grid grid-cols-2 gap-3">;
          {screenshots && screenshots.map((screenshot,) => (;
            <div key={screenshot && screenshot.id} className="relative group">;

              <img
                src = {screenshot && screenshot.url,}
<<<<<<< HEAD
              <img
                src = {screenshot.url,}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative group">
              <img
                src={screenshot.url}
<<<<<<< HEAD
                alt="App screenshot"
                loading="lazy"
              />
              <button
                onClick = {(,) => removeScreenshot(screenshot.id),}
                onClick = {(,) => removeScreenshot(screenshot.id),}
                onClick={() => removeScreenshot(screenshot.id)}
=======

                alt="App screenshot"
                className="w-full h-auto rounded border border-zion-purple/20"
                loading="lazy"
              />;
              <button


                onClick={() => removeScreenshot(screenshot.id)}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Remove screenshot"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
<<<<<<< HEAD
}

ursor/fix-website-loading-errors-and-merge-6662
        </div>
      </CardContent>
    </Card>
  )
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};

        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
};
};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const add_screenshots = (files: File[], ) =>: any {
    // Filter for image files only;
    const image_files = files.filter (file => file.type.starts_with ('image/'));
    const max_screenshots = platform === "ios" ? 10 : 8;
    const available_slots = max_screenshots - screenshots.length;
}    // Limit the number of screenshots;
    const max_screenshots = platform === "ios" ? 10 : 8,
    const available_slots = max_screenshots - screenshots.length,
    // Check condition
if ( {) {
  $2
}
      toast.error (`Maximum ${max_screenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
      return;
    }
    const filesToAdd = image_files.slice (0, available_slots),
    const new_screenshots = filesToAdd.map (file => ({
      id: Math.random ().to_string (36).substring (2, 9),
      url: URL.createObjectURL (file),
      file;
    })),
    set_screenshots (prev => [...prev, ...new_screenshots]),
    // Check condition
if ( {) {
  $2
}
      toast.warning (`Only added ${filesToAdd.length} screenshots. Maximum is ${max_screenshots}.`);
    }
  },
  const remove_screenshot = (id: string, ) =>: any {
    set_screenshots (prev => {
      const filtered = prev.filter (screenshot => screenshot.id !== id),
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find (screenshot => screenshot.id === id),
      // Check condition
if ( {) {
  $2
}
        URL.revokeObjectURL (removed.url);
      }
      return filtered;
    });
  },
  const handleDragOver = (e: React.DragEvent, ) =>: any {
    e.prevent_default (),
    setIsDragging (true);
  },
  const handleDragLeave = () =>: any {
    setIsDragging (false);
  },
  const handle_drop = (e: React.DragEvent, ) =>: any {
    e.prevent_default (),
    setIsDragging (false),
    // Check condition
if ( {) {
  $2
}
      add_screenshots (Array.from (e.data_transfer.files));
    }
  },
  return (
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle className="text - lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div;
          className={`border - 2 border - dashed rounded - lg p - 4 mb - 4 text - center transition - colors ${
            is_dragging;
              ? "border - zion - cyan bg - zion - cyan / 10";
              : "border - zion - purple / 30";
          }`}
          onDragOver = {handleDragOver, }
          onDragLeave = {handleDragLeave, }
          on_drop = {handle_drop, }
        >;
          <Upload className="mx - auto h - 8 w - 8 text - gray - 300 mb - 2" />;
          <p className="text - sm mb - 2">Drag & drop screenshots here</p>;
          <input;
            ref = {fileInputRef, }
            type="file";
            multiple;
            accept="image/*";
            on_change = {handleFileSelect, }
            className="hidden";
          />;
          <Button;
            variant="outline";
            on_click = {(, ) => fileInputRef.current?.click (), }
            className="mt - 2";
          >;
            <Plus className="mr - 2 h - 4 w - 4" />;
            Select Files;
          </Button>;
        </div>;
        <div className="text - xs text - gray - 300 mb - 4">;
          {platform === "ios";
            ? "Recommended size: 1290x2796 pixels for i_phone. Max 10 screenshots.";
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;
        <div className="grid grid - cols - 2 gap - 3">;
          {screenshots.map ((screenshot, ) => (
            <div key={screenshot.id} className="relative group">;
              <img;
                src = {screenshot.url, }
                alt="App screenshot";
                className="w - full h - auto rounded border border - zion - purple / 20";
                loading="lazy";
              />;
              <button;
                on_click = {(, ) => remove_screenshot (screenshot.id), }
                className="absolute top - 1 right - 1 bg - red - 500 / 80 text - white p - 1 rounded - full opacity - 0 group - hover:opacity - 100 transition - opacity focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2";
                aria - label="Remove screenshot";
              >;
                <Trash2 className="h - 3 w - 3" />;
              </button>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
},
;
};
<<<<<<< HEAD
=======
        >
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
