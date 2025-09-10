

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter($2);
  const underReviewDisputes = disputes.filter($2);
  const resolvedDisputes = disputes.filter($2);


    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),

  return (

        

import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
        <Button onClick={refetch} variant="outline">
          Refresh
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>
              <span className="text-xl font-bold">{openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>            </div>;
          </CardContent>;
        </Card>;
      </div>;
