


import { Badge } from "@/components/ui/badge",





        return null


  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )



      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground mb-2">No referrals yet</p>






  }

      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;





              {referral && referral.referred_user_type ;


        {referrals.map((referral) => (;
          <TableRow key={referral.id}>;
            <TableCell>{formatDate(referral.created_at)}</TableCell>;
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral.status)}</TableCell>;
            <TableCell>;
      </TableBody>;
    </Table>;



