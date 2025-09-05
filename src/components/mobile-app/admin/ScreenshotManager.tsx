
import React, {_useState, _useRef} from "react";

interface ScreenshotManagerProps {_platform: AppPlatform;}

type Screenshot = {_id: string;
  url: string;
  file: File;};

export const ScreenshotManager: React.FC<ScreenshotManagerProps> = (_{_platform}) => {_const [screenshots, _setScreenshots] = useState<Screenshot[]>([]);
  const [isDragging, _setIsDragging] = useState(false);
  const _fileInputRef = useRef<HTMLInputElement>(null);
  
  const _handleFileSelect = (_e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
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
      return;
    }
    
    const _filesToAdd = imageFiles.slice(0, availableSlots);
    
    const _newScreenshots = filesToAdd.map(file => ({_id: Math.random().toString(36).substring(2, _9), _url: window.URL.createObjectURL(file), _file}));
    
    setScreenshots(prev => [...prev, ...newScreenshots]);
    
    if (filesToAdd.length < imageFiles.length) {_toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${_maxScreenshots}.`);
    }
  };
  
  const _removeScreenshot = (_id: string) => {_setScreenshots(prev => {
      const _filtered = prev.filter(screenshot => screenshot.id !== id);
      
      // Revoke object window.URL to avoid memory leaks
      const _removed = prev.find(screenshot => screenshot.id === id);
      if (removed) {
        window.URL.revokeObjectURL(removed.url);}
      
      return filtered;
    });
  };
  
  const _handleDragOver = (_e: React.DragEvent) => {_e.preventDefault();
    setIsDragging(true);};
  
  const _handleDragLeave = () => {_setIsDragging(false);};
  
  const _handleDrop = (_e: React.DragEvent) => {_e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      addScreenshots(Array.from(e.dataTransfer.files));}
  };
  
  return (_<Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className={_`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
              : "border-zion-purple/30"}`}
          onDragOver={_handleDragOver}
          onDragLeave={_handleDragLeave}
          onDrop={_handleDrop}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input
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
          >
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
        
        <div className="text-xs text-gray-300 mb-4">
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
                loading="lazy"
              />
              <button
                onClick={_() => removeScreenshot(screenshot.id)}
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Remove screenshot"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
