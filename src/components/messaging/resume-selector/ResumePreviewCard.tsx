<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
interface Resume {
  id: string;
  title: string,
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
  status?: 'draft' | 'published' | 'archived';
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
import { Resume } from '@/types/resume';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { Resume } from "@/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
<<<<<<< HEAD
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
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onDownload} 
            disabled={isLoading}
            className="h-8 w-8 p-0"
=======
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
            {resume.basic_info.summary}
          </p>
        )}
        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
<<<<<<< HEAD
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
=======
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'
              >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
<<<<<<< HEAD
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
=======
<Badge
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>;
    </Card>;
  );
};
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
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
          </p>;
        )}
=======
            {resume.basic_info.summary}
          </p>
        )}
        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
<<<<<<< HEAD
              >
                {skill.name}
              </Badge>;
            ))}
            {resume.skills.length > 5 && (
=======
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
<<<<<<< HEAD
          </div>;
        )}
      </CardContent>;
    </Card>;
  );
}
;
=======
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          </div>
        )}
      </CardContent>;
    </Card>;
  )
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
