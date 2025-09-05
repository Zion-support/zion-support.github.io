
import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react',
import { Resume } from "@/types/resume",interface ResumePreviewCardProps {
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

interface ResumePreviewCardProps {_resume: Resume;
  onDownload: () => void;
  isLoading: boolean;}

export function ResumePreviewCard(_{_resume, _onDownload, _isLoading}: ResumePreviewCardProps) {_return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>
            {_resume.basic_info.headline && (
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={_onDownload} 
            disabled={_isLoading}
            className="h-8 w-8 p-0"
          >
            <Download className=&quot;h-4 w-4 text-zion-cyan&quot; />
            <span className=&quot;sr-only&quot;>Download Resume</span>
          </Button>
        </div>
        
        {resume.basic_info.summary && (
          <p className=&quot;text-xs text-zion-slate line-clamp-2 mb-2&quot;>            {resume.basic_info.summary}
          </p>
        )}
        
        {resume.skills && resume.skills.length > 0 && (
          <div className=&quot;flex flex-wrap gap-1 mt-2&quot;>
            {resume.skills.slice(0, 5).map((skill, index) => (              <Badge 
                key={index} 
                variant=&quot;outline&quot;
                className=&quot;bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs&quot;
              >
                {_skill.name}
              </Badge>
            ))}
            {_resume.skills.length > 5 && (
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
