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
import React from 'react';
import { Button } from '@/components/ui/button';
import { type Company } from './CompanyDashboard';
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
  company: Company;


<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import React from 'react'
import { Button } from '@/components/ui/button'
import { type Company } from './CompanyDashboard'
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
interface WorkspaceHeaderProps {
  company: Company;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from 'lucide-react'

interface WorkspaceHeaderProps {
  company: Company
}

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



export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img
              src={company.logoUrl |'/placeholder.svg'}
              src={company.logoUrl || '/placeholder.svg'}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
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
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
<<<<<<< HEAD
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
      
      
=======


      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      </div>
    </div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          <Button variant="outline" size="icon" aria-label="Team members">;
            <Users className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon" aria-label="Workspace settings">;
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
