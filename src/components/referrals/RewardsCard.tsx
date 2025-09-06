

import { BadgeDollarSign, Badge } from 'lucide-react'
interface RewardsCardProps {

  rewards: ReferralReward[]

  isLoading: boolean
}


    return (
      <Card>
        <CardHeader>

            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    )
  }
  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>

            Your Rewards
          </CardTitle>
          <CardDescription>
            Rewards earned from successful referrals
          </CardDescription>
        </CardHeader>
        <CardContent>

          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>

  }
  return (
    <Card>
      <CardHeader>

          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
