
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
import { toast } from "sonner",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',
=======
import React from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from &quot;./MetadataManager&quot;;
import { toast } from &quot;sonner&quot;;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7


interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}
=======
import React from "react";


interface ExportPanelProps {_platform: AppPlatform;
  metadata: AppMetadataValues;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const ExportPanel: React.FC<ExportPanelProps> = (_{_platform, _metadata}) => {_const _handleExport = (_format: 'json' | 'csv') => {
    try {
      let content: string,
      let fileName: string,
      
      if (format === 'json') {
<<<<<<< HEAD
        content = JSON.stringify(metadata, null, 2),
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'],
        const values = [
          metadata.appTitle,
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform
        ],
        
<<<<<<< HEAD
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),
=======
        content = headers.join(',') + '\n' + values.map(value => `&quot;${String(value).replace(/&quot;/g, '"&quot;')}&quot;`).join(',');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        content = JSON.stringify(metadata, _null, _2);
        fileName = `zion-app-metadata-${platform}-${_metadata.version}.json`;
      } else {_// Convert object to CSV format
        const _headers = ['appTitle', _'shortDescription', _'longDescription', _'version', _'platform'];
        const _values = [
          metadata.appTitle, _metadata.shortDescription, _metadata.longDescription, _metadata.version, _metadata.platform
        ];
        
        content = headers.join(', _') + '\n' + values.map(value => `"${String(value).replace(/"/g, _'""')}"`).join(',');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(),
        
<<<<<<< HEAD
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
      }
      
      // Create download link
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),
      const url = URL.createObjectURL(blob),
      const link = document.createElement('a'),
      link.href = url,
      link.download = fileName,
      document.body.appendChild(link),
      link.click(),
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
      
      toast.success(`Exported ${format.toUpperCase()} file successfully`)
    } catch (error) {
      logErrorToProduction('Export failed:', { data: error }),
      toast.error(`Failed to export ${format.toUpperCase()} file`)
=======
        fileName = `zion-app-metadata-${_platform}-${_metadata.version}.csv`;
      }
      
      // Create download link
      const _blob = new Blob([content], {_type: format === 'json' ? 'application/json' : 'text/csv'});
      const _url = window.URL.createObjectURL(blob);
      const _link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success(`Exported ${_format.toUpperCase()} file successfully`);
    } catch (error) {_logErrorToProduction('Export failed:', _{ data: error});
      toast.error(`Failed to export ${_format.toUpperCase()} file`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const trackAnalytics = () => {
<<<<<<< HEAD
    logInfo("Tracking app installation analytics..."),
    toast.success("Analytics tracking enabled")
  },
=======
    logInfo(&quot;Tracking app installation analytics...&quot;);
    toast.success(&quot;Analytics tracking enabled&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
=======
  const _trackAnalytics = () => {_logInfo("Tracking app installation analytics...");
    toast.success("Analytics tracking enabled");};
  
  return (_<Card className="bg-zion-blue border-zion-purple/30">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <CardHeader>
        <CardTitle className=&quot;text-lg&quot;>Export & Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-4&quot;>
          <div>
            <h4 className=&quot;font-medium mb-2&quot;>Export Metadata</h4>
            <p className=&quot;text-sm text-gray-400 mb-3&quot;>
              Export your app metadata for submission to app stores
            </p>
<<<<<<< HEAD
            <div className=&quot;flex flex-col sm:flex-row gap-2&quot;>
              <Button variant=&quot;outline&quot; onClick={() => handleExport('json')} className=&quot;flex-1&quot;>
                <Download className=&quot;mr-2 h-4 w-4&quot; />
                JSON
              </Button>
              <Button variant=&quot;outline&quot; onClick={() => handleExport('csv')} className=&quot;flex-1&quot;>
                <Download className=&quot;mr-2 h-4 w-4&quot; />
=======
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={_() => handleExport('json')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                JSON
              </Button>
              <Button variant="outline" onClick={_() => handleExport('csv')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                CSV
              </Button>
            </div>
          </div>
          
          <div className=&quot;border-t border-zion-purple/20 pt-4&quot;>
            <h4 className=&quot;font-medium mb-2&quot;>Installation Analytics</h4>
            <p className=&quot;text-sm text-gray-400 mb-3&quot;>
              Track how many users click &quot;Install&quot; from web
            </p>
<<<<<<< HEAD
            <Button onClick={trackAnalytics} className=&quot;w-full&quot;>
=======
            <Button onClick={_trackAnalytics} className="w-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Enable Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
