
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ScreenshotManager.tsx
import React, { useState, useRef } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Upload, Trash2, Plus } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/ScreenshotManager.tsx
import { AppPlatform } from "./MetadataManager",;
import { toast } from "sonner",;
;
interface ScreenshotManagerProps {;
  platform:AppPlatform;
}
type Screenshot = {;
  id: string;,;
  url: string;,;
  file:File;
},;
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform ;}) => {;

  const [screenshots, setScreenshots] = useState<Screenshot[]>([]),;

  const fileInputRef = useRef<HTMLInputElement>(null),;

  const handleFileSelect = (e:React.ChangeEvent<HTMLInputElement>) => {;

    if (availableSlots <= 0) {;"
      toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" :"Android"}`),;"
      return,;
    const filesToAdd = imageFiles.slice(0, availableSlots),;
    const newScreenshots = filesToAdd.map(file => ({;)
      id: Math.random().toString(36).substring(2;, 9),;
      url: URL.createObjectURL(file);,;
      file;
    })),;
    setScreenshots(prev => [...prev, ...newScreenshots]),;
    if (filesToAdd.length < imageFiles.length) {;`;
      toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`),;
  const removeScreenshot = (id:string) => {;
    setScreenshots(prev => {;)
      const filtered = prev.filter(screenshot => screenshot.id !== id),;
      // Revoke object URL to avoid memory leaks;
      const removed = prev.find(screenshot => screenshot.id === id),;
      if (removed) {;
        URL.revokeObjectURL(removed.url);
      return filtered,;
    }),;
  const handleDragOver = (e:React.DragEvent) => {;
    e.preventDefault(),;
    setIsDragging(true);
  const handleDragLeave = () => {;
    setIsDragging(false),;
  const handleDrop = (e:React.DragEvent) => {;
    if (e.dataTransfer.files) {;
      addScreenshots(Array.from(e.dataTransfer.files));
}
  },;
  ;
  return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ScreenshotManager.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="bg-zion-blue border-zion-purple/30">;
=======
  return (;"
    <Card className="bg-zion-blue border-zion-purple/30">;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <CardHeader>;
"
        <CardTitle className="text-lg">App Screenshots;"
      <CardContent>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ScreenshotManager.tsx
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${;
            isDragging ;"
              ? "border-zion-cyan bg-zion-cyan/10" ;""
              :"border-zion-purple/30";"`;
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >;
</div>"
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />;"
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;"
          <input;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            ref={fileInputRef}
            type="file";
            multiple;
            accept="image/*";
            onChange={handleFileSelect}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ScreenshotManager.tsx
            className="hidden";
          />;
</input>
          <Button ;"
            variant="outline" ;")
            onClick={() => fileInputRef.current?.click()}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/ScreenshotManager.tsx
            className="mt-2";
          >;
            <Plus className="mr-2 h-4 w-4" />;
            Select Files;
          </Button>;
        </div>;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ScreenshotManager.tsx

                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity";
        ;
        <div className="text-xs text-gray-300 mb-4">;
          {platform === "ios" ;
            ? "Recommended size:1290x2796 pixels for iPhone. Max 10 screenshots.";
            :"Vary by device. Include phone and tablet screenshots. Max 8 per device type.";
          }
        </div>;
        ;
        <div className="grid grid-cols-2 gap-3">;
          {screenshots.map((screenshot) => (;
            <div key={screenshot.id} className="relative group">;
              <img;
                src={screenshot.url}"
                alt="App screenshot";""
                className="w-full h-auto rounded border border-zion-purple/20";""
                loading="lazy";"
</img>
              <button;
                onClick={() => removeScreenshot(screenshot.id)}
className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
                aria-label="Remove screenshot";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/ScreenshotManager.tsx
              >;
                <Trash2 className="h-3 w-3" />;
              </button>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
),;
},; interface ScreenshotManagerProps {;
  platform: AppPlatform ;
}type Screenshot = {;
  id: string;
url: string;
<<<<<<< HEAD
file: File ;
};
pr-12325
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({;
)
  const [screenshots,  setScreenshots] = useState<Screenshot[]> ([]);

ursor/fix-lint-push-and-merge-to-main-e10e: src/components/mobile-app/admin/ScreenshotManager.tsx;
}setScreenshots (prev => [...prev, ...newScreenshots]);
}
};
return filtered;
}) ;
};
<CardHeader> <CardTitle className="text-lg" >App Screenshots</CardTitle> </CardHeader> <CardContent> <div className= {;"  `border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors $ {";"  isDragging > <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2" >Drag & drop screenshots here</p> <input > <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> > <Trash2 className="h-3 w-3" /> </button> </div>) ) ;
}</div> </CardContent> </Card>) ;
:temp_broken_files/mobile-app/admin/ScreenshotManager.tsx
};""
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/mobile-app/admin/ScreenshotManager.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/ScreenshotManager.tsx
