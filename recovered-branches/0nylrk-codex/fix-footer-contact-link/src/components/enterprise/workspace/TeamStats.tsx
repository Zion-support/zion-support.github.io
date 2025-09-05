
<<<<<<< HEAD
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
;
export function TeamStats() {;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Team Stats</CardTitle>;
        <CardDescription>Performance metrics for your team</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="space-y-1.5">;
          <div className="flex items-center justify-between text-sm">;
            <span>Team capacity</span>;
            <span className="font-medium">32 / 50 seats used</span>;
          </div>;
          <Progress value={64} className="h-2" />;
          <p className="text-xs text-muted-foreground">18 seats available</p>;
        </div>;
        ;
        <div className="space-y-4 pt-2">;
          <div className="grid grid-cols-2 gap-4">;
            <div className="space-y-1">;
              <p className="text-xs text-muted-foreground">Active projects</p>;
              <p className="text-xl font-bold">12</p>;
            </div>;
            <div className="space-y-1">;
              <p className="text-xs text-muted-foreground">Job postings</p>;
              <p className="text-xl font-bold">8</p>;
            </div>;
            <div className="space-y-1">;
              <p className="text-xs text-muted-foreground">Avg. time to hire</p>;
              <p className="text-xl font-bold">14d</p>;
            </div>;
            <div className="space-y-1">;
              <p className="text-xs text-muted-foreground">Interviews this month</p>;
              <p className="text-xl font-bold">24</p>;
            </div>;
          </div>;
        </div>;
        ;
        <div className="pt-4 text-center border-t border-border mt-4">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
            View Full Analytics;
          </button>;
        </div>;
      </CardContent>;
    </Card>;
  );
=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress",export function TeamStats() {
  return (
import React from "react";

export function TeamStats() {_return (
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
        
        <div className="pt-4 text-center border-t border-border mt-4">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">            View Full Analytics
          </button>
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
