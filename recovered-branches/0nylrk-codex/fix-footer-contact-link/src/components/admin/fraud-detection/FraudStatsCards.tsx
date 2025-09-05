
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",interface FraudStatsCardsProps {
  stats: FraudStats
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
    <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8&quot;>
import React from "react";

interface FraudStatsCardsProps {_stats: FraudStats;}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = (_{_stats}) => {_return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className=&quot;h-5 w-5 text-amber-500&quot; />}        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold text-amber-500&quot;>{stats.suspicious_count}</CardTitle>            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className=&quot;h-5 w-5 text-amber-500&quot; />
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2 flex flex-row items-center justify-between&quot;>
          <div>
            <CardTitle className=&quot;text-2xl font-bold text-red-500&quot;>{stats.dangerous_count}</CardTitle>            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className=&quot;h-5 w-5 text-red-500&quot; />
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.actioned_count}</CardTitle>          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className=&quot;pb-2&quot;>
          <CardTitle className=&quot;text-2xl font-bold&quot;>{stats.false_positives}</CardTitle>          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
},
