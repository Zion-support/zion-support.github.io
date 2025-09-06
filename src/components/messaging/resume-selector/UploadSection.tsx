
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Upload, FileText } from 'lucide-react'
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
<<<<<<< HEAD

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;


}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">
        <Upload className="h-8 w-8 text-zion-purple mb-2" />
        <p className="text-sm text-zion-slate mb-2">
          {customFile ? customFile.name : "Drag & drop your PDF or click to browse"}
        </p>
        <Button variant="outline" className="relative">
          Browse Files
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>
<<<<<<< HEAD
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange = {onFileUpload,}
          />
        </Button>
      </div>
      {customFile && (
        <div className='p-3 bg-zion-blue-dark/30 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <FileText className='h-4 w-4 mr-2 text-zion-cyan' />
              <span className='text-white'>{customFile.name}</span>
            </div>
            <span className='text-xs text-zion-slate'>
              {Math.round(customFile.size / 1024)} KB
            </span>          </div>      {customFile && (
      
      {customFile && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


      
      {customFile && (

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
;
export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {;
  return (;
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
          {customFile ? customFile.name : "Drag & drop your PDF or click to browse"}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      )}
    </div>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
}
}

          <input;
            type='file';
            className='absolute inset - 0 w - full h - full opacity - 0 cursor - pointer';
            accept='.pdf'            on_change={onFileUpload}
          />;
        </Button>;
      </div>;
            type="file";
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";
            accept=".pdf";
            on_change = {onFileUpload, }
          />;
        </Button>;
      </div>;
      {custom_file && (
        <div className='p - 3 bg - zion - blue - dark / 30 rounded - md'>;
          <div className='flex items - center justify - between'>;
            <div className='flex items - center'>;
              <FileText className='h - 4 w - 4 mr - 2 text - zion - cyan' />;
              <span className='text - white'>{custom_file.name}</span>;
            </div>;
            <span className='text - xs text - zion - slate'>;
              {Math.round (custom_file.size / 1024)} KB;
            </span>          </div>      {custom_file && (
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;
          <div className="flex items - center justify - between">;
            <div className="flex items - center">;
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;
              <span className="text - white">{custom_file.name}</span>;
            </div>;
            <span className="text - xs text - zion - slate">{Math.round (custom_file.size / 1024)} KB</span>;
          </div>;
        </div>)}
    </div>);
}

;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
