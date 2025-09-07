<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
:src/components/enterprise/admin/AdminHeader.tsx
import React from 'react;
import { Button } from @/components/ui/button';
import { Download, Settings } from 'lucide-react;
import { useCompanyWorkspace } from @/hooks/useCompanyWorkspace';

origin/cursor/automate-test-improve-and-merge-code-2533

import React from "react,
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';

import React from "react",
>>>>>>> origin/chore/fix-lint-and-merge

import { Button } from @/components/ui/button";
import { Download, Settings } from 'lucide-react
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace;
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace();
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (



import React from react";
import { Button } from "@/components/ui/button;
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from @/hooks/useCompanyWorkspace";

export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),





>>>>>>> merged-prs-20250907-203621
:src/components/enterprise/admin/AdminHeader.tsx
=======
>>>>>>> origin/chore/fix-lint-and-merge

  return (

import React from "react;

import { Download, Settings } from lucide-react'
export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  return (
    <div className=space-y-4">"
      <div className=flex items-center justify-between>"
        <div>
          <h1 className="text-3xl font-bold tracking-tight>Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company's account, team members, and subscription
          </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD

        </div>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

          <Button variant=outline size="sm" className=gap-2>
            <Settings className="h-4 w-4" />
            Settings
          </Button>

          <Button variant=outline size="sm" className=gap-2>
            <Download className="h-4 w-4" />

        <div className='flex items-center gap-2'>
          <Button variant=outline size='sm' className=gap-2>
            <Settings className='h-4 w-4' />
            Settings
          </Button>
          <Button variant=outline size='sm' className=gap-2>
            <Download className='h-4 w-4' />
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
origin/cursor/automate-test-improve-and-merge-code-2533
            Export Data
          </Button>
        </div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

      
      <div className=grid grid-cols-1 md:grid-cols-3 gap-4>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className=text-sm text-muted-foreground>Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || Enterprise}</div>


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

        </div>

        <div className="bg-card rounded-lg p-4 border border-border">
          <div className=text-sm text-muted-foreground>Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |Loading...} / {company?.teamLimit |"∞"}</div>

        </div>
        <div className=bg-card rounded-lg p-4 border border-border>"
          <div className="text-sm text-muted-foreground>Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |Annual}</div>"
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between>
        <div className=flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center>
            <img
<<<<<<< HEAD
=======
<<<<<<< HEAD

              src={company?.logoUrl || /placeholder.svg"}
              alt={company?.name || "Company}

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

              className=max-h-10 max-w-10"

              loading="lazy

            />
          </div>
          <div>

      <div className=grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border>
          <div className=text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium>{company?.plan || Enterprise"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border>
          <div className=text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium>{company?.teamSize || Loading..."} / {company?.teamLimit || "∞}</div>
        </div>
        <div className=bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground>Billing Cycle</div>
          <div className=text-xl font-medium">{company?.billingCycle || "Annual}</div>
        </div>
      </div>

      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4>
          <div className=h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img

              src={company?.logoUrl || "/placeholder.svg}
              alt={company?.name || Company"}

<<<<<<< HEAD
=======
<<<<<<< HEAD

              className="max-h-10 max-w-10
=======
>>>>>>> merged-prs-20250907-203621
              className="max-h-10 max-w-10"
>>>>>>> origin/chore/fix-lint-and-merge

              loading=lazy"
            />
          </div>
          <div>

            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<div className=grid grid-cols-1 md:grid-cols-3 gap-4>
=======
>>>>>>> merged-prs-20250907-203621
<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
>>>>>>> origin/chore/fix-lint-and-merge
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className=text-sm text-muted-foreground>Subscription Plan</div>
          <div className='text-xl font-medium'>
            {company?.plan |Enterprise}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className=text-sm text-muted-foreground>Team Members</div>
          <div className='text-xl font-medium'>
            {company?.teamSize |Loading...} / {company?.teamLimit |'∞'}
          </div>
        </div>
        <div className=bg-card rounded-lg p-4 border border-border>
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>
          <div className=text-xl font-medium>
            {company?.billingCycle |'Annual'}
          </div>
        </div>
      </div>
      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between>
        <div className='flex items-center gap-4'>
          <div className=h-12 w-12 rounded-lg bg-card flex items-center justify-center>
            <img
              src={company?.logoUrl |'/placeholder.svg'}
              alt={company?.name |Company}
              className='max-h-10 max-w-10'
              loading=lazy            />
          </div>
          <div>
            <h2 className='font-medium'>{company?.name |Company Name}</h2>
            <p className='text-sm text-muted-foreground'>
<<<<<<< HEAD
:src/components/enterprise/admin/AdminHeader.tsx
              Workspace URL: {company?.workspaceUrl |loading...}            </p>
            <h2 className="font-medium>{company?.name |Company Name"}</h2>
            <p className="text-sm text-muted-foreground>
              Workspace URL: {company?.workspaceUrl |loading..."}
        </div>
        <div className="bg-card rounded-lg p-4 border border-border>
          <div className=text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium>{company?.teamSize |Loading..."} / {company?.teamLimit |"∞}</div>
        </div>
        <div className=bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground>Billing Cycle</div>
          <div className=text-xl font-medium">{company?.billingCycle |"Annual}</div>
        </div>
      </div>
      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4>
          <div className=h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
              src={company?.logoUrl |"/placeholder.svg}
              alt={company?.name |Company"}
              className="max-h-10 max-w-10
              loading=lazy"
            />
          </div>
          <div>
            <h2 className="font-medium>{company?.name |Company Name"}</h2>
            <p className="text-sm text-muted-foreground>
              Workspace URL: {company?.workspaceUrl |loading..."}
            <h2 className="font-medium>{company?.name || Company Name"}</h2>
            <p className="text-sm text-muted-foreground>
              Workspace URL: {company?.workspaceUrl || loading..."}
              Workspace URL: {company?.workspaceUrl || 'loading...'}
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
              Workspace URL: {company?.workspaceUrl || 'loading...'}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
origin/cursor/automate-test-improve-and-merge-code-2533
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD

;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD

        <div>;

;
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Download, Settings  } from 'lucide-react';
import { useCompanyWorkspace  } from '@/hooks/useCompanyWorkspace';
import React from "react",export function AdminHeader() {// const { user } = useAuth(), // Unused but available;
  const { company }  = useCompanyWorkspace()return (export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;
  const { company  } = useCompanyWorkspace(),return (<div className="space-y-4">;
      <div className="flex items-center justify-between">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
import React from "react",""
import { Button } from "@/components/ui/button";""
import { Download, Settings } from 'lucide-react
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"

        <div>;
import React from 'react';
import { Button  } from @/components/ui/button;
import { Download, Settings  } from 'lucide-react';
import { useCompanyWorkspace  } from @/hooks/useCompanyWorkspace;
import React from react",export function AdminHeader() {// const { user } = useAuth(), // Unused but available;
  const { company }  = useCompanyWorkspace()return (export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;
  const { company  } = useCompanyWorkspace(),return (<div className="space-y-4>;
      <div className=flex items-center justify-between">;

        <div>;
          <h1 className="text-3xl font-bold tracking-tight>Enterprise Admin Dashboard</h1>;
          <p className=text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
import React from "react,"
import { Button } from "@/components/ui/button;"
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available;
  return (

"
import React from "react;"
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace;)
export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;

  return ("
    <div className="space-y-4>
</div>"
      <div className="flex items-center justify-between>
</div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
</p>

        <div className=flex items-center gap-2">"
          <Button variant=outline size="sm" className=gap-2>"
            <Settings className="h-4 w-4 />

            <Download className="h-4 w-4" />

      <div className=grid grid-cols-1 md:grid-cols-3 gap-4">"
        <div className=bg-card rounded-lg p-4 border border-border>"
          <div className="text-sm text-muted-foreground>Subscription Plan</div>"
          <div className="text-xl font-medium>{company?.plan || Enterprise"}</div>"
          <div className=text-sm text-muted-foreground>Team Members</div>""
          <div className=text-xl font-medium>{company?.teamSize |"Loading..."} / {company?.teamLimit |∞}</div>"
          <div className="text-sm text-muted-foreground>Billing Cycle</div>"
          <div className="text-xl font-medium>{company?.billingCycle |Annual"}</div>"
      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between>"
        <div className="flex items-center gap-4>
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
</img>

          <div className=text-xl font-medium">{company?.teamSize || "Loading...} / {company?.teamLimit || ∞"}</div>"
          <div className=text-xl font-medium>{company?.billingCycle || "Annual"}</div>

            <h2 className=font-medium">{company?.name || "Company Name}</h2>"
            <p className="text-sm text-muted-foreground>
        <Button>Customize Workspace
    <div className=space-y-4>;
      <div className='flex items-center justify-between'>;
    <div className="space-y-4">;
      <div className=flex items-center justify-between">;"
        <div>;
          <h1 className=text-3xl font-bold tracking-tight>;
</h1>
          </h1>;
          <p className='text-muted-foreground mt-1'>;
pr-12325
          </p>;
        </div>;
        <div className=flex items-center gap-2>;

        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className=text-muted-foreground mt-1>;
            Manage your companys account, team members, and subscription;
          </p>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="flex items-center gap-2">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

          <Button variant=outline size="sm" className=gap-2>;

            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Download className="h-4 w-4" />;
        <div className=flex items-center gap-2'>;
          <Button variant='outline size=sm' className='gap-2>;
            <Settings className=h-4 w-4' />;
            Settings;
          </Button>;
          <Button variant='outline size=sm' className='gap-2>;
            <Download className=h-4 w-4' />;
            Export Data;
          </Button>;
        </div>;
      </div>;
      <div className=grid grid-cols-1 md:grid-cols-3 gap-4>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className=text-sm text-muted-foreground>Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || Enterprise}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className=text-sm text-muted-foreground>Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize |Loading...} / {company?.teamLimit |"∞"}</div>;
        </div>;
        <div className=bg-card rounded-lg p-4 border border-border>;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className=text-xl font-medium>{company?.billingCycle |"Annual"}</div>;
        </div>;
      </div>;
      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between>;
        <div className="flex items-center gap-4">;
          <div className=h-12 w-12 rounded-lg bg-card flex items-center justify-center>;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || Company}className="max-h-10 max-w-10";
              loading=lazy;
            />;
          </div>;
          <div>;
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <div className=bg-card rounded-lg p-4 border border-border>;
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;
          <div className=text-xl font-medium>{company?.plan || "Enterprise"}</div>;
        </div>;
        <div className=bg-card rounded-lg p-4 border border-border>;
          <div className="text-sm text-muted-foreground">Team Members</div>;
          <div className=text-xl font-medium>{company?.teamSize || "Loading..."} / {company?.teamLimit || ∞}</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className=text-sm text-muted-foreground>Billing Cycle</div>;
          <div className="text-xl font-medium">{company?.billingCycle || Annual}</div>;
        </div>;
      </div>;
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className=flex items-center gap-4>;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || /placeholder.svg}
              alt={company?.name || "Company"}className=max-h-10 max-w-10;
              loading="lazy";
            />;
          </div>;
          <div>;
            <h2 className=font-medium>{company?.name || "Company Name"}</h2>;
            <p className=text-sm text-muted-foreground>;
              Workspace URL: {company?.workspaceUrl || "loading..."}<div className='grid grid-cols-1 md:grid-cols-3 gap-4>;
        <div className=bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground>Subscription Plan</div>;
          <div className=text-xl font-medium'>;
            {company?.plan |'Enterprise}
          </div>;
        </div>;
        <div className=bg-card rounded-lg p-4 border border-border'>;
          <div className='text-sm text-muted-foreground>Team Members</div>;
          <div className=text-xl font-medium'>;
            {company?.teamSize |'Loading...} / {company?.teamLimit |∞'}
          </div>;
        </div>;
        <div className='bg-card rounded-lg p-4 border border-border>;
          <div className=text-sm text-muted-foreground'>Billing Cycle</div>;
          <div className='text-xl font-medium>;
            {company?.billingCycle |Annual'}
          </div>;
        </div>;
      </div>;
      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between>;
        <div className=flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center>;
            <img;
              src={company?.logoUrl |/placeholder.svg'}
              alt={company?.name |'Company}
              className=max-h-10 max-w-10';
              loading='lazy            />;
          </div>;
          <div>;
            <h2 className=font-medium'>{company?.name |'Company Name}</h2>;
            <p className=text-sm text-muted-foreground'>;
              Workspace URL: {company?.workspaceUrl || 'loading...}</p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
    <div className=space-y-4'>;
      <div className='flex items-center justify-between>;import { Button } from @/components/ui/button,import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",export function AdminHeader() {// const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace()return (<div className=space-y-4>;
      <div className="flex items-center justify-between">;<div>;
          <h1 className=text-3xl font-bold tracking-tight>Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your companys account, team members, and subscription;
          </p>;
        </div>;
        <div className=flex items-center gap-2>;<div>;
          <h1 className='text-3xl font-bold tracking-tight'>;
            Enterprise Admin Dashboard;
          </h1>;
          <p className=text-muted-foreground mt-1>;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className='flex items-center gap-2>;
          <Button variant=outline' size='sm className=gap-2'>;
            <Settings className='h-4 w-4 />;
            Settings;
          </Button>;
          <Button variant=outline' size='sm className=gap-2'>;
            <Download className='h-4 w-4 />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items-center gap-2">;

          <Button variant=outline size="sm" className=gap-2>;
      </div>        <div className="flex items-center gap-2">;<Button variant=outline size="sm" className=gap-2>;
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
            <Download className="h-4 w-4" />;

import React from react';
import { Button } from '@/components/ui/ button;
import { Download, Settings } from lucide-react';
import { useCompanyWorkspace } from '@/hooks/ useCompanyWorkspace;
=======
>>>>>>> merged-prs-20250907-203621

import React from 'react';
import { Button } from '@/components / ui / button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
export /**
 * AdminHeader - Function description
 */
function AdminHeader() {
  // const { user } = use_auth (); // Unused but available;
  const { company } = useCompanyWorkspace ();
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className=space - y-4'>;
            <Download className=h-4 w-4 />;import { Button  } from '@/components / ui / button;
import { useCompanyWorkspace  } from @/hooks / useCompanyWorkspace';
export /**;
 * AdminHeader - Function description;
 */;
  const { company } = useCompanyWorkspace ()return (<div className='space - y-4>;
      <div className=flex items - center justify - between'>;
=======
>>>>>>> merged-prs-20250907-203621
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
>>>>>>> origin/chore/fix-lint-and-merge
        <div>;
          <h1 className='text - 3xl font - bold tracking - tight>;
            Enterprise Admin Dashboard;
          </h1>;
          <p className=text - muted - foreground mt - 1'>;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className=flex items - center gap - 2>;
          <Button variant='outline' size=sm className='gap - 2'>;
            <Settings className=h - 4 w - 4 />;
            Settings;
          </Button>;
          <Button variant='outline' size=sm className='gap - 2'>;
            <Download className=h - 4 w - 4 />            Export Data;
          </Button>;
        </div>;
      </div>        <div className="flex items - center gap - 2">;
          <Button variant=outline size="sm" className=gap - 2>;
            <Settings className="h - 4 w - 4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Download className="h - 4 w - 4" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            Export Data;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

  );
}

      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
            <Download className=h - 4 w - 4 />;Export Data;
          </Button>;
        </div>;
      </div>;<div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

      <div className=grid grid-cols-1 md:grid-cols-3 gap-4>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className=text-sm text-muted-foreground>Subscription Plan</div>;
          <div className="text-xl font-medium">{company?.plan || Enterprise}</div>;

        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className=text-sm text-muted-foreground>Team Members</div>;
          <div className="text-xl font-medium">{company?.teamSize || Loading...} / {company?.teamLimit || "∞"}</div>;
        </div>;
        <div className=bg-card rounded-lg p-4 border border-border>;
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;
          <div className=text-xl font-medium>{company?.billingCycle || "Annual"}</div>;
        </div>;
      </div>;
      <div className=bg-muted/50 rounded-lg p-4 flex items-center justify-between>;
        <div className="flex items-center gap-4">;
          <div className=h-12 w-12 rounded-lg bg-card flex items-center justify-center>;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className="max-h-10 max-w-10";)}<div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
              className="max-h-10 max-w-10";)}<div className=grid grid - cols - 1 md:grid - cols - 3 gap - 4>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className=text - sm text - muted - foreground>Subscription Plan</div>;
          <div className='text - xl font - medium'>;
            {company?.plan || Enterprise}
          </div>;
        </div>;
        <div className='bg - card rounded - lg p - 4 border border - border'>;
          <div className=text - sm text - muted - foreground>Team Members</div>;
          <div className='text - xl font - medium'>;
            {company?.team_size || Loading...} / {company?.team_limit || '∞'}
          </div>;
        </div>;
        <div className=bg - card rounded - lg p - 4 border border - border>;
          <div className='text - sm text - muted - foreground'>Billing Cycle</div>;
          <div className=text - xl font - medium>;
            {company?.billing_cycle || 'Annual'}
          </div>;
        </div>;
      </div>;
      <div className=bg - muted / 50 rounded - lg p - 4 flex items - center justify - between>;
        <div className='flex items - center gap - 4'>;
          <div className=h - 12 w - 12 rounded - lg bg - card flex items - center justify - center>;
            <img;
              src={company?.logo_url || '/placeholder.svg'}
              alt={company?.name || Company}
              className='max - h-10 max - w-10';
              loading=lazy            />;
          </div>;
          <div>;
            <h2 className='font - medium'>{company?.name || Company Name}</h2>;
            <p className='text - sm text - muted - foreground'>;
              Workspace URL: {company?.workspace_url || loading...}            </p>;
            <h2 className=font - medium>{company?.name || "Company Name"}</h2>;
            <p className=text - sm text - muted - foreground>;
              Workspace URL: {company?.workspace_url || "loading..."}
        </div>;
        <div className=bg - card rounded - lg p - 4 border border - border>;
          <div className="text - sm text - muted - foreground">Team Members</div>;
          <div className=text - xl font - medium>{company?.team_size || "Loading..."} / {company?.team_limit || ∞}</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className=text - sm text - muted - foreground>Billing Cycle</div>;
          <div className="text - xl font - medium">{company?.billing_cycle || Annual}</div>;
        </div>;
      </div>;
      <div className="bg - muted / 50 rounded - lg p - 4 flex items - center justify - between">;
        <div className=flex items - center gap - 4>;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center">;
            <img;
              src={company?.logo_url || /placeholder.svg}
              alt={company?.name || "Company"}
              className="max - h-10 max - w-10";
              className=max - h-10 max - w-10;

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              className="max-h-10 max-w-10";

  );
}

            <Settings className='h-4 w-4' />;

            <Download className=h-4 w-4 />            Export Data;

      </div>        <div className=flex items-center gap-2>;"
          <Button variant="outline size=sm" className="gap-2>;
            <Settings className="h-4 w-4" />;

          ;
            <Download className="h-4 w-4" />;
    <div className='space - y-4'>;
      <div className=flex items - center justify - between>;
          <h1 className='text - 3xl font - bold tracking - tight'>;
          <p className=text - muted - foreground mt - 1>;
        <div className='flex items - center gap - 2'>;
          <Button variant=outline size='sm' className=gap - 2>;

            <Settings className='h - 4 w - 4' />;

            <Download className=h - 4 w - 4 />            Export Data;

      </div>        <div className=flex items - center gap - 2">;"
          <Button variant=outline size="sm" className=gap - 2>;"
            <Settings className="h - 4 w - 4 />;

            <Download className="h - 4 w - 4" />;

      </div>;
pr-12325
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
        <div className=bg - card rounded - lg p - 4 border border - border>;
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;
          <div className=text - xl font - medium>;
            {company?.plan || 'Enterprise'}'
          </div>;

        </div>;

              loading="lazy";
            />;
          </div>;
          <div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;
              className="max - h-10 max - w-10";loading="lazy";
            <h2 className=font - medium>{company?.name || "Company Name"}</h2>;
              className=max - h-10 max - w-10;loading="lazy";
            />;
          </div>;
          <div>;<h2 className=font-medium>{company?.name || "Company Name"}</h2>;
            <h2 className=font-medium>{company?.name || "Company Name"}</h2>;
            <p className=text-sm text-muted-foreground>;
              Workspace URL: {company?.workspaceUrl || "loading..."}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
  )}<h2 className="font - medium">{company?.name || "Company Name"}</h2>;
            <p className="text - sm text - muted - foreground">;
  )}<h2 className=font - medium>{company?.name || "Company Name"}</h2>;
            <p className=text - sm text - muted - foreground>;
              Workspace URL: {company?.workspace_url || "loading..."}
            </p>;
          </div>;
        </div>;
        <Button > Customize Workspace</Button>;
      </div>;
    </div>);
  );
}

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>)})}
=======
  );
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            <h2 className=font - medium>{company?.name || "Company Name"}</h2>;
            <p className=text - sm text - muted - foreground>;
              Workspace URL: {company?.workspace_url || "loading..."}

            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;

}
<<<<<<< HEAD
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
