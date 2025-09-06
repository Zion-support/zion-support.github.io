

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

import React from "react";
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

import React from "react";
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (
<<<<<<< HEAD
=======
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Active projects</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Job postings</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Avg. time to hire</p>
              <p className="text-xl font-bold">14d</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                Interviews this month
              </p>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from "react",
=======
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (import React from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
        

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="pt-4 text-center border-t border-border mt-4">
=======
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>        <div className="pt-4 text-center border-t border-border mt-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View Full Analytics
          </button>
        </div>
<<<<<<< HEAD
      </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </Card>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
=======
      </CardContent>  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
<<<<<<< HEAD
  return (;
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
;
export function TeamStats() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card>;
      <CardHeader>;
        <CardTitle>Team Stats</CardTitle>;
        <CardDescription>Performance metrics for your team</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="space-y-1 && 1.5">;
=======
        <div className="space-y-1.5">;
        <div className="space-y-1.5">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="flex items-center justify-between text-sm">;
=======
  return (;          <div className="flex items-center justify-between text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <span>Team capacity</span>;
            <span className="font-medium">32 / 50 seats used</span>;
          </div>;
          <Progress value={64} className="h-2" />;
          <p className="text-xs text-muted-foreground">18 seats available</p>;
        </div>;
              <p className="text-xl font-bold">24</p>;
            </div>;
          </div>;
        </div>;

        <div className="pt-4 text-center border-t border-border mt-4">;
<<<<<<< HEAD
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
<<<<<<< HEAD
=======
=======
import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Progress  } from '@/components / ui / progress';
export /**
 * TeamStats - Function description
 */
function TeamStats() {
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Team Stats</CardTitle>;
        <CardDescription > Performance metrics for your team</CardDescription>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        <div className="space - y-1.5">;
          <div className="flex items - center justify - between text - sm">;
            <span > Team capacity</span>;
            <span className="font - medium">32 / 50 seats used</span>;
          </div>;
          <Progress value={64} className="h - 2" />;
          <p className="text - xs text - muted - foreground">18 seats available</p>;
        </div>;
        <div className="space - y-4 pt - 2">;
          <div className="grid grid - cols - 2 gap - 4">;
            <div className="space - y-1">;
              <p className="text - xs text - muted - foreground">Active projects</p>;
              <p className="text - xl font - bold">12</p>;
            </div>;
            <div className="space - y-1">;
              <p className="text - xs text - muted - foreground">Job postings</p>;
              <p className="text - xl font - bold">8</p>;
            </div>;
            <div className="space - y-1">;
              <p className="text - xs text - muted - foreground">Avg. time to hire</p>;
              <p className="text - xl font - bold">14d</p>;
            </div>;
            <div className="space - y-1">;
              <p className="text - xs text - muted - foreground">;
                Interviews this month;
              </p>;
              <p className="text - xl font - bold">24</p>;
            </div>;
          </div>;
        </div>;
        <div className="pt - 4 text - center border - t border - border mt - 4">;
          <button className="text - sm text - blue - 500 font - medium hover: text - blue - 700">;

=======
        ;
        <div className="pt-4 text-center border-t border-border mt-4">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
        <div className="pt-4 text-center border-t border-border mt-4">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            View Full Analytics;
=======
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;            View Full Analytics;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </button>;
        </div>;
      </CardContent>;
  );
}
;
    </Card>

    </Card>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
=======
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
    </Card>);
}
    </Card>);
}
    </Card>;
  );}
 export function TeamStats () {
  return (space-y-4"> <div className=" space-y-1.5"> <div className=" flex items-center justify-between text-sm"> <span>Team capacity</span> <span className=" font-medium">32 / 50 seats used</span> </div> <Progress value= {
  64 
}className=" h-2"/> <p className=" text-xs text-muted-foreground">18 seats available</p> </div> <div className=" space-y-4 pt-2"> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Active projects</p> <p className=" text-xl font-bold">12</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Job postings</p> <p className=" text-xl font-bold">8</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Avg. time to hire</p> <p className=" text-xl font-bold">14d</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Interviews this month</p> <p className=" text-xl font-bold" >24</p> </div> </div> </div> View Full Analytics </button> </div> </CardContent> </Card>) 
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );}  );
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
