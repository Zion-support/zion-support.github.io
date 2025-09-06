
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/AdminHeader.tsx

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const { user } = useAuth();
  const { company } = useCompanyWorkspace();
=======
=======
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/AdminHeader.tsx

import React from "react";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Download, Settings} from "lucide-react";
import {useCompanyWorkspace} from "@/hooks/useCompanyWorkspace";

export function AdminHeader() {
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function AdminHeader() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function AdminHeader() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { company } = useCompanyWorkspace();
import React from "react","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Download, Settings } from "lucide-react","
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
export function AdminHeader() {}
  const { user } = useAuth(),
  const { company } = useCompanyWorkspace(),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
  return (
<<<<<<< HEAD
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
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan |"Enterprise"}</div>
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
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img
              src={company?.logoUrl |"/placeholder.svg"}
              alt={company?.name |"Company"}
              className="max-h-10 max-w-10"
            />
          </div>
          <div>
            <h2 className="font-medium">{company?.name |"Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl |"loading..."}
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
export function AdminHeader() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function AdminHeader() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export function AdminHeader() {;

  const { user } = useAuth();
  const { company } = useCompanyWorkspace();
  return (

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from "lucide-react",;
=======
  return (;
";
import React from "react",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Button } from "@/components/ui/button",;"
import { Download, Settings } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",;
export function AdminHeader() { return null; }
  const { user } = useAuth();
  const { company } = useCompanyWorkspace();
  return (;
<<<<<<< HEAD
    <div className="space-y-4">;
=======
"
    <div className="space-y-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="flex items-center justify-between">;
        <div>;"
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;"
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;"
        <div className="flex items-center gap-2">;"
          <Button variant="outline" size="sm" className="gap-2">;"
            <Settings className="h-4 w-4" />;
            Settings;
<<<<<<< HEAD
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
            <Download className="h-4 w-4" />;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / enterprise / admin / AdminHeader.tsx;
import React from './react';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Download, Settings } from './lucide-react';
import { useCompanyWorkspace } from '@/hooks / useCompanyWorkspace';
export /**
 * AdminHeader - Function description
 */
function AdminHeader() {
  const { user } = use_auth ();
  const { company } = useCompanyWorkspace ();
;
  return (
    <div className="space - y-4">;
      <div className="flex items - center justify - between">;
        <div>;
          <h1 className="text - 3xl font - bold tracking - tight">Enterprise Admin Dashboard</h1>;
          <p className="text - muted - foreground mt - 1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items - center gap - 2">;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Settings className="h - 4 w - 4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 2">;
            <Download className="h - 4 w - 4" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          </Button>;"
          <Button variant="outline" size="sm" className="gap-2">;"
            <Download className="h-4 w-4" />;





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            Export Data;
          </Button>;
        </div>;
      </div>;


<<<<<<< HEAD
}
=======
}
;
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
=======
            <Download className="h-4 w-4" />;            Export Data;
          </Button>;
        </div>;
      </div>;
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <Download className="h-4 w-4" />;            Export Data;
          </Button>;
        </div>;
      </div>;
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;

}
      ;"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Subscription Plan</div>;"
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>;
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Team Members</div>;"
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>;
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>;"
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>;
        </div>;
      </div>;"
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;"
              src={company?.logoUrl || "/placeholder.svg"} ;"
              alt={company?.name || "Company"} ;"
              className="max-h-10 max-w-10";
            />;
          </div>;
          <div>;"
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;"
            <p className="text-sm text-muted-foreground">;"
              Workspace URL: {company?.workspaceUrl || "loading..."}
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
