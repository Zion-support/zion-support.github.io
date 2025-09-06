import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralStats as ReferralStatsType } from '@/types/referrals';
import { Award, Share, Star, TrendingUp } from 'lucide-react';

interface ReferralStatsProps {
  stats: ReferralStatsType,
  isLoading: boolean
}

export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {
  const statCards = [
    {

        <Card key={i}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (

            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (

              </>

            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}