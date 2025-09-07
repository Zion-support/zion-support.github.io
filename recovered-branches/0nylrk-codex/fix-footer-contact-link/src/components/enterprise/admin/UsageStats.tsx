<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",
import { Slider } from "@/components/ui/slider",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  CardTitle
=======


  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  CardTitle
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
CardTitle,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
CardTitle,;
=======
  CardTitle,
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
CardTitle,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
CardTitle,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

} from "@/components/ui/card";"
import { Sparkles } from "lucide-react";"
import { Progress } from "@/components/ui/progress";
export function UsageStats() {}
  const handleSaveChanges = () => {}
    toast({}
";
import React from "react",;"
import { Slider } from "@/components/ui/slider",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
=======

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

      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;

import React from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
CardTitle,;

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
        <Card>
  CardTitle        <Card>

          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">
                  Monthly contact credits
                </div>
                <div className="text-sm font-medium">Monthly contact credits</div>
<div className="text-sm font-medium">Monthly contact credits</div>
                <div className="text-sm font-medium">Monthly contact credits</div>                <div className="text-sm font-medium">Monthly contact credits</div>
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
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>

<Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        <Card>
        </Card>        <Card>
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
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>

<Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
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
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>

            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
<Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
              Contact your account manager to discuss custom limits for your
              enterprise.
              Contact your account manager to discuss custom limits for your enterprise.
Contact your account manager to discuss custom limits for your enterprise.
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
    </div>

);
}
  )
          <CardFooter>            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>  )
import React from "react",;
import { Slider } from "@/components/ui/slider",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "@/hooks/use-toast",;


  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
CardTitle,;
} from "@/components/ui/card";""
import { Sparkles } from "lucide-react";""
import { Progress } from "@/components/ui/progress";"
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({
"
import React from "react",;""
import { Slider } from "@/components/ui/slider",;""
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { toast } from "@/hooks/use-toast",;"
pr-12325
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;

"
      title: "Limits updated","
      description: "The new usage limits have been saved successfully.",;


<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {

=======
    });
  }
  return (
title: "Limits updated"
      description: "The new usage limits have been saved successfully."
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      title: "Limits updated"
      description: "The new usage limits have been saved successfully."
      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
"
} from "@/components/ui/card";"
import { Sparkles } from "lucide-react";"
import { Progress } from "@/components/ui/progress";
export function UsageStats() {}
  const handleSaveChanges = () => {}
    toast({};
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;"
} from "@/components/ui/card";"
import { Sparkles } from "lucide-react";"
import { Progress } from "@/components/ui/progress";
<<<<<<< HEAD
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated",;
      description: "The new usage limits have been saved successfully.",;


      title: "Limits updated",
      description: "The new usage limits have been saved successfully.",;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function UsageStats() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    });
  }

  return (




<<<<<<< HEAD
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
        
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card>
=======
  CardTitle        <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  CardTitle        <Card>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month;
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">
            <div>"
              <div className="flex items-center justify-between mb-2">
<<<<<<< HEAD
                <div className="text-sm font-medium">Monthly contact credits</div>                <div className="text-sm font-medium">Monthly contact credits</div>
=======

"
                <div className="text-sm font-medium">Monthly contact credits</div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Badge variant="outline">178 / 500</Badge>
              </div>"
              <Progress value={35.6} className="h-2" />
            </div>"
            <div className="grid gap-4">"
              <div className="grid grid-cols-3 items-center gap-4">"
                <div className="text-sm">New limit:</div>"
                <div className="col-span-2">"
                  <Input type="number" min="1" defaultValue="500" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
        </Card>
<<<<<<< HEAD
        
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card>
=======
        </Card>        <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </Card>        <Card>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation;
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">
            <div>"
              <div className="flex items-center justify-between mb-2">"
                <div className="text-sm font-medium">AI matching credits</div>"
                <Badge variant="outline">435 / 1000</Badge>
              </div>"
              <Progress value={43.5} className="h-2" />
            </div>"
            <div className="grid gap-4">"
              <div className="grid grid-cols-3 items-center gap-4">"
                <div className="text-sm">New limit:</div>"
                <div className="col-span-2">"
                  <Input type="number" min="1" defaultValue="1000" />
                </div>
              </div>
            </div>
          </CardContent>
<<<<<<< HEAD
          <CardFooter>            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
          <CardFooter>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services;
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">
            <div>"
              <div className="flex items-center justify-between mb-2">"
                <div className="text-sm font-medium">Monthly budget</div>"
                <Badge variant="outline">$1,250 / $5,000</Badge>
              </div>"
              <Progress value={25} className="h-2" />
            </div>"
            <div className="grid gap-4">"
              <div className="grid grid-cols-3 items-center gap-4">"
                <div className="text-sm">Monthly budget:</div>"
                <div className="col-span-2">"
                  <Input type="number" min="0" step="100" defaultValue="5000" />
                </div>
              </div>"
              <div className="grid grid-cols-3 items-center gap-4">"
                <div className="text-sm">Alert threshold:</div>"
                <div className="col-span-2">"
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">"
                    <option value="75">75% of limit</option>"
                    <option value="80">80% of limit</option>"
                    <option value="90">90% of limit</option>"
                    <option value="95">95% of limit</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>

          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
      
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
=======
"
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">"
        <div className="flex items-center gap-4">"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>"
            <h3 className="font-medium">Need higher limits?</h3>"
            <p className="text-sm text-muted-foreground">


              Contact your account manager to discuss custom limits for your enterprise.

            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
=======
      </div>  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",;
import { Slider } from "@/components/ui/slider",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
=======
  )"
import React from "react",;"
import { Slider } from "@/components/ui/slider",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",;
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;"
  CardTitle} from "@/components/ui/card",;"
import { Sparkles } from "lucide-react",;"
import { Progress } from "@/components/ui/progress",;
<<<<<<< HEAD
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated",
  description: "The new usage limits have been saved successfully."})
};
  return (;

<<<<<<< HEAD
=======
export function UsageStats() { return null; }
      description: "The new usage limits have been saved successfully."});
  };
  return (;



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="space-y-8">;
      <div>;"
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;"
        <p className="text-muted-foreground mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          Configure usage limits for your team to manage your subscription;
          resources.;
        </p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;
        <Card>;
          <CardHeader>;
            <CardTitle > Job Postings</CardTitle>;

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
Configure usage limits for your team to manage your subscription resources.;
        </p>;
      </div>;
;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
        <Card>;
          <CardHeader>;
            <CardTitle>Job Postings</CardTitle>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items - center justify - between mb-2">;
                <div className="text - sm font-medium">;
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <CardContent className="space - y-4">;
=======
          <CardContent className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <div className="flex items - center justify - between mb-2">;
                <div className="text - sm font-medium">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  Monthly job posting limit;
                </div>;"
                <Badge variant="outline">25 / 50</Badge>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
              <Progress value={50} className="h - 2" />;
            </div>;"
            <div className="grid gap - 4">;"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
                <div className="text - sm">New limit:</div>;"
                <div className="col - span - 2">;"
                  <Input type="number" min="1" default_value="50" />;



                </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

              <Progress value={50} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">New limit:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="1" default_value="50" />;

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
                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
"
      title: "Limits updated",""
      description: "The new usage limits have been saved successfully.",;""
import React from "react";""
import { Slider } from "@/components/ui/slider";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { toast } from "@/hooks/use-toast";"
import {
  // TODO: Implement
}

<<<<<<< HEAD


<<<<<<< HEAD
=======
  Card,
  CardContent,
  CardDescription,
  CardFooter,

  CardHeader,
CardTitle,;

"
} from "@/components/ui/card";""
import { Sparkles } from "lucide-react";""
import { Progress } from "@/components/ui/progress";")

export function UsageStats() {
  const handleSaveChanges = (
    toast({


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;"
} from "@/components/ui/card";""
import { Sparkles } from "lucide-react";""
import { Progress } from "@/components/ui/progress";")
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;"
      title: "Limits updated",;""
      description: "The new usage limits have been saved successfully.",;""
      title: "Limits updated",""
      description: "The new usage limits have been saved successfully.",;")

    });
  };

  return (




"
  CardTitle} from "@/components/ui/card",""
import { Sparkles } from "lucide-react",""
import { Progress } from "@/components/ui/progress",")
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({"
      title: "Limits updated",")"
      description: "The new usage limits have been saved successfully."})"
  },

        </p>
      </div>"
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">"
</div>
        <Card>
</Card>
          <CardHeader>
</CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
</CardDescription>
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">"
</CardContent>
            <div>
</div>"
              <div className="flex items-center justify-between mb-2">"
</div>"
                <div className="text-sm font-medium">Monthly job posting limit</div>""
                <Badge variant="outline">25 / 50</Badge>"
              </div>"
              <Progress value={50} className="h-2" />"
</Progress>
            </div>"
            <div className="grid gap-4">"
</div>"
              <div className="grid grid-cols-3 items-center gap-4">"
</div>"
                <div className="text-sm">New limit:</div>""
                <div className="col-span-2">"
</div>"
                  <Input type="number" min="1" defaultValue="50" />"
</Input>

                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
</CardFooter>"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>"
          </CardFooter>
        </Card>


        <Card>
</Card>
          <CardHeader>
</CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
</CardDescription>
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">"
</CardContent>
            <div>
</div>"
              <div className="flex items-center justify-between mb-2">"
</div>"
                <div className="text-sm font-medium">"
</div>
                </div>"
                <div className="text-sm font-medium">Monthly contact credits</div>""
                <Badge variant="outline">178 / 500</Badge>"
              </div>"
              <Progress value={35.6} className="h-2" />"
</Progress>
            </div>"
            <div className="grid gap-4">"
</div>"
              <div className="grid grid-cols-3 items-center gap-4">"
</div>"
                <div className="text-sm">New limit:</div>""
                <div className="col-span-2">"
</div>"
                  <Input type="number" min="1" defaultValue="500" />"
</Input>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
</CardFooter>"
            <Button size="sm" onClick={handleSaveChanges}>"
</Button>

            </Button>
          </CardFooter>
        </Card>

        <Card />



"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>"
          </CardFooter>
        </Card>
        <Card>
</Card>
          <CardHeader>
</CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
</CardDescription>
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">"
</CardContent>
            <div>
</div>"
              <div className="flex items-center justify-between mb-2">"
</div>"
                <div className="text-sm font-medium">AI matching credits</div>""
                <Badge variant="outline">435 / 1000</Badge>"
              </div>"
              <Progress value={43.5} className="h-2" />"
</Progress>
            </div>"
            <div className="grid gap-4">"
</div>"
              <div className="grid grid-cols-3 items-center gap-4">"
</div>"
                <div className="text-sm">New limit:</div>""
                <div className="col-span-2">"
</div>"
                  <Input type="number" min="1" defaultValue="1000" />"
</Input>

                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
</CardFooter>"
            <Button size="sm" onClick={handleSaveChanges}>"
</Button>

            </Button>
          </CardFooter>
        </Card>




"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>"
          </CardFooter>
        </Card>
        <Card>
</Card>
          <CardHeader>
</CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
</CardDescription>
            </CardDescription>
          </CardHeader>"
          <CardContent className="space-y-4">"
</CardContent>
            <div>
</div>"
              <div className="flex items-center justify-between mb-2">"
</div>"
                <div className="text-sm font-medium">Monthly budget</div>""
                <Badge variant="outline">$1,250 / $5,000</Badge>"
              </div>"
              <Progress value={25} className="h-2" />"
</Progress>
            </div>"
            <div className="grid gap-4">"
</div>"
              <div className="grid grid-cols-3 items-center gap-4">"
</div>"
                <div className="text-sm">Monthly budget:</div>""
                <div className="col-span-2">"
</div>"
                  <Input type="number" min="0" step="100" defaultValue="5000" />"
</Input>
                </div>
              </div>"
              <div className="grid grid-cols-3 items-center gap-4">"
</div>"
                <div className="text-sm">Alert threshold:</div>""
                <div className="col-span-2">"
</div>"
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">"
</select>"
                    <option value="75">75% of limit</option>""
                    <option value="80">80% of limit</option>""
                    <option value="90">90% of limit</option>""
                    <option value="95">95% of limit</option>"

                  </select>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
</CardFooter>"
            <Button size="sm" onClick={handleSaveChanges}>"
</Button>

            </Button>
          </CardFooter>
        </Card>
      </div>







      "
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>"
          </CardFooter>
        </Card>
      </div>"
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">"
</div>"
        <div className="flex items-center gap-4">"
</div>"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">"
</div>"
            <Sparkles className="h-5 w-5 text-primary" />"
</Sparkles>
          </div>
          <div>
</div>"
            <h3 className="font-medium">Need higher limits?</h3>""
            <p className="text-sm text-muted-foreground">"
</p>

            </p>
          </div>
        </div>
        <Button />Contact Us</Button>
      </div>

    </div>"
    <div className="space-y-8">;"
</div>
      <div>;
</div>"
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;""
        <p className="text-muted-foreground mb-6">;"
</p>
        </p>;
      </div>;"
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>;
</Card>
          <CardHeader>;
<<<<<<< HEAD
            <CardTitle > AI Features</CardTitle>;            <CardDescription>;
=======
=======
            <CardTitle > Candidate Contacts</CardTitle>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
</CardHeader>
            <CardTitle > Job Postings</CardTitle>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <CardDescription>;
</CardDescription>
            </CardDescription>;
          </CardHeader>;

<<<<<<< HEAD


                  Monthly contact credits;
                </div>;"
                <Badge variant="outline">178 / 500</Badge>;
              </div>;
"
              <Progress value={35.6} className="h - 2" />;
            </div>;"
            <div className="grid gap - 4">;"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
                <div className="text - sm">New limit:</div>;"
                <div className="col - span - 2">;"
                  <Input type="number" min="1" default_value="500" />;



=======
          <CardContent className="space - y-4">;
            <div>;
              <div className="flex items - center justify - between mb - 2">;
                <div className="text - sm font - medium">;

                  Monthly contact credits;
                </div>;
                <Badge variant="outline">178 / 500</Badge>;
              </div>;

              <Progress value={35.6} className="h - 2" />;
            </div>;
            <div className="grid gap - 4">;
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">New limit:</div>;
                <div className="col - span - 2">;
                  <Input type="number" min="1" default_value="500" />;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
          </CardHeader>;"
          <CardContent className="space - y-4">;"
</CardContent>
            <div>;
</div>"
              <div className="flex items - center justify - between mb - 2">;"
</div>"
                <div className="text - sm font - medium">;"
</div>
                </div>;"
                <Badge variant="outline">25 / 50</Badge>;"
              </div>;"
              <Progress value={50} className="h - 2" />;"
</Progress>
            </div>;"
            <div className="grid gap - 4">;"
</div>"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
</div>"
                <div className="text - sm">New limit:</div>;""
                <div className="col - span - 2">;"
</div>"
                  <Input type="number" min="1" default_value="50" />;"
</Input>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;

<<<<<<< HEAD

=======
            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;

<<<<<<< HEAD

=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;

<<<<<<< HEAD


            <CardDescription>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;

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
            <CardDescription>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <CardTitle > AI Features</CardTitle>;            <CardDescription>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;

<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent className="space-y-4">;
=======
          <CardContent className="space - y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
              <div className="grid grid - cols - 3 items - center gap-4">;
                <div className="text-sm">Alert threshold:</div>;
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="col-span-2">;
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <option value="75">75% of limit</option>;
                    <option value="80">80% of limit</option>;
                    <option value="90">90% of limit</option>;
=======

"
                    <option value="75">75% of limit</option>;"
                    <option value="80">80% of limit</option>;"
                    <option value="90">90% of limit</option>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <div className="grid grid - cols - 3 items - center gap - 4">;
                <div className="text - sm">Alert threshold:</div>;
                <div className="col - span - 2">;
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring">;

<CardContent className="space-y-4">;
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items - center justify - between mb-2">;
                <div className="text - sm font-medium">Monthly budget</div>;
                <Badge variant="outline">$1, 250 / $5, 000</Badge>;
              </div>;
              <Progress value={25} className="h-2" />;
            </div>;
            <div className="grid gap-4">;
              <div className="grid grid - cols - 3 items - center gap-4">;
                <div className="text-sm">Monthly budget:</div>;
                <div className="col - span-2">;
                  <Input type="number" min="0" step="100" default_value="5000" />;
                </div>;
              </div>;
              <div className="grid grid - cols - 3 items - center gap-4">;
                <div className="text-sm">Alert threshold:</div>;
                <div className="col-span-2">;
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">;
                    <option value="75">75% of limit</option>;
                    <option value="80">80% of limit</option>;
                    <option value="90">90% of limit</option>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <option value="95">95% of limit</option>;
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
"
      <div className="bg - muted / 50 rounded - lg p - 6 flex items - center justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center">;"
            <Sparkles className="h - 5 w - 5 text - primary" />;
          </div>;
          <div>;"
            <h3 className="font - medium">Need higher limits?</h3>;"
            <p className="text - sm text - muted - foreground">;



=======

            <Button size="sm" on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

      <div className="bg - muted / 50 rounded - lg p - 6 flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center">;
            <Sparkles className="h - 5 w - 5 text - primary" />;
          </div>;
          <div>;
            <h3 className="font - medium">Need higher limits?</h3>;
            <p className="text - sm text - muted - foreground">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              Contact your account manager to discuss custom limits for your;
              enterprise.;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Button>Contact Us</Button>;
      </div>;
    </div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
                <div className="col - span-2">;
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring-ring">;  );}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <div className="col - span-2">;
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring-ring">;  );}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



=======
);
}
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  );
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                <div className="col - span-2">;
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring-ring">;  );}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
      </div>;
      ;"
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">;"
            <Sparkles className="h-5 w-5 text-primary" />;
          </div>;
          <div>;"
            <h3 className="font-medium">Need higher limits?</h3>;"
            <p className="text-sm text-muted-foreground">;
              Contact your account manager to discuss custom limits for your enterprise.;
</CardFooter>
"
            <Button size="sm" on_click={handleSaveChanges}>;"
</Button>
            </Button>;
          </CardFooter>;
        </Card>;
        <Card>;
</Card>
          <CardHeader>;
</CardHeader>
            <CardTitle > Candidate Contacts</CardTitle>;
            <CardDescription>;
</CardDescription>
            </CardDescription>;
          </CardHeader>;"
          <CardContent className="space - y-4">;"
</CardContent>
            <div>;
</div>"
              <div className="flex items - center justify - between mb - 2">;"
</div>"
                <div className="text - sm font - medium">;"
</div>
                </div>;"
                <Badge variant="outline">178 / 500</Badge>;"
              </div>;"
              <Progress value={35.6} className="h - 2" />;"
</Progress>
            </div>;"
            <div className="grid gap - 4">;"
</div>"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
</div>"
                <div className="text - sm">New limit:</div>;""
                <div className="col - span - 2">;"
</div>"
                  <Input type="number" min="1" default_value="500" />;"
</Input>
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
</CardFooter>
"
            <Button size="sm" on_click={handleSaveChanges}>;"
</Button>
            </Button>;
          </CardFooter>;
        </Card>;
        <Card>;
</Card>
          <CardHeader>;
</CardHeader>
            <CardTitle > AI Features</CardTitle>;
            <CardDescription>;
</CardDescription>
            </CardDescription>;
          </CardHeader>;"
          <CardContent className="space - y-4">;"
</CardContent>
            <div>;
</div>"
              <div className="flex items - center justify - between mb - 2">;"
</div>"
                <div className="text - sm font - medium">AI matching credits</div>;""
                <Badge variant="outline">435 / 1000</Badge>;"
              </div>;"
              <Progress value={43.5} className="h - 2" />;"
</Progress>
            </div>;"
            <div className="grid gap - 4">;"
</div>"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
</div>"
                <div className="text - sm">New limit:</div>;""
                <div className="col - span - 2">;"
</div>"
                  <Input type="number" min="1" default_value="1000" />;"
</Input>
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
</CardFooter>
"
            <Button size="sm" on_click={handleSaveChanges}>;"
</Button>
            </Button>;
          </CardFooter>;
        </Card>;
        <Card>;
</Card>
          <CardHeader>;
</CardHeader>
            <CardTitle > Budget Controls</CardTitle>;
            <CardDescription>;
</CardDescription>
            </CardDescription>;
          </CardHeader>;"
          <CardContent className="space - y-4">;"
</CardContent>
            <div>;
</div>"
              <div className="flex items - center justify - between mb - 2">;"
</div>"
                <div className="text - sm font - medium">Monthly budget</div>;""
                <Badge variant="outline">$1, 250 / $5, 000</Badge>;"
              </div>;"
              <Progress value={25} className="h - 2" />;"
</Progress>
            </div>;"
            <div className="grid gap - 4">;"
</div>"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
</div>"
                <div className="text - sm">Monthly budget:</div>;""
                <div className="col - span - 2">;"
</div>"
                  <Input type="number" min="0" step="100" default_value="5000" />;"
</Input>
                </div>;
              </div>;"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
</div>"
                <div className="text - sm">Alert threshold:</div>;""
                <div className="col - span - 2">;"
</div>"
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring">;"
</select>"
                    <option value="75">75% of limit</option>;""
                    <option value="80">80% of limit</option>;""
                    <option value="90">90% of limit</option>;""
                    <option value="95">95% of limit</option>;"
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
</CardFooter>
"
            <Button size="sm" on_click={handleSaveChanges}>;"
</Button>
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;"
      <div className="bg - muted / 50 rounded - lg p - 6 flex items - center justify - between">;"
</div>"
        <div className="flex items - center gap - 4">;"
</div>"
          <div className="h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center">;"
</div>"
            <Sparkles className="h - 5 w - 5 text - primary" />;"
</Sparkles>
          </div>;
          <div>;
</div>"
            <h3 className="font - medium">Need higher limits?</h3>;""
            <p className="text - sm text - muted - foreground">;"
</p>
            </p>;
          </div>;
        </div>;
        <Button > Contact Us</Button>;
      </div>;
    </div>);
        <Button > Contact Us</Button>;
      </div>;
    </div>);
        <Button > Contact Us</Button>;
      </div>;
    </div>);"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;"
          </CardFooter>;
        </Card>;
      </div>;"
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">;"
</div>"
        <div className="flex items-center gap-4">;"
</div>"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">;"
</div>"
            <Sparkles className="h-5 w-5 text-primary" />;"
</Sparkles>
          </div>;
          <div>;
</div>"
            <h3 className="font-medium">Need higher limits?</h3>;""
            <p className="text-sm text-muted-foreground">;"
</p>
            </p>;
          </div>;
        </div>;
        <Button>Contact Us</Button>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      title: "Limits updated",""
      description: "The new usage limits have been saved successfully.",;""
import React from "react";""
import { Slider } from "@/components/ui/slider";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { toast } from "@/hooks/use-toast";"
import {
  // TODO: Implement
}

import { Progress } from "@/components/ui/progress";")

  CardTitle,;"
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;"
      title: "Limits updated",;""
      description: "The new usage limits have been saved successfully.",;")
    });

  return (



  CardTitle} from "@/components/ui/card",""
import { Sparkles } from "lucide-react",""
import { Progress } from "@/components/ui/progress",")
    toast({"
      title: "Limits updated",")"
      description: "The new usage limits have been saved successfully."})"
  },

        </p>
      </div>"
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">"
</div>
        <Card>

          <CardHeader>

            <CardTitle>Job Postings
            <CardDescription>

          <CardContent className="space-y-4">"

            <div>
              <div className="flex items-center justify-between mb-2">"
                <div className="text-sm font-medium">Monthly job posting limit</div>""
                <Badge variant="outline">25 / 50"
              <Progress value={50} className="h-2" />"

            <div className="grid gap-4">"
              <div className="grid grid-cols-3 items-center gap-4">"
                <div className="text-sm">New limit:</div>""
                <div className="col-span-2">"
                  <Input type="number" min="1" defaultValue="50" />"

          <CardFooter>
            <Button size="sm" onClick={handleSaveChanges}>Save Changes"




            <CardTitle>Candidate Contacts


                <div className="text-sm font-medium">"
                <div className="text-sm font-medium">Monthly contact credits</div>""
                <Badge variant="outline">178 / 500"
              <Progress value={35.6} className="h-2" />"

                  <Input type="number" min="1" defaultValue="500" />"

            <Button size="sm" onClick={handleSaveChanges}>"






            <CardTitle>AI Features


                <div className="text-sm font-medium">AI matching credits</div>""
                <Badge variant="outline">435 / 1000"
              <Progress value={43.5} className="h-2" />"

                  <Input type="number" min="1" defaultValue="1000" />"







            <CardTitle>Budget Controls


                <div className="text-sm font-medium">Monthly budget</div>""
                <Badge variant="outline">$1,250 / $5,000"
              <Progress value={25} className="h-2" />"

                <div className="text-sm">Monthly budget:</div>""
                  <Input type="number" min="0" step="100" defaultValue="5000" />"

                <div className="text-sm">Alert threshold:</div>""
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">"
</select>"
                    <option value="75">75% of limit</option>""
                    <option value="80">80% of limit</option>""
                    <option value="90">90% of limit</option>""
                    <option value="95">95% of limit</option>"
                  </select>







      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">"
        <div className="flex items-center gap-4">"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">"
            <Sparkles className="h-5 w-5 text-primary" />"

            <h3 className="font-medium">Need higher limits?</h3>""
            <p className="text-sm text-muted-foreground">"
        <Button>Contact Us
    <div className="space-y-8">;"
      <div>;
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;""
        <p className="text-muted-foreground mb-6">;"
        </p>;
      </div>;"
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6">;"
        <Card>;

          <CardHeader>;

            <CardTitle > Job Postings;
            <CardDescription>;

            ;
          ;"
          <CardContent className="space - y-4">;"

              <div className="flex items - center justify - between mb - 2">;"
                <div className="text - sm font - medium">;"
                <Badge variant="outline">25 / 50;"
              <Progress value={50} className="h - 2" />;"

            <div className="grid gap - 4">;"
              <div className="grid grid - cols - 3 items - center gap - 4">;"
                <div className="text - sm">New limit:</div>;""
                <div className="col - span - 2">;"
                  <Input type="number" min="1" default_value="50" />;"

                </div>;
          <CardFooter>;

            <Button size="sm" on_click={handleSaveChanges}>;"



            <CardTitle > Candidate Contacts;


                <Badge variant="outline">178 / 500;"
              <Progress value={35.6} className="h - 2" />;"

                  <Input type="number" min="1" default_value="500" />;"





            <CardTitle > AI Features;


                <div className="text - sm font - medium">AI matching credits</div>;""
                <Badge variant="outline">435 / 1000;"
              <Progress value={43.5} className="h - 2" />;"

                  <Input type="number" min="1" default_value="1000" />;"





            <CardTitle > Budget Controls;


                <div className="text - sm font - medium">Monthly budget</div>;""
                <Badge variant="outline">$1, 250 / $5, 000;"
              <Progress value={25} className="h - 2" />;"

                <div className="text - sm">Monthly budget:</div>;""
                  <Input type="number" min="0" step="100" default_value="5000" />;"

                <div className="text - sm">Alert threshold:</div>;""
                  <select className="w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring">;"
                    <option value="75">75% of limit</option>;""
                    <option value="80">80% of limit</option>;""
                    <option value="90">90% of limit</option>;""
                    <option value="95">95% of limit</option>;"
                  </select>;


      <div className="bg - muted / 50 rounded - lg p - 6 flex items - center justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center">;"
            <Sparkles className="h - 5 w - 5 text - primary" />;"

            <h3 className="font - medium">Need higher limits?</h3>;""
            <p className="text - sm text - muted - foreground">;"
        <Button > Contact Us;
    </div>);
    </div>);"
            <Button size="sm" onClick={handleSaveChanges}>Save Changes;"
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">;"
            <Sparkles className="h-5 w-5 text-primary" />;"

            <h3 className="font-medium">Need higher limits?</h3>;""
            <p className="text-sm text-muted-foreground">;"
        <Button>Contact Us;
pr-12325
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
