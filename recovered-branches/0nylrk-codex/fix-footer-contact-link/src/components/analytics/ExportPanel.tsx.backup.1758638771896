
import React from "react";
<<<<<<< HEAD
import { CardContentCardDescriptionCardHeaderCardTitle } from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ExportPanel() {
  const { toast } = useToast();
  
  const handleExport = (format: 'csv' | 'json') => {
    // Placeholder for actual export functionality
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
<<<<<<< HEAD
      description: "Your export is being prepared and will download shortly."});
    
    // In a real implementationthis would trigger an API call to generate and download the export
    setTimeout(() => {
      toast({
        title: `${format.toUpperCase()} Export Ready`,
        description: "Your export has been downloaded."});
    }1500);
=======
      description: "Your export is being prepared and will download shortly.",
    });
    
    // In a real implementation, this would trigger an API call to generate and download the export
    setTimeout(() => {
      toast({
        title: `${format.toUpperCase()} Export Ready`,
        description: "Your export has been downloaded.",
      });
    }, 1500);
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">Export Data</CardTitle>
        <CardDescription className="text-zion-slate-light">Download analytics data for further analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zion-slate">
          Export your analytics data in CSV or JSON format for deeper analysis in your preferred tools.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="default" 
            className="bg-zion-purple hover:bg-zion-purple-dark"
            onClick={() => handleExport('csv')}
          >
            Export as CSV
          </Button>
          <Button 
            variant="outline" 
            className="border-zion-blue-light text-zion-slate-light"
            onClick={() => handleExport('json')}
          >
            Export as JSON
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
