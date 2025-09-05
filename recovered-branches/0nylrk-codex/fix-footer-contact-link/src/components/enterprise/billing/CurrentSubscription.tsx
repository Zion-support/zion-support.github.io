
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function CurrentSubscription() {
  // Mock subscription data
  const subscription = {
    plan: &quot;Business&quot;,
    status: &quot;active&quot;,
    billingCycle: &quot;Annual&quot;,
    startDate: &quot;May 1, 2025&quot;,
    nextBillingDate: &quot;May 1, 2026&quot;,
    amount: &quot;$1,999.00&quot;,
    teamSeats: {
      used: 32,
      total: 50
    }
  },
=======
import React from "react";

export function CurrentSubscription() {_// Mock subscription data
  const _subscription = {
    plan: "Business", _status: "active", _billingCycle: "Annual", _startDate: "May 1, _2025", _nextBillingDate: "May 1, _2026", _amount: "$1, _999.00", _teamSeats: {
      used: 32, _total: 50}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Card>
      <CardHeader>
        <div className=&quot;flex items-center justify-between&quot;>
          <CardTitle>Current Subscription</CardTitle>
          <Badge variant=&quot;outline&quot; className=&quot;bg-green-500 text-white&quot;>Active</Badge>
        </div>
        <CardDescription>Your subscription details and plan information</CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;grid gap-6&quot;>
        <div className=&quot;grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3&quot;>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Plan</p>
            <p className=&quot;text-lg font-bold&quot;>{subscription.plan}</p>
          </div>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Billing Cycle</p>
            <p className=&quot;text-lg&quot;>{subscription.billingCycle}</p>
          </div>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Amount</p>
            <p className=&quot;text-lg&quot;>{subscription.amount} per year</p>
          </div>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Start Date</p>
            <p className=&quot;text-lg&quot;>{subscription.startDate}</p>
          </div>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Next Billing Date</p>
            <p className=&quot;text-lg&quot;>{subscription.nextBillingDate}</p>
          </div>
          <div className=&quot;space-y-1&quot;>
            <p className=&quot;text-sm font-medium leading-none text-muted-foreground&quot;>Team Seats</p>
            <p className=&quot;text-lg&quot;>
              {subscription.teamSeats.used} / {subscription.teamSeats.total} used
=======
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Plan</p>
            <p className="text-lg font-bold">{_subscription.plan}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Billing Cycle</p>
            <p className="text-lg">{_subscription.billingCycle}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Amount</p>
            <p className="text-lg">{_subscription.amount} per year</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Start Date</p>
            <p className="text-lg">{_subscription.startDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Next Billing Date</p>
            <p className="text-lg">{_subscription.nextBillingDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none text-muted-foreground">Team Seats</p>
            <p className="text-lg">
              {_subscription.teamSeats.used} / {_subscription.teamSeats.total} used
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
        </div>
        
        <div className=&quot;rounded-lg bg-muted p-4 mt-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <div className=&quot;text-sm font-medium&quot;>Annual discount applied</div>
              <div className=&quot;text-sm font-medium text-green-600&quot;>Save 20%</div>
            </div>
            <div className=&quot;text-xs text-muted-foreground&quot;>
              You're saving $4,797.60 per year with annual billing.
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className=&quot;flex justify-between&quot;>
        <Button variant=&quot;outline&quot;>Change Plan</Button>
        <Button variant=&quot;destructive&quot;>Cancel Subscription</Button>
      </CardFooter>
    </Card>
  )
}
