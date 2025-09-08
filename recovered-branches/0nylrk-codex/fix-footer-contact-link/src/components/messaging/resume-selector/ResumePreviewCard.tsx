
import React from 'react',
import { Card, CardContent } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge",";
import { Button } from "@/components/ui/button";'
import { Download  } from 'lucide-react';"
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {}
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
import { Resume } from "@/types/resume",  return (  return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">;
      <CardContent className="p-4">;
        <div className="flex justify-between items-start mb-2">;
          <div>;