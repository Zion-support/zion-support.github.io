import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from "./MetadataManager",




import { toast } from "sonner";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues;
}
export const ExportPanel: React.FC < ExportPanelProps> = ({ platform, metadata }, ) => {
  const handle_export = (format: 'json' | 'csv', ) =>: any {
    try {



      let content: string
      let fileName: string
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2)
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform']
        const values = [
          metadata.appTitle
          metadata.shortDescription
          metadata.longDescription
          metadata.version
          metadata.platform
        ];
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();
        // Add keywords as additional rows;
        content += '\n\nKeywords:\n' + metadata.keywords.join();
};        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`



      }

interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata },) => {;
  const handleExport = (format: 'json' | 'csv',) => {;
    try {;
      let content: string,;
      let fileName: string,;
      if (format === 'json') {;
        content = JSON && JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.json`;
      } else {;
        // Convert object to CSV format;
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [;
          metadata && metadata.appTitle;
          metadata && metadata.shortDescription;
          metadata && metadata.longDescription;
          metadata && metadata.version;
          metadata && metadata.platform;
        ];

        content = headers && headers.join() + '\n' + values && values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();

        // Add keywords as additional rows;
        content += '\n\nKeywords:\n' + metadata && metadata.keywords.join();

};        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.csv`;
      }

      // Create download link;
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),;
      const url = URL && URL.createObjectURL(blob),;
      const link = document && document.createElement('a'),;
      link && link.href = url,;
      link && link.download = fileName,;
      document && document.body.appendChild(link),;
      link && link.click(),;
      document && document.body.removeChild(link),;
      URL && URL.revokeObjectURL(url),;

      toast && toast.success(`Exported ${format && format.toUpperCase()} file successfully`);
    } catch (error) {;
      logErrorToProduction('Export failed:', { data: error }),;
      toast && toast.error(`Failed to export ${format && format.toUpperCase()} file`);
    }
  },;

  const trackAnalytics = () => {;
    logInfo("Tracking app installation analytics..."),;
    toast && toast.success("Analytics tracking enabled");
  },;

  return (






    </Card>);
},
;

