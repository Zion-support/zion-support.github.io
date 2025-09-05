
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from &quot;@/hooks/useCompanyWorkspace&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available
  const { company } = useCompanyWorkspace(),

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Enterprise Admin Dashboard</h1>
          <p className=&quot;text-muted-foreground mt-1&quot;>
            Manage your company's account, team members, and subscription
          </p>
        </div>
        <div className=&quot;flex items-center gap-2&quot;>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-2&quot;>
            <Settings className=&quot;h-4 w-4&quot; />
            Settings
          </Button>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-2&quot;>
            <Download className=&quot;h-4 w-4&quot; />
            Export Data
          </Button>
        </div>
      </div>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Subscription Plan</div>
          <div className=&quot;text-xl font-medium&quot;>{company?.plan || &quot;Enterprise&quot;}</div>
        </div>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Team Members</div>
          <div className=&quot;text-xl font-medium&quot;>{company?.teamSize || &quot;Loading...&quot;} / {company?.teamLimit || &quot;∞&quot;}</div>
        </div>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Billing Cycle</div>
          <div className=&quot;text-xl font-medium&quot;>{company?.billingCycle || &quot;Annual&quot;}</div>
        </div>
      </div>
      
      <div className=&quot;bg-muted/50 rounded-lg p-4 flex items-center justify-between&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;h-12 w-12 rounded-lg bg-card flex items-center justify-center&quot;>
            <img
              src={company?.logoUrl || &quot;/placeholder.svg&quot;}
              alt={company?.name || &quot;Company&quot;}
              className=&quot;max-h-10 max-w-10&quot;
              loading=&quot;lazy&quot;
            />
          </div>
          <div>
            <h2 className=&quot;font-medium&quot;>{company?.name || &quot;Company Name&quot;}</h2>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Workspace URL: {company?.workspaceUrl || &quot;loading...&quot;}
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  )
=======
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
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;
          <p className="text-muted-foreground mt-1">;
            Manage your company's account, team members, and subscription;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="sm" className="gap-2">;
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
            <Download className="h-4 w-4" />;
            Export Data;
          </Button>;
        </div>;
      </div>;
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
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">;
            <img;
              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}
              className="max-h-10 max-w-10";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>;
            <p className="text-sm text-muted-foreground">;
              Workspace URL: {company?.workspaceUrl || "loading..."}
            </p>;
          </div>;
        </div>;
        <Button>Customize Workspace</Button>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;