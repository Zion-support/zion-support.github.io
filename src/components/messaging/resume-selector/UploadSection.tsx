
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Upload, FileText } from 'lucide-react'

interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
  return (
    <div className=&quot;space-y-3&quot;>
      <div className=&quot;flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30&quot;>
        <Upload className=&quot;h-8 w-8 text-zion-purple mb-2&quot; />
        <p className=&quot;text-sm text-zion-slate mb-2&quot;>
          {customFile ? customFile.name : &quot;Drag & drop your PDF or click to browse&quot;}
        </p>
        <Button variant=&quot;outline&quot; className=&quot;relative&quot;>
          Browse Files
          <input
            type=&quot;file&quot;
            className=&quot;absolute inset-0 w-full h-full opacity-0 cursor-pointer&quot;
            accept=&quot;.pdf&quot;
            onChange={onFileUpload}
          />
        </Button>
      </div>
      
      {customFile && (
        <div className=&quot;p-3 bg-zion-blue-dark/30 rounded-md&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <div className=&quot;flex items-center&quot;>
              <FileText className=&quot;h-4 w-4 mr-2 text-zion-cyan&quot; />
              <span className=&quot;text-white&quot;>{customFile.name}</span>
            </div>
            <span className=&quot;text-xs text-zion-slate&quot;>{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
      )}
    </div>
  );
}
