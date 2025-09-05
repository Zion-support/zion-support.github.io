
<<<<<<< HEAD
import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { Resume } from "@/types/resume",
=======
import React from 'react';
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download } from 'lucide-react'
import { Resume } from &quot;@/types/resume&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {
  return (
    <Card className=&quot;mt-3 bg-zion-blue-dark/30 border-zion-purple/20&quot;>
      <CardContent className=&quot;p-4&quot;>
        <div className=&quot;flex justify-between items-start mb-2&quot;>
          <div>
            <h4 className=&quot;font-medium text-white&quot;>{resume.basic_info.title}</h4>
            {resume.basic_info.headline && (
              <p className=&quot;text-sm text-zion-cyan&quot;>{resume.basic_info.headline}</p>
            )}
          </div>
          <Button 
            variant=&quot;ghost&quot; 
            size=&quot;sm&quot; 
            onClick={onDownload} 
            disabled={isLoading}
            className=&quot;h-8 w-8 p-0&quot;
          >
            <Download className=&quot;h-4 w-4 text-zion-cyan&quot; />
            <span className=&quot;sr-only&quot;>Download Resume</span>
          </Button>
        </div>
        
        {resume.basic_info.summary && (
          <p className=&quot;text-xs text-zion-slate line-clamp-2 mb-2&quot;>
            {resume.basic_info.summary}
          </p>
        )}
        
        {resume.skills && resume.skills.length > 0 && (
          <div className=&quot;flex flex-wrap gap-1 mt-2&quot;>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant=&quot;outline&quot;
                className=&quot;bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs&quot;
              >
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
              <Badge 
                variant=&quot;outline&quot;
                className=&quot;bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs&quot;
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
