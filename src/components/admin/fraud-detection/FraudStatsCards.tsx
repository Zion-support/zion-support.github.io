import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';

interface FraudStats {
  totalTransactions: number;
  flaggedTransactions: number;
  highRiskTransactions: number;
<<<<<<< HEAD
  criticalRiskTransactions: number;
  falsePositives: number;
  accuracy: number;
=======
  blockedTransactions: number;
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
}

interface FraudStatsCardsProps {
  stats: FraudStats;
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
<<<<<<< HEAD
  const cards = [
    {
      title: "Total Transactions",
      value: stats.totalTransactions.toLocaleString(),
      description: "All processed transactions",
      icon: <ShieldAlert className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Flagged Transactions",
      value: stats.flaggedTransactions.toLocaleString(),
      description: "Transactions flagged for review",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "High Risk",
      value: stats.highRiskTransactions.toLocaleString(),
      description: "High risk transactions detected",
      icon: <AlertCircle className="h-6 w-6" />,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Critical Risk",
      value: stats.criticalRiskTransactions.toLocaleString(),
      description: "Critical risk transactions",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "text-red-800",
      bgColor: "bg-red-100"
    },
    {
      title: "False Positives",
      value: stats.falsePositives.toLocaleString(),
      description: "Incorrectly flagged transactions",
      icon: <AlertCircle className="h-6 w-6" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Accuracy Rate",
      value: `${stats.accuracy.toFixed(1)}%`,
      description: "Overall detection accuracy",
      icon: <ShieldAlert className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-gray-600">
                {card.title}
              </CardTitle>
              <CardDescription className="text-xs text-gray-500">
                {card.description}
              </CardDescription>
            </div>
            <div className={`p-2 rounded-full ${card.bgColor}`}>
              <div className={card.color}>
                {card.icon}
              </div>
            </div>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className={`text-2xl font-bold ${card.color}`}>
              {card.value}
            </div>
          </div>
        </Card>
      ))}
=======
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
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    </div>
  );
};