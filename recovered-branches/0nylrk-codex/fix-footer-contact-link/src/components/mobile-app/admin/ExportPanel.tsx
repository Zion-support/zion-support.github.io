
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = $2;
      let fileName: string,
      
      if (format === 'json') {
        content = JSON.stringify($2);
        fileName = $2;
        const values = $2;
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform
        ],
        
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join($2);
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join($2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
      }
      
      // Create download link
      const blob = new Blob($2);
      const url = URL.createObjectURL($2);
      const link = document.createElement($2);
      link.href = $2;
      link.download = $2;
      document.body.appendChild($2);
      link.click($2);
      document.body.removeChild($2);
      URL.revokeObjectURL($2);
      toast.success(`Exported ${format.toUpperCase()} file successfully`)
    } catch (error) {
      console.error($2);
      toast.error(`Failed to export ${format.toUpperCase()} file`)
    }
  },
  
  const trackAnalytics = () => {
    console.log($2);
    toast.success("Analytics tracking enabled")
  },
  
  return (
    <Card className = $2;