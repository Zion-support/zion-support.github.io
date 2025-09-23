

:src_backup/components/enterprise/admin/AdminHeader.tsx

:src/components/enterprise/admin/AdminHeader.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';

:src_backup/components/enterprise/admin/AdminHeader.tsx
origin/cursor/automate-test-improve-and-merge-code-2533

import React from "react";



:src_backup/components/enterprise/admin/AdminHeader.tsx
  return (



import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";

export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),





:src/components/enterprise/admin/AdminHeader.tsx
:src_backup/components/enterprise/admin/AdminHeader.tsx



          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>

          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />

        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' className='gap-2'>
            <Settings className='h-4 w-4' />
            Settings
          </Button>
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />


:src_backup/components/enterprise/admin/AdminHeader.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/enterprise/admin/AdminHeader.tsx

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>



        </div>

        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>

        </div>
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>"
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>"
        </div>

      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img

:src_backup/components/enterprise/admin/AdminHeader.tsx

              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}


              className="max-h-10 max-w-10"

              loading="lazy"

            />
          </div>
          <div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>
        </div>

      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
:src_backup/components/enterprise/admin/AdminHeader.tsx


:src_backup/components/enterprise/admin/AdminHeader.tsx

              className="max-h-10 max-w-10"

              className="max-h-10 max-w-10


:src_backup/components/enterprise/admin/AdminHeader.tsx

<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

<div className=grid grid-cols-1 md:grid-cols-3 gap-4>

origin/cursor/automate-test-improve-and-merge-code-2533

:src/components/enterprise/admin/AdminHeader.tsx
              Workspace URL: {company?.workspaceUrl |'loading...'}            </p>
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>
        </div>
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
              src={company?.logoUrl |"/placeholder.svg"}
              alt={company?.name |"Company"}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
              Workspace URL: {company?.workspaceUrl || 'loading...'}
:src_backup/components/enterprise/admin/AdminHeader.tsx
:src/components/enterprise/admin/AdminHeader.tsx
  )
}

:src_backup/components/enterprise/admin/AdminHeader.tsx

:src_backup/components/enterprise/admin/AdminHeader.tsx
;

:src_backup/components/enterprise/admin/AdminHeader.tsx



        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
import React from "react";""
import { Button } from "@/components/ui/button";""
import { Download, Settings } from 'lucide-react
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"

        <div>;

;
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Download, Settings  } from 'lucide-react';
import { useCompanyWorkspace  } from '@/hooks/useCompanyWorkspace';
import React from "react";export function AdminHeader() {// const { user } = useAuth(), // Unused but available;
  const { company }  = useCompanyWorkspace()return (export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;
  const { company  } = useCompanyWorkspace(),return (<div className="space-y-4">;
      <div className="flex items-center justify-between">;

        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
import React from "react";""
import { Button } from "@/components/ui/button";""
import { Download, Settings } from 'lucide-react
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace();
  return (

"
import React from "react";""
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";")
export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;
  const { company  } = useCompanyWorkspace(),

  return ("
    <div className="space-y-4">"
</div>"
      <div className="flex items-center justify-between">"
</div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>""
          <p className="text-muted-foreground mt-1">"
</p>

        <div className="flex items-center gap-2">"
          <Button variant="outline" size="sm" className="gap-2">"
            <Settings className="h-4 w-4" />"

            <Download className="h-4 w-4" />"

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Subscription Plan</div>""
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>"
          <div className="text-sm text-muted-foreground">Team Members</div>""
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>""
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>"
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">"
        <div className="flex items-center gap-4">"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">"
            <img;"
              src={company?.logoUrl || "/placeholder.svg"}""
              alt={company?.name || "Company"}""
              className="max-h-10 max-w-10"""
              loading="lazy""
            />
</img>

          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>"
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>"

            <h2 className="font-medium">{company?.name || "Company Name"}</h2>""
            <p className="text-sm text-muted-foreground">"
        <Button>Customize Workspace
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;
    <div className="space-y-4">;"
      <div className="flex items-center justify-between">;"
        <div>;
          <h1 className='text-3xl font-bold tracking-tight'>;
</h1>
          </h1>;
          <p className='text-muted-foreground mt-1'>;
pr-12325
          </p>;
        </div>;
        <div className="flex items-center gap-2">;

        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;


:src_backup/components/enterprise/admin/AdminHeader.tsx
        <div className="flex items-center gap-2">;
:src_backup/components/enterprise/admin/AdminHeader.tsx
        <div className="flex items-center gap-2">;


:src_backup/components/enterprise/admin/AdminHeader.tsx
            <Download className="h-4 w-4" />;
        <div className='flex items-center gap-2'>;
          <Button variant='outline' size='sm' className='gap-2'>;
            <Settings className='h-4 w-4' />;
            Settings;
          </Button>;
          <Button variant='outline' size='sm' className='gap-2'>;
            <Download className='h-4 w-4' />;
            Export Data;
          </Button>;
        </div>;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>;
        </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}className="max-h-10 max-w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>;
        </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}className="max-h-10 max-w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>Subscription Plan</div>;
          <div className='text-xl font-medium'>;
            {company?.plan |'Enterprise'}
          </div>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>Team Members</div>;
          <div className='text-xl font-medium'>;
            {company?.teamSize |'Loading...'} / {company?.teamLimit |'∞'}
          </div>;
        <div className='bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>;
          <div className='text-xl font-medium'>;
            {company?.billingCycle |'Annual'}
          </div>;
      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center'>;
            <img;
              src={company?.logoUrl |'/placeholder.svg'}
              alt={company?.name |'Company'}
              className='max-h-10 max-w-10';
              loading='lazy'            />;
          </div>;
          <div>;
            <h2 className='font-medium'>{company?.name |'Company Name'}</h2>;
            <p className='text-sm text-muted-foreground'>;
              Workspace URL: {company?.workspaceUrl || 'loading...'}</p>;
          </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;;import { Button } from "@/components/ui/button",import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",export function AdminHeader() {// const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace()return (<div className="space-y-4">;
      <div className="flex items-center justify-between">;<div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;<div>;
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
          <Button variant='outline' size='sm' className='gap-2'>;
            <Download className='h-4 w-4' />            Export Data;
          </Button>;
        </div>;
:src_backup/components/enterprise/admin/AdminHeader.tsx
:src_backup/components/enterprise/admin/AdminHeader.tsx
            <Download className="h-4 w-4" />;
:src_backup/components/enterprise/admin/AdminHeader.tsx

import React from 'react';
import { Button } from '@/components/ui/ button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/ useCompanyWorkspace';


    <div className='space - y-4'>;
            <Download className="h-4 w-4" />;import { Button  } from '@/components / ui / button';
import { useCompanyWorkspace  } from '@/hooks / useCompanyWorkspace';
export /**;
 * AdminHeader - Function description;
 */;
function AdminHeader() {// const { user } = use_auth ()// Unused but available;
  const { company } = useCompanyWorkspace ()return (<div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
    <div className=space - y-4'>;
            <Download className=h-4 w-4 />;import { Button  } from '@/components / ui / button;
import { useCompanyWorkspace  } from @/hooks / useCompanyWorkspace';
export /**;
 * AdminHeader - Function description;
 */;
  const { company } = useCompanyWorkspace ()return (<div className='space - y-4>;
      <div className=flex items - center justify - between'>;
:src_backup/components/enterprise/admin/AdminHeader.tsx
            <Download className="h - 4 w - 4" />;
:src_backup/components/enterprise/admin/AdminHeader.tsx



            Export Data;
          </Button>;
        </div>;
:src_backup/components/enterprise/admin/AdminHeader.tsx


:src_backup/components/enterprise/admin/AdminHeader.tsx
              className="max-h-10 max-w-10";)}<div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
              className="max-h-10 max-w-10";)}<div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
              className="max-h-10 max-w-10";)}<div className=grid grid - cols - 1 md:grid - cols - 3 gap - 4>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;
          <div className='text - xl font - medium'>;
            {company?.plan || 'Enterprise'}
          </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Team Members</div>;
          <div className='text - xl font - medium'>;
            {company?.team_size || 'Loading...'} / {company?.team_limit || '∞'}
          </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Billing Cycle</div>;
          <div className='text - xl font - medium'>;
            {company?.billing_cycle || 'Annual'}
          </div>;
      <div className='bg - muted / 50 rounded - lg p - 4 flex items - center justify - between'>;
        <div className='flex items - center gap - 4'>;
          <div className='h - 12 w - 12 rounded - lg bg - card flex items - center justify - center'>;
            <img;
              src={company?.logo_url || '/placeholder.svg'}
              alt={company?.name || 'Company'}
              className='max - h-10 max - w-10';
              loading='lazy'            />;
          </div>;
          <div>;
            <h2 className='font - medium'>{company?.name || 'Company Name'}</h2>;
            <p className='text - sm text - muted - foreground'>;
              Workspace URL: {company?.workspace_url || 'loading...'}            </p>;
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
              Workspace URL: {company?.workspace_url || "loading..."}
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Team Members</div>;
          <div className="text - xl font - medium">{company?.team_size || "Loading..."} / {company?.team_limit || "∞"}</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Billing Cycle</div>;
          <div className="text - xl font - medium">{company?.billing_cycle || "Annual"}</div>;
        </div>;
      <div className="bg - muted / 50 rounded - lg p - 4 flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center">;
            <img;
              src={company?.logo_url || "/placeholder.svg"}
              alt={company?.name || "Company"}
:src_backup/components/enterprise/admin/AdminHeader.tsx
              className="max - h-10 max - w-10";
:src_backup/components/enterprise/admin/AdminHeader.tsx


:src_backup/components/enterprise/admin/AdminHeader.tsx
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
              className="max - h-10 max - w-10";loading="lazy";
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
              className="max - h-10 max - w-10";loading="lazy";
            <h2 className=font - medium>{company?.name || "Company Name"}</h2>;
              className=max - h-10 max - w-10;loading="lazy";
            />;
          </div>;
          <div>;<h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}
:src_backup/components/enterprise/admin/AdminHeader.tsx
  )}<h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;


  );
  )}<h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
  )}<h2 className=font - medium>{company?.name || "Company Name"}</h2>;
            <p className=text - sm text - muted - foreground>;
              Workspace URL: {company?.workspace_url || "loading..."}
            </p>;
          </div>;
        <Button > Customize Workspace</Button>;
      </div>;
:src_backup/components/enterprise/admin/AdminHeader.tsx
    </div>);
  );
:src_backup/components/enterprise/admin/AdminHeader.tsx
:src_backup/components/enterprise/admin/AdminHeader.tsx

;

;
