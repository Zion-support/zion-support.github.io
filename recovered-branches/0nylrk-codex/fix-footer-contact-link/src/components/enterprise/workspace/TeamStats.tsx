
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Progress } from &quot;@/components/ui/progress&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function TeamStats() {
  return (
=======
import React from "react";

export function TeamStats() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Card>
      <CardHeader>
        <CardTitle>Team Stats</CardTitle>
        <CardDescription>Performance metrics for your team</CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <div className=&quot;space-y-1.5&quot;>
          <div className=&quot;flex items-center justify-between text-sm&quot;>
            <span>Team capacity</span>
            <span className=&quot;font-medium&quot;>32 / 50 seats used</span>
          </div>
          <Progress value={64} className=&quot;h-2&quot; />
          <p className=&quot;text-xs text-muted-foreground&quot;>18 seats available</p>
        </div>
        
        <div className=&quot;space-y-4 pt-2&quot;>
          <div className=&quot;grid grid-cols-2 gap-4&quot;>
            <div className=&quot;space-y-1&quot;>
              <p className=&quot;text-xs text-muted-foreground&quot;>Active projects</p>
              <p className=&quot;text-xl font-bold&quot;>12</p>
            </div>
            <div className=&quot;space-y-1&quot;>
              <p className=&quot;text-xs text-muted-foreground&quot;>Job postings</p>
              <p className=&quot;text-xl font-bold&quot;>8</p>
            </div>
            <div className=&quot;space-y-1&quot;>
              <p className=&quot;text-xs text-muted-foreground&quot;>Avg. time to hire</p>
              <p className=&quot;text-xl font-bold&quot;>14d</p>
            </div>
            <div className=&quot;space-y-1&quot;>
              <p className=&quot;text-xs text-muted-foreground&quot;>Interviews this month</p>
              <p className=&quot;text-xl font-bold&quot;>24</p>
            </div>
          </div>
        </div>
        
<<<<<<< HEAD
        <div className="pt-4 text-center border-t border-border mt-4">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
=======
        <div className=&quot;pt-4 text-center border-t border-border mt-4&quot;>
          <button className=&quot;text-sm text-blue-500 font-medium hover:text-blue-700&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            View Full Analytics
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
