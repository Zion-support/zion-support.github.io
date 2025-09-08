



          metadata.platform

        ],
        '"`
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),

        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(),
        

      

;
      toast.success (`Exported ${format.toUpperCase ()} file successfully`);
    } catch (error) {





},
import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
import { AppPlatform, AppMetadataValues } from "./MetadataManager",;

import { toast } from "sonner",;
interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}

;
export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {;
  const handleExport = (format: 'json' | 'csv') => {;
    try {;
      let content: string,;
      let fileName: string,;
      if (format === 'json') {;
        content = JSON.stringify(metadata, null, 2),;
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`;
      } else {;
        // Convert object to CSV format;
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'],;
        const values = [;
          metadata.appTitle,;
          metadata.shortDescription,;
          metadata.longDescription,;
          metadata.version,;
          metadata.platform;
        ],;
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),;

      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),;
      const url = URL && URL.createObjectURL(blob);'
      const link = document && document.createElement('a');
      link && link.href = url;
      link && link.download = fileName;
      document && document.body.appendChild(link);
      link && link.click();
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);






          <div className="border - t border - zion - purple / 20 pt - 4">;
            <h4 className="font - medium mb - 2">Installation Analytics</h4>;
            <p className="text - sm text - gray - 400 mb - 3">;
              Track how many users click "Install" from web;
            </p>;
            <Button on_click={track_analytics} className="w - full">;


              Enable Analytics;





