<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,
} from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
export function UsageStats() {
  const handleSaveChanges = () => {
    toast({
      title: 'Limits updated',
      description: 'The new usage limits have been saved successfully.',
    })
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import {

<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
=======
import React from "react",
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
  CardTitle} from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function UsageStats() {

  const handleSaveChanges = () => {
    toast({
<<<<<<< HEAD
      title: 'Limits updated'
      description: 'The new usage limits have been saved successfully.'
    })
  }
=======
      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>
<<<<<<< HEAD
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
=======

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
return (



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


>>>>>>> main
        <Card>
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>
                  Monthly job posting limit
                </div>
                <Badge variant='outline'>25 / 50</Badge>
              </div>
              <Progress value={50} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>New limit:</div>
                <div className='col-span-2'>
                  <Input type='number' min='1' defaultValue='50' />
>>>>>>> main
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>


        


>>>>>>> main
        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly contact credits</div>
                <Badge variant="outline">178 / 500</Badge>
              </div>
              <Progress value={35.6} className="h-2" />
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-sm">New limit:</div>
                <div className="col-span-2">
                  <Input type="number" min="1" defaultValue="500" />
=======
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>
                  Monthly contact credits
                </div>
                <Badge variant='outline'>178 / 500</Badge>
              </div>
              <Progress value={35.6} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>New limit:</div>
                <div className='col-span-2'>
                  <Input type='number' min='1' defaultValue='500' />
>>>>>>> main
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>


        


>>>>>>> main
        <Card>
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>AI matching credits</div>
                <Badge variant='outline'>435 / 1000</Badge>
              </div>
              <Progress value={43.5} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>New limit:</div>
                <div className='col-span-2'>
                  <Input type='number' min='1' defaultValue='1000' />
>>>>>>> main
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>


        


>>>>>>> main
        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
          <CardContent className='space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <div className='text-sm font-medium'>Monthly budget</div>
                <Badge variant='outline'>$1,250 / $5,000</Badge>
              </div>
              <Progress value={25} className='h-2' />
            </div>
            <div className='grid gap-4'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>Monthly budget:</div>
                <div className='col-span-2'>
                  <Input type='number' min='0' step='100' defaultValue='5000' />
                </div>
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <div className='text-sm'>Alert threshold:</div>
                <div className='col-span-2'>
                  <select className='w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
                    <option value='75'>75% of limit</option>
                    <option value='80'>80% of limit</option>
                    <option value='90'>90% of limit</option>
                    <option value='95'>95% of limit</option>
>>>>>>> main
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
      <div className='bg-muted/50 rounded-lg p-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center'>
            <Sparkles className='h-5 w-5 text-primary' />
=======
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </div>


>>>>>>> main
      
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </div>
          <div>
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
              Contact your account manager to discuss custom limits for your enterprise.
=======


          </div>
          <div>
            <h3 className='font-medium'>Need higher limits?</h3>
            <p className='text-sm text-muted-foreground'>
              Contact your account manager to discuss custom limits for your
              enterprise.
>>>>>>> main
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}"};
=======
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}"}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
=======

>>>>>>> main
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
<<<<<<< HEAD
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated";
      description: "The new usage limits have been saved successfully."});
  };
  return (;
    <div className="space-y-8">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;
        <p className="text-muted-foreground mb-6">;
          Configure usage limits for your team to manage your subscription resources.;
        </p>;
      </div>;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
        <Card>;
          <CardHeader>;
            <CardTitle>Job Postings</CardTitle>;
=======
  CardTitle,;
} from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: 'Limits updated',;
      description: 'The new usage limits have been saved successfully.',;
    });
  };

  return (
    <div className='space-y-8'>;
      <div>;
        <h3 className='text-xl font-medium mb-4'>Usage Limits & Settings</h3>;
        <p className='text-muted-foreground mb-6'>;
    <div className='space - y-8'>;
      <div>;
        <h3 className='text - xl font - medium mb - 4'>Usage Limits & Settings</h3>;
        <p className='text - muted - foreground mb - 6'>;

          Configure usage limits for your team to manage your subscription;
          resources.;
        </p>;
      </div>;

      <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
        <Card>;
          <CardHeader>;
            <CardTitle > Job Postings</CardTitle>;

>>>>>>> main
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
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
=======

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;

                  Monthly job posting limit;
                </div>;
                <Badge variant='outline'>25 / 50</Badge>;
              </div>;

              <Progress value={50} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='50' />;

>>>>>>> main
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Candidate Contacts</CardTitle>;
=======

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;

>>>>>>> main
            <CardDescription>;
              Limit the number of direct candidate contacts per month;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
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
=======

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;

                  Monthly contact credits;
                </div>;
                <Badge variant='outline'>178 / 500</Badge>;
              </div>;

              <Progress value={35.6} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='500' />;

>>>>>>> main
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>AI Features</CardTitle>;
=======

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;

>>>>>>> main
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
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
=======

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>AI matching credits</div>;
                <Badge variant='outline'>435 / 1000</Badge>;
              </div>;
              <Progress value={43.5} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='1000' />;

>>>>>>> main
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Budget Controls</CardTitle>;
=======

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;

>>>>>>> main
            <CardDescription>;
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
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
                    <option value="75">75% of limit</option>;
                    <option value="80">80% of limit</option>;
                    <option value="90">90% of limit</option>;
                    <option value="95">95% of limit</option>;
=======

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>Monthly budget</div>;
                <Badge variant='outline'>$1, 250 / $5, 000</Badge>;
              </div>;
              <Progress value={25} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>Monthly budget:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='0' step='100' default_value='5000' />;
                </div>;
              </div>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>Alert threshold:</div>;
                <div className='col - span - 2'>;
                  <select className='w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring'>;

                    <option value='75'>75% of limit</option>;
                    <option value='80'>80% of limit</option>;
                    <option value='90'>90% of limit</option>;
                    <option value='95'>95% of limit</option>;
>>>>>>> main
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
      </div>;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

      <div className='bg - muted / 50 rounded - lg p - 6 flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center'>;
            <Sparkles className='h - 5 w - 5 text - primary' />;
          </div>;
          <div>;
            <h3 className='font - medium'>Need higher limits?</h3>;
            <p className='text - sm text - muted - foreground'>;

              Contact your account manager to discuss custom limits for your;
              enterprise.;
            </p>;
          </div>;
        </div>;



        <Button > Contact Us</Button>;
      </div>;
    </div>);
}"}

    </div>
  )
>>>>>>> main
