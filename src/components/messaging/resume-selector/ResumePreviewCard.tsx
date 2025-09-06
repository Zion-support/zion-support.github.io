>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Resume } from '@/types/resume';

interface ResumePreviewCardProps {
  resume: Resume;
  onDownload: () => void;
  isLoading: boolean;

export function ResumePreviewCard({
  resume,
  onDownload,
  isLoading,
}: ResumePreviewCardProps) {
  return (
    <Card className='mt-3 bg-zion-blue-dark/30 border-zion-purple/20'>
      <CardContent className='p-4'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h4 className='font-medium text-white'>
              {resume.basic_info.title}
            </h4>
            {resume.basic_info.headline && (
              <p className='text-sm text-zion-cyan'>
                {resume.basic_info.headline}
              </p>
            )}
          </div>
          <Button
            variant='ghost'
            size='sm'
            onClick={onDownload}
            disabled={isLoading}
            className='h-8 w-8 p-0'
          >
            <Download className='h-4 w-4 text-zion-cyan' />
            <span className='sr-only'>Download Resume</span>
          </Button>
        </div>

        {resume.basic_info.summary && (
          <p className='text-xs text-zion-slate line-clamp-2 mb-2'>
            {resume.basic_info.summary}
          </p>
        )}

        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
              <Badge
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >
=======
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
