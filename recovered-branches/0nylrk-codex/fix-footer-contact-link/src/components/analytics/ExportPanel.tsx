
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useToast } from "@/hooks/use-toast",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ExportPanel() {
  const { toast } = useToast(),
  
  const handleExport = (format: 'csv' | 'json') => {
    // Placeholder for actual export functionality
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
<<<<<<< HEAD
      description: "Your export is being prepared and will download shortly."}),
=======
      description: &quot;Your export is being prepared and will download shortly.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // In a real implementation, this would trigger an API call to generate and download the export
    setTimeout(() => {
      toast({
        title: `${format.toUpperCase()} Export Ready`,
<<<<<<< HEAD
        description: "Your export has been downloaded."})
    }, 1500)
  },
=======
        description: &quot;Your export has been downloaded.&quot;});
    }, 1500);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-white text-lg&quot;>Export Data</CardTitle>
        <CardDescription className=&quot;text-zion-slate-light&quot;>Download analytics data for further analysis</CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <p className=&quot;text-zion-slate&quot;>
          Export your analytics data in CSV or JSON format for deeper analysis in your preferred tools.
        </p>
        <div className=&quot;flex flex-wrap gap-4&quot;>
          <Button 
            variant=&quot;default&quot; 
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;
            onClick={() => handleExport('csv')}
          >
            Export as CSV
          </Button>
          <Button 
            variant=&quot;outline&quot; 
            className=&quot;border-zion-blue-light text-zion-slate-light&quot;
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { useToast } from "@/hooks/use-toast",;
export function ExportPanel() {;
  const { toast } = useToast(),;
  const handleExport = (format: 'csv' | 'json') => {;
    // Placeholder for actual export functionality;
    toast({;
      title: `Exporting as ${format.toUpperCase()}`,;
      description: "Your export is being prepared and will download shortly."}),;
    // In a real implementation, this would trigger an API call to generate and download the export;
    setTimeout(() => {;
      toast({;
        title: `${format.toUpperCase()} Export Ready`;
        description: "Your export has been downloaded."});
    }, 1500);
  };
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white text-lg">Export Data</CardTitle>;
        <CardDescription className="text-zion-slate-light">Download analytics data for further analysis</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <p className="text-zion-slate">;
          Export your analytics data in CSV or JSON format for deeper analysis in your preferred tools.;
        </p>;
        <div className="flex flex-wrap gap-4">;
          <Button;
            variant="default";
            className="bg-zion-purple hover:bg-zion-purple-dark";
            onClick={() => handleExport('csv')}
          >;
            Export as CSV;
          </Button>;
          <Button;
            variant="outline";
            className="border-zion-blue-light text-zion-slate-light";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            onClick={() => handleExport('json')}
          >;
            Export as JSON;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
  );
}
;