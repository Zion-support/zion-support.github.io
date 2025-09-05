
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, FileText, Mail, BarChart3 } from "lucide-react",;
import { Link } from "react-router-dom",;
;
export function BillingHeader() {;
  return (;
    <div className="space-y-2">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>;
        <div className="flex gap-2">;
          <Button variant="outline" size="sm" className="gap-1">;
            <Download className="h-4 w-4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1">;
            <Mail className="h-4 w-4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link to="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;
      <p className="text-muted-foreground">;
        Manage your subscription, view invoice history, and update payment methods.;
      </p>;
    </div>;
  ),;
}
=======
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, FileText, Mail, BarChart3 } from "lucide-react",
import { Link } from "react-router-dom",export function BillingHeader() {
  return (
    <div className=&quot;space-y-2&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Billing & Invoices</h1>
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-1&quot;>
            <Download className=&quot;h-4 w-4&quot; />
import React from "react";

export function BillingHeader() {_return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-1&quot;>
            <Mail className=&quot;h-4 w-4&quot; />
            Contact Billing Support
          </Button>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-1&quot; asChild>
            <Link to=&quot;/dashboard/client/analytics&quot;>
              <BarChart3 className=&quot;h-4 w-4&quot; />
              Analytics
            </Link>
          </Button>
        </div>
      </div>
      <p className=&quot;text-muted-foreground&quot;>
        Manage your subscription, view invoice history, and update payment methods.
      </p>
    </div>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
