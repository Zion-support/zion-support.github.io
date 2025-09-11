
import React from './react';
import { Button  } from '@/components / ui / button';
import { Download, FileText, Mail, BarChart3  } from './lucide-react';
import { Link  } from './react-router-dom';
export /**
 * BillingHeader - Function description
 */
function BillingHeader() {
  return (
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;

<<<<<<< HEAD

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Download, FileText, Mail, BarChart3 } from "lucide-react",
import { Link } from "react-router-dom",
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <p className="text - muted - foreground">;
        Manage your subscription, view invoice history, and update payment;
        methods.;
      </p>;
    </div>);

}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    </div>
  );
}
    </div>;
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
}
      <p className="text-muted-foreground">;
        Manage your subscription, view invoice history, and update payment methods.;
      </p>;
    </div>;

  ),;
} export function BillingHeader () {
  return (<div className="space-y-2" > <div className="flex items-center justify-between" > <h1 className="text-3xl font-bold tracking-tight" >Billing & Invoices</h1> <div className="flex gap-2" > <Button variant="outline" size="sm" className="gap-1" > <Download className="h-4 w-4" /> outline"size=" sm"className=" gap-1"> <Mail className=" h-4 w-4"/> Contact Billing Support </Button> <Button variant=" outline"size=" sm"className=" gap-1"asChild> <Link to=" /dashboard/client/analytics"> <BarChart3 className=" h-4 w-4" /> Analytics </Link> </Button> </div> </div> 
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
