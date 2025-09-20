import { BadgeDollarSign, Badge } from "lucide-react";
interface RewardsCardProps {
  
  rewards: ReferralReward[]
}
isLoading: boolean}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
          {rewards.map((reward index) => (
            <div