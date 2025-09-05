
<<<<<<< HEAD
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Upload, FileText } from 'lucide-react',;
;
interface UploadSectionProps {;
  customFile:File | null,;
  onFileUpload:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
;
export function UploadSection({ customFile, onFileUpload } UploadSectionProps) {;
  return (;
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
          {customFile ? customFile.name :"Drag & drop your PDF or click to browse"}
        </p>;
        <Button variant="outline" className="relative">;
          Browse Files;
          <input;
            type="file";
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";
            accept=".pdf";
            onChange={onFileUpload}
          />;
        </Button>;
      </div>;
      ;
      {customFile && (;
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">;
          <div className="flex items-center justify-between">;
            <div className="flex items-center">;
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
  ),;
=======
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
  return (
    <div className=&quot;space-y-3&quot;>
      <div className=&quot;flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30&quot;>
        <Upload className=&quot;h-8 w-8 text-zion-purple mb-2&quot; />
        <p className=&quot;text-sm text-zion-slate mb-2&quot;>
          {customFile ? customFile.name : &quot;Drag & drop your PDF or click to browse&quot;}

interface UploadSectionProps {_customFile: File | null;
  onFileUpload: (_e: React.ChangeEvent<HTMLInputElement>) => void;}

export function UploadSection(_{_customFile, _onFileUpload}: UploadSectionProps) {_return (
    <div className="space-y-3">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">
        <Upload className="h-8 w-8 text-zion-purple mb-2" />
        <p className="text-sm text-zion-slate mb-2">
          {customFile ? customFile.name : "Drag & drop your PDF or click to browse"}
        </p>
        <Button variant=&quot;outline&quot; className=&quot;relative&quot;>
          Browse Files
          <input
            type=&quot;file&quot;
            className=&quot;absolute inset-0 w-full h-full opacity-0 cursor-pointer&quot;
            accept=&quot;.pdf&quot;
            onChange={onFileUpload}          />
        </Button>
      </div>
      
      {customFile && (
        <div className=&quot;p-3 bg-zion-blue-dark/30 rounded-md&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <div className=&quot;flex items-center&quot;>
              <FileText className=&quot;h-4 w-4 mr-2 text-zion-cyan&quot; />
              <span className=&quot;text-white&quot;>{customFile.name}</span>
            </div>
            <span className=&quot;text-xs text-zion-slate&quot;>{Math.round(customFile.size / 1024)} KB</span>          </div>
        </div>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
