
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ExportPanel() {
  const { toast } = useToast();
  
  const handleExport = (format: 'csv' | 'json') => {
    // Placeholder for actual export functionality
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
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
