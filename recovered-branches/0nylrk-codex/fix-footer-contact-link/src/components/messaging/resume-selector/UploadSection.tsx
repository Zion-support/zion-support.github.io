
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
=======
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

<<<<<<< HEAD
=======
import React from 'react',
import { Button } from "@/components/ui/button";
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function UploadSection({
  customFile
  onFileUpload
}: UploadSectionProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

<<<<<<< HEAD
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',

interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
<<<<<<< HEAD
          {customFile;
            ? customFile && customFile.name;
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { Upload, FileText  } from './lucide-react';
interface UploadSectionProps {
  custom_file: File | null;
  onFileUpload: (e: React.ChangeEvent < HTMLInputElement>) => void;
}
export /**
 * UploadSection - Function description
 */
function UploadSection() {
  return (
    <div className="space - y-3">;
      <div className="flex flex - col items - center justify - center border - 2 border - dashed border - zion - purple / 30 rounded - lg p - 6 bg - zion - blue - dark / 30">;
        <Upload className="h - 8 w - 8 text - zion - purple mb - 2" />;
        <p className="text - sm text - zion - slate mb - 2">;
          {custom_file;
            ? custom_file.name;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            : "Drag & drop your PDF or click to browse"}
        </p>;
        <Button variant="outline" className="relative">;
          Browse Files;


      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB
            </span>
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======


=======
=======


            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
      )}
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
  return (
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
            : "Drag & drop your PDF or click to browse"}
        </p>;
        <Button variant="outline" className="relative">;
          Browse Files;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <input;
            type="file";
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";
            accept=".pdf";
            onChange={onFileUpload}
<<<<<<< HEAD

          />;
        </Button>;
      </div>;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {customFile && (;
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">;
          <div className="flex items-center justify-between">;
            <div className="flex items-center">;
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
<<<<<<< HEAD
              <span className="text-white">{customFile && customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">;
              {Math && Math.round(customFile && customFile.size / 1024)} KB;
            </span>;
          </div>;
        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      )}
    </div>;
  );

=======
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      )}
    </div>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

}
<<<<<<< HEAD
=======
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
