
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function CurrentSubscription() {
  // Mock subscription data

  const subscription = {

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD

    plan: "Business",
    status: "active",

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function CurrentSubscription() {
  // Mock subscription data

  const subscription = {
    plan: "Business"
    status: "active"
    billingCycle: "Annual"
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1,999.00";
    plan: "Business",
    status: "active",
    billingCycle: "Annual",;
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
<<<<<<< HEAD
    amount: "$1,999.00";
    billingCycle: "Annual",
    startDate: "May 1, 2025",
    nextBillingDate: "May 1, 2026",
    amount: "$1,999.00",
=======
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;
    plan: "Business",;
    status: "active",;
    billingCycle: "Annual",;
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    amount: "$1,999 && 999.00";
    teamSeats: {;
      used: 32,;
      total: 50;

    }
  }
=======

    plan: "Business",
    status: "active",

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    teamSeats: {
      used: 32
      total: 50
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  },

  return (
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },


  return (



<<<<<<< HEAD
    }
  }
  return (

}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>;
            <p className="text-lg">;
<<<<<<< HEAD
<<<<<<< HEAD
              {subscription.teamSeats.used} / {subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {subscription && subscription.teamSeats.used} / {subscription && subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="rounded-lg bg-muted p-4 mt-4">;
          <div className="space-y-2">;
            <div className="flex items-center justify-between">;
              <div className="text-sm font-medium">Annual discount applied</div>;
              <div className="text-sm font-medium text-green-600">Save 20%</div>;
            </div>;
            <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
              You're saving $4,797.60 per year with annual billing.;
              You're saving $4,797.60 per year with annual billing.;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              You're saving $4,797 && 797.60 per year with annual billing.;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>);
      <CardFooter className="flex justify-between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>;
};
flex items-center justify-between"> <CardTitle>Current Subscription</CardTitle> <Badge variant=" outline"className=" bg-green-500 text-white">Active</Badge> </div> <CardDescription>Your subscription details and plan information</CardDescription> </CardHeader> </p> </div> </div> <div className=" rounded-lg bg-muted p-4 mt-4"> <div className=" space-y-2"> <div className=" flex items-center justify-between"> <div className=" text-sm font-medium">Annual discount applied</div> <div className=" text-sm font-medium text-green-600">Save 20%</div> </div> <div className=" text-xs text-muted-foreground"> You're saving $4, 797.60 per year with annual billing. </div> </div> </div> </CardContent> <CardFooter className=" flex justify-between"> <Button variant=" outline">Change Plan</Button> <Button variant=" destructive" >Cancel Subscription</Button> </CardFooter> </Card>) 
}
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      <CardFooter className="flex justify - between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
