<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';
export function AdminHeader() {;
  // const { user } = useAuth(); // Unused but available
  const { company } = useCompanyWorkspace()
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';
export function AdminHeader() {;
  // const { user } = useAuth(); // Unused but available;
  const { company } = useCompanyWorkspace();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace();
<<<<<<< HEAD
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
>>>>>>>     <div className="space-y-4">
========
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";
export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),
  return (
    <div className="space-y-4">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
=======
=======
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company's account, team members, and subscription
          </p>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx

        </div>
        <div className="flex items-center gap-2">

=======
        </div>
        <div className="flex items-center gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />            Export Data
          </Button>
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
=======
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />            Export Data
          </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
      </div>        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
<<<<<<< HEAD
>>>>>>>           <Button variant="outline" size="sm" className="gap-2">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button variant="outline" size="sm" className="gap-2">
>>>>>>>             <Download className="h-4 w-4" />
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Export Data
          </Button>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
========
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>
=======
<<<<<<< HEAD
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Subscription Plan</div>
          <div className='text-xl font-medium'>
            {company?.plan |'Enterprise'}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Team Members</div>
          <div className='text-xl font-medium'>
            {company?.teamSize |'Loading...'} / {company?.teamLimit |'∞'}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>
          <div className='text-xl font-medium'>
            {company?.billingCycle |'Annual'}
          </div>
        </div>
      </div>
      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center'>
            <img
              src={company?.logoUrl |'/placeholder.svg'}
              alt={company?.name |'Company'}
              className='max-h-10 max-w-10'
              loading='lazy'            />
          </div>
          <div>
            <h2 className='font-medium'>{company?.name |'Company Name'}</h2>
            <p className='text-sm text-muted-foreground'>
              Workspace URL: {company?.workspaceUrl |'loading...'}            </p>
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD

>>>>>>>       
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
<<<<<<< HEAD

              className="max-h-10 max-w-10"
=======
      
>>>>>>>       <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
              src={company?.logoUrl |"/placeholder.svg"}
              alt={company?.name |"Company"}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               className="max-h-10 max-w-10"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              src={company?.logoUrl |"/placeholder.svg"}
              alt={company?.name |"Company"}
=======
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="max-h-10 max-w-10"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              loading="lazy"
            />
          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
=======
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
              Workspace URL: {company?.workspaceUrl |"loading..."}
>>>>>>>             <h2 className="font-medium">{company?.name || "Company Name"}</h2>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <p className="text-sm text-muted-foreground">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              Workspace URL: {company?.workspaceUrl || "loading..."}
<<<<<<< HEAD

========
              Workspace URL: {company?.workspaceUrl || "loading..."}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
            </p>
=======
>>>>>>>             </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
  )
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
export function AdminHeader() {;
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace();
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
<<<<<<< HEAD

========
    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
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
          <Button variant='outline' size='sm' className='gap-2'>;
            <Download className='h-4 w-4' />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items-center gap-2">;
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
;
export function AdminHeader() {;
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace(),;
;
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button variant="outline" size="sm" className="gap-2">;
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
            <Download className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
import React from 'react';
import { Button } from '@/components / ui / button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
export /**
 * AdminHeader - Function description
 */
function AdminHeader() {
  // const { user } = use_auth (); // Unused but available;
  const { company } = useCompanyWorkspace ();
  return (
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
        <div>;
          <h1 className='text - 3xl font - bold tracking - tight'>;
            Enterprise Admin Dashboard;
          </h1>;
          <p className='text - muted - foreground mt - 1'>;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className='flex items - center gap - 2'>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            <Settings className='h - 4 w - 4' />;
            Settings;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 2'>;
            <Download className='h - 4 w - 4' />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items - center gap - 2">;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Settings className="h - 4 w - 4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Download className="h - 4 w - 4" />;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Export Data;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx

  );
}

========
<<<<<<< HEAD
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;
          <div className='text - xl font - medium'>;
            {company?.plan || 'Enterprise'}
          </div>;
        </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Team Members</div>;
          <div className='text - xl font - medium'>;
            {company?.team_size || 'Loading...'} / {company?.team_limit || '∞'}
          </div>;
        </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className='text - sm text - muted - foreground'>Billing Cycle</div>;
          <div className='text - xl font - medium'>;
            {company?.billing_cycle || 'Annual'}
          </div>;
        </div>;
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
      </div>;
      <div className="bg - muted / 50 rounded - lg p - 4 flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center">;
            <img;
              src={company?.logo_url || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max - h-10 max - w-10";
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      </div>;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10";
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              loading="lazy";
            />;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
              Workspace URL: {company?.workspace_url || "loading..."}
            </p>;
          </div>;
        </div>;
        <Button > Customize Workspace</Button>;
      </div>;
    </div>);
}
<<<<<<<< HEAD:src/components/enterprise/admin/AdminHeader.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL:{company?.workspaceUrl || "loading..."}
=======
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
<<<<<<< HEAD
  ),;}
 export function AdminHeader () {;
  //const {;
  user ;
}= useAuth (), //Unused but available const {;
  company ;
}= useCompanyWorkspace ();
space-y-4"> <div className=" flex items-center justify-between"> <div> <h1 className=" text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1> <p className=" text-muted-foreground mt-1"> Manage your company's account, team members, and subscription </p> </div> <div className=" flex items-center gap-2"> <Button variant=" outline"size=" sm"className=" gap-2"> <Settings className=" h-4 w-4"/> Settings </Button> <Button variant=" outline"size=" sm"className=" gap-2"> <Download className=" h-4 w-4"/> Export Data </Button> </div> </div> </div> </div> <div className=" bg-muted/50 rounded-lg p-4 flex items-center justify-between"> <div className=" flex items-center gap-4"> <div className=" h-12 w-12 rounded-lg bg-card flex items-center justify-center" > <img </p> </div> </div> <Button>Customize Workspace</Button> </div> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/AdminHeader.tsx
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
