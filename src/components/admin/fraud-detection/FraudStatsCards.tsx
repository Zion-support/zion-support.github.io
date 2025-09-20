import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';

interface FraudStats {
  totalTransactions: number;
  flaggedTransactions: number;
  highRiskTransactions: number;
  blockedTransactions: number;
}

interface FraudStatsCardsProps {
  stats: FraudStats;
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  const fraudRate = stats.totalTransactions > 0 
    ? ((stats.flaggedTransactions / stats.totalTransactions) * 100).toFixed(2)
    : '0.00';

  const highRiskRate = stats.totalTransactions > 0 
    ? ((stats.highRiskTransactions / stats.totalTransactions) * 100).toFixed(2)
    : '0.00';

  const blockedRate = stats.totalTransactions > 0 
    ? ((stats.blockedTransactions / stats.totalTransactions) * 100).toFixed(2)
    : '0.00';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
          <ShieldAlert className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardDescription>
          <div className="text-2xl font-bold">{stats.totalTransactions.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">All processed transactions</p>
        </CardDescription>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Flagged Transactions</CardTitle>
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardDescription>
          <div className="text-2xl font-bold text-yellow-600">{stats.flaggedTransactions.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">{fraudRate}% of total</p>
        </CardDescription>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">High Risk</CardTitle>
          <AlertCircle className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardDescription>
          <div className="text-2xl font-bold text-orange-600">{stats.highRiskTransactions.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">{highRiskRate}% of total</p>
        </CardDescription>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Blocked</CardTitle>
          <ShieldAlert className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardDescription>
          <div className="text-2xl font-bold text-red-600">{stats.blockedTransactions.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">{blockedRate}% of total</p>
        </CardDescription>
      </Card>
    </div>
  );
};