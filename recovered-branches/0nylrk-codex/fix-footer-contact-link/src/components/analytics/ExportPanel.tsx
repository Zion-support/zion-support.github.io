
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useToast } from "@/hooks/use-toast",export function ExportPanel() {
  const { toast } = useToast(),
import React from "react";

export function ExportPanel() {const { toast} = useToast();
  
  const handleExport = (format: 'csv' | 'json') => {_// Placeholder for actual export functionality,
toast({
      title: `Exporting as ${format.toUpperCase()}`,
      description: "Your export is being prepared and will download shortly."}),    
    // In a real implementation, this would trigger an API call to generate and download the export,
setTimeout_(() => {toast({
        title: `${format.toUpperCase()} Export Ready`,
        description: "Your export has been downloaded."})
    }, 1500)
  },  
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>      <CardHeader>
        <CardTitle className=&quot;text-white text-lg&quot;>Export Data</CardTitle>
        <CardDescription className=&quot;text-zion-slate-light&quot;>Download analytics data for further analysis</CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <p className=&quot;text-zion-slate&quot;>
          Export your analytics data in CSV or JSON format for deeper analysis in your preferred tools.
        </p>
        <div className=&quot;flex flex-wrap gap-4&quot;>
          <Button,
variant=&quot;default&quot; 
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;
            onClick={() => handleExport('csv')}          >
            Export as CSV
          </Button>
          <Button,
variant=&quot;outline&quot; 
            className=&quot;border-zion-blue-light text-zion-slate-light&quot;
            onClick={() => handleExport('json')}          >
            Export as JSON
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
