
<<<<<<< HEAD

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;


<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {
<<<<<<< HEAD
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>
        
<<<<<<< HEAD
=======


  return (


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>
              <span className="text-xl font-bold">{openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
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
        <div>;
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
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
=======
            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                style={{
                  width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======

            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
        
        
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
=======
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                style={{
                  width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======

            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
        
        
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>
=======
              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div
              className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}
            >
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{
                  width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
<<<<<<< HEAD
=======

                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  )
import React, { useEffect } from "react",;
import { useDisputes } from "@/hooks/useDisputes",;
import { DisputesList } from "./DisputesList",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from "lucide-react",;
export function DisputeDashboard() {;
  const { disputes, isLoading, refetch } = useDisputes(),;
  useEffect(() => {;
    refetch();
  }, [refetch]),;
  const openDisputes = disputes.filter(d => d.status === 'open'),;
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review');
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved');
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>;
        </div>;
        <Button onClick={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;
      <div className="grid gap-4 md:grid-cols-3">;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Open Disputes</span>;
              <span className="text-xl font-bold">{openDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;
              <div className="bg-red-600 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Resolved</span>;
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
=======
              <span className="text-xl font-bold">;
                {resolvedDisputes && resolvedDisputes.length}
              </span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <span className="text-xl font-bold">;
                {resolvedDisputes && resolvedDisputes.length}
              </span>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';
import { DisputesList  } from './DisputesList';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { ShieldAlert  } from './lucide-react';
export /**
 * DisputeDashboard - Function description
 */
function DisputeDashboard() {
  const { disputes, is_loading, refetch } = use_disputes ();
;
  useEffect (() => {
    refetch ();
  }, [refetch]);
;
  const open_disputes = disputes.filter ((d) => d.status === "open");
  const underReviewDisputes = disputes.filter (
    (d) => d.status === "under_review",
  );
  const resolved_disputes = disputes.filter ((d) => d.status === "resolved");
;
  return (
    <div className="container mx - auto p - 4 space - y-6">;
      <div className="flex flex - wrap items - center justify - between gap - 4">;
        <div>;
          <h1 className="text - 3xl font - bold">Dispute Resolution Center</h1>;
          <p className="text - muted - foreground">;
            Manage and resolve disputes between clients and talents;
          </p>;
        </div>;
        <Button on_click={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;
      <div className="grid gap - 4 md:grid - cols - 3">;
        <Card>;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Open Disputes</span>;
              <span className="text - xl font - bold">{open_disputes.length}</span>;
            </CardTitle>;
            <CardDescription > Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div;
              className={`w - full bg - red - 100 rounded - full h - 2.5 dark:bg - red - 900 / 20`}
            >;
              <div;
                className="bg - red - 600 h - 2.5 rounded - full";
                style={{
                  width: `${Math.min (100, (open_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Under Review</span>;
              <span className="text - xl font - bold">;
                {underReviewDisputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div;
              className={`w - full bg - yellow - 100 rounded - full h - 2.5 dark:bg - yellow - 900 / 20`}
            >;
              <div;
                className="bg - yellow - 500 h - 2.5 rounded - full";
                style={{
                  width: `${Math.min (100, (underReviewDisputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Resolved</span>;
              <span className="text - xl font - bold">;
                {resolved_disputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div;
              className={`w - full bg - green - 100 rounded - full h - 2.5 dark:bg - green - 900 / 20`}
            >;
              <div;
                className="bg - green - 500 h - 2.5 rounded - full";
                style={{
                  width: `${Math.min (100, (resolved_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <DisputesList disputes={disputes} is_loading={is_loading} />;
    </div>);

}
=======
}
;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
