
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",

interface ReferralTableProps {

  referrals: Referral[]

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges

  const renderStatusBadge = (status: ReferralStatus) => {

      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,
      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null
    }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }
  if (referrals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground mb-2">No referrals yet</p>
        <p className="text-sm text-muted-foreground">
          Share your referral link with friends and colleagues to start earning rewards
        </p>
      </div>
    )

                : '-'}
            </TableCell>
            <TableCell>{referral.completed_at ? formatDate(referral.completed_at) : '-'}</TableCell>
            <TableCell>
              {referral.reward_issued ? (
                <Badge className="bg-green-50 text-green-800 border-green-200">
                  Issued
                </Badge>
              ) : referral.status === 'completed' ? (
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">
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