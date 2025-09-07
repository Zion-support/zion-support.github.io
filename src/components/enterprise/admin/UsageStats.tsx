<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      title: "Limits updated",
      description: "The new usage limits have been saved successfully."})
  },

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======


export function UsageStats() {


  const handleSaveChanges = () => {
    toast({

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle} from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
export function UsageStats() {
  const handleSaveChanges = null;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>
<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
return (
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export function UsageStats() {

  const handleSaveChanges = () => {
    toast({
=======
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">"

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx

<<<<<<< HEAD
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx


<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
        <Card>
=======
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>
        <p className="text-muted-foreground mb-6">
          Configure usage limits for your team to manage your subscription resources.
        </p>
      </div>        <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <CardHeader>
            <CardTitle>Job Postings</CardTitle>
            <CardDescription>
              Set monthly limits for job postings across your organization
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly job posting limit</div>
                <Badge variant="outline">25 / 50</Badge>
              </div>
              <Progress value={50} className="h-2" />
            </div>
=======
          <CardContent className='space-y-4'>'
            <div>
              <div className='flex items-center justify-between mb-2'>'
                <div className='text-sm font-medium'>'
                  Monthly job posting limit
                </div>
                <Badge variant='outline'>25 / 50</Badge>'
              </div>
              <Progress value={50} className='h-2' />'
            </div>
            <div className='grid gap-4'>'
              <div className='grid grid-cols-3 items-center gap-4'>'
                <div className='text-sm'>New limit:</div>'
                <div className='col-span-2'>'
                  <Input type='number' min='1' defaultValue='50' />'
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly job posting limit</div>
                <Badge variant="outline">25 / 50</Badge>
              </div>
              <Progress value={50} className="h-2" />
            </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>

<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
        
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' onClick={handleSaveChanges}>'
              Save Changes
            </Button>
          </CardFooter>
        </Card>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
        <Card>
          <CardHeader>
            <CardTitle>Candidate Contacts</CardTitle>
            <CardDescription>
              Limit the number of direct candidate contacts per month
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly contact credits</div>
                <Badge variant="outline">178 / 500</Badge>
              </div>
              <Progress value={35.6} className="h-2" />
            </div>
=======
          <CardContent className='space-y-4'>'
            <div>
              <div className='flex items-center justify-between mb-2'>'
                <div className='text-sm font-medium'>'
                  Monthly contact credits
                </div>
                <Badge variant='outline'>178 / 500</Badge>'
              </div>
              <Progress value={35.6} className='h-2' />'
            </div>
            <div className='grid gap-4'>'
              <div className='grid grid-cols-3 items-center gap-4'>'
                <div className='text-sm'>New limit:</div>'
                <div className='col-span-2'>'
                  <Input type='number' min='1' defaultValue='500' />'
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Monthly contact credits</div>
                <Badge variant="outline">178 / 500</Badge>
              </div>
              <Progress value={35.6} className="h-2" />
            </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>

<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
<<<<<<< HEAD

        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' onClick={handleSaveChanges}>'
              Save Changes
            </Button>
          </CardFooter>
        </Card>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
        <Card>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <CardHeader>
            <CardTitle>AI Features</CardTitle>
            <CardDescription>
              Set the AI usage limits for matching and content generation
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">AI matching credits</div>
                <Badge variant="outline">435 / 1000</Badge>
              </div>
              <Progress value={43.5} className="h-2" />
            </div>
=======
          <CardContent className='space-y-4'>'
            <div>
              <div className='flex items-center justify-between mb-2'>'
                <div className='text-sm font-medium'>AI matching credits</div>'
                <Badge variant='outline'>435 / 1000</Badge>'
              </div>
              <Progress value={43.5} className='h-2' />'
            </div>
            <div className='grid gap-4'>'
              <div className='grid grid-cols-3 items-center gap-4'>'
                <div className='text-sm'>New limit:</div>'
                <div className='col-span-2'>'
                  <Input type='number' min='1' defaultValue='1000' />'
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">AI matching credits</div>
                <Badge variant="outline">435 / 1000</Badge>
              </div>
              <Progress value={43.5} className="h-2" />
            </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
          </CardFooter>
        </Card>

<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
        
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' onClick={handleSaveChanges}>'
              Save Changes
            </Button>
          </CardFooter>
        </Card>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
        <Card>
          <CardHeader>
            <CardTitle>Budget Controls</CardTitle>
            <CardDescription>
              Set spending caps for premium features and services
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
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
=======
          <CardContent className='space-y-4'>'
            <div>
              <div className='flex items-center justify-between mb-2'>'
                <div className='text-sm font-medium'>Monthly budget</div>'
                <Badge variant='outline'>$1,250 / $5,000</Badge>'
              </div>
              <Progress value={25} className='h-2' />'
            </div>
            <div className='grid gap-4'>'
              <div className='grid grid-cols-3 items-center gap-4'>'
                <div className='text-sm'>Monthly budget:</div>'
                <div className='col-span-2'>'
                  <Input type='number' min='0' step='100' defaultValue='5000' />'
                </div>
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>'
                <div className='text-sm'>Alert threshold:</div>'
                <div className='col-span-2'>'
                  <select className='w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>'
                    <option value='75'>75% of limit</option>'
                    <option value='80'>80% of limit</option>'
                    <option value='90'>90% of limit</option>'
                    <option value='95'>95% of limit</option>'
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>
=======
            <Button size='sm' onClick={handleSaveChanges}>'
              Save Changes
            </Button>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
      <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======

<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
          </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div>
            <h3 className="font-medium">Need higher limits?</h3>
            <p className="text-sm text-muted-foreground">
              Contact your account manager to discuss custom limits for your enterprise.
            </p>
          </div>
        </div>
        <Button>Contact Us</Button>
      </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
    </div>
  )
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle} from "@/components/ui/card",;
import { Sparkles } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
export function UsageStats() {;
  const handleSaveChanges = () => {;
    toast({;
<<<<<<< HEAD
      title: "Limits updated";
      description: "The new usage limits have been saved successfully."});
  };
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
  return (;
    <div className="space-y-8">;
=======
      title: 'Limits updated',,
  description: 'The new usage limits have been saved successfully.',;
    })
};

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
  return (
    <div className='space-y-8'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
        <h3 className="text-xl font-medium mb-4">Usage Limits & Settings</h3>;
        <p className="text-muted-foreground mb-6">;
          Configure usage limits for your team to manage your subscription resources.;
        </p>;
      </div>;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
        <Card>;
          <CardHeader>;
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <CardTitle>Job Postings</CardTitle>;
            <CardDescription>;
              Set monthly limits for job postings across your organization;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly job posting limit</div>;
                <Badge variant="outline">25 / 50</Badge>;
              </div>;
              <Progress value={50} className="h-2" />;
            </div>;
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
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly job posting limit</div>;
                <Badge variant="outline">25 / 50</Badge>;
              </div>;
              <Progress value={50} className="h-2" />;
            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">New limit:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="1" defaultValue="50" />;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' on_click={handleSaveChanges}>;
              Save Changes;
            </Button>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <CardTitle > Candidate Contacts</CardTitle>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <CardTitle>Candidate Contacts</CardTitle>;
            <CardDescription>;
              Limit the number of direct candidate contacts per month;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly contact credits</div>;
                <Badge variant="outline">178 / 500</Badge>;
              </div>;
              <Progress value={35.6} className="h-2" />;
            </div>;
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
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">Monthly contact credits</div>;
                <Badge variant="outline">178 / 500</Badge>;
              </div>;
              <Progress value={35.6} className="h-2" />;
            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <div className="grid gap-4">;
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">New limit:</div>;
                <div className="col-span-2">;
                  <Input type="number" min="1" defaultValue="500" />;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' on_click={handleSaveChanges}>;
              Save Changes;
            </Button>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <CardTitle > AI Features</CardTitle>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <CardTitle>AI Features</CardTitle>;
            <CardDescription>;
              Set the AI usage limits for matching and content generation;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">;
=======
          <CardContent className='space - y-4'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">AI matching credits</div>;
                <Badge variant="outline">435 / 1000</Badge>;
              </div>;
              <Progress value={43.5} className="h-2" />;
            </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <div className='grid gap - 4'>;
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>New limit:</div>;
                <div className='col - span - 2'>;
                  <Input type='number' min='1' default_value='1000' />;
          <CardContent className="space-y-4">;
            <div>;
              <div className="flex items-center justify-between mb-2">;
                <div className="text-sm font-medium">AI matching credits</div>;
                <Badge variant="outline">435 / 1000</Badge>;
              </div>;
              <Progress value={43.5} className="h-2" />;
            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <Button size='sm' on_click={handleSaveChanges}>;
              Save Changes;
            </Button>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
        <Card>;
          <CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
            <CardTitle > Budget Controls</CardTitle>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
            <CardTitle>Budget Controls</CardTitle>;
            <CardDescription>;
              Set spending caps for premium features and services;
            </CardDescription>;
          </CardHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
          <CardContent className="space-y-4">;
=======
          <CardContent className='space - y-4'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
=======
              <div className='grid grid - cols - 3 items - center gap - 4'>;
                <div className='text - sm'>Alert threshold:</div>;
                <div className='col - span - 2'>;
                  <select className='w - full flex h - 10 rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring'>;
                    <option value='75'>75% of limit</option>;
                    <option value='80'>80% of limit</option>;
                    <option value='90'>90% of limit</option>;
                    <option value='95'>95% of limit</option>;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
              <div className="grid grid-cols-3 items-center gap-4">;
                <div className="text-sm">Alert threshold:</div>;
                <div className="col-span-2">;
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">;
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
            <Button size="sm" onClick={handleSaveChanges}>Save Changes</Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
        <Button>Contact Us</Button>;
      </div>;
    </div>;
  );
}
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx



=======
            <Button size='sm' on_click={handleSaveChanges}>;
              Save Changes;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
    </div>;
  );
}
;

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
        <Button > Contact Us</Button>;
      </div>;
    </div>);
}"}"
    </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD:src/components/enterprise/admin/UsageStats.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  )
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
    </div>;
  );
}
;
<<<<<<< HEAD:src_backup/components/enterprise/admin/UsageStats.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );

}"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/UsageStats.tsx
  );

}"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/UsageStats.tsx
