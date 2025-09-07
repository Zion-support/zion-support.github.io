
import React from "react",;""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Download } from 'lucide-react';
import { AppPlatform, AppMetadataValues } from "./MetadataManager",;""
import { toast } from "sonner",;""
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
interface ExportPanelProps {;
  platform:AppPlatform,;
  metadata:AppMetadataValues;
}
;
export const ExportPanel:React.FC<ExportPanelProps> = ({ platform, metadata }) => {;

    <Card className="bg-zion-blue border-zion-purple/30">;"

      <CardHeader>;
"
        <CardTitle className="text-lg">Export & Analytics;"
      <CardContent>;
        <div className="space-y-4">;"
</div>
          <div>;
</div>"
            <h4 className="font-medium mb-2">Export Metadata</h4>;""
            <p className="text-sm text-gray-400 mb-3">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-2">;"
              <Button variant="outline" onClick={() => handleExport('json')} className="flex-1">;"
                <Download className="mr-2 h-4 w-4" />;"

              ;"
              <Button variant="outline" onClick={() => handleExport('csv')} className="flex-1">;"

            </div>;
          </div>;"
          <div className="border-t border-zion-purple/20 pt-4">;"
            <h4 className="font-medium mb-2">Installation Analytics</h4>;""
            <Button onClick={trackAnalytics} className="w-full">;"

return (<Card className="bg-zion-blue border-zion-purple/30" > text-lg">Export & Analytics  <CardContent> <div className=" space-y-4"> <div> <h4 className=" font-medium mb-2">Export Metadata</h4> <p className=" text-sm text-gray-400 mb-3"> Export your app metadata for submission to app stores </p> CSV  </div> </div> <div className=" border-t border-zion-purple/20 pt-4"> <h4 className=" font-medium mb-2">Installation Analytics</h4> <p className=" text-sm text-gray-400 mb-3"> Track how many users click " Install" from web </p> Enable Analytics  </div> </div>  ) ;""