import React from "react",
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace();
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
  const { company } = useCompanyWorkspace(),

import React from "react";

export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company's account, team members, and subscription
          </p>

        </div>
        <div className="flex items-center gap-2">

          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>

            <Download className="h-4 w-4" />
            Export Data
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Subscription Plan</div>
          <div className='text-xl font-medium'>
            {company?.plan |'Enterprise'}
          <div className='text-sm text-muted-foreground'>Team Members</div>
            {company?.teamSize |'Loading...'} / {company?.teamLimit |'∞'}
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>
            {company?.billingCycle |'Annual'}
      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center'>
            <img
              src={company?.logoUrl |'/placeholder.svg'}
              alt={company?.name |'Company'}
              className='max-h-10 max-w-10'
              loading='lazy'            />
            <h2 className='font-medium'>{company?.name |'Company Name'}</h2>
            <p className='text-sm text-muted-foreground'>
              Workspace URL: {company?.workspaceUrl |'loading...'}            </p>
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>

      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">

              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10"
              loading="lazy"
            />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>

              src={company?.logoUrl |"/placeholder.svg"}
              alt={company?.name |"Company"}

            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
              Workspace URL: {company?.workspaceUrl || "loading..."}
        <Button>Customize Workspace</Button>

    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;

;

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
export function AdminHeader() {;
  // const { user } = useAuth(), // Unused but available;
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;

        <div>;
          <h1 className='text-3xl font-bold tracking-tight'>;
            Enterprise Admin Dashboard;
          </h1>;
          <p className='text-muted-foreground mt-1'>;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className='flex items-center gap-2'>;
          <Button variant='outline' size='sm' className='gap-2'>;
            <Settings className='h-4 w-4' />;
            Settings;
          </Button>;
            <Download className='h-4 w-4' />            Export Data;
      </div>        <div className="flex items-center gap-2">;
          <Button variant="outline" size="sm" className="gap-2">;
            <Settings className="h-4 w-4" />;
            <Download className="h-4 w-4" />;
import React from 'react';
import { Button } from '@/components / ui / button';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
export /**
 * AdminHeader - Function description
 */
function AdminHeader() {
  // const { user } = use_auth (); // Unused but available;
  const { company } = useCompanyWorkspace ();
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
          <h1 className='text - 3xl font - bold tracking - tight'>;
          <p className='text - muted - foreground mt - 1'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            <Settings className='h - 4 w - 4' />;
            <Download className='h - 4 w - 4' />            Export Data;
      </div>        <div className="flex items - center gap - 2">;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Settings className="h - 4 w - 4" />;
            <Download className="h - 4 w - 4" />;
            Export Data;

  );
}

      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;
          <div className='text - xl font - medium'>;
            {company?.plan || 'Enterprise'}
          <div className='text - sm text - muted - foreground'>Team Members</div>;
            {company?.team_size || 'Loading...'} / {company?.team_limit || '∞'}
          <div className='text - sm text - muted - foreground'>Billing Cycle</div>;
            {company?.billing_cycle || 'Annual'}
      <div className='bg - muted / 50 rounded - lg p - 4 flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 12 w - 12 rounded - lg bg - card flex items - center justify - center'>;
            <img;
              src={company?.logo_url || '/placeholder.svg'}
              alt={company?.name || 'Company'}
              className='max - h-10 max - w-10';
              loading='lazy'            />;
            <h2 className='font - medium'>{company?.name || 'Company Name'}</h2>;
            <p className='text - sm text - muted - foreground'>;
              Workspace URL: {company?.workspace_url || 'loading...'}            </p>;
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
              Workspace URL: {company?.workspace_url || "loading..."}
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Team Members</div>;
          <div className="text - xl font - medium">{company?.team_size || "Loading..."} / {company?.team_limit || "∞"}</div>;
          <div className="text - sm text - muted - foreground">Billing Cycle</div>;
          <div className="text - xl font - medium">{company?.billing_cycle || "Annual"}</div>;
      <div className="bg - muted / 50 rounded - lg p - 4 flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center">;
              src={company?.logo_url || "/placeholder.svg"}
              className="max - h-10 max - w-10";
              loading="lazy";
            />;
        <Button > Customize Workspace</Button>;
    </div>);