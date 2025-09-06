

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge",
import { formatDate } from "@/utils/referralUtils",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface ReferralTableProps {

  referrals: Referral[]

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges

  const renderStatusBadge = (status: ReferralStatus) => {
    switch (status) {;

      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,

      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null

      case "expired":;
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,;
      default:;
        return null;

    }
  }
  },

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }

  if (isLoading) {;
    return (

      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground mb-2">No referrals yet</p>
        <p className="text-sm text-muted-foreground">
          Share your referral link with friends and colleagues to start earning rewards
        </p>
      </div>
    )

  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>User Type</TableHead>
          <TableHead>Completed On</TableHead>
          <TableHead>Reward</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {referrals.map((referral) => (
          <TableRow key={referral.id}>
            <TableCell>{formatDate(referral.created_at)}</TableCell>
            <TableCell>{referral.email |'-'}</TableCell>
            <TableCell>{renderStatusBadge(referral.status)}</TableCell>
            <TableCell>


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Referral, ReferralStatus } from "@/types/referrals",;
import { Badge } from "@/components/ui/badge",;
import { formatDate } from "@/utils/referralUtils",;
interface ReferralTableProps {;
  referrals: Referral[],;
  isLoading: boolean;
}
;
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {;
    switch (status) {;
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,;
      case "expired":;
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>;
      default:;
        return null;
    }
  };
  if (isLoading) {;
    return (;

      <div className="flex items-center justify-center p-8">;
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    );
  }


  if (referrals && referrals.length === 0) {;

    return (

      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;
        <p className="text-sm text-muted-foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>;
    );
  }



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
                : '-'}
            </TableCell>;
            <TableCell>{referral && referral.completed_at ? formatDate(referral && referral.completed_at) : '-'}</TableCell>;
            <TableCell>;
              {referral && referral.reward_issued ? (;
                <Badge className="bg-green-50 text-green-800 border-green-200">;
                  Issued;
                </Badge>;
              ) : referral && referral.status === 'completed' ? (;
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">;
                  Pending;
                </Badge>;
              ) : (;
                '-';
              )}
            </TableCell>;
          </TableRow>;
        ))}

      </TableBody>;
    </Table>;
  );
}


