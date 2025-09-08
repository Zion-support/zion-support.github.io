
<<<<<<< HEAD
=======
import React from 'react',
import { Button } from "@/components/ui/button";
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}
  }
  "customFile": File | null,
  "onFileUpload": ("e": React.ChangeEvent<HTMLInputElement>) => void
}
import { Button } from "@/components/ui/button";"
import { Upload, FileText } from 'lucide-react';'
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

import React from 'react',
<<<<<<< HEAD


  return ("

=======

import { Button } from "@/components/ui/button",

import { Upload, FileText } from 'lucide-react',

interface UploadSectionProps {}
  customFile: File | null,;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
import React from "react";"
import { Upload, FileText } from "lucide-react";"
interface UploadSectionProps {
  }
  "customFile": File | null,
  "onFileUpload": ("e": React.ChangeEvent<HTMLInputElement>) => void
}
interface UploadSectionProps {
  }
  "customFile": File | null,
  "onFileUpload": ("e": React.ChangeEvent<HTMLInputElement>) => void
}
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>


export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;
<<<<<<< HEAD

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

=======


  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-3">;
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;

        <p className="text-sm text-zion-slate mb-2">;

<<<<<<< HEAD
      


      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>

            </div>

=======
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB;
            </span>
          </div>
        </div>

      )}
    </div>
  );
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      )}
    </div>;
  );


<<<<<<< HEAD

=======
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
      )}
    </div>;
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <input;
            type="file";
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";

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
<<<<<<< HEAD

            <span className="text-xs text-zion-slate">"
</span>
          </div>

            type="file";""
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";""

=======
            </div>
import React from 'react';'
import { Upload, FileText } from 'lucide-react',;'
interface UploadSectionProps {;
  }
  "customFile": File | null;
  "onFileUpload": ("e": React.ChangeEvent<HTMLInputElement>) => void;
}
;
export function UploadSection() {;
  }
  return (;
return (;
    <div className="space-y-3">;"
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30">;"
        <Upload className="h-8 w-8 text-zion-purple mb-2" />;"
        <p className="text-sm text-zion-slate mb-2">;"
            : "Drag & drop your PDF or click to browse"}"
        </p>;
        <Button variant="outline" className="relative">;"
          Browse Files;
          <input;
            type="file";"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            accept=".pdf";"

            onChange={onFileUpload}
          />;
        ;
</input>
        </Button>;

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

}

<<<<<<< HEAD



=======

}
}
  ),;}


            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      )}
    </div>;
  );
}

<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
