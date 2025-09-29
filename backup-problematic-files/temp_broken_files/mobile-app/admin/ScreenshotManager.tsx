

import { AppPlatform } from "./MetadataManager",;
import { toast } from "sonner",;



  id: string;,;
  url: string;,;
  file:File;
},;
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform ;}) => {;




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




  const handleDrop = (e:React.DragEvent) => {;
    if (e.dataTransfer.files) {;
      addScreenshots(Array.from(e.dataTransfer.files));

    <Card className="bg-zion-blue border-zion-purple/30">;

      <CardHeader>;
"
        <CardTitle className="text-lg">App Screenshots;"
      <CardContent>;

          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${;
            isDragging ;"
              ? "border-zion-cyan bg-zion-cyan/10" ;""
              :"border-zion-purple/30";"`;


</div>"
          <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />;"
          <p className="text-sm mb-2">Drag & drop screenshots here</p>;"
          <input;

            className="hidden";

          />;
</input>
          <Button ;"
            variant="outline" ;")
            onClick={() => fileInputRef.current?.click()}




              <img;
                src={screenshot.url}"
                alt="App screenshot";""
                className="w-full h-auto rounded border border-zion-purple/20";""
                loading="lazy";"
</img>
              <button;
                onClick={() => removeScreenshot(screenshot.id)}

              >;
                <Trash2 className="h-3 w-3" />;




};
pr-12325
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({;
)

  const [screenshots,  setScreenshots] = useState<Screenshot[]> ([]);



:temp_broken_files/mobile-app/admin/ScreenshotManager.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/mobile-app/admin/ScreenshotManager.tsx


};
<CardHeader> <CardTitle className="text-lg" >App Screenshots</CardTitle> </CardHeader> <CardContent> <div className= {;"  `border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors $ {";"  isDragging > <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2" >Drag & drop screenshots here</p> <input > <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> > <Trash2 className="h-3 w-3" /> </button> </div>) ) ;
}</div> </CardContent> </Card>) ;


