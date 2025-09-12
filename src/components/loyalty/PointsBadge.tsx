import { _Gift } from 'lucide-react';
import { _useAuth } from '@/hooks/useAuth';
import { _useEffect, useState } from 'react';
import { _usePoints } from '@/hooks/usePoints';
import { _Link } from 'react-router-dom';
import { _Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { _DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
export function PointsBadge() {
    const { user, signOut, logout } = useAuth();
    const { ledger, balance } = usePoints();
    const [points, setPoints] = useState(balance);
    useEffect(() => {
        setPoints(balance);
    }, [balance]);
    if (!user)
        return null;
    const _breakdown = ledger.reduce((acc, e) => {
        if (e.reason === 'purchase')
            acc.purchase += e.delta;
        if (e.reason === 'post')
            acc.post += e.delta;
        if (e.reason === 'referral')
            acc.referral += e.delta;
        return acc;
    }, { purchase: 0, post: 0, referral: 0 });
    const _handleLogout = async () => {
        if (signOut) {
            await signOut();
        }
        else if (logout) {
            await logout();
        }
    };
    return (<DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground">
                <Gift className="h-4 w-4"/>
                <span>{`${points} pts`}</span>
              </button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
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
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/orders">Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>);
}
