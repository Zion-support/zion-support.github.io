
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
import { toast } from "sonner",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',

interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}
import React from "react";

interface ExportPanelProps {platform: AppPlatform,
  metadata: AppMetadataValues}

export const ExportPanel: React.FC<ExportPanelProps> = (_{platform, metadata}) => {const handleExport = (format: 'json' | 'csv') => {
    try {
      let content: string,
      let fileName: string,
      
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2),
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format,
const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'],
        const values = [
          metadata.appTitle,
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform
        ],
        
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),        content = JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {_// Convert object to CSV format,
const headers = ['appTitle', _'shortDescription', _'longDescription', _'version', _'platform'];
        const values = [
          metadata.appTitle, metadata.shortDescription, metadata.longDescription, metadata.version, metadata.platform
        ];
        
        content = headers.join(', _') + '\n' + values.map(value => `"${String(value).replace(/"/g, _'""')}"`).join(',');
        
        // Add keywords as additional rows,
content += '\n\nKeywords:\n' + metadata.keywords.join(),
        
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
      }
      
      // Create download link,
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
      toast.error(`Failed to export ${format.toUpperCase()} file`)    }
  },
  
  const trackAnalytics = () => {
    logInfo("Tracking app installation analytics..."),
    toast.success("Analytics tracking enabled")
  },  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
  const trackAnalytics = () => {logInfo("Tracking app installation analytics...");
    toast.success("Analytics tracking enabled")};
  
  return (_<Card className="bg-zion-blue border-zion-purple/30">
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
            <div className=&quot;flex flex-col sm:flex-row gap-2&quot;>
              <Button variant=&quot;outline&quot; onClick={() => handleExport('json')} className=&quot;flex-1&quot;>
                <Download className=&quot;mr-2 h-4 w-4&quot; />
                JSON
              </Button>
              <Button variant=&quot;outline&quot; onClick={() => handleExport('csv')} className=&quot;flex-1&quot;>
                <Download className=&quot;mr-2 h-4 w-4&quot; />                CSV
              </Button>
            </div>
          </div>
          
          <div className=&quot;border-t border-zion-purple/20 pt-4&quot;>
            <h4 className=&quot;font-medium mb-2&quot;>Installation Analytics</h4>
            <p className=&quot;text-sm text-gray-400 mb-3&quot;>
              Track how many users click &quot;Install&quot; from web
            </p>
            <Button onClick={trackAnalytics} className=&quot;w-full&quot;>              Enable Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
