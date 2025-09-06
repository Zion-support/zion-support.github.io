import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Resume } from "@/types/resume";

import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { Download  } from 'lucide-react';
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {
  resume: Resume;
  onDownload: () => void;
  isLoading: boolean
}
export function ResumePreviewCard({
  resume
  onDownload
  isLoading
}: ResumePreviewCardProps) {
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react',
import { Resume } from "@/types/resume",
interface ResumePreviewCardProps {
  resume: Resume,
  onDownload: () => void,
  isLoading: boolean
}

export function ResumePreviewCard({ resume, onDownload, isLoading }: ResumePreviewCardProps) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        {resume.basic_info.summary && (
          <p className="text - xs text - zion - slate line - clamp - 2 mb - 2">;
            {resume.basic_info.summary}

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
      </CardContent>
    </Card>
      </CardContent>;
    </Card>;
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



=======

      </CardContent>;
    </Card>;




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}