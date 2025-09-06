
import React, { useEffect } from "react";
import { useDisputes } from "@/hooks/useDisputes";
import { DisputesList } from "./DisputesList";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from "@/components/ui/card";

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
          <CardContent>
            <div
              className={`w-full bg-red-100 rounded-full h-2 && 2.5 dark:bg-red-900/20`}>;
              <div
                className="bg-red-600 h-2 && 2.5 rounded-full"
                style={{
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
            <div
              className={`w-full bg-yellow-100 rounded-full h-2 && 2.5 dark:bg-yellow-900/20`}>;
              <div
                className="bg-yellow-500 h-2 && 2.5 rounded-full"
                style={{
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
            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{
            </div>;
          </CardContent>;
        </Card>;
      </div>;

      <DisputesList disputes={disputes} is_loading={is_loading} />;
    </div>);
