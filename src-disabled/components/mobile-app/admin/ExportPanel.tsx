import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",

import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'"
import { AppPlatform, AppMetadataValues } from "./MetadataManager",

interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}

interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues;
}

interface ExportPanelProps {;
  platform: AppPlatform,;
  metadata: AppMetadataValues;
}

    try {;
      let content: string,;
      let fileName: string,;
      if (format === 'json') {;

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

                <Download className="mr-2 h-4 w-4" />;
                JSON;
              </Button>;
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">;
                <Download className="mr-2 h-4 w-4" />;

                CSV;
              </Button>;
            </div>;
          </div>;

              Enable Analytics;
            </Button>;
          </div>;
        </div>;
      </CardContent>;

    </Card>);
},
;