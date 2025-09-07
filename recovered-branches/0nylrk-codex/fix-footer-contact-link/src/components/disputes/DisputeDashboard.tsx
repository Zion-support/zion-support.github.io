Card
  CardContent
  CardDescription
  CardHeader
  CardTitle

<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import {} from "@/components/ui/card";
=======
=======

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;


<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);

<<<<<<< HEAD
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
<<<<<<< HEAD
export function DisputeDashboard() {
  const { disputes, isLoading, refetch } = useDisputes($2);
  useEffect(() => {
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter($2);
  const underReviewDisputes = disputes.filter($2);
  const resolvedDisputes = disputes.filter($2);
=======
export function DisputeDashboard() {;
export function DisputeDashboard() {
  const { disputes, isLoading, refetch } = useDisputes();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const openDisputes = disputes.filter((d) => d.status === "open");
  const underReviewDisputes = disputes.filter(
    (d) => d.status === "under_review"
  );
  const resolvedDisputes = disputes.filter((d) => d.status === "resolved");

import React, { useEffect } from "react",
import { useDisputes } from "@/hooks/useDisputes",
import { DisputesList } from "./DisputesList",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
export function DisputeDashboard() {
  const { disputes, isLoading, refetch } = useDisputes(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>
<<<<<<< HEAD
=======
        
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

  return (

    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>

} from "@/components/ui/card";

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        <Button onClick={refetch} variant="outline">
          Refresh;
        </Button>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      <div className="grid gap-4 md:grid-cols-3">
        <Card>"
          <CardHeader className="pb-2">"
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>"
              <span className="text-xl font-bold">{openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
<<<<<<< HEAD
=======
          <CardContent>
<<<<<<< HEAD
export function DisputeDashboard() {;
  const { disputes, isLoading, refetch } = useDisputes();
  useEffect(() => {;
    refetch();
  }, [refetch]);
  const openDisputes = disputes && disputes.filter((d) => d && d.status === "open");
  const underReviewDisputes = disputes && disputes.filter(;
    (d) => d && d.status === "under_review",;
  );
  const resolvedDisputes = disputes && disputes.filter((d) => d && d.status === "resolved");
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useEffect } from "react",;
import { useDisputes } from "@/hooks/useDisputes",;
import { DisputesList } from "./DisputesList",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from "lucide-react",;
;
export function DisputeDashboard() {;
  const { disputes, isLoading, refetch } = useDisputes(),;
;
  useEffect(() => {;
    refetch(),;
  }, [refetch]),;
;
  const openDisputes = disputes.filter(d => d.status === 'open'),;
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),;
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="container mx-auto p-4 space-y-6">;

      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
<<<<<<< HEAD
"

=======
<<<<<<< HEAD
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>;
        </div>;
        ;
=======
          <p className="text-muted-foreground">;
            Manage and resolve disputes between clients and talents;
          </p>;
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button onClick={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="grid gap-4 md:grid-cols-3">;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Open Disputes</span>;
<<<<<<< HEAD
              <span className="text-xl font-bold">{openDisputes.length}</span>;
=======
              <span className="text-xl font-bold">{openDisputes && openDisputes.length}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            <div
              className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}
            >
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{
                  width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
=======

<<<<<<< HEAD
=======
            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{ 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
        
        
=======

        <Card>

          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>

            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
<<<<<<< HEAD
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
=======
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
<<<<<<< HEAD
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
<span className="text-xl font-bold">{underReviewDisputes.length}</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  width: `${Math && Math.min(100, (openDisputes && openDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;
              <div className="bg-red-600 h-2.5 rounded-full" style={{ ;
                width:`${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` ;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;
<<<<<<< HEAD
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;
=======
              <span className="text-xl font-bold">;
                {underReviewDisputes && underReviewDisputes.length}
              </span>;
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            <div
              className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}
            >
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{
                  width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
=======

<<<<<<< HEAD
=======
            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
        
        
=======

        <Card>
          <CardHeader className="pb-2">

            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>

"
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
<<<<<<< HEAD
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>
=======
              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>
<<<<<<< HEAD
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;

            <div
              className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}
            >
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{
                  width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
=======

<<<<<<< HEAD
=======
                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 

                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
=======

<<<<<<< HEAD
<DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>

              <span className="text-xl font-bold">{openDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;

                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
<<<<<<< HEAD

=======
          <CardContent>;
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
<<<<<<< HEAD
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ ;
                width:`${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` ;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
        ;
            </div>;
          </CardContent>;
        </Card>;
=======

            </div>;
          </CardContent>;
        </Card>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Resolved</span>;
<<<<<<< HEAD
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
=======
              <span className="text-xl font-bold">;
                {resolvedDisputes && resolvedDisputes.length}
              </span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{

<<<<<<< HEAD
            <div;`
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div"
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{}`
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { DisputesList  } from './DisputesList';
import {}

  Card,
  CardContent,
  CardDescription,
  CardHeader,

              <span className="text - xl font - bold">{open_disputes.length}</span>;
            </CardTitle>;
            <CardDescription > Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (open_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text - xl font - bold">;
                {underReviewDisputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (underReviewDisputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text - xl font - bold">;
                {resolved_disputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (resolved_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
<<<<<<< HEAD
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>;
              <div className="bg-green-500 h-2.5 rounded-full" style={{ ;
                width:`${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` ;
              }}></div>;
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>;
              <div className="bg-green-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
}
;

      ;
      <DisputesList disputes={disputes} isLoading={isLoading} />;
    </div>;
  ),; export function DisputeDashboard () {
  const {
  disputes, isLoading, refetch 
}= useDisputes ();
useEffect ( () => {
  refetch () 
}, [refetch]);
const openDisputes = disputes.filter (d => d.status === 'open');
const underReviewDisputes = disputes.filter (d => d.status === 'under review');
const resolvedDisputes = disputes.filter (d => d.status === 'resolved');
container mx-auto p-4 space-y-6"> <div className=" flex flex-wrap items-center justify-between gap-4"> <div> <h1 className=" text-3xl font-bold">Dispute Resolution Center</h1> <p className=" text-muted-foreground">Manage and resolve disputes between clients and talents</p> </div> Refresh </Button> </div> <div className=" grid gap-4 md:grid-cols-3"> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Open Disputes</span> </CardTitle> <CardDescription>Awaiting review</CardDescription> </CardHeader> <CardContent> 
}
}></div> </div> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Under Review</span> </CardTitle> <CardDescription>Being actively processed</CardDescription> </CardHeader> <CardContent> 
}
}></div> </div> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center" > <span>Resolved</span> </CardTitle> <CardDescription>Successfully concluded</CardDescription> </CardHeader> <CardContent> 
}
}></div> </div> </CardContent> </Card> </div> <DisputesList disputes= {
  disputes 
}isLoading= {
  isLoading 
}/> </div>) 
}
      <DisputesList disputes={disputes} isLoading={isLoading} />;
    </div>;
  );
}
;
=======

}

;

<<<<<<< HEAD
import React, { useEffect } from "react";""
import { useDisputes } from "@/hooks/useDisputes";""
import { DisputesList } from "./DisputesList";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
"
} from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { ShieldAlert } from "lucide-react";"
export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();

  useEffect(() => {;
    refetch();
  }, [refetch]);

export function DisputeDashboard() {;
  useEffect(() => {
  const openDisputes = disputes.filter((d) => d.status === "open");"
  const underReviewDisputes = disputes.filter()"
    (d) => d.status === "under_review""
  );"
  const resolvedDisputes = disputes.filter((d) => d.status === "resolved");""
import React, { useEffect } from "react",""
import { useDisputes } from "@/hooks/useDisputes",""
import { DisputesList } from "./DisputesList",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { ShieldAlert } from "lucide-react","
  const { disputes, isLoading, refetch } = useDisputes(),

    refetch()
  }, [refetch]),
  const openDisputes = disputes.filter(d => d.status === 'open'),
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),
  return (

    <div className="container mx-auto p-4 space-y-6">"
</div>"
      <div className="flex flex-wrap items-center justify-between gap-4">"
</div>
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>""
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>"
        <Button onClick={refetch} variant="outline">"

      <div className="grid gap-4 md:grid-cols-3">"
        <Card>
          <CardHeader className="pb-2">"
            <CardTitle className="text-lg font-medium flex justify-between items-center">"

              <span>Open Disputes</span>"
              <span className="text-xl font-bold">{openDisputes.length}</span>"
            <CardDescription>Awaiting review
          <CardContent>

    <div className="container mx-auto p-4 space-y-6">;"
      <div className="flex flex-wrap items-center justify-between gap-4">;"
        <div>;
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;""
          <p className="text-muted-foreground">;"
</p>
          </p>;
        </div>;"
        <Button onClick={refetch} variant="outline">;"

        ;
      <div className="grid gap-4 md:grid-cols-3">;"
        <Card>;
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;"

              <span>Open Disputes</span>;"
              <span className="text-xl font-bold">{openDisputes && openDisputes.length}</span>;"
            <CardDescription>Awaiting review;
          <CardContent>;

            <div;
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div;"
                className="bg-red-600 h-2 && 2.5 rounded-full""
                style={{

`;
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{")`;
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>

              <span>Under Review</span>"
              <span className="text-xl font-bold">"
</span>
              </span>"
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>"
            <CardDescription>Being actively processed

                }}></div>;
            </div>;

              <span>Under Review</span>;"
              <span className="text-xl font-bold">;"
              </span>;
            <CardDescription>Being actively processed;

            <div;`;
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
                className="bg-yellow-500 h-2 && 2.5 rounded-full""

            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{"`;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 

              <span>Resolved</span>"
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>"
            <CardDescription>Successfully concluded

                }}></div>;`;
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{"`;
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 

>>>>>>> merged-prs-20250907-203621
      <DisputesList disputes={disputes} isLoading={isLoading} />

          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>;"

              <span className="text-xl font-bold">{openDisputes.length}</span>;"
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;
              <div className="bg-red-600 h-2.5 rounded-full" style={{;"`;
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`;

              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;"
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;"`;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;

              <span>Resolved</span>;"
            <CardDescription>Successfully concluded;

              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
                className="bg-green-500 h-2 && 2.5 rounded-full""
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;"
    <div className="container mx - auto p - 4 space - y-6">;"
      <div className="flex flex - wrap items - center justify - between gap - 4">;"
          <h1 className="text - 3xl font - bold">Dispute Resolution Center</h1>;""
          <p className="text - muted - foreground">;"
        <Button on_click={refetch} variant="outline">;"

      <div className="grid gap - 4 md:grid - cols - 3">;"
          <CardHeader className="pb - 2">;"
            <CardTitle className="text - lg font - medium flex justify - between items - center">;"

              <span > Open Disputes</span>;"
              <span className="text - xl font - bold">{open_disputes.length}</span>;"
            <CardDescription > Awaiting review;

              className={`w - full bg - red - 100 rounded - full h - 2.5 dark:bg - red - 900 / 20`}
            >;
                className="bg - red - 600 h - 2.5 rounded - full";"
                style={{`;
                  width: `${Math.min (100, (open_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;

              <span > Under Review</span>;"
              <span className="text - xl font - bold">;"
            <CardDescription > Being actively processed;

              className={`w - full bg - yellow - 100 rounded - full h - 2.5 dark:bg - yellow - 900 / 20`}
                className="bg - yellow - 500 h - 2.5 rounded - full";"
                  width: `${Math.min (100, (underReviewDisputes.length / Math.max (1, disputes.length)) * 100)}%`,

              <span > Resolved</span>;"
            <CardDescription > Successfully concluded;

              className={`w - full bg - green - 100 rounded - full h - 2.5 dark:bg - green - 900 / 20`}
                className="bg - green - 500 h - 2.5 rounded - full";"
                  width: `${Math.min (100, (resolved_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
      <DisputesList disputes={disputes} is_loading={is_loading} />;

    </div>);
      <DisputesList disputes={disputes} isLoading={isLoading} />;

}/> </div>) 
}
      <DisputesList disputes={disputes} isLoading={isLoading} />;
    </div>;
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
