import { Gift } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function PointsBadge() {
  const { balance, loading } = usePoints();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/wallet"
            title="View wallet"
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Gift className="h-4 w-4" />
            <span>{`${points} pts`}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-medium">Point Breakdown</p>
          <ul className="text-xs mt-1 space-y-0.5">
            <li>Purchases: {breakdown.purchase}</li>
            <li>Posts: {breakdown.post}</li>
            <li>Referrals: {breakdown.referral}</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
