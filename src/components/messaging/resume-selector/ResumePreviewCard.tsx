
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";,
import { Badge } from "@/components/ui/badge";,
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Resume } from "@/types/resume";
interface ResumePreviewCardProps {resume: Resume;
onDownload: () => void;
  isLoading: boolean,
export function ResumePreviewCard({
  resume
}
onDownload}
              <Badge