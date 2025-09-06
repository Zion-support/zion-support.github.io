<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from "react";
import {
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const handleExport = null;
=======
export function ExportPanel() {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
export function ExportPanel() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { toast } = useToast();

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { useToast } from "@/hooks/use-toast",
export function ExportPanel() {
  const { toast } = useToast(),
  
  const handleExport = (format: 'csv' | 'json') => {
    // Placeholder for actual export functionality
<<<<<<< HEAD
    (toast({
      title: `Exporting as ${format.toUpperCase()}`
      description: "Your export is being prepared and will download shortly."
    })
      // In a real implementation, this would trigger an API call to generate and download the export
      setTimeout(() => {
        toast({
          title: `${format.toUpperCase()} Export Ready`
          description: "Your export has been downloaded."
        });
      }, 1500));
  }
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  const handleExport = (format: 'csv' | 'json') => {
    // Placeholder for actual
}

export functionality
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
      description: 'Your export is being prepared and will download shortly.',
    });

=======

=======
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
<<<<<<< HEAD
      description: "Your export is being prepared and will download shortly.",
    }),
      // In a real implementation, this would trigger an API call to generate and download the export
      setTimeout(() => {
        toast({
          title: `${format.toUpperCase()} Export Ready`,
          description: "Your export has been downloaded.",;
        });
      }, 1500));
  };

=======
      description: "Your export is being prepared and will download shortly."}),
    
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    // In a real implementation, this would trigger an API call to generate and download the export
    setTimeout(() => {
      toast({
        title: `${format.toUpperCase()} Export Ready`,
<<<<<<< HEAD
        description: 'Your export has been downloaded.',
      });
    }, 1500);
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
        description: "Your export has been downloaded."})
    }, 1500)
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
          <Button
            variant="outline"
            className="border-zion-blue-light text-zion-slate-light"
            onClick={() => handleExport("json")}
          >
            Export as JSON
          </Button>
        </div>
      </CardContent>
    </Card>
=======
          <Button 
            variant="outline" 
            className="border-zion-blue-light text-zion-slate-light"
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
            onClick={() => handleExport('json')}
          >;
            Export as JSON;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}