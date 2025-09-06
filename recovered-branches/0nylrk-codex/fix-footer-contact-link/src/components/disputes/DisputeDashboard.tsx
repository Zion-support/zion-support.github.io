<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
<<<<<<< HEAD
export function DisputeDashboard() {;
=======
export function DisputeDashboard() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { disputes, isLoading, refetch } = useDisputes();
<<<<<<< HEAD
  useEffect(() => {
    refetch();
  }, [refetch]);

  const openDisputes = disputes.filter((d) => d.status === "open");
  const underReviewDisputes = disputes.filter(
    (d) => d.status === "under_review"
  );
  const resolvedDisputes = disputes.filter((d) => d.status === "resolved");
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>
<<<<<<< HEAD
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
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
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
=======
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
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
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </div>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD
      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>
  );
}
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
        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Resolved</span>;
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>;
              <div className="bg-green-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      <DisputesList disputes={disputes} isLoading={isLoading} />;
    </div>;
  );
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
