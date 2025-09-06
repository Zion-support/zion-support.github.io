<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx


<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function CurrentSubscription() {
  // Mock subscription data

  const subscription = {

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;
    plan: "Business",;
    status: "active",;
    billingCycle: "Annual",;
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1,999 && 999.00";
    teamSeats: {;
      used: 32,;
      total: 50;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx

    }
  }
=======

    plan: "Business",
    status: "active",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
=======
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function CurrentSubscription() {
  // Mock subscription data

  const subscription = {
<<<<<<< HEAD
    plan: "Business"
    status: "active"
    billingCycle: "Annual"
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1,999.00";
=======
    plan: "Business",
    status: "active",
<<<<<<< HEAD
    billingCycle: "Annual",;
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1,999.00";
=======
    billingCycle: "Annual",
    startDate: "May 1, 2025",
    nextBillingDate: "May 1, 2026",
    amount: "$1,999.00",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    teamSeats: {
      used: 32
      total: 50
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Current Subscription</CardTitle>
          <Badge variant="outline" className="bg-green-500 text-white">Active</Badge>
        </div>
        <CardDescription>Your subscription details and plan information</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Plan</p>
            <p className="text-lg font-bold">{subscription.plan}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Billing Cycle</p>
            <p className="text-lg">{subscription.billingCycle}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Amount</p>
            <p className="text-lg">{subscription.amount} per year</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Start Date</p>
            <p className="text-lg">{subscription.startDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Next Billing Date</p>
            <p className="text-lg">{subscription.nextBillingDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>
            <p className="text-lg">
              {subscription.teamSeats.used} / {subscription.teamSeats.total} used
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-muted p-4 mt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Annual discount applied</div>
              <div className="text-sm font-medium text-green-600">Save 20%</div>
            </div>
            <div className="text-xs text-muted-foreground">
              You're saving $4,797.60 per year with annual billing.
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Change Plan</Button>
        <Button variant="destructive">Cancel Subscription</Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD

=======

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    }
  }
  return (
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;
    plan: "Business",;
    status: "active",;
    billingCycle: "Annual",;
    startDate: "May 1, 2025",;
    nextBillingDate: "May 1, 2026",;
    amount: "$1,999.00",;
    teamSeats: {;
      used: 32;
      total: 50;
    }
  };
  return (;
<<<<<<< HEAD

========
;
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;
    plan:"Business",;
    status:"active",;
    billingCycle:"Annual",;
    startDate:"May 1, 2025",;
    nextBillingDate:"May 1, 2026",;
    amount:"$1,999.00",;
    teamSeats:{;
      used:32,;
      total:50;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <CardTitle>Current Subscription</CardTitle>;
          <Badge variant="outline" className="bg-green-500 text-white">Active</Badge>;
        </div>;
        <CardDescription>Your subscription details and plan information</CardDescription>;
      </CardHeader>;
      <CardContent className="grid gap-6">;
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Plan</p>;
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-lg font-bold">{subscription && subscription.plan}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Billing Cycle</p>;
            <p className="text-lg">{subscription && subscription.billingCycle}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Amount</p>;
            <p className="text-lg">{subscription && subscription.amount} per year</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Start Date</p>;
            <p className="text-lg">{subscription && subscription.startDate}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Next Billing Date</p>;
            <p className="text-lg">{subscription && subscription.nextBillingDate}</p>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <p className="text-lg font-bold">{subscription.plan}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Billing Cycle</p>;
            <p className="text-lg">{subscription.billingCycle}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Amount</p>;
            <p className="text-lg">{subscription.amount} per year</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Start Date</p>;
            <p className="text-lg">{subscription.startDate}</p>;
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Next Billing Date</p>;
            <p className="text-lg">{subscription.nextBillingDate}</p>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>;
            <p className="text-lg">;
<<<<<<< HEAD
<<<<<<< HEAD
              {subscription && subscription.teamSeats.used} / {subscription && subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {subscription.teamSeats.used} / {subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="rounded-lg bg-muted p-4 mt-4">;
          <div className="space-y-2">;
            <div className="flex items-center justify-between">;
              <div className="text-sm font-medium">Annual discount applied</div>;
              <div className="text-sm font-medium text-green-600">Save 20%</div>;
            </div>;
            <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
              You're saving $4,797 && 797.60 per year with annual billing.;
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
export /**
 * CurrentSubscription - Function description
 */
function CurrentSubscription() {
  // Mock subscription data;
  const subscription = {
    plan: "Business",
    status: "active",
    billing_cycle: "Annual",
    start_date: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1, 999.00";
    team_seats: {
      used: 32,
      total: 50;
    }
  }
;
  return (
    <Card>;
      <CardHeader>;
        <div className="flex items - center justify - between">;
          <CardTitle > Current Subscription</CardTitle>;
          <Badge variant="outline" className="bg - green - 500 text - white">Active</Badge>;
        </div>;
        <CardDescription > Your subscription details and plan information</CardDescription>;
      </CardHeader>;
      <CardContent className="grid gap - 6">;
        <div className="grid grid - cols - 1 gap - 4 md:grid - cols - 2 lg:grid - cols - 3">;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Plan</p>;
            <p className="text - lg font - bold">{subscription.plan}</p>;
          </div>;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Billing Cycle</p>;
            <p className="text - lg">{subscription.billing_cycle}</p>;
          </div>;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Amount</p>;
            <p className="text - lg">{subscription.amount} per year</p>;
          </div>;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Start Date</p>;
            <p className="text - lg">{subscription.start_date}</p>;
          </div>;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Next Billing Date</p>;
            <p className="text - lg">{subscription.nextBillingDate}</p>;
          </div>;
          <div className="space - y-1">;
            <p className="text - sm font - medium leading - none text - muted - foreground">Team Seats</p>;
            <p className="text - lg">;
              {subscription.team_seats.used} / {subscription.team_seats.total} used;
            </p>;
          </div>;
        </div>;
        <div className="rounded - lg bg - muted p - 4 mt - 4">;
          <div className="space - y-2">;
            <div className="flex items - center justify - between">;
              <div className="text - sm font - medium">Annual discount applied</div>;
              <div className="text - sm font - medium text - green - 600">Save 20%</div>;
            </div>;
            <div className="text - xs text - muted - foreground">;
              You're saving $4, 797.60 per year with annual billing.;
=======
              You're saving $4,797.60 per year with annual billing.;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              You're saving $4,797.60 per year with annual billing.;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
      <CardFooter className="flex justify - between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
<<<<<<< HEAD
    </Card>;
  );

}
;

=======
    </Card>);
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardFooter className="flex justify-between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  ),; export function CurrentSubscription () {
  //Mock subscription data const subscription = {
  plan: "Business";
status: "active";
billingCycle: "Annual";
startDate: "May 1, 2025";
nextBillingDate: "May 1, 2026";
amount: "$1, 999.00";
teamSeats: {
  used: 32;
total: 50 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
flex items-center justify-between"> <CardTitle>Current Subscription</CardTitle> <Badge variant=" outline"className=" bg-green-500 text-white">Active</Badge> </div> <CardDescription>Your subscription details and plan information</CardDescription> </CardHeader> </p> </div> </div> <div className=" rounded-lg bg-muted p-4 mt-4"> <div className=" space-y-2"> <div className=" flex items-center justify-between"> <div className=" text-sm font-medium">Annual discount applied</div> <div className=" text-sm font-medium text-green-600">Save 20%</div> </div> <div className=" text-xs text-muted-foreground"> You're saving $4, 797.60 per year with annual billing. </div> </div> </div> </CardContent> <CardFooter className=" flex justify-between"> <Button variant=" outline">Change Plan</Button> <Button variant=" destructive" >Cancel Subscription</Button> </CardFooter> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/CurrentSubscription.tsx
=======
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
