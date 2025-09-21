import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react',
interface FraudStats {
  totalTransactions: number,
  flaggedTransactions: number,
  highRiskTransactions: number,
  criticalRiskTransactions: number,
  falsePositives: number,
  accuracy: number, }

interface FraudStatsCardsProps {
  stats: FraudStats, }

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
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
    </div>
  );;
