return (
    <Card className="bg-zion-blue border-zion-purple/30">"
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>"
      </CardHeader>
      <CardContent>
type Screenshot = {;
  id: string,;
  url: string,;
  file: File;
};
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);,
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);  ;
  const handleFileSelect = (e: React && React.ChangeEvent<HTMLInputElement>,) => {;
    if (e && e.target.files) {;
      addScreenshots(Array && Array.from(e && e.target.files));
    }
  };,
  const addScreenshots = (files: File[],) => {;
    // Filter for image files only;
    const imageFiles = files && files.filter(file => file && file.type.startsWith('image/'));
    const maxScreenshots = platform === "ios" ? 10 : 8;
    const availableSlots = maxScreenshots - screenshots && screenshots.length;
};    // Limit the number of screenshots;
    const maxScreenshots = platform === "ios" ? 10 : 8,;
    const availableSlots = maxScreenshots - screenshots && screenshots.length,;
    if (availableSlots <= 0) {;
      toast && toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`),;`
      return;
    }
    const filesToAdd = imageFiles && imageFiles.slice(0, availableSlots),;
    const newScreenshots = filesToAdd && filesToAdd.map(file => ({;
      id: Math && Math.random().toString(36).substring(2, 9),;
      url: URL && URL.createObjectURL(file),;
      file;
    })),;,
    setScreenshots(prev => [...prev, ...newScreenshots]),;
    if (filesToAdd && filesToAdd.length < imageFiles && imageFiles.length) {;
      toast && toast.warning(`Only added ${filesToAdd && filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`);`
    }
  },;
  const removeScreenshot = (id: string,) => {;
    setScreenshots(prev => {;
      const filtered = prev && prev.filter(screenshot => screenshot && screenshot.id !==,  id),;
      // Revoke object URL to avoid memory leaks;
      const removed = prev && prev.find(screenshot => screenshot && screenshot.id ===,  id),;
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
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${`
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10""
              : "border-zion-purple/30""
          }`}`
          onDragOver = {handleDragOver,}
          onDragLeave = {handleDragLeave,}
          onDrop = {handleDrop,}
        <div
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${`
            isDragging
              ? "border-zion-cyan bg-zion-cyan/10" "
              : "border-zion-purple/30""
          }`}`
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />"
          <p className="text-sm mb-2">Drag & drop screenshots here</p>"
          <input))
