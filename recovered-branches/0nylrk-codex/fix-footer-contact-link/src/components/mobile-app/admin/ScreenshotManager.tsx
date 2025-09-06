
<<<<<<< HEAD
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from "lucide-react",
<<<<<<< HEAD
import { AppPlatform } from "./MetadataManager";
import { toast } from "sonner";
=======
<<<<<<< HEAD
import React, { useState, useRef } from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Upload, Trash2, Plus} from "lucide-react";
import {AppPlatform} from "./MetadataManager";
import {toast} from "sonner";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
<<<<<<< HEAD
  id: string
  url: string
  file: File
<<<<<<< HEAD
}
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
=======
<<<<<<< HEAD
  id: string;
url: string;
file: File 
};
}

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({
  platform,
}) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addScreenshots(Array.from(e.target.files))
    }
<<<<<<< HEAD
  }
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
=======
=======
  };
=======
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from "lucide-react",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (imageFiles.length === 0) {
      toast.error("Please select valid image files")
      return
    }
    // Limit the number of screenshots
<<<<<<< HEAD
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
    if (availableSlots <= 0) {
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`);
      return
    }
    const filesToAdd = imageFiles.slice(0, availableSlots);
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring(2, 9);
      url: URL.createObjectURL(file)
      file
    }));
    setScreenshots(prev => [...prev, ...newScreenshots]);
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
    }
  }
  const removeScreenshot = (id: string) => {
    setScreenshots(prev => {
      const filtered = prev.filter(screenshot => screenshot.id !== id);
      // Revoke object URL to avoid memory leaks
      const removed = prev.find(screenshot => screenshot.id === id)
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
      return filtered
    })
  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = () => {
    setIsDragging(false)
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false)
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
    }
  }
=======
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
<<<<<<< HEAD
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10"
=======
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              : "border-zion-purple/30"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2"
          >
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
        <div className="text-xs text-gray-400 mb-4">
          {platform === "ios"
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."
          }
        </div>
        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative group">
              <img
                src={screenshot.url}
                alt="App screenshot"
                className="w-full h-auto rounded border border-zion-purple/20"
              />
              <button
                onClick={() => removeScreenshot(screenshot.id)}
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
<<<<<<< HEAD
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
