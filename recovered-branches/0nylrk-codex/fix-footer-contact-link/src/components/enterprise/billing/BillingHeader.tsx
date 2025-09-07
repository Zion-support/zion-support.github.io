
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Download, FileText, Mail, BarChart3 } from "lucide-react",
import { Link } from "react-router-dom",

import React from './react';
import { Button  } from '@/components / ui / button';
import { Download, FileText, Mail, BarChart3  } from './lucide-react';
import { Link  } from './react-router-dom';
export /**
 * BillingHeader - Function description
 */
function BillingHeader() {
  return (
<<<<<<< HEAD
    <div className="space - y-2">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 3xl font - bold tracking - tight">;
          Billing & Invoices;
        </h1>;
        <div className="flex gap - 2">;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Download className="h - 4 w - 4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Mail className="h - 4 w - 4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1" as_child>;
            <Link to="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w - 4" />;

    <div className="space-y-2">;
=======
    <div className="space-y-2">;
      <div className="flex items - center justify-between">;
        <h1 className="text - 3xl font - bold tracking-tight">;
          Billing & Invoices;
        </h1>;
        <div className="flex gap-2">;
          <Button variant="outline" size="sm" className="gap-1">;
            <Download className="h - 4 w-4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1">;
            <Mail className="h - 4 w-4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1" as_child>;
            <Link to="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w-4" />;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold tracking-tight">;
          Billing & Invoices;
        </h1>;
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
<<<<<<< HEAD
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;

      <p className="text - muted - foreground">;
        Manage your subscription, view invoice history, and update payment;
        methods.;
      </p>;
    </div>);

}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import React from "react",
import { Button } from "@/components/ui/button",
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Download, FileText, Mail, BarChart3 } from "lucide-react",
import { Link } from "react-router-dom",
export function BillingHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Mail className="h-4 w-4" />
            Contact Billing Support
          </Button>
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link to="/dashboard/client/analytics">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
          </Button>
        </div>
      </div>
      <p className="text-muted-foreground">
        Manage your subscription, view invoice history, and update payment methods.
      </p>
<<<<<<< HEAD

    </div>
  );
}
    </div>;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  );
}
    </div>
  )
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, FileText, Mail, BarChart3 } from "lucide-react",;
import { Link } from "react-router-dom";
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
  );
}
;
<<<<<<< HEAD


}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
