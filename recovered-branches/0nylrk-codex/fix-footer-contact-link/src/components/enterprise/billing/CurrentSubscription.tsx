
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

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
  };

  return (
    <Card>
      <CardHeader>
        <div className=&quot;flex items-center justify-between&quot;>
          <CardTitle>Current Subscription</CardTitle>
          <Badge variant=&quot;outline&quot; className=&quot;bg-green-500 text-white&quot;>Active</Badge>
        </div>
        <CardDescription>Your subscription details and plan information</CardDescription>
      </CardHeader>
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
  );
}
