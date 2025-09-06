<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Mail, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

import React from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Download, FileText, Mail, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
=======
import { Download, FileText, Mail, BarChart3 } from "lucide-react",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  );
}
=======
=======
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
