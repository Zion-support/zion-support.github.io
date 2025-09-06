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
ursor/fix-website-loading-errors-and-merge-6662
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key = {index,}
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"

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
