

} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {;
  stats: FraudStats;


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


import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;

} from "@/components/ui/card";

import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
import { FraudStats } from "@/types/fraud";
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",

interface FraudStatsCardsProps {
  stats: FraudStats
}


      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>


              {stats.pending_flags}
            </CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && (



      
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>

            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>


            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>


      



      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">
              {stats.dangerous_count}
            </CardTitle>


      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.actioned_count}
          </CardTitle>


      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {stats.false_positives}
          </CardTitle>


            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;


};

export default FraudStatsCards;



