<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx

<<<<<<< HEAD
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company

=======
import React from "react",
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface WorkspaceHeaderProps {
  company: Company;


=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { type Company } from './CompanyDashboard'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
=======
interface WorkspaceHeaderProps {
  company: Company;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from 'lucide-react'

interface WorkspaceHeaderProps {
  company: Company
}

<<<<<<< HEAD
<<<<<<< HEAD
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
========
<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { type Company } from './CompanyDashboard';
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
  company: Company;
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img
<<<<<<< HEAD

=======
xport function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
              src={company.logoUrl |'/placeholder.svg'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
              src={company.logoUrl |'/placeholder.svg'}
=======
              src={company.logoUrl || '/placeholder.svg'}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              alt={company.name}
              className='max-h-10 max-w-10'
              loading='lazy'            />
          </div>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              {company.name} Workspace
            </h1>
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
import React from 'react';
import { Button } from '@/components / ui / button';
import { type Company } from './CompanyDashboard';
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {
  company: Company;
export /**
 * WorkspaceHeader - Function description
 */
function WorkspaceHeader() {
  return (
    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border'>;
            <img;
              src={company.logo_url || '/placeholder.svg'}
              alt={company.name}
              className='max - h-10 max - w-10';
              loading='lazy'            />;
          </div>;
          <div>;
            <h1 className='text - 3xl font - bold tracking - tight'>;
              {company.name} Workspace;
            </h1>;
            <p className='text - muted - foreground'>              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
        </div>;
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;
            <p className="text - muted - foreground">;
interface WorkspaceHeaderProps {
  company: Company;
}
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
              src={company && company.logoUrl || '/placeholder && placeholder.svg'}
              alt={company && company.name}
              className='max-h-10 max-w-10'
              loading='lazy'            />;
          </div>;
          <div>;
            <h1 className='text-3xl font-bold tracking-tight'>;
              {company && company.name} Workspace;
            </h1>;
            <p className='text-muted-foreground'>              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
interface WorkspaceHeaderProps {;
  company: Company;
}
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
  return (
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from 'lucide-react';
;
interface WorkspaceHeaderProps {;
  company:Company;
}
;
export function WorkspaceHeader({ company } WorkspaceHeaderProps) {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
<<<<<<< HEAD
            <img
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
=======
interface WorkspaceHeaderProps {
  company: Company
}
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              src={company.logoUrl |"/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>             <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
>>>>>>>             <p className="text-muted-foreground">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='icon' aria-label='Notifications'>
            <Bell className='h-4 w-4' />
          </Button>
          <Button variant='outline' size='icon' aria-label='Team members'>
            <Users className='h-4 w-4' />
          </Button>
          <Button variant='outline' size='icon' aria-label='Workspace settings'>
            <Settings className='h-4 w-4' />
          </Button>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Active Job Listings
          </div>
          <div className='text-2xl font-medium'>8</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Candidate Applications
          </div>
          <div className='text-2xl font-medium'>47</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Interviews Scheduled
          </div>
          <div className='text-2xl font-medium'>12</div>        </div>
      </div>
    </div>
  )
}          </Button>
<<<<<<< HEAD
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Candidate Applications</div>
          <div className="text-2xl font-medium">47</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          <div className="text-2xl font-medium">12</div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Active Job Listings
          </div>
          <div className='text-2xl font-medium'>8</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Candidate Applications
          </div>
          <div className='text-2xl font-medium'>47</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Interviews Scheduled
          </div>
          <div className='text-2xl font-medium'>12</div>        </div>
      </div>
    </div>
  )
<<<<<<< HEAD

}

=======
>>>>>>>         </div>
      </div>
    </div>
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}          </Button>
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Candidate Applications</div>
          <div className="text-2xl font-medium">47</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
  company: Company;
}
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
            <img;
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10";
              loading="lazy";
<<<<<<< HEAD
========
              src={company && company.logoUrl || "/placeholder && placeholder.svg"}
              alt={company && company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;
        <div className='flex items-center gap-2'>;
          <Button variant='outline' size='icon' aria-label='Notifications'>;
            <Bell className='h-4 w-4' />;
          </Button>;
          <Button variant='outline' size='icon' aria-label='Team members'>;
            <Users className='h-4 w-4' />;
          </Button>;
          <Button variant='outline' size='icon' aria-label='Workspace settings'>;
            <Settings className='h-4 w-4' />;
          </Button>;
        </div>;
      </div>;
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>;
            Active Job Listings;
          </div>;
          <div className='text-2xl font-medium'>8</div>;
        </div>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>;
            Candidate Applications;
          </div>;
          <div className='text-2xl font-medium'>47</div>;
        </div>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>;
            Interviews Scheduled;
          </div>;
          <div className='text-2xl font-medium'>12</div>        </div>;
      </div>;
    </div>;
  );
}          </Button>;
=======
            <img;
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10";
              loading="lazy";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company.plan} Plan · {company.teamSize} team members;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon" aria-label="Notifications">;
            <Bell className="h-4 w-4" />;
          </Button>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button variant="outline" size="icon" aria-label="Team members">;
            <Users className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon" aria-label="Workspace settings">;
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
=======
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
          <div className="text-2xl font-medium">8</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;
          <div className="text-2xl font-medium">47</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;
          <div className="text-2xl font-medium">12</div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:src/components/enterprise/workspace/WorkspaceHeader.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
export /**
 * WorkspaceHeader - Function description
 */
function WorkspaceHeader() {
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border">;
            <img;
              src={company.logo_url || "/placeholder.svg"}
              alt={company.name}
              className="max - h-10 max - w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;
            <p className="text - muted - foreground">;
              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
        </div>;
        <div className='flex items - center gap - 2'>;
          <Button variant='outline' size='icon' aria - label='Notifications'>;
            <Bell className='h - 4 w - 4' />;
          </Button>;
          <Button variant='outline' size='icon' aria - label='Team members'>;
            <Users className='h - 4 w - 4' />;
          </Button>;
          <Button variant='outline' size='icon' aria - label='Workspace settings'>;
            <Settings className='h - 4 w - 4' />;
          </Button>;
        </div>;
      </div>;
      <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 4'>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>;
            Active Job Listings;
          </div>;
          <div className='text - 2xl font - medium'>8</div>;
        </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>;
            Candidate Applications;
          </div>;
          <div className='text - 2xl font - medium'>47</div>;
        </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>;
            Interviews Scheduled;
          </div>;
          <div className='text - 2xl font - medium'>12</div>        </div>;
      </div>;
    </div>);
}          </Button>;
          <Button variant="outline" size="icon" aria - label="Team members">;
            <Users className="h - 4 w - 4" />;
          </Button>;
          <Button variant="outline" size="icon" aria - label="Workspace settings">;
            <Settings className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </div>;
      <div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;
          <div className="text - 2xl font - medium">8</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Candidate Applications</div>;
          <div className="text - 2xl font - medium">47</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Interviews Scheduled</div>;
          <div className="text - 2xl font - medium">12</div>;
        </div>;
      </div>;
    </div>);
}
=======
  );}
 import {;
  {;
  {;
  Bell,  Users, Settings ;
}from 'lucide-react' interface WorkspaceHeaderProps {;
  company: Company ;
}export function WorkspaceHeader ({;
  company ;
}: WorkspaceHeaderProps) {;
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {";
  company.logoUrl || "/placeholder.svg" ;
}alt= {;
  company.name ";
}className="max-h-10 max-w-10" loading="lazy" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {;
  company.name ";
}Workspace</h1> <p className="text-muted-foreground" > {;
  company.plan ;
}Plan · {;
  company.teamSize ";
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"aria-label=" Notifications"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Team members"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Workspace settings"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/workspace/WorkspaceHeader.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
