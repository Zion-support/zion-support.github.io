

import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react",
import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";

interface ExportPanelProps {
  platform: AppPlatform;
  metadata: AppMetadataValues
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {

  const handleExport = null;

