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

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Resume } from "@/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>
            {resume.basic_info.headline && (
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>
            )}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {resume.basic_info.summary}
          </p>
        )}

        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
=======
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
>>>>>>>             {resume.basic_info.summary}
          </p>
        )}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {resume.skills.slice(0, 5).map((skill, index) => (
            className='h-8 w-8 p-0'>;
            <Download className='h-4 w-4 text-zion-cyan' />;
            <span className='sr-only'>Download Resume</span>;
          </Button>;
        </div>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
        
        {resume.basic_info.summary && (
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">
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
            {resume.basic_info.summary}
          </p>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
            className='h-8 w-8 p-0'>;
            <Download className='h-4 w-4 text-zion-cyan' />;
            <span className='sr-only'>Download Resume</span>;
          </Button>;
        </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

        
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">

            {resume.skills.slice(0, 5).map((skill, index) => (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key = {index,}
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
<<<<<<< HEAD
<<<<<<< HEAD
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
>>>>>>>             {resume.skills.slice(0, 5).map((skill, index) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              >
              >
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
<<<<<<< HEAD
<<<<<<< HEAD

                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 

              <Badge 

<<<<<<< HEAD
                variant="outline"
=======
              >
>>>>>>>                 {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
>>>>>>> >>>>>>>                 variant="outline"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Badge
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge
              <Badge 
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
                variant="outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      </CardContent>;

=======
    </Card>
  )
}
      </CardContent>;
>>>>>>>     </Card>;
ursor/fix-website-loading-errors-and-merge-6662
              >
=======
              >
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
      </CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </Card>;
>>>>>>>   );
}
<<<<<<< HEAD

=======
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardContent>
    </Card>
  )
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </CardContent>;
    </Card>;
  );
};
}
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
