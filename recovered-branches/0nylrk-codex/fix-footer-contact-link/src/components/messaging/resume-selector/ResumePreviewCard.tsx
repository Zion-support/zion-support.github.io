

import { Button } from "@/components/ui/button";
import { Download  } from 'lucide-react';
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {
  isLoading: boolean
}
export function ResumePreviewCard({
  resume
  onDownload
  isLoading
}: ResumePreviewCardProps) {
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;
            className="h-8 w-8 p-0">;
            <Download className="h-4 w-4 text-zion-cyan" />;
            <span className="sr-only">Download Resume</span>;
          </Button>;
        </div>;
        {resume && resume.basic_info.summary && (;
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">;
            {resume.basic_info.summary}
          </p>
        )}
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs">;
                +{resume && resume.skills.length - 5} more;
              </Badge>;
            )}
