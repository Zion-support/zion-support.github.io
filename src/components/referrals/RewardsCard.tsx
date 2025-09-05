
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { ReferralReward } from &quot;@/types/referrals&quot;;
import { formatDate } from &quot;@/utils/referralUtils&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { BadgeDollarSign, Badge } from 'lucide-react'

interface RewardsCardProps {
  rewards: ReferralReward[],
  isLoading: boolean
}
=======

interface RewardsCardProps {_rewards: ReferralReward[];
  isLoading: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function RewardsCard(_{_rewards, _isLoading}: RewardsCardProps) {_if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BadgeDollarSign className=&quot;h-5 w-5&quot; />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=&quot;flex items-center justify-center p-4&quot;>
            <div className=&quot;h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent&quot; />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (rewards.length === 0) {_return (
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BadgeDollarSign className=&quot;h-5 w-5&quot; />
            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=&quot;flex flex-col items-center justify-center p-4 text-center&quot;>
            <p className=&quot;text-muted-foreground&quot;>No rewards yet</p>
            <p className=&quot;text-sm text-muted-foreground mt-1&quot;>
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <BadgeDollarSign className=&quot;h-5 w-5&quot; />
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <div className=&quot;space-y-4&quot;>
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? &quot;border-b pb-3&quot; : ""
              }`}
=======
        <div className="space-y-4">
          {_rewards.map((reward, _index) => (
            <div 
              key={reward.id}
              className={_`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div>
                <div className="flex items-center gap-2">
                  {_reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />
                  ) : (
                    <Badge className="h-4 w-4 text-blue-600" />
                  )}
                  <p className="font-medium">
                    {_reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {_formatDate(reward.created_at)}
                </p>
                {_reward.expires_at && (
                  <p className="text-xs text-muted-foreground">
                    Expires on {formatDate(reward.expires_at)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
