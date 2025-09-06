
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { ReferralReward } from '@/types/referrals'
import { formatDate } from '@/utils/referralUtils'


          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />


            Your Rewards
          <CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />


    )


  }
  return (
    <Card>
      <CardHeader>

        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />


}

  }
;
  if (rewards.length === 0) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex-col items-center justify-center p-4 text-center">;
            <p className="text-muted-foreground">No rewards yet</p>;
            <p className="text-sm text-muted-foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );  }    );
  }
  return (

          <div className='flex flex - col items - center justify - center p - 4 text - center'>;
            <p className='text - muted - foreground'>No rewards yet</p>;
            <p className='text - sm text - muted - foreground mt - 1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;
          </CardTitle>;
          <CardDescription > Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex - col items - center justify - center p - 4 text - center">;
            <p className="text - muted - foreground">No rewards yet</p>;
            <p className="text - sm text - muted - foreground mt - 1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>) }    );
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <BadgeDollarSign className='h - 5 w - 5' />;

          Your Rewards;
        </CardTitle>;
        <CardDescription>Rewards earned from successful referrals</CardDescription>;
      </CardHeader>;
      <CardContent>;

              key={reward && reward.id}
        <div className="space-y-4">;
          {rewards && rewards.map((reward, index,) => (;
            <div
              key = {reward && reward.id,}

              className={`flex justify-between items-start ${
                index !== rewards && rewards.length - 1 ? 'border-b pb-3' : ''
              }`}>;
              <div>;
                <div className="flex items-center gap-2">;
                  {reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />;
                  ) : (;
                    <Badge className="h-4 w-4 text-blue-600" />;
                  )}
                  <p className="font-medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.toFixed(2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className='text-xs text-muted-foreground mt-1'>;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className='text-xs text-muted-foreground'>                    Expires on {formatDate(reward && reward.expires_at)}                <p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward && reward.created_at)}
                </p>;
                {reward && reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                  </p>;

    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className="h-4 w-4 text-green-600" />
                  ) : (
                    <Badge className="h-4 w-4 text-blue-600" />
                  )}
                  <p className="font-medium">
                    {reward.reward_type === 'credit'
                      ? `$${reward.amount?.toFixed(2)} Credit`
                      : 'Visibility Boost'}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                    Expires on {formatDate(reward.expires_at)}
                  </p>

