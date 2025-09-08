<<<<<<< HEAD
Card
=======
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import {} from "@/components/ui/card";
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {
  Card
>>>>>>> origin/cursor/delete-old-data-records-6bba
  CardContent
  CardDescription
  CardHeader
  CardTitle
<<<<<<< HEAD

=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;

export function DisputeDashboard() {
  const { disputes, isLoading, refetch } = useDisputes($2);
  useEffect(() => {
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter($2);
  const underReviewDisputes = disputes.filter($2);
  const resolvedDisputes = disputes.filter($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba


    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),


<<<<<<< HEAD

=======
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
} from "@/components/ui/card";


>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>
<<<<<<< HEAD




=======

      

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>
              <span className="text-xl font-bold">{openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>

<<<<<<< HEAD
          <CardContent>

=======

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="container mx-auto p-4 space-y-6">;

      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
<<<<<<< HEAD


=======

"

>>>>>>> origin/cursor/delete-old-data-records-6bba
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
<<<<<<< HEAD

              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>

=======
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
<span className="text-xl font-bold">{underReviewDisputes.length}</span>
            <div
              className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}
            >
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={
                  width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }
              ></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
<span className="text-xl font-bold">{underReviewDisputes.length}</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  width: `${Math && Math.min(100, (openDisputes && openDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
            </div>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <span className="text-xl font-bold">;
                {underReviewDisputes && underReviewDisputes.length}
              </span>;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;

<<<<<<< HEAD


=======
            <div
              className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}
            >
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={
                  width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }
              ></div>
            </div>
          </CardContent>
        </Card>
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
>>>>>>> origin/cursor/delete-old-data-records-6bba
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Card>
          <CardHeader className="pb-2">

            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>

"
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
<<<<<<< HEAD

              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>

=======
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD



=======
            <div
              className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}
            >
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={
                  width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }
              ></div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 

                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD

=======
          <CardContent>        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>            </div>;
<DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
          <CardContent>;
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;


            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{

<<<<<<< HEAD


                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';

=======

            <div;`
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div"
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{}`
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
            </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </CardContent>;
        </Card>;
      </div>;

<<<<<<< HEAD

}

;

=======

;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
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

}
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  )
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
