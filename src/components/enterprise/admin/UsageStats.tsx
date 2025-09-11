<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { toast } from '@/hooks / use - toast';
import React from './react';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { toast  } from '@/hooks / use - toast';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

import {

import {

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
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
export function UsageStats() {

  const handleSaveChanges = () => {
    toast({
      title: 'Limits updated'
      description: 'The new usage limits have been saved successfully.'
    })
  }
return (

      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
ursor/fix-website-loading-errors-and-merge-6662
        <Card>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
=======
return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
return (


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


        <Card>
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <Card>
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <Card>
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


        <Card>
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <Card>
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </CardFooter>
        </Card>
      </div>
      <div className='bg-muted/50 rounded-lg p-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center'>
            <Sparkles className='h-5 w-5 text-primary' />
<<<<<<< HEAD
=======
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />


          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
              Contact your account manager to discuss custom limits for your enterprise.
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className='font-medium'>Need higher limits?</h3>
            <p className='text-sm text-muted-foreground'>
              Contact your account manager to discuss custom limits for your
              enterprise.
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}"}
  CardTitle,
} from '@/components / ui / card';
import { Sparkles } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
export /**
 * UsageStats - Function description
 */
function UsageStats() {
  const handleSaveChanges = () =>: any {
    toast ({
      title: 'Limits updated',
      description: 'The new usage limits have been saved successfully.',
    });
  }
  return (

    </div>;
  );
}"};
    </div>
  )
}"}
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Configure usage limits for your team to manage your subscription;
          resources.;
        </p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
        <Card>;
          <CardHeader>;
            <CardTitle > Job Postings</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title:"Limits updated",;
      description:"The new usage limits have been saved successfully."}),;
  },;
;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Monthly job posting limit;
                </div>;
                <Badge variant='outline'>25 / 50</Badge>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Progress value={50} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='50' />;
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
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
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Candidate Contacts</CardTitle>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>;
              Limit the number of direct candidate contacts per month;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Monthly contact credits;
                </div>;
                <Badge variant='outline'>178 / 500</Badge>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Progress value={35.6} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='500' />;
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
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
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>AI Features</CardTitle>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
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
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Budget Controls</CardTitle>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>;
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <option value='75'>75% of limit</option>;
                    <option value='80'>80% of limit</option>;
                    <option value='90'>90% of limit</option>;
                    <option value='95'>95% of limit</option>;
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button size='sm' on_click={handleSaveChanges}>;

              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='bg - muted / 50 rounded - lg p - 6 flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center'>;
            <Sparkles className='h - 5 w - 5 text - primary' />;
          </div>;
          <div>;
            <h3 className='font - medium'>Need higher limits?</h3>;
            <p className='text - sm text - muted - foreground'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Contact your account manager to discuss custom limits for your;
              enterprise.;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        <Button > Contact Us</Button>;
      </div>;
    </div>);
}"}
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

    </div>
  )
=======

    </div>
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
