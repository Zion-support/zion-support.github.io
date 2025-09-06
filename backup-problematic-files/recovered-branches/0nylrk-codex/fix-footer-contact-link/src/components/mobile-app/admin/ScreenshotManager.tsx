
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">App Screenshots</CardTitle>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD

            ref={fileInputRef}
            type="file";
            multiple;
            accept="image/*";
            onChange={handleFileSelect}

            className="mt-2";
          >;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;

                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity";
              >;
                <Trash2 className="h-3 w-3" />;
              </button>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;

