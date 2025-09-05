
import React from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download } from &quot;lucide-react&quot;;
import { AppPlatform, AppMetadataValues } from &quot;./MetadataManager&quot;;
import { toast } from &quot;sonner&quot;;

interface ExportPanelProps {
  platform: AppPlatform;
  metadata: AppMetadataValues;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = (format: 'json' | 'csv') => {
    try {
      let content: string;
      let fileName: string;
      
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`;
      } else {
        // Convert object to CSV format
        const headers = ['appTitle', 'shortDescription', 'longDescription', 'version', 'platform'];
        const values = [
          metadata.appTitle,
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform
        ];
        
        content = headers.join(',') + '\n' + values.map(value => `&quot;${String(value).replace(/&quot;/g, '"&quot;')}&quot;`).join(',');
        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(',');
        
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`;
      }
      
      // Create download link
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(`Exported ${format.toUpperCase()} file successfully`);
    } catch (error) {
      console.error(&quot;Export failed:&quot;, error);
      toast.error(`Failed to export ${format.toUpperCase()} file`);
    }
  };
  
  const trackAnalytics = () => {
    // console.log(&quot;Tracking app installation analytics...&quot;);
    toast.success(&quot;Analytics tracking enabled&quot;);
  };
  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
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
                <Download className=&quot;mr-2 h-4 w-4&quot; />
                CSV
              </Button>
            </div>
          </div>
          
          <div className=&quot;border-t border-zion-purple/20 pt-4&quot;>
            <h4 className=&quot;font-medium mb-2&quot;>Installation Analytics</h4>
            <p className=&quot;text-sm text-gray-400 mb-3&quot;>
              Track how many users click &quot;Install&quot; from web
            </p>
            <Button onClick={trackAnalytics} className=&quot;w-full&quot;>
              Enable Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
