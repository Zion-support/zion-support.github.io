
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
=======
import React from "react";

export function ExportPanel() {_const { toast} = useToast();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleExport = (_format: 'csv' | 'json') => {_// Placeholder for actual export functionality
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
<<<<<<< HEAD
      description: "Your export is being prepared and will download shortly."}),
=======
      description: &quot;Your export is being prepared and will download shortly.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // In a real implementation, this would trigger an API call to generate and download the export
    setTimeout__(() => {_toast({
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
  
<<<<<<< HEAD
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
=======
  return (_<Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
            variant=&quot;default&quot; 
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;
            onClick={() => handleExport('csv')}
=======
            variant="default" 
            className="bg-zion-purple hover:bg-zion-purple-dark"
            onClick={_() => handleExport('csv')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Export as CSV
          </Button>
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot; 
            className=&quot;border-zion-blue-light text-zion-slate-light&quot;
            onClick={() => handleExport('json')}
=======
            variant="outline" 
            className="border-zion-blue-light text-zion-slate-light"
            onClick={_() => handleExport('json')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Export as JSON
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
