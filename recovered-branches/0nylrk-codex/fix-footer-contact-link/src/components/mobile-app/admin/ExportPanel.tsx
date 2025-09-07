import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react",
import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues}

  platform: AppPlatform

  metadata: AppMetadataValues
}
export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
import { toast } from "sonner",        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'],
        const values = [
          metadata.appTitle,
          metadata.shortDescription,
          metadata.longDescription,
          metadata.version,
          metadata.platform  return (
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

        content = headers && headers.join() + '\n' + values && values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();

                CSV;
              </Button>;
            </div>;
          </div>;              Enable Analytics;
            </Button>;
          </div>;
        </div>;
      </CardContent>
};
    </Card>);
}

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
  )
};
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
