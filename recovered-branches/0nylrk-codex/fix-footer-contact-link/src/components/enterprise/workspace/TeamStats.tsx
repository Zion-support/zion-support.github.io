
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import {};
=======

import React from "react";"
import {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card;
  CardContent;
  CardDescription;
  CardHeader;
  CardTitle;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  Card,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
} from "@/components/ui/card";
"
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (
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

import React from "react",
=======
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (import React from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
  return (import React from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
export function TeamStats() { return null; }
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Progress } from "@/components/ui/progress",
export function TeamStats() {}
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Stats</CardTitle>
        <CardDescription>Performance metrics for your team</CardDescription>
      </CardHeader>"
      <CardContent className="space-y-4">"
        <div className="space-y-1.5">"
          <div className="flex items-center justify-between text-sm">
            <span>Team capacity</span>"
            <span className="font-medium">32 / 50 seats used</span>
          </div>"
          <Progress value={64} className="h-2" />"
          <p className="text-xs text-muted-foreground">18 seats available</p>
        </div>

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="pt-4 text-center border-t border-border mt-4">
=======
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>        <div className="pt-4 text-center border-t border-border mt-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>        <div className="pt-4 text-center border-t border-border mt-4">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>

        <div className="pt-4 text-center border-t border-border mt-4">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View Full Analytics
=======

"
        <div className="pt-4 text-center border-t border-border mt-4">";
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
            View Full Analytics;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </button>
        </div>
<<<<<<< HEAD
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
=======
      </CardContent>  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </CardContent>  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      </CardContent>

</Card>
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
  )"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Progress } from "@/components/ui/progress";
export function TeamStats() {;
<<<<<<< HEAD
  return (;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
;
export function TeamStats() {;
  return (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card>;
      <CardHeader>;
        <CardTitle>Team Stats</CardTitle>;
        <CardDescription>Performance metrics for your team</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
<<<<<<< HEAD
        <div className="space-y-1 && 1.5">;
          <div className="flex items-center justify-between text-sm">;
=======
  return (;          <div className="flex items-center justify-between text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (;          <div className="flex items-center justify-between text-sm">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <div className="space-y-1 && 1.5">;
<div className="space-y-1.5">;
        <div className="space-y-1.5">;
          <div className="flex items-center justify-between text-sm">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span>Team capacity</span>;
            <span className="font-medium">32 / 50 seats used</span>;
          </div>;
          <Progress value={64} className="h-2" />;
          <p className="text-xs text-muted-foreground">18 seats available</p>;
        </div>;

=======

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
              <p className="text-xs text-muted-foreground">;
                Interviews this month;
              </p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <p className="text-xl font-bold">24</p>;
            </div>;
          </div>;
        </div>;

<div className="pt-4 text-center border-t border-border mt-4">;
<<<<<<< HEAD
<<<<<<< HEAD
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
<<<<<<< HEAD

            View Full Analytics;
=======
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;            View Full Analytics;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </button>;
        </div>;
      </CardContent>;
);
}
;
    </Card>

    </Card>;
);

}

    </Card>);
}
    </Card>);
}
    </Card>;
  );}
 export function TeamStats() { return null; }
  return (space-y-4"> <div className=" space-y-1.5"> <div className=" flex items-center justify-between text-sm"> <span>Team capacity</span> <span className=" font-medium">32 / 50 seats used</span> </div> <Progress value= {}
  64 "
}className=" h-2"/> <p className=" text-xs text-muted-foreground">18 seats available</p> </div> <div className=" space-y-4 pt-2"> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Active projects</p> <p className=" text-xl font-bold">12</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Job postings</p> <p className=" text-xl font-bold">8</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Avg. time to hire</p> <p className=" text-xl font-bold">14d</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Interviews this month</p> <p className=" text-xl font-bold" >24</p> </div> </div> </div> View Full Analytics </button> </div> </CardContent> </Card>) 
<<<<<<< HEAD
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
  );
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );}  );
=======
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
import React from './react';
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;            View Full Analytics;
          </button>;
        </div>;
      </CardContent>;
  );
}
;
    </Card>

    </Card>;
  );}  );
}
;

import React from "react";"
import {
  // TODO: Implement
}
  Card;
  CardContent;
  CardDescription;
  CardHeader;
  CardTitle;
  Card,
  CardContent,
  CardDescription,
  CardHeader,
"
} from "@/components/ui/card";""
import { Progress } from "@/components/ui/progress";"
export function TeamStats() {;
  return (

        <div className="space-y-4 pt-2">"
</div>"
          <div className="grid grid-cols-2 gap-4">"
            <div className="space-y-1">"
              <p className="text-xs text-muted-foreground">Active projects</p>""
              <p className="text-xl font-bold">12</p>"
              <p className="text-xs text-muted-foreground">Job postings</p>""
              <p className="text-xl font-bold">8</p>"
              <p className="text-xs text-muted-foreground">Avg. time to hire</p>""
              <p className="text-xl font-bold">14d</p>"
              <p className="text-xs text-muted-foreground">"
</p>
    <Card>

      <CardHeader>

        <CardTitle>Team Stats
        <CardDescription>Performance metrics for your team
      <CardContent className="space-y-4">"
        <div className="space-y-1.5">"
          <div className="flex items-center justify-between text-sm">"
</div>
            <span>Team capacity</span>"
            <span className="font-medium">32 / 50 seats used</span>"
          <Progress value={64} className="h-2" />"
          <p className="text-xs text-muted-foreground">18 seats available</p>"

              <p className="text-xl font-bold">24</p>"

        <div className="pt-4 text-center border-t border-border mt-4">"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">"
</button>
    <Card>;

      <CardHeader>;

        ;
        <div className="pt-4 text-center border-t border-border mt-4">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
        <div className="pt-4 text-center border-t border-border mt-4">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
            View Full Analytics;
          </button>;
        </div>;
      </CardContent>;

    </Card>

    </Card>;
  );
</Card>);
}
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
    </Card>;
  );
}
;
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  );
}
;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardTitle>Team Stats;
        <CardDescription>Performance metrics for your team;
      ;"
      <CardContent className="space-y-4">;"
        <div className="space-y-1 && 1.5">;"
          <div className="flex items-center justify-between text-sm">;"
            <span>Team capacity</span>;"
            <span className="font-medium">32 / 50 seats used</span>;"
          </div>;"
          <Progress value={64} className="h-2" />;"
          <p className="text-xs text-muted-foreground">18 seats available</p>;"
        <div className="space-y-4 pt-2">;"
          <div className="grid grid-cols-2 gap-4">;"
            <div className="space-y-1">;"
              <p className="text-xs text-muted-foreground">Active projects</p>;""
              <p className="text-xl font-bold">12</p>;"
              <p className="text-xs text-muted-foreground">Job postings</p>;""
              <p className="text-xl font-bold">8</p>;"
              <p className="text-xs text-muted-foreground">Avg. time to hire</p>;""
              <p className="text-xl font-bold">14d</p>;"
              <p className="text-xs text-muted-foreground">;"
              </p>;"
              <p className="text-xl font-bold">24</p>;"
            </div>;
        <div className="pt-4 text-center border-t border-border mt-4">;"
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;"
          </button>;
      ;

    ;)
    );
  return (space-y-4"> <div className=" space-y-1.5"> <div className=" flex items-center justify-between text-sm"> <span>Team capacity</span> <span className=" font-medium">32 / 50 seats used</span> </div> <Progress value= {"
  64;)"
}className=" h-2"/> <p className=" text-xs text-muted-foreground">18 seats available</p> </div> <div className=" space-y-4 pt-2"> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Active projects</p> <p className=" text-xl font-bold">12</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Job postings</p> <p className=" text-xl font-bold">8</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Avg. time to hire</p> <p className=" text-xl font-bold">14d</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Interviews this month</p> <p className=" text-xl font-bold" >24</p> </div> </div> </div> View Full Analytics </button> </div>  )"
pr-12325
}className=" h-2"/> <p className=" text-xs text-muted-foreground">18 seats available</p> </div> <div className=" space-y-4 pt-2"> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Active projects</p> <p className=" text-xl font-bold">12</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Job postings</p> <p className=" text-xl font-bold">8</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Avg. time to hire</p> <p className=" text-xl font-bold">14d</p> </div> <div className=" space-y-1"> <p className=" text-xs text-muted-foreground">Interviews this month</p> <p className=" text-xl font-bold" >24</p> </div> </div> </div> View Full Analytics </button> </div> </CardContent> </Card>)"
    </Card>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
