<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
=======
import React from "react","
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'"
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { toast } from "sonner",
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',


=======
<<<<<<< HEAD
import { toast } from "sonner";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

import { log_info, logErrorToProduction } from '@/utils / production_logger';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}
<<<<<<< HEAD
=======
export const ExportPanel: React.FC < ExportPanelProps> = ({ platform, metadata }, ) => {
  const handle_export = (format: 'json' | 'csv', ) =>: any {
    try {
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues;
}
<<<<<<< HEAD
export const ExportPanel: React.FC < ExportPanelProps> = ({ platform, metadata }, ) => {
  const handle_export = (format: 'json' | 'csv', ) =>: any {
    try {
      let content: string
      let fileName: string
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2)
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format;
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [;
          metadata.app_title;
          metadata.short_description;
          metadata.long_description;
          metadata.version;
          metadata.platform;
        ];
        content = headers.join () + '\n' + values.map (value => `"${String (value).replace (/"/g, '""')}"`).join ();
        // Add keywords as additional rows;
        content += '\n\nKeywords:\n' + metadata.keywords.join();
};        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      let content: string,
      let file_name: string,
      // Check condition
if ( {) {
  $2
}
        content = JSON.stringify (metadata, null, 2);
        file_name = `zion - app - metadata-${platform}-${metadata.version}.json`;

      } else {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = (format: 'json' | 'csv') => {
    try {
      let content: string,
      let fileName: string,
      
      if (format === 'json') {
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
        
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),
        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(),
        
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react';
import { AppPlatform, AppMetadataValues } from "./MetadataManager",;
import { toast } from "sonner",;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
=======
        // Convert object to CSV format;
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [;
          metadata.app_title;
          metadata.short_description;
          metadata.long_description;
          metadata.version;
          metadata.platform;
        ];
        content = headers.join () + '\n' + values.map (value => `"${String (value).replace (/"/g, '""')}"`).join ();
        // Add keywords as additional rows;
        content += '\n\n_keywords:\n' + metadata.keywords.join ();
}        file_name = `zion - app - metadata-${platform}-${metadata.version}.csv`;
      }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}
<<<<<<< HEAD
;
export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {;
  const handleExport = (format: 'json' | 'csv') => {;
=======

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata },) => {;
  const handleExport = (format: 'json' | 'csv',) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {;
      let content: string,;
      let fileName: string,;
      if (format === 'json') {;
<<<<<<< HEAD
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
        // Add keywords as additional rows;
        content += '\n\nKeywords:\n' + metadata.keywords.join(),;
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`;
      }
;
      // Create download link;
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),;
      const url = URL.createObjectURL(blob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = fileName,;
      document.body.appendChild(link),;
      link.click(),;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      toast.success(`Exported ${format.toUpperCase()} file successfully`);
    } catch (error) {;
      logErrorToProduction('Export failed:', { data: error }),;
      toast.error(`Failed to export ${format.toUpperCase()} file`);
    }
  },
  
  const trackAnalytics = () => {
    logInfo("Tracking app installation analytics..."),
    toast.success("Analytics tracking enabled")
  },
  
=======
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
    } catch (error) {
      logErrorToProduction('Export failed:', { data: error })
      toast.error(`Failed to export ${format.toUpperCase()} file`)
    }
  }
  const trackAnalytics = () => {
    logInfo("Tracking app installation analytics...")
    toast.success("Analytics tracking enabled")
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">Export & Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Export Metadata</h4>
            <p className="text-sm text-gray-400 mb-3">
              Export your app metadata for submission to app stores
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
<<<<<<< HEAD
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">
=======
              <Button variant="outline" onClick={(,) => handleExport('json')} className="flex-1">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Download className="mr-2 h-4 w-4" />
                JSON
              </Button>
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                CSV
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="border-t border-zion-purple/20 pt-4">
            <h4 className="font-medium mb-2">Installation Analytics</h4>
            <p className="text-sm text-gray-400 mb-3">
              Track how many users click "Install" from web
            </p>
            <Button onClick={trackAnalytics} className="w-full">
              Enable Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
},
  },;
  const trackAnalytics = () => {;
    logInfo("Tracking app installation analytics..."),;
<<<<<<< HEAD
    toast.success("Analytics tracking enabled");
  };
  return (;
=======
    toast && toast.success("Analytics tracking enabled");
  },;

  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle className="text-lg">Export & Analytics</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div>;
            <h4 className="font-medium mb-2">Export Metadata</h4>;
            <p className="text-sm text-gray-400 mb-3">;
              Export your app metadata for submission to app stores;
            </p>;
            <div className="flex flex-col sm:flex-row gap-2">;
<<<<<<< HEAD
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">;
=======
              <Button variant="outline" onClick={(,) => handleExport('json')} className="flex-1">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Download className="mr-2 h-4 w-4" />;
                JSON;
              </Button>;
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">;
                <Download className="mr-2 h-4 w-4" />;
<<<<<<< HEAD
=======
      // Create download link;
      const blob = new Blob ([content], { type: format === 'json' ? 'application / json' : 'text / csv' }),
      const url = URL.createObjectURL (blob),
      const link = document.create_element ('a'),
      link.href = url,
      link.download = file_name,
      document.body.append_child (link),
      link.click (),
      document.body.remove_child (link),
      URL.revokeObjectURL (url),
      toast.success (`Exported ${format.toUpperCase ()} file successfully`);
    } catch (error) {
      logErrorToProduction ('Export failed:', { data: error }),
      toast.error (`Failed to export ${format.toUpperCase ()} file`);
    }
  },
  const track_analytics = () =>: any {
    log_info ("Tracking app installation analytics..."),
    toast.success ("Analytics tracking enabled");
  },
  return (
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle className="text - lg">Export & Analytics</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          <div>;
            <h4 className="font - medium mb - 2">Export Metadata</h4>;
            <p className="text - sm text - gray - 400 mb - 3">;
              Export your app metadata for submission to app stores;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 2">;
              <Button variant="outline" on_click={(, ) => handle_export ('json')} className="flex - 1">;
                <Download className="mr - 2 h - 4 w - 4" />;
                JSON;
              </Button>;
              <Button variant="outline" on_click={() => handle_export ('csv')} className="flex - 1">;
                <Download className="mr - 2 h - 4 w - 4" />;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                CSV;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
          <div className="border-t border-zion-purple/20 pt-4">;
            <h4 className="font-medium mb-2">Installation Analytics</h4>;
            <p className="text-sm text-gray-400 mb-3">;
              Track how many users click "Install" from web;
            </p>;
            <Button onClick={trackAnalytics} className="w-full">;
=======

          <div className="border - t border - zion - purple / 20 pt - 4">;
            <h4 className="font - medium mb - 2">Installation Analytics</h4>;
            <p className="text - sm text - gray - 400 mb - 3">;
              Track how many users click "Install" from web;
            </p>;
            <Button on_click={track_analytics} className="w - full">;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Enable Analytics;
            </Button>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;
  );
};
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2



    </Card>);
},
;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { AppPlatform, AppMetadataValues } from './MetadataManager';
import { toast } from 'sonner';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface ExportPanelProps {
  );
};
return (<Card className="bg-zion-blue border-zion-purple/30" > text-lg">Export & Analytics</CardTitle> </CardHeader> <CardContent> <div className=" space-y-4"> <div> <h4 className=" font-medium mb-2">Export Metadata</h4> <p className=" text-sm text-gray-400 mb-3"> Export your app metadata for submission to app stores </p> CSV </Button> </div> </div> <div className=" border-t border-zion-purple/20 pt-4"> <h4 className=" font-medium mb-2">Installation Analytics</h4> <p className=" text-sm text-gray-400 mb-3"> Track how many users click " Install" from web </p> Enable Analytics </Button> </div> </div> </CardContent> </Card>) ;
};
'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
