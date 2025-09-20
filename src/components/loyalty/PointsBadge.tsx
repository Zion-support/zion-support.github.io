import React from "react";
import { Gift } from "lucide-react, ";
import { useAuth } from "@/hooks/useAuth, ";
import { useEffect; useState } from "react, ";
import { usePoints } from "@/hooks/usePoints, ";
import { Link } from "react-router-dom, ";
import { Tooltip;
TooltipContent;
TooltipProvider;
TooltipTrigger } from "@/components/ui/tooltip, ";
import { DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger } from "@/components/ui/dropdown-menu, ";
TooltipProvider, TooltipTrigger  } from "@/components/ui/tooltip, ";
import { DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu, ";

export function PointsBadge() {;
const { user; signOut; logout } = useAuth();
const { ledger; balance } = usePoints();
const [points; setPoints] = useState(balance);

useEffect(() => {setPoints(balance)}, [balance]);
useEffect(() => {
setPoints(balance),
}, [balance]);

if (!user) return null;

const breakdown = ledger.reduce(;
(acc; e) => {if (e.reason === "purchase") acc.purchase += e.delta;
if (e.reason === "post") acc.post += e.delta;
if (e.reason === "referral") acc.referral += e.delta;
return acc,
},
{ purchase: 0; post: 0; referral: 0 }
);
const handleLogout = async () => {if (signOut) {;
await signOut()} else if (logout) {await logout()};
const handleLogout = async () => {
if (signOut) {
await signOut(),
} else if (logout) {;
await logout(),;
};
};

return (
<DropdownMenu>;
<TooltipProvider>;
<Tooltip>;
<DropdownMenuTrigger asChild>;
<TooltipTrigger asChild>;
<button;
type="button"
className="flex items-center gap-1 text-xs text-muted-foreground"
>;
<Gift className="h-4 w-4" />;
<span>{`${points} pts`}</span>;
</button>;
</TooltipTrigger>;
</DropdownMenuTrigger>;
<TooltipContent>;
<p className="text-sm font-medium">Point Breakdown</p>;
<ul className="text-xs mt-1 space-y-0.5">;
<li>Purchases: {breakdown.purchase}</li>;
<li>Posts: {breakdown.post}</li>;
<li>Referrals: {breakdown.referral}</li>;
</ul>;
</TooltipContent>;
</Tooltip>;
</TooltipProvider>;
<DropdownMenuContent align="end">;
<DropdownMenuItem asChild>;
<Link to="/profile">Profile</Link>;
</DropdownMenuItem>;
<DropdownMenuItem asChild>;
<Link to="/orders">Orders</Link>;
</DropdownMenuItem>;
<DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>;
</DropdownMenuContent>;
</DropdownMenu>;
);
<<<<<<< HEAD
import React, { useState } from 'react';
import { Gift, RefreshCw } from "lucide-react";
import { GiftRefreshCw } from 'lucide-react';
=======
import React, { useState } from "react";
import { Gift; RefreshCw } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
return (
<TooltipProvider>;
<div className="flex items-center gap-1">;
<Tooltip>;
<TooltipTrigger asChild>;
<Link;
href={isAuthenticated ? "/points" : "#"}
onClick={handleClick}
title={
isAuthenticated ? "View points" : "Earn points by participating";
}
className="flex items-center gap-1 text-xs text-muted-foreground transition-transform active:scale-95"            >
<Gift className="h-4 w-4" aria-hidden="true" />;
<span>{`${points} pts`}</span>;
</Link>;
</TooltipTrigger>;
<TooltipContent>;
{isAuthenticated ? (
<>;
<p className="text-sm font-medium">Point Breakdown</p>;
{points === 0 && (
<p className="text-xs text-muted-foreground">;
You haven"t earned any points yet.;
</p>;
)}
<ul className="text-xs mt-1 space-y-0.5">;
<li>Purchases: {breakdown.purchase}</li>;
<li>Posts: {breakdown.post}</li>;
<li>Referrals: {breakdown.referral}</li>;
</ul>;
<p className="text-xs mt-2 text-muted-foreground border-t pt-1">;
Click to view full rewards program;
</p>;
</>;
) : (
<>;
<p className="text-sm font-medium">Zion Rewards Program</p>;
<p className="text-xs mt-1 text-muted-foreground">;
• Sign up: 50 pts;
<br />;
• First purchase: 100 pts;
<br />;
• Community posts: 25 pts each;
<br />• Refer friends: 200 pts each;
</p>;
<p className="text-xs mt-2 text-muted-foreground border-t pt-1">;
Click to learn more and join!;
</p>;
</>;
)}
</TooltipContent>;
</Tooltip>;
{isAuthenticated && (
<Tooltip>;
<TooltipTrigger asChild>;
<Button;
variant="ghost"
size="sm";
onClick={handleRefresh}
disabled={isRefreshing |loading}
className="p-1 h-6 w-6 text-muted-foreground hover:text-foreground"
aria-label="Refresh points"              >;
<RefreshCw;
className={`h-3 w-3 ${isRefreshing |loading ? "animate-spin" : ""}`}
aria-hidden="true";
/>;
</Button>;
</TooltipTrigger>;
<TooltipContent>;
<p className="text-sm'>Refresh points balance</p>;
</TooltipContent>;
</Tooltip>;
)}
</div>;
{!isAuthenticated && (
<LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
)}
</TooltipProvider>;
)
}
<//DropdownMenu><///DropdownMenu>;