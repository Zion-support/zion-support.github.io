
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
                )}

        <div className='space - y-4'>          {rewards.map ((reward, index) => (
            <div;
              key={reward.id}
        <div className="space - y-4">;
          {rewards.map ((reward, index, ) => (
            <div;
              key = {reward.id, }
              className={`flex justify - between items - start ${
                index !== rewards.length - 1 ? 'border - b pb - 3' : '';
              }`}
            >;
              <div>;
                <div className='flex items - center gap - 2'>;
                  {reward.reward_type === 'credit' ? (
                    <BadgeDollarSign className='h - 4 w - 4 text - green - 600' />) : (
                    <Badge className='h - 4 w - 4 text - blue - 600' />)}
                  <p className='font - medium'>                    {reward.reward_type === 'credit'                  <p className="font - medium">;
                    {reward.reward_type === 'credit';
                      ? `$${reward.amount?.to_fixed (2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
                <p className='text - xs text - muted - foreground mt - 1'>;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className='text - xs text - muted - foreground'>                    Expires on {format_date (reward.expires_at)}                <p className="text - xs text - muted - foreground mt - 1">;
                  Earned on {format_date (reward.created_at)}
                </p>;
                {reward.expires_at && (
                  <p className="text - xs text - muted - foreground">;
                  </p>)}
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
}
;
