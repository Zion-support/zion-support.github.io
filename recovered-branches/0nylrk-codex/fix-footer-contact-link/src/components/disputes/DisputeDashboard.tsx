
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from "react",
import { useDisputes } from "@/hooks/useDisputes",
import { DisputesList } from "./DisputesList",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ShieldAlert } from "lucide-react",
=======
import React, { useEffect } from &quot;react&quot;;
import { useDisputes } from &quot;@/hooks/useDisputes&quot;;
import { DisputesList } from &quot;./DisputesList&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ShieldAlert } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function DisputeDashboard() {
  const { disputes, isLoading, refetch } = useDisputes(),

  useEffect(() => {
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),
=======
import React, {_useEffect} from "react";

export function DisputeDashboard() {_const { disputes, _isLoading, _refetch} = useDisputes();

  useEffect__(() => {_refetch();}, [refetch]);

  const _openDisputes = disputes.filter(d => d.status === 'open');
  const _underReviewDisputes = disputes.filter(d => d.status === 'under_review');
  const _resolvedDisputes = disputes.filter(d => d.status === 'resolved');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;container mx-auto p-4 space-y-6&quot;>
      <div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
        <div>
          <h1 className=&quot;text-3xl font-bold&quot;>Dispute Resolution Center</h1>
          <p className=&quot;text-muted-foreground&quot;>Manage and resolve disputes between clients and talents</p>
        </div>
        
<<<<<<< HEAD
        <Button onClick={refetch} variant=&quot;outline&quot;>
=======
        <Button onClick={_refetch} variant="outline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Refresh
        </Button>
      </div>
      
      <div className=&quot;grid gap-4 md:grid-cols-3&quot;>
        <Card>
          <CardHeader className=&quot;pb-2&quot;>
            <CardTitle className=&quot;text-lg font-medium flex justify-between items-center&quot;>
              <span>Open Disputes</span>
<<<<<<< HEAD
              <span className=&quot;text-xl font-bold&quot;>{openDisputes.length}</span>
=======
              <span className="text-xl font-bold">{_openDisputes.length}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <div className={`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className=&quot;bg-red-600 h-2.5 rounded-full&quot; style={{ 
                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
=======
            <div className={_`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(openDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className=&quot;pb-2&quot;>
            <CardTitle className=&quot;text-lg font-medium flex justify-between items-center&quot;>
              <span>Under Review</span>
<<<<<<< HEAD
              <span className=&quot;text-xl font-bold&quot;>{underReviewDisputes.length}</span>
=======
              <span className="text-xl font-bold">{_underReviewDisputes.length}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className=&quot;bg-yellow-500 h-2.5 rounded-full&quot; style={{ 
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
=======
            <div className={_`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(underReviewDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className=&quot;pb-2&quot;>
            <CardTitle className=&quot;text-lg font-medium flex justify-between items-center&quot;>
              <span>Resolved</span>
<<<<<<< HEAD
              <span className=&quot;text-xl font-bold&quot;>{resolvedDisputes.length}</span>
=======
              <span className="text-xl font-bold">{_resolvedDisputes.length}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className=&quot;bg-green-500 h-2.5 rounded-full&quot; style={{ 
                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
=======
            <div className={_`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(resolvedDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <DisputesList disputes={_disputes} isLoading={_isLoading} />
    </div>
  )
}
