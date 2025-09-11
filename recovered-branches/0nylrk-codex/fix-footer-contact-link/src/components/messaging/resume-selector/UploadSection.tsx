
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

import React from 'react',
import { Button } from "@/components/ui/button";
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {
=======

interface UploadSectionProps {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function UploadSection({
  customFile
  onFileUpload
}: UploadSectionProps) {
<<<<<<< HEAD
=======

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',

interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
=======
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
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
=======
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
  return (

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
      
<<<<<<< HEAD
      
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD


            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
      )}
    </div>
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB
            </span>
          </div>
        </div>

=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Upload, FileText } from 'lucide-react',;
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
<<<<<<< HEAD
<<<<<<< HEAD
          />;
        </Button>;
      </div>;
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
          />;
        </Button>;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
        </Button>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {customFile && (;
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">;
          <div className="flex items-center justify-between">;
            <div className="flex items-center">;
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <span className="text-white">{customFile && customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">;
              {Math && Math.round(customFile && customFile.size / 1024)} KB;
            </span>;
          </div>;
        </div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      )}
    </div>;
  );

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <input;
            type="file";
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";
            accept=".pdf";
            on_change={onFileUpload}
          />;
        </Button>;
      </div>;
      {custom_file && (
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;
          <div className="flex items - center justify - between">;
            <div className="flex items - center">;
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;
              <span className="text - white">{custom_file.name}</span>;
            </div>;
            <span className="text - xs text - zion - slate">;
              {Math.round (custom_file.size / 1024)} KB;
            </span>;
          </div>;
        </div>)}
    </div>);
<<<<<<< HEAD
}


<<<<<<< HEAD
}
  ),;}
 interface UploadSectionProps {
  customFile: File | null;
onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void 
}export function UploadSection ({
  customFile, onFileUpload 
}: UploadSectionProps) {
  return (<div className="space-y-3" > <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30" > <Upload className="h-8 w-8 text-zion-purple mb-2" /> <p className="text-sm text-zion-slate mb-2" > {
  customFile ? customFile.name : "Drag & drop your PDF or click to browse" 
}outline"className=" relative" > Browse Files <input /> </Button> </div> </div> </div>) 
}</div>) 
}
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
