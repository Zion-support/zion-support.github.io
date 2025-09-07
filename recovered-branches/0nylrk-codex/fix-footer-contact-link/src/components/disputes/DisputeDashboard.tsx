
<<<<<<< HEAD
<<<<<<< HEAD

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;


import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useEffect } from "react";"
import { useDisputes } from "@/hooks/useDisputes";"
import { DisputesList } from "./DisputesList";
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

=======

export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);


=======
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

  const { disputes, isLoading, refetch } = useDisputes();
<<<<<<< HEAD
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {
=======
import {} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  useEffect(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;

} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";


export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);


} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export function DisputeDashboard() {

  const { disputes, isLoading, refetch } = useDisputes();



  useEffect(() => {;
    refetch();
  }, [refetch]);

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

  useEffect(() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



  return (


        

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======
  return (

return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
        
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
} from "@/components/ui/card";"
import { Button } from "@/components/ui/button";"
import { ShieldAlert } from "lucide-react";
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Button onClick={refetch} variant="outline">
          Refresh;
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      


      
      
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="container mx-auto p-4 space-y-6">;
=======
"
    <div className="container mx-auto p-4 space-y-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
"
=======
          <CardContent>

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
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;
          <p className="text-muted-foreground">;
            Manage and resolve disputes between clients and talents;
          </p>;
        </div>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>;
        </div>;
        ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Button onClick={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;
<<<<<<< HEAD
"
      <div className="grid gap-4 md:grid-cols-3">;
        <Card>;"
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Open Disputes</span>;

=======

;
      <div className="grid gap-4 md:grid-cols-3">;
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Open Disputes</span>;
              <span className="text-xl font-bold">{openDisputes && openDisputes.length}</span>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<span className="text-xl font-bold">{openDisputes.length}</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;

<<<<<<< HEAD
            <div;
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div"
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{}`
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>"
              <div className="bg-red-600 h-2.5 rounded-full" style={{}`
=======
            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{

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
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card>
=======
          <CardContent>        <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <CardContent>        <Card>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
=======

        <Card>"
          <CardHeader className="pb-2">"
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>

"
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        
        
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
<span className="text-xl font-bold">{underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  width: `${Math && Math.min(100, (openDisputes && openDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
            </div>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD
<<<<<<< HEAD
        <Card>;"
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;

=======
=======
<div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;
              <div className="bg-red-600 h-2.5 rounded-full" style={{ ;
                width:`${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` ;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
        ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;
              <span className="text-xl font-bold">;
                {underReviewDisputes && underReviewDisputes.length}
              </span>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<span className="text-xl font-bold">{underReviewDisputes.length}</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;

<<<<<<< HEAD
            <div;`
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div"
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{}`
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>"
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{}`
=======
            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{

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
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card>
          <CardHeader className="pb-2">
=======

        <Card>"
          <CardHeader className="pb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>

"
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>

=======
        
        
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<span className="text-xl font-bold">{resolvedDisputes.length}</span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
=======

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 
=======
`
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>"
              <div className="bg-green-500 h-2.5 rounded-full" style={{}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

                  width: `${Math && Math.min(100, (underReviewDisputes && underReviewDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
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
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
<<<<<<< HEAD
  )"
import React, { useEffect } from "react",;"
import { useDisputes } from "@/hooks/useDisputes",;"
import { DisputesList } from "./DisputesList",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { ShieldAlert } from "lucide-react",;
export function DisputeDashboard() { return null; }
  const { disputes, isLoading, refetch } = useDisputes(),;
  useEffect(() => {;
    refetch();
  }, [refetch]),;'
  const openDisputes = disputes.filter(d => d.status === 'open'),;'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review');'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved');
  return (;"
    <div className="container mx-auto p-4 space-y-6">;"
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;"
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>;
        </div>;"
        <Button onClick={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;"
      <div className="grid gap-4 md:grid-cols-3">;
        <Card>;"
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Open Disputes</span>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="text-xl font-bold">{openDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
          <CardContent>;`
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;"
              <div className="bg-red-600 h-2.5 rounded-full" style={{;`
=======
          <CardContent>;
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>;
              <div className="bg-red-600 h-2.5 rounded-full" style={{;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
        <Card>;"
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;"
=======
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
<<<<<<< HEAD
          <CardContent>;`
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;"
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;`
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;

        <Card>;"
          <CardHeader className="pb-2">;"
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Resolved</span>;

=======
          <CardContent>;
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;

            </div>;
          </CardContent>;
        </Card>;

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
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Resolved</span>;
              <span className="text-xl font-bold">;
                {resolvedDisputes && resolvedDisputes.length}
              </span>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<span className="text-xl font-bold">{resolvedDisputes.length}</span>;
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

            <div;`
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div"
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{}`
                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';
=======
'
import React, { useEffect } from './react';'
import { use_disputes  } from '@/hooks / use_disputes';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { DisputesList  } from './DisputesList';
import {}
=======

                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';
import { DisputesList  } from './DisputesList';
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
  CardTitle,';
} from '@/components / ui / card';'
import { Button  } from '@/components / ui / button';'
import { ShieldAlert  } from './lucide-react';
export /**;
 * DisputeDashboard - Function description;
 */
function DisputeDashboard() {}
  const { disputes, is_loading, refetch } = use_disputes ();
;
  useEffect (() => {}
    refetch ();
  }, [refetch]);
;"
  const open_disputes = disputes.filter ((d) => d.status === "open");
  const underReviewDisputes = disputes.filter ("
    (d) => d.status === "under_review",
  );"
  const resolved_disputes = disputes.filter ((d) => d.status === "resolved");
;
  return ("
    <div className="container mx - auto p - 4 space - y-6">;"
      <div className="flex flex - wrap items - center justify - between gap - 4">;
        <div>;"
          <h1 className="text - 3xl font - bold">Dispute Resolution Center</h1>;"
          <p className="text - muted - foreground">;
            Manage and resolve disputes between clients and talents;
          </p>;
        </div>;"
        <Button on_click={refetch} variant="outline">;
          Refresh;
        </Button>;
      </div>;"
      <div className="grid gap - 4 md:grid - cols - 3">;
        <Card>;"
          <CardHeader className="pb - 2">;"
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Open Disputes</span>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="text - xl font - bold">{open_disputes.length}</span>;
            </CardTitle>;
            <CardDescription > Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            <div;`
              className={`w - full bg - red - 100 rounded - full h - 2.5 dark:bg - red - 900 / 20`}
            >;
              <div;"
                className="bg - red - 600 h - 2.5 rounded - full";
                style={{}`
=======
            <div;
              className={`w - full bg - red - 100 rounded - full h - 2.5 dark:bg - red - 900 / 20`}
            >;
              <div;
                className="bg - red - 600 h - 2.5 rounded - full";
                style={{
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  width: `${Math.min (100, (open_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
        <Card>;"
          <CardHeader className="pb - 2">;"
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Under Review</span>;"
=======
        <Card>;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Under Review</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="text - xl font - bold">;
                {underReviewDisputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            <div;`
              className={`w - full bg - yellow - 100 rounded - full h - 2.5 dark:bg - yellow - 900 / 20`}
            >;
              <div;"
                className="bg - yellow - 500 h - 2.5 rounded - full";
                style={{}`
=======
            <div;
              className={`w - full bg - yellow - 100 rounded - full h - 2.5 dark:bg - yellow - 900 / 20`}
            >;
              <div;
                className="bg - yellow - 500 h - 2.5 rounded - full";
                style={{
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  width: `${Math.min (100, (underReviewDisputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
        <Card>;"
          <CardHeader className="pb - 2">;"
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Resolved</span>;"
=======
        <Card>;
          <CardHeader className="pb - 2">;
            <CardTitle className="text - lg font - medium flex justify - between items - center">;
              <span > Resolved</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span className="text - xl font - bold">;
                {resolved_disputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD
            <div;`
              className={`w - full bg - green - 100 rounded - full h - 2.5 dark:bg - green - 900 / 20`}
            >;
              <div;"
                className="bg - green - 500 h - 2.5 rounded - full";
                style={{}`
=======
            <div;
              className={`w - full bg - green - 100 rounded - full h - 2.5 dark:bg - green - 900 / 20`}
            >;
              <div;
                className="bg - green - 500 h - 2.5 rounded - full";
                style={{
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  width: `${Math.min (100, (resolved_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;

<<<<<<< HEAD
<<<<<<< HEAD


            </div>;
=======
          <CardContent>            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <CardContent>            </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>;
              <div className="bg-green-500 h-2.5 rounded-full" style={{ ;
                width:`${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` ;
              }}></div>;
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>;
              <div className="bg-green-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          <CardContent>        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </CardContent>;
        </Card>;
      </div>;


<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
<<<<<<< HEAD
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    </div>;
<<<<<<< HEAD
  ),; export function DisputeDashboard () {}
  const {};
  disputes, isLoading, refetch;
}= useDisputes ();
useEffect ( () => {}
  refetch () 
}, [refetch]);'
const openDisputes = disputes.filter (d => d.status === 'open');'
const underReviewDisputes = disputes.filter (d => d.status === 'under review');'
const resolvedDisputes = disputes.filter (d => d.status === 'resolved');"
container mx-auto p-4 space-y-6"> <div className=" flex flex-wrap items-center justify-between gap-4"> <div> <h1 className=" text-3xl font-bold">Dispute Resolution Center</h1> <p className=" text-muted-foreground">Manage and resolve disputes between clients and talents</p> </div> Refresh </Button> </div> <div className=" grid gap-4 md:grid-cols-3"> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Open Disputes</span> </CardTitle> <CardDescription>Awaiting review</CardDescription> </CardHeader> <CardContent> 
}"
}></div> </div> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Under Review</span> </CardTitle> <CardDescription>Being actively processed</CardDescription> </CardHeader> <CardContent> 
}"
}></div> </div> </CardContent> </Card> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center" > <span>Resolved</span> </CardTitle> <CardDescription>Successfully concluded</CardDescription> </CardHeader> <CardContent> 
}
}></div> </div> </CardContent> </Card> </div> <DisputesList disputes= {}
  disputes;
}isLoading= {}
  isLoading;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

container mx-auto p-4 space-y-6"> <div className=" flex flex-wrap items-center justify-between gap-4"> <div> <h1 className=" text-3xl font-bold">Dispute Resolution Center</h1> <p className=" text-muted-foreground">Manage and resolve disputes between clients and talents</p> </div> Refresh  </div> <div className=" grid gap-4 md:grid-cols-3"> <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Open Disputes</span>  <CardDescription>Awaiting review  <CardContent>"
}"
}></div> </div>   <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center"> <span>Under Review</span>  <CardDescription>Being actively processed  <CardContent>"
}></div> </div>   <Card> <CardHeader className=" pb-2"> <CardTitle className=" text-lg font-medium flex justify-between items-center" > <span>Resolved</span>  <CardDescription>Successfully concluded  <CardContent>"

}></div> </div>   </div> <DisputesList disputes= {
  disputes;
}isLoading= {
  isLoading;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}/> </div>) 
}
      <DisputesList disputes={disputes} isLoading={isLoading} />;
    </div>;
  );
}
;
<<<<<<< HEAD


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


    </div>;"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
