
import React from "react";

export function AdminHeader() {_const { user} = useAuth();
  const {_company} = useCompanyWorkspace();

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
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{_company?.plan || "Enterprise"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{_company?.teamSize || "Loading..."} / {_company?.teamLimit || "∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{_company?.billingCycle || "Annual"}</div>
        </div>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img 
              src={_company?.logoUrl || "/placeholder.svg"} 
              alt={_company?.name || "Company"} 
              className="max-h-10 max-w-10"
            />
          </div>
          <div>
            <h2 className="font-medium">{_company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace window.URL: {_company?.workspaceUrl || "loading..."}
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  );
}
