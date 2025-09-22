
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",

export function CurrentSubscription() {
  // Mock subscription data

  const subscription = {

import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",

export function CurrentSubscription() {};
  // Mock subscription data;
  const subscription = {}
"
import React from "react";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Badge} from "@/components/ui/badge";
"
    amount: "$1,999 && 999.00";
    teamSeats: {;
      used: 32,;
      total: 50;

    }
  }

"
    plan: "Business","
    status: "active",


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
    amount: "$1,999.00";
    billingCycle: "Annual",
    startDate: "May 1, 2025",
    nextBillingDate: "May 1, 2026",
    amount: "$1,999.00",
    teamSeats: {
      used: 32
      total: 50
    }

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

}
;

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

  return (
}


  },

  return (
  },

  return (

  return (
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

    teamSeats: {}
      used: 32;

import React from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge","
export function CurrentSubscription() {
  // Mock subscription data;
  const subscription = {
"
import React from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";"
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;"
    plan: "Business",;""
    status: "active",;""
    billingCycle: "Annual",;""
    startDate: "May 1, 2025";""
    nextBillingDate: "May 1, 2026";""
    amount: "$1,999 && 999.00";"
    teamSeats: {;,
  used: 32,;
      total: 50;

    }
  }
"
    plan: "Business",""
    status: "active",""
import React from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge","
export function CurrentSubscription() {
  // Mock subscription data;
  const subscription = {"
    plan: "Business"","
  status: "active"""
    billingCycle: "Annual"","
  startDate: "May 1, 2025";""
    nextBillingDate: "May 1, 2026";""
    amount: "$1,999.00";""
    plan: "Business",""
    status: "active",""
    billingCycle: "Annual",;""
    startDate: "May 1, 2025";""
    nextBillingDate: "May 1, 2026";""
    amount: "$1,999.00";""
    billingCycle: "Annual",""
    startDate: "May 1, 2025",""
    nextBillingDate: "May 1, 2026",""
    amount: "$1,999.00","
    teamSeats: {,
  used: 32;
      total: 50;

    }
  return (
  },
  return (
  return (
import React from \"react\";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from \"@/components/ui/card\";
import { Button } from \"@/components/ui/button\",;
import { Badge } from \"@/components/ui/badge\",;
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;
    plan: \"Business\",;
    status: \"active\",;
    billingCycle: \"Annual\",;
    startDate: \"May 1, 2025\",;
    nextBillingDate: \"May 1, 2026\",;
    amount: \"$1,999.00\",;
    teamSeats: {;
      used: 32;}
      total: 50;}
    }
  };
  return (;
          </div>;
          <div className=\"space-y-1\" />;
            <p className=\"text-sm font-medium leading-none text-muted-foreground\" />Team Seats</p>;
            <p className=\"text-lg\" />;
              {subscription && subscription.teamSeats.used} / {subscription && subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;            </div>;
          </div>;
        </div>;
      </CardContent>;}
      <CardFooter className=\"flex justify-between\" />;
        <Button variant=\"outline\" />Change Plan</Button>;
        <Button variant=\"destructive\" />Cancel Subscription</Button>;
      </CardFooter>;
    </Card>);
}
;    </Card>);
      <CardFooter className=\"flex justify-between\" />;
        <Button variant=\"outline\" />Change Plan</Button>;
        <Button variant=\"destructive\" />Cancel Subscription</Button>;
      </CardFooter>;
    </Card>
};
flex items-center justify-between\"> <CardTitle />Current Subscription</CardTitle> <Badge variant=\" outline\"className=\" bg-green-500 text-white\" />Active</Badge> </div> <CardDescription />Your subscription details and plan information</CardDescription> </CardHeader> </p> </div> </div> <div className=\" rounded-lg bg-muted p-4 mt-4\" /> <div className=\" space-y-2\" /> <div className=\" flex items-center justify-between\" /> <div className=\" text-sm font-medium\" />Annual discount applied</div> <div className=\" text-sm font-medium text-green-600\" />Save 20%</div> </div> <div className=\" text-xs text-muted-foreground\" /> You're saving $4, 797.60 per year with annual billing. </div> </div> </div> </CardContent> <CardFooter className=\" flex justify-between\" /> <Button variant=\" outline\" />Change Plan</Button> <Button variant=\" destructive\"  />Cancel Subscription</Button> </CardFooter> </Card>) 
}
  );
}
;
;

  return ("
import React from "react",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;")
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;"
    plan: "Business",;""
    status: "active",;""
    billingCycle: "Annual",;""
    startDate: "May 1, 2025",;""
    nextBillingDate: "May 1, 2026",;""
    amount: "$1,999.00",;"
    teamSeats: {;,
  used: 32;
      total: 50;
    }

  },

  return (

  return (
"
import React from "react",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Badge } from "@/components/ui/badge",;
export function CurrentSubscription() { return null; }
    }
  };
  return (;

          </div>;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>;
            <p className="text-lg">;
              {subscription && subscription.teamSeats.used} / {subscription && subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;

{subscription.teamSeats.used} / {subscription.teamSeats.total} used;
            </p>;
          </div>;
        </div>;
        <div className="rounded-lg bg-muted p-4 mt-4">;
          <div className="space-y-2">;
            <div className="flex items-center justify-between">;
              <div className="text-sm font-medium">Annual discount applied</div>;
              <div className="text-sm font-medium text-green-600">Save 20%</div>;
            </div>;
            <div className="text-xs text-muted-foreground">;
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
        <div className="rounded-lg bg-muted p-4 mt-4">;
          <div className="space-y-2">;
            <div className="flex items-center justify-between">;
              <div className="text-sm font-medium">Annual discount applied</div>;
              <div className="text-sm font-medium text-green-600">Save 20%</div>;
            </div>;"
            <div className="text-xs text-muted-foreground">;

    }
  }

  return (

        <div className="rounded - lg bg - muted p - 4 mt - 4">;
          <div className="space - y-2">;
            <div className="flex items - center justify - between">;
              <div className="text - sm font - medium">Annual discount applied</div>;
              <div className="text - sm font - medium text - green - 600">Save 20%</div>;
            </div>;
            <div className="text - xs text - muted - foreground">;
              You're saving $4, 797.60 per year with annual billing.;
You're saving $4,797.60 per year with annual billing.;
              You're saving $4,797.60 per year with annual billing.;
            </div>;
          </div>;
        </div>;
      </CardContent>;
"
      <CardFooter className="flex justify - between">;"
        <Button variant="outline">Change Plan</Button>;"
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
</Card>;
  );
}
      <CardFooter className="flex justify-between">;

}
      <CardFooter className="flex justify - between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>);
}
;    </Card>);
</Card>);
        </div>;            </div>;
          </div>;
        </div>;
      </CardContent>;}
      <CardFooter className="flex justify-between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>);
}
;    </Card>);
      <CardFooter className="flex justify-between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>
};
flex items-center justify-between"> <CardTitle>Current Subscription</CardTitle> <Badge variant=" outline"className=" bg-green-500 text-white">Active</Badge> </div> <CardDescription>Your subscription details and plan information</CardDescription> </CardHeader> </p> </div> </div> <div className=" rounded-lg bg-muted p-4 mt-4"> <div className=" space-y-2"> <div className=" flex items-center justify-between"> <div className=" text-sm font-medium">Annual discount applied</div> <div className=" text-sm font-medium text-green-600">Save 20%</div> </div> <div className=" text-xs text-muted-foreground"> You're saving $4, 797.60 per year with annual billing. </div> </div> </div> </CardContent> <CardFooter className=" flex justify-between"> <Button variant=" outline">Change Plan</Button> <Button variant=" destructive" >Cancel Subscription</Button> </CardFooter> </Card>) 
}
  );
}
;
;

;

"
import React from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge","
export function CurrentSubscription() {
  // Mock subscription data;
  const subscription = {
"
import React from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";"
export function CurrentSubscription() {;
  // Mock subscription data;
  const subscription = {;"
    plan: "Business",;""
    status: "active",;""
    billingCycle: "Annual",;""
    startDate: "May 1, 2025";""
    nextBillingDate: "May 1, 2026";""
    amount: "$1,999 && 999.00";"
    teamSeats: {;,
  used: 32,;
      total: 50;

    }
    plan: "Business",""
    status: "active",""
  // Mock subscription data;
  const subscription = {"
    plan: "Business"","
  status: "active"""
    billingCycle: "Annual"","
    amount: "$1,999.00";""
    billingCycle: "Annual",""
    startDate: "May 1, 2025",""
    nextBillingDate: "May 1, 2026",""
    amount: "$1,999.00","
    teamSeats: {,
  used: 32;

  },

  return (

  return ("
import React from "react",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;")
  // Mock subscription data;
    startDate: "May 1, 2025",;""
    nextBillingDate: "May 1, 2026",;""
    amount: "$1,999.00",;"
  };
  return (;

    <Card>;

      <CardHeader>;
        <div className="flex items-center justify-between">;"
</div>
          <CardTitle>Current Subscription;"
          <Badge variant="outline" className="bg-green-500 text-white">Active;"
        </div>;
        <CardDescription>Your subscription details and plan information;
      ;"
      <CardContent className="grid gap-6">;"
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">;"
</div>"
          <div className="space-y-1">;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Plan</p>;""
            <p className="text-lg font-bold">{subscription && subscription.plan}</p>;"
          </div>;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Billing Cycle</p>;""
            <p className="text-lg">{subscription && subscription.billingCycle}</p>;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Amount</p>;""
            <p className="text-lg">{subscription && subscription.amount} per year</p>;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Start Date</p>;""
            <p className="text-lg">{subscription && subscription.startDate}</p>;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Next Billing Date</p>;""
            <p className="text-lg">{subscription && subscription.nextBillingDate}</p>;"
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>;""
            <p className="text-lg">;"
</p>
            </p>;
        <div className="rounded-lg bg-muted p-4 mt-4">;"
          <div className="space-y-2">;"
              <div className="text-sm font-medium">Annual discount applied</div>;""
              <div className="text-sm font-medium text-green-600">Save 20%</div>;"
            <div className="text-xs text-muted-foreground">;"

        <div className="flex items - center justify - between">;"
          <CardTitle > Current Subscription;"
          <Badge variant="outline" className="bg - green - 500 text - white">Active;"
        <CardDescription > Your subscription details and plan information;
      <CardContent className="grid gap - 6">;"
        <div className="grid grid - cols - 1 gap - 4 md:grid - cols - 2 lg:grid - cols - 3">;"
          <div className="space - y-1">;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Plan</p>;""
            <p className="text - lg font - bold">{subscription.plan}</p>;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Billing Cycle</p>;""
            <p className="text - lg">{subscription.billing_cycle}</p>;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Amount</p>;""
            <p className="text - lg">{subscription.amount} per year</p>;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Start Date</p>;""
            <p className="text - lg">{subscription.start_date}</p>;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Next Billing Date</p>;""
            <p className="text - lg">{subscription.nextBillingDate}</p>;"
            <p className="text - sm font - medium leading - none text - muted - foreground">Team Seats</p>;""
            <p className="text - lg">;"
        <div className="rounded - lg bg - muted p - 4 mt - 4">;"
          <div className="space - y-2">;"
              <div className="text - sm font - medium">Annual discount applied</div>;""
              <div className="text - sm font - medium text - green - 600">Save 20%</div>;"
            <div className="text - xs text - muted - foreground">;"
      <CardFooter className="flex justify - between">;"
        <Button variant="outline">Change Plan;""
        <Button variant="destructive">Cancel Subscription;"
      ;)
    );
    );"
      <CardFooter className="flex justify-between">;"
      ;
flex items-center justify-between"> <CardTitle>Current Subscription <Badge variant=" outline"className=" bg-green-500 text-white">Active </div> <CardDescription>Your subscription details and plan information  </p> </div> </div> <div className=" rounded-lg bg-muted p-4 mt-4"> <div className=" space-y-2"> <div className=" flex items-center justify-between"> <div className=" text-sm font-medium">Annual discount applied</div> <div className=" text-sm font-medium text-green-600">Save 20%</div> </div> <div className=" text-xs text-muted-foreground"> You're saving $4, 797.60 per year with annual billing. </div> </div> </div>  <CardFooter className=" flex justify-between"> <Button variant=" outline">Change Plan <Button variant=" destructive" >Cancel Subscription  )""
pr-12325
</CardFooter>"
        <Button variant="outline">Change Plan</Button>;""
        <Button variant="destructive">Cancel Subscription</Button>;"
      </CardFooter>;
    </Card>;"
flex items-center justify-between"> <CardTitle>Current Subscription</CardTitle> <Badge variant=" outline"className=" bg-green-500 text-white">Active</Badge> </div> <CardDescription>Your subscription details and plan information</CardDescription> </CardHeader> </p> </div> </div> <div className=" rounded-lg bg-muted p-4 mt-4"> <div className=" space-y-2"> <div className=" flex items-center justify-between"> <div className=" text-sm font-medium">Annual discount applied</div> <div className=" text-sm font-medium text-green-600">Save 20%</div> </div> <div className=" text-xs text-muted-foreground"> You're saving $4, 797.60 per year with annual billing. </div> </div> </div> </CardContent> <CardFooter className=" flex justify-between"> <Button variant=" outline">Change Plan</Button> <Button variant=" destructive" >Cancel Subscription</Button> </CardFooter> </Card>)""

