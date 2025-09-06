
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company

export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img

=======

              src={company.logoUrl || '/placeholder.svg'}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
            <img
              src={company.logoUrl |"/placeholder.svg"}
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

}

