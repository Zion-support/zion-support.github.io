

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react',

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface UploadSectionProps {
  customFile: File | null,
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

}

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


      
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
            <span className="text-xs text-zion-slate">
              {Math.round(customFile.size / 1024)} KB
            </span>
          </div>
        </div>
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
      )}
    </div>
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
    </div>;
  );

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

}
<<<<<<< HEAD
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
