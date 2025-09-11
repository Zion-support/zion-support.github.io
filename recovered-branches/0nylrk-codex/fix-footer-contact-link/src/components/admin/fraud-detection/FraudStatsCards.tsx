
interface FraudStatsCardsProps {
  stats: FraudStats
}


import React from "react";
import {
  Card
  CardHeader
  CardTitle
  CardDescription
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
=======
=======
import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",
interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>
=======
=======interface FraudStatsCardsProps {;
  stats: FraudStats;
=======

interface FraudStatsCardsProps {
  stats: FraudStats}

      


      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
}
import React from './react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components / ui / card';
import { AlertTriangle, AlertCircle, ShieldAlert  } from './lucide-react';
import { FraudStats  } from '@/types / fraud';
interface FraudStatsCardsProps {
  stats: FraudStats;
}
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">;
            {stats.total_flags}
          </CardTitle>;
          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify - between">;
          <div>;
            <CardTitle className="text - 2xl font - bold">;
              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (
      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">
              {stats.suspicious_count}
            </CardTitle>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


=======
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>

=======
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
          </CardTitle>

=======
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.total_flags}
          </CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;=======
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">;
              {stats && stats.pending_flags}
            </CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats && stats.pending_flags > 0 && (;
            <ShieldAlert className="h-5 w-5 text-amber-500" />;
          )}
        </CardHeader>;
      </Card>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">;
              {stats && stats.suspicious_count}
            </CardTitle>;
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",;
import { FraudStats } from "@/types/fraud",;
;
interface FraudStatsCardsProps {;
  stats:FraudStats;
}
;
export const FraudStatsCards:React.FC<FraudStatsCardsProps> = ({ stats }) => {;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">;
              {stats && stats.dangerous_count}
            </CardTitle>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">;
            {stats && stats.false_positives}
          </CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
