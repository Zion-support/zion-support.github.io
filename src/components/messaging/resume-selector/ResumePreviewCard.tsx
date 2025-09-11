<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { Resume } from '@/types/resume'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Resume } from "@/types/resume"
interface ResumePreviewCardProps {
  resume: Resume
  onDownload: () => void
  isLoading: boolean
export function ResumePreviewCard({
  resume,
  onDownload,
  isLoading,
}: ResumePreviewCardProps) {

import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {
  resume: Resume;
  onDownload: () => void;
  isLoading: boolean
export function ResumePreviewCard({
  resume
  onDownload
  isLoading
}: ResumePreviewCardProps) {
import { Resume } from "@/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {
  return (
return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
=======
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Resume {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
  status?: 'draft' | 'published' | 'archived';
}

interface ResumePreviewCardProps {
  resume: Resume;
  isSelected: boolean;
  onSelect: (resume: Resume) => void;
  onDownload: (resume: Resume) => void;
}

export const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({
  resume,
  isSelected,
  onSelect,
  onDownload,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected
          ? 'ring-2 ring-blue-500 border-blue-500'
          : 'hover:border-gray-300'
      }`}
      onClick={() => onSelect(resume)}
    >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {resume.description}
            </p>
          </div>
<<<<<<< HEAD
          <Button
            variant='ghost'
            size='sm'
            onClick={onDownload}
            disabled={isLoading}
            className='h-8 w-8 p-0'          >
            <Download className='h-4 w-4 text-zion-cyan' />
            <span className='sr-only'>Download Resume</span>
          </Button>
        </div>
        {resume.basic_info.summary && (
          <p className='text-xs text-zion-slate line-clamp-2 mb-2'>
          </p>
        )}
ursor/fix-website-loading-errors-and-merge-6662
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
            className='h-8 w-8 p-0'>;
            <Download className='h-4 w-4 text-zion-cyan' />;
            <span className='sr-only'>Download Resume</span>;
          </Button>;
        </div>;
=======
return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>
            {resume.basic_info.headline && (
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>
            )}
          </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            variant='ghost'
            size='sm'
            onClick={onDownload}
            disabled={isLoading}
            className='h-8 w-8 p-0'          >
            <Download className='h-4 w-4 text-zion-cyan' />
            <span className='sr-only'>Download Resume</span>
          </Button>
        </div>
        {resume.basic_info.summary && (
          <p className='text-xs text-zion-slate line-clamp-2 mb-2'>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onDownload} 
            disabled={isLoading}
            className="h-8 w-8 p-0"
<<<<<<< HEAD
=======
          {resume.status && (
            <Badge className={getStatusColor(resume.status)}>
              {resume.status}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>Modified: {resume.lastModified}</span>
          <span>{resume.fileSize}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDownload(resume);
            }}
            className="flex-1"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant={isSelected ? 'default' : 'outline'}
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resume);
            }}
            className="flex-1"
          >
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        </div>
<<<<<<< HEAD
        
        {resume.basic_info.summary && (
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">
=======
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
        
        {resume.basic_info.summary && (
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react';
import { Resume } from "@/types/resume",;
interface ResumePreviewCardProps {;
  resume: Resume,;
  onDownload: () => void;
  isLoading: boolean;
}
;
export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {;
  return (;
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>;
            {resume.basic_info.headline && (;
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>;
            )}
          </div>;
          <Button;
            variant="ghost";
            size="sm";
            onClick={onDownload} ;
            disabled={isLoading}
            className="h-8 w-8 p-0";
          >;
            <Download className="h-4 w-4 text-zion-cyan" />;
            <span className="sr-only">Download Resume</span>;
          </Button>;
        </div>;
        {resume.basic_info.summary && (;
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {resume.basic_info.summary}
          </p>
        )}



        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
            className='h-8 w-8 p-0'>;
            <Download className='h-4 w-4 text-zion-cyan' />;
            <span className='sr-only'>Download Resume</span>;
          </Button>;
        </div>;

        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
<<<<<<< HEAD
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">

=======


                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs">;
                +{resume && resume.skills.length - 5} more;
              </Badge>;

                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">

<<<<<<< HEAD
            {resume.skills.slice(0, 5).map((skill, index) => (
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key = {index,}
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
<<<<<<< HEAD
              >
              >
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
<<<<<<< HEAD
              >
              </Badge>
            ))}
            {resume.skills.length > 5 && (
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
              <Badge
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge
              <Badge 
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
    </Card>
  )
}
      </CardContent>;
ursor/fix-website-loading-errors-and-merge-6662
              >
=======

              <Badge 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                variant='outline';
                className='bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs'              >          <div className="flex flex - wrap gap - 1 mt - 2">;
            {resume.skills.slice (0, 5).map ((skill, index) => (
              <Badge;
                key = {index, }
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs";
                {skill.name}
              </Badge>))}
            {resume.skills.length > 5 && (




<<<<<<< HEAD
}
      </CardContent>
    </Card>
  )
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;
    </Card>;
  );
};
}
<<<<<<< HEAD
}

              <Badge;
                variant='outline';
                className='bg - zion - blue - dark / 50 text - zion - slate border - zion - purple / 20 text - xs'              >              <Badge;
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - slate border - zion - purple / 20 text - xs";
              >;
                +{resume.skills.length - 5} more;
              </Badge>)}
          </div>)}
      </CardContent>;
    </Card>);
}

;
=======
      </CardContent>
    </Card>
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
