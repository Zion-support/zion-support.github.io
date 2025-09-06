

import React from "react";
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;

} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
export function TeamStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Stats</CardTitle>
        <CardDescription>Performance metrics for your team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span>Team capacity</span>
            <span className="font-medium">32 / 50 seats used</span>
          </div>
          <Progress value={64} className="h-2" />
          <p className="text-xs text-muted-foreground">18 seats available</p>
        </div>


import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress",
export function TeamStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Stats</CardTitle>
        <CardDescription>Performance metrics for your team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span>Team capacity</span>
            <span className="font-medium">32 / 50 seats used</span>
          </div>
          <Progress value={64} className="h-2" />
          <p className="text-xs text-muted-foreground">18 seats available</p>
        </div>
        

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>

        

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="pt-4 text-center border-t border-border mt-4">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View Full Analytics
          </button>
        </div>
      </CardContent>

    </Card>

    </Card>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
