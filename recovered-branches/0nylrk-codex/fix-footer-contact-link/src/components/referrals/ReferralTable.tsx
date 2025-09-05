import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge",
import { formatDate } from "@/utils/referralUtils",interface ReferralTableProps {
  referrals: Referral[],
  isLoading: boolean
}

interface ReferralTableProps {_referrals: Referral[];
  isLoading: boolean;}

export function ReferralTable(_{_referrals, _isLoading}: ReferralTableProps) {_// Helper function to render status badges
  const _renderStatusBadge = (_status: ReferralStatus) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,
      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,      default:
        return null
    }
  },

  if (isLoading) {
    return (
      <div className=&quot;flex items-center justify-center p-8&quot;>
        <div className=&quot;h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent&quot; />
      </div>
    )
  }

  if (referrals.length === 0) {
    return (
      <div className=&quot;flex flex-col items-center justify-center p-8 text-center&quot;>
        <p className=&quot;text-muted-foreground mb-2&quot;>No referrals yet</p>
        <p className=&quot;text-sm text-muted-foreground&quot;>
          Share your referral link with friends and colleagues to start earning rewards
        </p>
      </div>
    )
  }
  return (_<Table>
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
        {_referrals.map((referral) => (
          <TableRow key={referral.id}>
            <TableCell>{_formatDate(referral.created_at)}</TableCell>
            <TableCell>{_referral.email || '-'}</TableCell>
            <TableCell>{_renderStatusBadge(referral.status)}</TableCell>
            <TableCell>
              {_referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 
                : '-'}
            </TableCell>
            <TableCell>{_referral.completed_at ? formatDate(referral.completed_at) : '-'}</TableCell>
            <TableCell>
              {referral.reward_issued ? (
                <Badge className=&quot;bg-green-50 text-green-800 border-green-200&quot;>                  Issued
                </Badge>
              ) : referral.status === 'completed' ? (
                <Badge className=&quot;bg-blue-50 text-blue-800 border-blue-200&quot;>
                  Pending
                </Badge>
              ) : (
                '-'
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
