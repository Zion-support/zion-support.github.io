
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',

import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
=======
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

=======
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react',
import { Button } from "@/components/ui/button",
=======

import React from "react";"
import { Button } from "@/components/ui/button";"
import { Upload, FileText } from "lucide-react";


import React from 'react',"
import { Button } from "@/components/ui/button",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Upload, FileText } from 'lucide-react',

interface UploadSectionProps {}
  customFile: File | null,;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return ("
    <div className="space-y-3">"
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">"
        <Upload className="h-8 w-8 text-zion-purple mb-2" />"
        <p className="text-sm text-zion-slate mb-2">"
          {customFile ? customFile.name : "Drag & drop your PDF or click to browse"}
        </p>"
        <Button variant="outline" className="relative">
          Browse Files;
          <input"
            type="file""
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer""
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
"
    <div className="space-y-3">;"
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;"
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-sm text-zion-slate mb-2">;
"
            : "Drag & drop your PDF or click to browse"}
        </p>;"
        <Button variant="outline" className="relative">;
          Browse Files;


      




      
      


      
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
  return (      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
  return (      
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
  return (
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
          {customFile;
            ? customFile && customFile.name;
            : "Drag & drop your PDF or click to browse"}
        </p>;
        <Button variant="outline" className="relative">;
          Browse Files;


      


      
      
      
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      {customFile && ("
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">"
          <div className="flex items-center justify-between">"
            <div className="flex items-center">"
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />"
              <span className="text-white">{customFile.name}</span>
            </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB;
            </span>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======


=======
=======


            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      )}
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB
            </span>
          </div>
        </div>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======


'
import React from 'react',;"
import { Button } from "@/components/ui/button",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Upload, FileText } from 'lucide-react',;
interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
;
export function UploadSection() { return null; }
            : "Drag & drop your PDF or click to browse"}
        </p>;"
        <Button variant="outline" className="relative">;
          Browse Files;
<<<<<<< HEAD
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
              <span className="text-white">{customFile && customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">;
              {Math && Math.round(customFile && customFile.size / 1024)} KB;
            </span>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      {customFile && (;"
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">;"
          <div className="flex items-center justify-between">;"
            <div className="flex items-center">;"
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}
    </div>;
  );

<<<<<<< HEAD
          <input;"
            type="file";"
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";"
=======
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
      )}
    </div>;
  );
          <input;
            type="file";
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            accept=".pdf";
            on_change={onFileUpload}
          />;
        </Button>;
      </div>;
<<<<<<< HEAD
      {custom_file && ("
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;"
          <div className="flex items - center justify - between">;"
            <div className="flex items - center">;"
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;"
              <span className="text - white">{custom_file.name}</span>;
            </div>;"
=======
      {custom_file && (
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;
          <div className="flex items - center justify - between">;
            <div className="flex items - center">;
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;
              <span className="text - white">{custom_file.name}</span>;
            </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text - xs text - zion - slate">;
              {Math.round (custom_file.size / 1024)} KB;
            </span>;
          </div>;
        </div>)}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}


}
  ),;}
<<<<<<< HEAD
 interface UploadSectionProps {}
  customFile: File | null;
onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}export function UploadSection() { return null; }
}outline"className=" relative" > Browse Files <input /> </Button> </div> </div> </div>) 
}</div>) 
}"
              <span className="text-white">{customFile.name}</span>;
            </div>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD


}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      )}
    </div>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      )}
    </div>;
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
