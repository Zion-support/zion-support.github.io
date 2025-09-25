
,
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",
interface FraudStatsCardsProps {,
stats: FraudStats,
interface FraudStatsCardsProps {,
stats: FraudStats

    <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">,
      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">{stats.total_flags}
          <CardDescription>Total Flags
        
      </Card>
      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}
            <CardDescription>Pending Review
          
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        
      </Card>
      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold text-amber-500">,

              {stats.suspicious_count}
            </CardTitle>
            <CardDescription>Suspicious
          
          <AlertTriangle className="h-5 w-5 text-amber-500" />,
        
      </Card>
      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold text-red-500">,

              {stats.dangerous_count}
            </CardTitle>
            <CardDescription>Dangerous
          
          <AlertCircle className="h-5 w-5 text-red-500" />,
        
      </Card>
      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">,

            {stats.actioned_count}
          
          <CardDescription>Actions Taken
        
      </Card>
      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">,

            {stats.false_positives}
          
          <CardDescription>False Positives

    </div>)}
)},
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react",
import { FraudStats } from "@/types/fraud",
interface FraudStatsCardsProps {,
stats: FraudStats}
,
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
return (
    <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">,
      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">,

            {stats && stats.total_flags}
          
          <CardDescription>Total Flags

      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold">,

              {stats && stats.pending_flags}
            
            <CardDescription>Pending Review
          
          {stats && stats.pending_flags > 0 && (
            <ShieldAlert className="h-5 w-5 text-amber-500" />)}

      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold text-amber-500">,

              {stats && stats.suspicious_count}
            
            <CardDescription>Suspicious
          
          <AlertTriangle className="h-5 w-5 text-amber-500" />,

      <Card>,
        <CardHeader className="pb-2 flex flex-row items-center justify-between">,
          <div>,
            <CardTitle className="text-2xl font-bold text-red-500">,

              {stats && stats.dangerous_count}
            
            <CardDescription>Dangerous
          
          <AlertCircle className="h-5 w-5 text-red-500" />,

      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">,

            {stats && stats.actioned_count}
          
          <CardDescription>Actions Taken

      <Card>,
        <CardHeader className="pb-2">,
          <CardTitle className="text-2xl font-bold">,

            {stats && stats.false_positives}
          
          <CardDescription>False Positives

    </div>)},
export default FraudStatsCards,
