
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import {AppPlatform, AppMetadataValues} from "./MetadataManager";
import {toast} from "sonner";
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react",


import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
import { toast } from "sonner",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ExportPanelProps {

  platform: AppPlatform

  metadata: AppMetadataValues
}
export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {

  const handleExport = (format: 'json' | 'csv') => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import {AppPlatform, AppMetadataValues} from "./MetadataManager";
import {toast} from "sonner";
interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {;
  const handleExport = (format: 'json' | 'csv') => {;
    try {;
      let content: string,;
      let fileName: string,;

      if (format === 'json') {;
        content = JSON && JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.json`;
      } else {;
        // Convert object to CSV format;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [;
          metadata && metadata.appTitle;
          metadata && metadata.shortDescription;
          metadata && metadata.longDescription;
          metadata && metadata.version;
          metadata && metadata.platform;
        ];
<<<<<<< HEAD
      let content: string
      let fileName: string
      let content: string,
      let fileName: string,
      
<<<<<<< HEAD
      if (format === 'json') {;
        content = JSON.stringify(metadata, null, 2);
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      let content: string,
      let fileName: string,
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ];
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();
        // Add keywords as additional rows
        content += '\n\nKeywords: \n' + metadata.keywords.join()
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ],
        
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),
        
        // Add keywords as additional rows
        content += '\n\nKeywords:\n' + metadata.keywords.join(),
        
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
      }
      // Create download link
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' })
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
<<<<<<< HEAD
=======

        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`
      }
      // Create download link

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),
      const url = URL.createObjectURL(blob),
      const link = document.createElement('a'),
      link.href = url,
      link.download = fileName,
      document.body.appendChild(link),
      link.click(),
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


      toast.success(`Exported ${format.toUpperCase()} file successfully`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      toast.success(`Exported ${format.toUpperCase()} file successfully`)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Download } from './lucide-react';
import { AppPlatform, AppMetadataValues } from './MetadataManager';
import { toast } from './sonner';
interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues;
}
export const ExportPanel: React.FC < ExportPanelProps> = ({ platform, metadata }) => {
  const handle_export = (format: 'json' | 'csv') =>: any {
    try {
      let content: string,
      let file_name: string,
      // Check condition
if ( {) {
  $2
}
        content = JSON.stringify (metadata, null, 2);
        file_name = `zion - app - metadata-${platform}-${metadata.version}.json`;
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
;
        content = headers.join () + '\n' + values.map (value => `"${String (value).replace (/"/g, '""')}"`).join ();
;
        // Add keywords as additional rows;
        content += '\n\n_keywords: \n' + metadata.keywords.join (),
        file_name = `zion - app - metadata-${platform}-${metadata.version}.csv`;
      }
      // Create download link;
      const blob = new Blob ([content], { type: format === 'json' ? 'application / json' : 'text / csv' }),
      const url = URL.createObjectURL (blob);
      const link = document.create_element ('a');
      link.href = url;
      link.download = file_name;
      document.body.append_child (link);
      link.click ();
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
;
      toast.success (`Exported ${format.toUpperCase ()} file successfully`);
<<<<<<< HEAD
    } catch (error) {
    }


  const trackAnalytics = () => {
    console.log("Tracking app installation analytics...");
    toast.success("Analytics tracking enabled")


  },
  


<<<<<<< HEAD
      toast.success(`Exported ${format.toUpperCase()} file successfully`)
    } catch (error) {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (error) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error("Export failed:", error),
      toast.error(`Failed to export ${format.toUpperCase()} file`)
    };
  };
    }
  }
  },
  
  const trackAnalytics = () => {
<<<<<<< HEAD
    // // // console.log("Tracking app installation analytics..."),
=======
    console.log("Tracking app installation analytics...");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    toast.success("Analytics tracking enabled")
  }
  },
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                JSON
              </Button>
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                CSV
              </Button>
            </div>
          </div>
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
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        content = headers && headers.join() + '\n' + values && values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();



<<<<<<< HEAD
}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        content = headers && headers.join() + '\n' + values && values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();

=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      console.error ("Export failed:", error);
      toast.error (`Failed to export ${format.toUpperCase ()} file`);
    }
  }
        content = headers && headers.join() + '\n' + values && values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();
        // Add keywords as additional rows;
        content += '\n\nKeywords: \n' + metadata && metadata.keywords.join(),;
        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.csv`;
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        // Add keywords as additional rows;
        content += '\n\nKeywords: \n' + metadata && metadata.keywords.join(),;

        fileName = `zion-app-metadata-${platform}-${metadata && metadata.version}.csv`;
      }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Create download link;
      const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' }),;
      const url = URL && URL.createObjectURL(blob);
      const link = document && document.createElement('a');
      link && link.href = url;
      link && link.download = fileName;
      document && document.body.appendChild(link);
      link && link.click();
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast && toast.success(`Exported ${format && format.toUpperCase()} file successfully`);
    } catch (error) {;
      console && console.error("Export failed:", error);
      toast && toast.error(`Failed to export ${format && format.toUpperCase()} file`);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const trackAnalytics = () => {;
    console && console.log("Tracking app installation analytics...");
    toast && toast.success("Analytics tracking enabled");
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return (

import React from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
import { AppPlatform, AppMetadataValues } from "./MetadataManager",;
import { toast } from "sonner",;
;
interface ExportPanelProps {;
  platform:AppPlatform,;
  metadata:AppMetadataValues;
}
;
export const ExportPanel:React.FC<ExportPanelProps> = ({ platform, metadata }) => {;
  const handleExport = (format:'json' | 'csv') => {;
    try {;
      let content:string,;
      let fileName:string,;
      ;
      if (format === 'json') {;
        content = JSON.stringify(metadata, null, 2),;
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`,;
      } else {;
        // Convert object to CSV format;
        const headers = ['appTitleshortDescription', 'longDescriptionversion', 'platform'],;
        const values = [;
          metadata.appTitle,;
          metadata.shortDescription,;
          metadata.longDescription,;
          metadata.version,;
          metadata.platform;
        ],;
        ;
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join(),;
        ;
        // Add keywords as additional rows;
        content += '\n\nKeywords:\n' + metadata.keywords.join(),;
        ;
        fileName = `zion-app-metadata-${platform}-${metadata.version}.csv`,;
      }
      ;
      // Create download link;
      const blob = new Blob([content], { type:format === 'json' ? 'application/json' :'text/csv' }),;
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
      console.error("Export failed:", error),;
      toast.error(`Failed to export ${format.toUpperCase()} file`);
    }
  },;
  const trackAnalytics = () => {;
    // // // console.log("Tracking app installation analytics..."),;
    toast.success("Analytics tracking enabled");
  };
  return (;
=======

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">;
                <Download className="mr-2 h-4 w-4" />;
                JSON;
              </Button>;
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">;
                <Download className="mr-2 h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
;
  const track_analytics = () =>: any {
    console.log ("Tracking app installation analytics...");
    toast.success ("Analytics tracking enabled");
  }
;
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
              <Button variant="outline" on_click={() => handle_export ('json')} className="flex - 1">;
                <Download className="mr - 2 h - 4 w - 4" />;
                JSON;
              </Button>;
              <Button variant="outline" on_click={() => handle_export ('csv')} className="flex - 1">;
                <Download className="mr - 2 h - 4 w - 4" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                CSV;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
          <div className="border-t border-zion-purple/20 pt-4">;
            <h4 className="font-medium mb-2">Installation Analytics</h4>;
            <p className="text-sm text-gray-400 mb-3">;
              Track how many users click "Install" from web;
            </p>;
            <Button onClick={trackAnalytics} className="w-full">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <div className="border - t border - zion - purple / 20 pt - 4">;
            <h4 className="font - medium mb - 2">Installation Analytics</h4>;
            <p className="text - sm text - gray - 400 mb - 3">;
              Track how many users click "Install" from web;
            </p>;
            <Button on_click={track_analytics} className="w - full">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Enable Analytics;
            </Button>;
          </div>;
        </div>;
      </CardContent>;




<<<<<<< HEAD
<<<<<<< HEAD
};
    </Card>);
}
;
    </Card>);
}
;
    </Card>;
  ),;
},; interface ExportPanelProps {
  platform: AppPlatform;
metadata: AppMetadataValues 
}platform, metadata 
}) => {
  const handleExport = (format: 'json' | 'csv') => {
  try {
  let content: string;
let fileName: string;
if (format === 'json') {
  
}
};
return (<Card className="bg-zion-blue border-zion-purple/30" > text-lg">Export & Analytics</CardTitle> </CardHeader> <CardContent> <div className=" space-y-4"> <div> <h4 className=" font-medium mb-2">Export Metadata</h4> <p className=" text-sm text-gray-400 mb-3"> Export your app metadata for submission to app stores </p> CSV </Button> </div> </div> <div className=" border-t border-zion-purple/20 pt-4"> <h4 className=" font-medium mb-2">Installation Analytics</h4> <p className=" text-sm text-gray-400 mb-3"> Track how many users click " Install" from web </p> Enable Analytics </Button> </div> </div> </CardContent> </Card>) 
};
    </Card>;
  );
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
