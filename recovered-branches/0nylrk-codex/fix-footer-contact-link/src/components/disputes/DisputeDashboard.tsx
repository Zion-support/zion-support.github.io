

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);

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
  useEffect(() => {
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),

  return (


        
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


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
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button onClick={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;
=======            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  width: `${Math && Math.min(100, (openDisputes && openDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
            </div>;
          </CardContent>;
        </Card>;
=======            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
=======            <div
              className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}
            >
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{
                  width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`
                }}
              ></div>
                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======            </div>
          </CardContent>
        </Card>
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      
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
            </div>;
          </CardContent>;
        </Card>;

}
=======
}
;

<<<<<<< HEAD>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
