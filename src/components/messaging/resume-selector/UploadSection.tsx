<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
import React from 'react',
import { Button } from "@/components/ui/button",
import { Upload, FileText } from 'lucide-react'
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
export function UploadSection({
  customFile
  onFileUpload
}: UploadSectionProps) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Upload, FileText } from 'lucide-react'
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;


}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {

  return (
    <div className='space-y-3'>;
      <div className='flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30'>;
        <Upload className='h-8 w-8 text-zion-purple mb-2' />;
        <p className='text-sm text-zion-slate mb-2'>;
          {customFile;
            ? customFile && customFile.name;
import React from 'react';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
=======
import React from 'react';
import { Button } from '@/components/ui/button';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Upload, FileText } from 'lucide-react';

interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onProcessFile: () => void;
  isProcessing: boolean;
}

export function UploadSection({
  customFile,
  onFileUpload,
  onRemoveFile,
  onProcessFile,
  isProcessing,
}: UploadSectionProps) {
  return (
<<<<<<< HEAD
=======
import { Upload, FileText } from 'lucide-react';
interface UploadSectionProps {
  custom_file: File | null;
  onFileUpload: (e: React.ChangeEvent < HTMLInputElement>) => void;
export /**
 * UploadSection - Function description
 */
function UploadSection() {
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space - y-3'>;
      <div className='flex flex - col items - center justify - center border - 2 border - dashed border - zion - purple / 30 rounded - lg p - 6 bg - zion - blue - dark / 30'>;
        <Upload className='h - 8 w - 8 text - zion - purple mb - 2' />;
        <p className='text - sm text - zion - slate mb - 2'>;
          {custom_file;
            ? custom_file.name;
            : 'Drag & drop your PDF or click to browse'}
        </p>;
        <Button variant='outline' className='relative'>;
          Browse Files;

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>
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
      
      {customFile && (
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      
      {customFile && (

        <div className="p-3 bg-zion-blue-dark/30 rounded-md">
<<<<<<< HEAD
=======
          <div className="flex items-center justify-between">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
              <span className="text-white">{customFile.name}</span>
            </div>
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>
          </div>
        </div>
<<<<<<< HEAD
      )}
    </div>
  )
}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
=======

          />;
        </Button>;
      </div>;

            type="file";
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer";
            accept=".pdf";
            onChange={onFileUpload}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      )}
    </div>;
  );
};
}
<<<<<<< HEAD
}
}
;
;
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
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Upload a new resume
              </span>
              <span className="mt-1 block text-sm text-gray-500">
                PDF, DOC, or DOCX files only
              </span>
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx"
              onChange={onFileUpload}
            />
          </div>
        </div>
      </div>

      {customFile && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-gray-400" />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{customFile.name}</h3>
              <p className="text-sm text-gray-500">
                {(customFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onRemoveFile}
              disabled={isProcessing}
            >
              Remove
            </Button>
          </div>
        </div>
      )}

      {customFile && (
        <Button
          onClick={onProcessFile}
          disabled={isProcessing}
          className="w-full"
        >
          {isProcessing ? 'Processing...' : 'Process Resume'}
        </Button>
      )}
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
