


import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {ReferralReward} from "@/types/referrals";""
import {formatDate} from "@/utils/referralUtils";""
import {BadgeDollarSign, Badge} from "lucide-react";""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { ReferralReward } from "@/types/referrals",""
import { formatDate } from "@/utils/referralUtils",""
import { BadgeDollarSign, Badge } from "lucide-react","
interface RewardsCardProps {
  // TODO: Implement
}
  rewards: ReferralReward[];,
  isLoading: boolean;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
import {
  // TODO: Implement
  // TODO: Implement
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { BadgeDollarSign, Badge  } from './lucide-react';
  // TODO: Implement
  is_loading: boolean;
export /**
 * RewardsCard - Function description;
 */
function RewardsCard() {
  // Check condition;
if ( {) {
  $2;
    return (
      <Card>

        <CardHeader>

          <CardTitle className="flex items-center gap-2">"
"
            <BadgeDollarSign className="h-5 w-5" />"

          
          <CardDescription>

          
        
        <CardContent>
          <div className="flex items-center justify-center p-4">"
</div>"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>
        
      


          

          
        
          <div className="flex flex-col items-center justify-center p-4 text-center">"
            <p className="text-muted-foreground">No rewards yet</p>""
            <p className="text-sm text-muted-foreground mt-1">"
</p>
        
      


        

        
      
        <div className="space-y-4">"
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${"
                index !== rewards.length - 1 ? "border-b pb-3" : """`;
              }`}
            >
              <div>
                <div className="flex items-center gap-2">"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />"
                    <Badge className="h-4 w-4 text-blue-600" />"
                  <p className="font-medium">"
                <p className="text-xs text-muted-foreground mt-1">"
                </p>"
                  <p className="text-xs text-muted-foreground">"
      
    
      <Card>;

        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;"
            <BadgeDollarSign className="h-5 w-5" />;"

          ;
          <CardDescription>Rewards earned from successful referrals;
        <CardContent>;
          <div className="flex items-center justify-center p-4">;"
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;"
          </div>;


          <div className="flex flex-col items-center justify-center p-4 text-center">;"
            <p className="text-muted-foreground">No rewards yet</p>;""
            <p className="text-sm text-muted-foreground mt-1">;"
            </p>;

          <CardTitle className="flex items - center gap - 2">;"
            <BadgeDollarSign className="h - 5 w - 5" />;"

          <CardDescription>;

          <div className="flex flex - col items - center justify - center p - 4 text - center">;"
            <p className="text - muted - foreground">No rewards yet</p>;""
            <p className="text - sm text - muted - foreground mt - 1">;"
        ;)
      );



        <div className="space - y-4">;"

              key={reward.id}`;
              className={`flex justify - between items - start ${"
                index !== rewards.length - 1 ? "border - b pb - 3" : "";"`;
            >;
              <div>;
                <div className="flex items - center gap - 2">;"
                    <BadgeDollarSign className="h - 4 w - 4 text - green - 600" />) : ("
)"
                    <Badge className="h - 4 w - 4 text - blue - 600" />)}"
                  <p className="font - medium">;"
                </div>;"
                <p className="text - xs text - muted - foreground mt - 1">;"


        <div className="space-y-4">;"
              key={reward && reward.id}`;
                index !== rewards && rewards.length - 1 ? "border-b pb-3" : """`;
              }`}>;
                <div className="flex items-center gap-2">;"
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;"
                    <Badge className="h-4 w-4 text-blue-600" />;"
                  <p className="font-medium">;"
                <p className="text-xs text-muted-foreground mt-1">;"
                </p>;"
                  <p className="text-xs text-muted-foreground">;"
    ;"`;