
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Upload, Trash2, Plus } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
import { toast } from "sonner",
=======
import React, { useState, useRef } from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Upload, Trash2, Plus } from &quot;lucide-react&quot;;
import { AppPlatform } from &quot;./MetadataManager&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ScreenshotManagerProps {
  platform: AppPlatform
}

type Screenshot = {
  id: string,
  url: string,
  file: File
},

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]),
  const [isDragging, setIsDragging] = useState(false),
  const fileInputRef = useRef<HTMLInputElement>(null),
=======
import React, {_useState, _useRef} from "react";

interface ScreenshotManagerProps {_platform: AppPlatform;}

type Screenshot = {_id: string;
  url: string;
  file: File;};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = (_{_platform}) => {_const [screenshots, _setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, _setIsDragging] = useState(false);
  const _fileInputRef = useRef<HTMLInputElement>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleFileSelect = (_e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
<<<<<<< HEAD
      addScreenshots(Array.from(e.target.files))
    }
  },
  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
    if (imageFiles.length === 0) {
<<<<<<< HEAD
      toast.error("Please select valid image files"),
      return
    }
    
    // Limit the number of screenshots
    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),
      return
=======
      toast.error(&quot;Please select valid image files&quot;);
      return;
    }
    
    // Limit the number of screenshots
    const maxScreenshots = platform === &quot;ios&quot; ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots.length;
    
    if (availableSlots <= 0) {
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === &quot;ios&quot; ? &quot;iOS&quot; : &quot;Android&quot;}`);
=======
      addScreenshots(Array.from(e.target.files));}
  };
  
  const _addScreenshots = (_files: File[]) => {_// Filter for image files only
    const _imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast.error("Please select valid image files");
      return;}
    
    // Limit the number of screenshots
    const _maxScreenshots = platform === "ios" ? 10 : 8;
    const _availableSlots = maxScreenshots - screenshots.length;
    
    if (availableSlots <= 0) {_toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${_platform === "ios" ? "iOS" : "Android"}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    const filesToAdd = imageFiles.slice(0, availableSlots),
    
    const newScreenshots = filesToAdd.map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      url: URL.createObjectURL(file),
      file
    })),
=======
    const _filesToAdd = imageFiles.slice(0, availableSlots);
    
    const _newScreenshots = filesToAdd.map(file => ({_id: Math.random().toString(36).substring(2, _9), _url: window.URL.createObjectURL(file), _file}));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setScreenshots(prev => [...prev, ...newScreenshots]),
    
<<<<<<< HEAD
    if (filesToAdd.length < imageFiles.length) {
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
=======
    if (filesToAdd.length < imageFiles.length) {_toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${_maxScreenshots}.`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const removeScreenshot = (id: string) => {
    setScreenshots(prev => {
      const filtered = prev.filter(screenshot => screenshot.id !== id),
      
      // Revoke object URL to avoid memory leaks
      const removed = prev.find(screenshot => screenshot.id === id),
      if (removed) {
        URL.revokeObjectURL(removed.url)
      }
=======
  const _removeScreenshot = (_id: string) => {_setScreenshots(prev => {
      const _filtered = prev.filter(screenshot => screenshot.id !== id);
      
      // Revoke object window.URL to avoid memory leaks
      const _removed = prev.find(screenshot => screenshot.id === id);
      if (removed) {
        window.URL.revokeObjectURL(removed.url);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return filtered
    })
  },
  
<<<<<<< HEAD
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(),
    setIsDragging(true)
  },
  
  const handleDragLeave = () => {
    setIsDragging(false)
  },
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(),
    setIsDragging(false),
    
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files))
    }
  },
  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
=======
  const _handleDragOver = (_e: React.DragEvent) => {_e.preventDefault();
    setIsDragging(true);};
  
  const _handleDragLeave = () => {_setIsDragging(false);};
  
  const _handleDrop = (_e: React.DragEvent) => {_e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files));}
  };
  
  return (_<Card className="bg-zion-blue border-zion-purple/30">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <CardHeader>
        <CardTitle className=&quot;text-lg&quot;>App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className={_`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging 
<<<<<<< HEAD
              ? &quot;border-zion-cyan bg-zion-cyan/10&quot; 
              : &quot;border-zion-purple/30&quot;
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
=======
              ? "border-zion-cyan bg-zion-cyan/10" 
              : "border-zion-purple/30"}`}
          onDragOver={_handleDragOver}
          onDragLeave={_handleDragLeave}
          onDrop={_handleDrop}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <Upload className=&quot;mx-auto h-8 w-8 text-gray-400 mb-2&quot; />
          <p className=&quot;text-sm mb-2&quot;>Drag & drop screenshots here</p>
          <input
<<<<<<< HEAD
            ref={fileInputRef}
            type=&quot;file&quot;
            multiple
            accept=&quot;image/*&quot;
            onChange={handleFileSelect}
            className=&quot;hidden&quot;
          />
          <Button 
            variant=&quot;outline&quot; 
            onClick={() => fileInputRef.current?.click()}
            className=&quot;mt-2&quot;
=======
            ref={_fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={_handleFileSelect}
            className="hidden"
          />
          <Button 
            variant="outline" 
            onClick={_() => fileInputRef.current?.click()}
            className="mt-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Plus className=&quot;mr-2 h-4 w-4&quot; />
            Select Files
          </Button>
        </div>
        
<<<<<<< HEAD
        <div className=&quot;text-xs text-gray-400 mb-4&quot;>
          {platform === &quot;ios&quot; 
            ? &quot;Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots.&quot;
            : &quot;Vary by device. Include phone and tablet screenshots. Max 8 per device type.&quot;
          }
        </div>
        
        <div className=&quot;grid grid-cols-2 gap-3&quot;>
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className=&quot;relative group&quot;>
              <img 
                src={screenshot.url}
                alt=&quot;App screenshot&quot;
                className=&quot;w-full h-auto rounded border border-zion-purple/20&quot;
              />
              <button
                onClick={() => removeScreenshot(screenshot.id)}
                className=&quot;absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity&quot;
=======
        <div className="text-xs text-gray-400 mb-4">
          {_platform === "ios" 
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."}
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {_screenshots.map(_(screenshot) => (_<div key={screenshot.id} className="relative group">
              <img 
                src={_screenshot.url}
                alt="App screenshot"
                className="w-full h-auto rounded border border-zion-purple/20"
              />
              <button
                onClick={_() => removeScreenshot(screenshot.id)}
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Trash2 className=&quot;h-3 w-3&quot; />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
},
