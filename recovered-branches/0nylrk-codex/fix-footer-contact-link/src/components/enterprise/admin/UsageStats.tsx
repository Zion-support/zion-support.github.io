<<<<<<< HEAD
<<<<<<< HEAD
=======


import React from "react",
import { Slider } from "@/components/ui/slider",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({

import React from "react",;
import { Slider } from "@/components/ui/slider",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;

<<<<<<< HEAD
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {

=======
    });
  }
  return (
title: "Limits updated"
      description: "The new usage limits have been saved successfully."
      title: "Limits updated"
      description: "The new usage limits have been saved successfully."
      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;
    });
  }

import React from "react",
import { Slider } from "@/components/ui/slider",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
import {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
CardTitle,;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated",;
      description: "The new usage limits have been saved successfully.",;


      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;

    });
  }

  return (




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  CardTitle} from "@/components/ui/card",
import { Sparkles } from "lucide-react",
import { Progress } from "@/components/ui/progress",
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({
      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },

        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly job posting limit</div>
                <Badge variant="outline">25 / 50</Badge>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">New limit:</div>
                <div className="col-span-2">
                  <Input type="number" min="1" defaultValue="50" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        


        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="text-sm font-medium">
                  Monthly contact credits
                </div>
=======
                <div className="text-sm font-medium">Monthly contact credits</div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <div className="text-sm font-medium">Monthly contact credits</div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Badge variant="outline">178 / 500</Badge>
              </div>
              <Progress value={35.6} className="h-2" />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">New limit:</div>
                <div className="col-span-2">
                  <Input type="number" min="1" defaultValue="500" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Card>
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">AI matching credits</div>
                <Badge variant="outline">435 / 1000</Badge>
              </div>
              <Progress value={43.5} className="h-2" />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">New limit:</div>
                <div className="col-span-2">
                  <Input type="number" min="1" defaultValue="1000" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly budget</div>
                <Badge variant="outline">$1,250 / $5,000</Badge>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">Monthly budget:</div>
                <div className="col-span-2">
                  <Input type="number" min="0" step="100" defaultValue="5000" />
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">Alert threshold:</div>
                <div className="col-span-2">
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="75">75% of limit</option>
                    <option value="80">80% of limit</option>
                    <option value="90">90% of limit</option>
                    <option value="95">95% of limit</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </CardFooter>
        </Card>
      </div>

<<<<<<< HEAD

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      


      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD
              Contact your account manager to discuss custom limits for your
              enterprise.
=======
              Contact your account manager to discuss custom limits for your enterprise.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              Contact your account manager to discuss custom limits for your enterprise.
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
=======

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )
import React from "react",;
import { Slider } from "@/components/ui/slider",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated";
      description: "The new usage limits have been saved successfully."});
  };
  return (;

<<<<<<< HEAD
<<<<<<< HEAD
=======
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title:"Limits updated",;
      description:"The new usage limits have been saved successfully."}),;
  },;
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="space-y-8">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;
        <p className="text-muted-foreground mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from './react';
import { Slider  } from '@/components / ui / slider';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { toast  } from '@/hooks / use - toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Sparkles  } from './lucide-react';
import { Progress  } from '@/components / ui / progress';
export /**
 * UsageStats - Function description
 */
function UsageStats() {
  const handleSaveChanges = () =>: any {
    toast ({
      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    });
  }

          Configure usage limits for your team to manage your subscription;
          resources.;
        </p>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;
        <Card>;
          <CardHeader>;
            <CardTitle > Job Postings</CardTitle>;
<<<<<<< HEAD

=======
          Configure usage limits for your team to manage your subscription resources.;
        </p>;
      </div>;
;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
        <Card>;
          <CardHeader>;
            <CardTitle>Job Postings</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

          <CardContent className="space - y-4">;
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Monthly job posting limit;
                </div>;
                <Badge variant="outline">25 / 50</Badge>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Progress value={50} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">New limit:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="1" default_value="50" />;
<<<<<<< HEAD

=======
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly job posting limit</div>;
                <Badge variant="outline">25 / 50</Badge>;
              </div>;
              <Progress value={50} className="h-2" />;
            </div>;
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">New limit:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="1" defaultValue="50" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;

=======
        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>Candidate Contacts</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardDescription>;
              Limit the number of direct candidate contacts per month;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

          <CardContent className="space - y-4">;
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Monthly contact credits;
                </div>;
                <Badge variant="outline">178 / 500</Badge>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Progress value={35.6} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">New limit:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="1" default_value="500" />;
<<<<<<< HEAD

=======
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly contact credits</div>;
                <Badge variant="outline">178 / 500</Badge>;
              </div>;
              <Progress value={35.6} className="h-2" />;
            </div>;
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">New limit:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="1" defaultValue="500" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;

=======
        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>AI Features</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

          <CardContent className="space - y-4">;
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">AI matching credits</div>;
                <Badge variant="outline">435 / 1000</Badge>;
              </div>;
              <Progress value={43.5} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">New limit:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="1" default_value="1000" />;

=======
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">AI matching credits</div>;
                <Badge variant="outline">435 / 1000</Badge>;
              </div>;
              <Progress value={43.5} className="h-2" />;
            </div>;
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">New limit:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="1" defaultValue="1000" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;

=======
        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>Budget Controls</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <CardDescription>;
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

          <CardContent className="space - y-4">;
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">Monthly budget</div>;
                <Badge variant="outline">$1, 250 / $5, 000</Badge>;
              </div>;
              <Progress value={25} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">Monthly budget:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="0" step="100" default_value="5000" />;
                </div>;
              </div>;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">Alert threshold:</div>;
                <div className="col - span - 2">;
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring">;

=======
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly budget</div>;
                <Badge variant="outline">$1,250 / $5,000</Badge>;
              </div>;
              <Progress value={25} className="h-2" />;
            </div>;
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">Monthly budget:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="0" step="100" defaultValue="5000" />;
                </div>;
              </div>;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">Alert threshold:</div>;
                <div className="col-span-2">;
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <option value="75">75% of limit</option>;
                    <option value="80">80% of limit</option>;
                    <option value="90">90% of limit</option>;
                    <option value="95">95% of limit</option>;
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="bg - muted / 50 rounded - lg p - 6 flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center">;
            <Sparkles className="h - 5 w - 5 text - primary" />;
          </div>;
          <div>;
            <h3 className="font - medium">Need higher limits?</h3>;
            <p className="text - sm text - muted - foreground">;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Contact your account manager to discuss custom limits for your;
              enterprise.;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
);
}
  );
}
;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
        <Button > Contact Us</Button>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
  );
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
      </div>;
      ;
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">;
            <Sparkles className="h-5 w-5 text-primary" />;
          </div>;
          <div>;
            <h3 className="font-medium">Need higher limits?</h3>;
            <p className="text-sm text-muted-foreground">;
              Contact your account manager to discuss custom limits for your enterprise.;
            </p>;
          </div>;
        </div>;
        <Button>Contact Us</Button>;
      </div>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
