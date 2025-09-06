<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Resume } from "@/types/resume";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { Download  } from 'lucide-react';
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {;
  resume: Resume;
  onDownload: () => void;
=======
=======
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react',
import { Resume } from "@/types/resume",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  isLoading: boolean
}
export function ResumePreviewCard({
  resume
  onDownload
  isLoading
}: ResumePreviewCardProps) {
  return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;
            <h4 className="font-medium text-white">;
              {resume && resume.basic_info.title}
            </h4>;
            {resume && resume.basic_info.headline && (;
              <p className="text-sm text-zion-cyan">;
                {resume && resume.basic_info.headline}
              </p>;
            )}
          </div>;
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
          <p className="text - xs text - zion - slate line - clamp - 2 mb - 2">;
            {resume.basic_info.summary}
<<<<<<< HEAD
          </p>
        )}
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs">;
                {skill && skill.name}
              </Badge>;
            ))}
            {resume && resume.skills.length > 5 && (;
              <Badge
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs">;
                +{resume && resume.skills.length - 5} more;
              </Badge>;
            )}
          </div>;
        )}
      </CardContent>;
    </Card>;
=======

            className="h-8 w-8 p-0">;
            <Download className="h-4 w-4 text-zion-cyan" />;
            <span className="sr-only">Download Resume</span>;
          </Button>;
        </div>;


        {resume && resume.basic_info.summary && (;
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {resume.basic_info.summary}
          </p>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

=======
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
              >
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
<<<<<<< HEAD
      </CardContent>
<<<<<<< HEAD
    </Card>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </CardContent>;
    </Card>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
          </p>)}
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex - wrap gap - 1 mt - 2">;
            {resume.skills.slice (0, 5).map ((skill, index) => (
              <Badge;
                key={index}
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs";
              >;
                {skill.name}
              </Badge>))}
            {resume.skills.length > 5 && (
              <Badge;
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - slate border - zion - purple / 20 text - xs";
              >;
                +{resume.skills.length - 5} more;
              </Badge>)}
          </div>)}
      </CardContent>;
    </Card>);
}