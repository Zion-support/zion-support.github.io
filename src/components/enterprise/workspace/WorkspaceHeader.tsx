<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
interface WorkspaceHeaderProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { Button } from '@/components/ui/button';
import { type Company } from './CompanyDashboard';
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
<<<<<<< HEAD
  company: Company;


<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react'
import { Button } from '@/components/ui/button'
import { type Company } from './CompanyDashboard'
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
<<<<<<< HEAD
interface WorkspaceHeaderProps {
  company: Company;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
interface WorkspaceHeaderProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  company: Company;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img
xport function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img
<<<<<<< HEAD
              src={company.logoUrl |'/placeholder.svg'}
              src={company.logoUrl || '/placeholder.svg'}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


              src={company.logoUrl || '/placeholder.svg'}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import React from "react";
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
interface WorkspaceHeaderProps {;
  company: Company;
}
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
  return (

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
=======

interface WorkspaceHeaderProps {;
  company: Company;
}

export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
<<<<<<< HEAD
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
<<<<<<< HEAD
              src={company.logoUrl |"/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <img

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>


            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
        
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
      </div>
    </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </div>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
}
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
=======


}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              src={company && company.logoUrl || "/placeholder && placeholder.svg"}
              alt={company && company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            <img;
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company.plan} Plan · {company.teamSize} team members;
            </p>;
          </div>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon" aria-label="Notifications">;
            <Bell className="h-4 w-4" />;
          </Button>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
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
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
  );
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
