
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download, FileText, Mail, BarChart3 } from &quot;lucide-react&quot;;
import { Link } from &quot;react-router-dom&quot;;

export function BillingHeader() {
  return (
    <div className=&quot;space-y-2&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Billing & Invoices</h1>
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-1&quot;>
            <Download className=&quot;h-4 w-4&quot; />
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
  );
}
