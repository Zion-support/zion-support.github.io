
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {

=======
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

  const { disputes, isLoading, refetch } = useDisputes();

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>

            </div>
          </CardContent>
        </Card>
      </div>
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{

                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
