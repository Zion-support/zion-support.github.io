<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {

=======
>>>>>>> import {

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import {

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function UsageStats() {

  const handleSaveChanges = () => {
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      title: 'Limits updated'
      description: 'The new usage limits have been saved successfully.'
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
>>>>>>>         <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card>
>>>>>>>           <CardHeader>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Card>
          <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD

=======
>>>>>>>         <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card>
>>>>>>>           <CardHeader>
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Card>
          <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD

=======
>>>>>>>         <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card>
>>>>>>>           <CardHeader>
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Card>
          <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD

=======
>>>>>>>         <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card>
>>>>>>>           <CardHeader>
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>
        
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Card>
          <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button size='sm' onClick={handleSaveChanges}>
              Save Changes
            </Button>
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='bg-muted/50 rounded-lg p-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center'>
            <Sparkles className='h-5 w-5 text-primary' />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
>>>>>>>           <div>
            <h3 className='font-medium'>Need higher limits?</h3>
            <p className='text-sm text-muted-foreground'>
              Contact your account manager to discuss custom limits for your
              enterprise.
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>
          <div>
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
              Contact your account manager to discuss custom limits for your enterprise.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </div>;
  );
}"};
}"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}"};
    </div>
  )
}"}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
          Configure usage limits for your team to manage your subscription;
          resources.;
        </p>;
      </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
      <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
        <Card>;
          <CardHeader>;
            <CardTitle > Job Postings</CardTitle>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
=======
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
=======
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
      title: "Limits updated";
      description: "The new usage limits have been saved successfully."});
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="space-y-8">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;
        <p className="text-muted-foreground mb-6">;
          Configure usage limits for your team to manage your subscription resources.;
        </p>;
      </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
        <Card>;
          <CardHeader>;
            <CardTitle>Job Postings</CardTitle>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
                  Monthly job posting limit;
                </div>;
                <Badge variant='outline'>25 / 50</Badge>;
              </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              <Progress value={50} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='50' />;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

            <Button size='sm' on_click={handleSaveChanges}>;

========
<<<<<<< HEAD
            <Button size='sm' on_click={handleSaveChanges}>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;

========
        <Card>;
          <CardHeader>;
            <CardTitle > Candidate Contacts</CardTitle>;
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>Candidate Contacts</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Candidate Contacts</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>;
              Limit the number of direct candidate contacts per month;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
          <CardContent className='space - y-4'>;
            <div>;
              <div className='flex items - center justify - between mb - 2'>;
                <div className='text - sm font - medium'>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
                  Monthly contact credits;
                </div>;
                <Badge variant='outline'>178 / 500</Badge>;
              </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              <Progress value={35.6} className='h - 2' />;
            </div>;
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='500' />;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

            <Button size='sm' on_click={handleSaveChanges}>;

========
<<<<<<< HEAD
            <Button size='sm' on_click={handleSaveChanges}>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;

========
        <Card>;
          <CardHeader>;
            <CardTitle > AI Features</CardTitle>;
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>AI Features</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>AI Features</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

            <Button size='sm' on_click={handleSaveChanges}>;

========
<<<<<<< HEAD
            <Button size='sm' on_click={handleSaveChanges}>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;

========
        <Card>;
          <CardHeader>;
            <CardTitle > Budget Controls</CardTitle>;
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        ;
        <Card>;
          <CardHeader>;
            <CardTitle>Budget Controls</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle>Budget Controls</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>;
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
                    <option value='75'>75% of limit</option>;
                    <option value='80'>80% of limit</option>;
                    <option value='90'>90% of limit</option>;
                    <option value='95'>95% of limit</option>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </select>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

            <Button size='sm' on_click={handleSaveChanges}>;

========
<<<<<<< HEAD
            <Button size='sm' on_click={handleSaveChanges}>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
      <div className='bg - muted / 50 rounded - lg p - 6 flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 10 w - 10 rounded - full bg - primary / 20 flex items - center justify - center'>;
            <Sparkles className='h - 5 w - 5 text - primary' />;
          </div>;
          <div>;
            <h3 className='font - medium'>Need higher limits?</h3>;
            <p className='text - sm text - muted - foreground'>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
              Contact your account manager to discuss custom limits for your;
              enterprise.;
            </p>;
          </div>;
        </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
        <Button>Contact Us</Button>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
    </div>
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}"}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  ),;}
 import {;
  Card;
CardContent;
CardDescription;
CardFooter;
CardHeader;
};
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/UsageStats.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

    </div>
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
