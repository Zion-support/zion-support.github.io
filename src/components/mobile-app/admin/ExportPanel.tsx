<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { AppPlatform, AppMetadataValues } from './MetadataManager';
import { toast } from 'sonner';
=======

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from "./MetadataManager";
import { toast } from "sonner";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = (format: 'json' | 'csv') => {
    try {
      let content: string,
      let fileName: string,
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [
          metadata.appTitle;
          metadata.shortDescription;
          metadata.longDescription;
          metadata.version;
          metadata.platform
        ];
        
        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();
        
        // Add keywords as additional rows
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        content += '\n\nKeywords:\n' + metadata.keywords.join();
        
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
return (<Card className="bg-zion-blue border-zion-purple/30" > text-lg">Export & Analytics</CardTitle> </CardHeader> <CardContent> <div className=" space-y-4"> <div> <h4 className=" font-medium mb-2">Export Metadata</h4> <p className=" text-sm text-gray-400 mb-3"> Export your app metadata for submission to app stores </p> CSV </Button> </div> </div> <div className=" border-t border-zion-purple/20 pt-4"> <h4 className=" font-medium mb-2">Installation Analytics</h4> <p className=" text-sm text-gray-400 mb-3"> Track how many users click " Install" from web </p> Enable Analytics </Button> </div> </div> </CardContent> </Card>) ;
};
'"
=======

<<<<<<< HEAD
        content += '\n\nKeywords: \n' + metadata.keywords.join(),
<<<<<<< HEAD

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
