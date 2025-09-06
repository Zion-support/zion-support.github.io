
=======
import React from 'react',;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react',;
import { Resume } from "@/types/resume",;
;
interface ResumePreviewCardProps {;
  resume:Resume,;
  onDownload:() => void,;
  isLoading:boolean;
}
;
export function ResumePreviewCard({ resume, onDownload, isLoading } ResumePreviewCardProps) {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;
<<<<<<< HEAD

          </div>;
        )}
      </CardContent>;
    </Card>;

