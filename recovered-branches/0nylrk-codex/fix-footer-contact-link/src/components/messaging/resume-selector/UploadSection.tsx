
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Upload, FileText } from 'lucide-react',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {
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
=======
import React from 'react',;
import { Button } from "@/components/ui/button";
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;
        <p className="text-sm text-zion-slate mb-2">;
"
            : "Drag & drop your PDF or click to browse"}
        </p>;"
        <Button variant="outline" className="relative">;
          Browse Files;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
          {customFile;
            ? customFile && customFile.name;
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
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB;
            </span>
          </div>
        </div>
)}
    </div>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<input;
            type="file";
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";
            accept=".pdf";
            onChange={onFileUpload}

          />;
        </Button>;
      </div>;

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      )}
    </div>;
  );

<input;"
            type="file";"
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";"
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

interface UploadSectionProps {;
  customFile: File | null;,
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;

  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;

    <div className="space-y-3">"
</div>"
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">"
        <Upload className="h-8 w-8 text-zion-purple mb-2" />"
"
        <p className="text-sm text-zion-slate mb-2">"
</p>
        </p>"
        <Button variant="outline" className="relative">"

          <input;"
            type="file"""
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"""
            accept=".pdf""

            onChange={onFileUpload}
          />
</input>
        </Button>

      </div>"
    <div className="space-y-3">;"
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;"
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;"
        <p className="text-sm text-zion-slate mb-2">;"
        </p>;"
        <Button variant="outline" className="relative">;"
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">"
          <div className="flex items-center justify-between">"
            <div className="flex items-center">"
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />"
              <span className="text-white">{customFile.name}</span>"
            <span className="text-xs text-zion-slate">"
</span>
          </div>

            type="file";""
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";""
            accept=".pdf";"

            onChange={onFileUpload}
          />;
        ;
</input>
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
            <span className="text - xs text - zion - slate">;
              {Math.round (custom_file.size / 1024)} KB;
            </span>;
          </div>;
              <span className="text-white">{customFile.name}</span>;"
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;"
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";""
            on_change={onFileUpload}
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;"
          <div className="flex items - center justify - between">;"
            <div className="flex items - center">;"
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;"
              <span className="text - white">{custom_file.name}</span>;"
            <span className="text - xs text - zion - slate">;"
        </div>)}
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD

}
<<<<<<< HEAD
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

}
}
  ),;}
interface UploadSectionProps {}
  customFile: File | null;
onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}export function UploadSection() { return null; }
}outline"className=" relative" > Browse Files <input /> </Button> </div> </div> </div>) 
}</div>) 
}"
              <span className="text-white">{customFile.name}</span>;
            </div>;"
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
  );
}
;
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (<div className="space-y-3" > <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30" > <Upload className="h-8 w-8 text-zion-purple mb-2" /> <p className="text-sm text-zion-slate mb-2" > {"
</div>)"
}outline"className=" relative" > Browse Files <input />  </div> </div> </div>)"
}</div>) "
pr-12325
              <span className="text-white">{customFile.name}</span>;"
            </div>;"
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;"
          </div>;
        </div>;
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
