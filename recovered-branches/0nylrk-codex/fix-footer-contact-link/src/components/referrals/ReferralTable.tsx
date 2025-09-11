


<<<<<<< HEAD
<<<<<<< HEAD
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge",
import { formatDate } from "@/utils/referralUtils",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReferralTableProps {

  referrals: Referral[]

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges

  const renderStatusBadge = (status: ReferralStatus) => {
<<<<<<< HEAD
<<<<<<< HEAD
    switch (status) {;
=======
    switch (status) {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,
<<<<<<< HEAD
=======

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";
interface ReferralTableProps {;
  referrals: Referral[],;
  isLoading: boolean;
}

export function ReferralTable(): any ({ referrals, isLoading }: ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {;
    switch (status) {;

      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;


    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,

      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null
<<<<<<< HEAD
<<<<<<< HEAD
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Referral, ReferralStatus } from "@/types/referrals",;
import { Badge } from "@/components/ui/badge",;
import { formatDate } from "@/utils/referralUtils",;
;
interface ReferralTableProps {;
  referrals:Referral[],;
  isLoading:boolean;
}
;
export function ReferralTable({ referrals, isLoading } ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status:ReferralStatus) => {;
    switch (status) {;
      case "pending":return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "expired":;
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,;
      default:;
        return null;
<<<<<<< HEAD
    }

  },

<<<<<<< HEAD
    }
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
    }
  },;
;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center p-8">;
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    ),;
  }
  }
  if (referrals.length === 0) {
    return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }

  if (isLoading) {;
    return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground mb-2">No referrals yet</p>
        <p className="text-sm text-muted-foreground">
          Share your referral link with friends and colleagues to start earning rewards
        </p>
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

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
              {referral.referred_user_type
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1)
              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex items-center justify-center p-8">;
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (referrals && referrals.length === 0) {;
    return (
;
  if (referrals.length === 0) {;
    return (;
<<<<<<< HEAD
;
  if (referrals.length === 0) {;
    return (;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  if (referrals && referrals.length === 0) {;

    return (
=======
;
  if (referrals.length === 0) {;
    return (;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;
        <p className="text-sm text-muted-foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (;

  return (
;
  if (referrals.length === 0) {;
    return (;
      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;
        <p className="text-sm text-muted-foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>;
    ),;
  }
;
  return (;
;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
;
  return (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Table>;
      <TableHeader>;
        <TableRow>;
          <TableHead>Date</TableHead>;
          <TableHead>Email</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>User Type</TableHead>;
          <TableHead>Completed On</TableHead>;
          <TableHead>Reward</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {referrals && referrals.map((referral) => (;
          <TableRow key={referral && referral.id}>;
            <TableCell>{formatDate(referral && referral.created_at)}</TableCell>;
            <TableCell>{referral && referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral && referral.status)}</TableCell>;
            <TableCell>;

              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              {referral && referral.referred_user_type ;
                ? referral && referral.referred_user_type.charAt(0).toUpperCase() + referral && referral.referred_user_type.slice(1) ;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        {referrals.map((referral) => (;
          <TableRow key={referral.id}>;
            <TableCell>{formatDate(referral.created_at)}</TableCell>;
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral.status)}</TableCell>;
            <TableCell>;
      </TableBody>;
    </Table>;
=======
            </TableCell>;
          </TableRow>;
        ))}

      </TableBody>;
    </Table>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Referral, ReferralStatus } from '@/types / referrals';
import { Badge } from '@/components / ui / badge';
import { format_date } from '@/utils / referral_utils';
interface ReferralTableProps {
  referrals: Referral[],
  is_loading: boolean;
}
export /**
 * ReferralTable - Function description
 */
function ReferralTable() {
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) =>: any {
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg - yellow - 50 text - yellow - 800 border - yellow - 200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg - green - 50 text - green - 800 border - green - 200">Completed</Badge>;
      case "expired":;
        return <Badge variant="outline" className="bg - gray - 50 text - gray - 800 border - gray - 200">Expired</Badge>,
      default:;
        return null;
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex items - center justify - center p - 8">;
        <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex flex - col items - center justify - center p - 8 text - center">;
        <p className="text - muted - foreground mb - 2">No referrals yet</p>;
        <p className="text - sm text - muted - foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>);
  }
  return (
    <Table>;
      <TableHeader>;
        <TableRow>;
          <TableHead > Date</TableHead>;
          <TableHead > Email</TableHead>;
          <TableHead > Status</TableHead>;
          <TableHead > User Type</TableHead>;
          <TableHead > Completed On</TableHead>;
          <TableHead > Reward</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {referrals.map ((referral) => (
          <TableRow key={referral.id}>;
            <TableCell>{format_date (referral.created_at)}</TableCell>;
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge (referral.status)}</TableCell>;
            <TableCell>;
              {referral.referred_user_type;
                ? referral.referred_user_type.char_at (0).toUpperCase () + referral.referred_user_type.slice (1);
                : '-'}
            </TableCell>;
            <TableCell>{referral.completed_at ? format_date (referral.completed_at) : '-'}</TableCell>;
            <TableCell>;
              {referral.reward_issued ? (
                <Badge className="bg - green - 50 text - green - 800 border - green - 200">;
                  Issued;
                </Badge>) : referral.status === 'completed' ? (
                <Badge className="bg - blue - 50 text - blue - 800 border - blue - 200">;
                  Pending;
                </Badge>) : (
                '-')}
            </TableCell>;
          </TableRow>))}
      </TableBody>;
    </Table>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 interface ReferralTableProps {
  referrals: Referral[];
isLoading: boolean 
}referrals, isLoading 
}: ReferralTableProps) {
  //Helper function to render status badges const renderStatusBadge = (status: ReferralStatus) => {
  switch (status) {
  default: return (<Table> <TableHeader> <TableRow> <TableHead>Date</TableHead> <TableHead>Email</TableHead> <TableHead>Status</TableHead> <TableHead>User Type</TableHead> <TableHead>Completed On</TableHead> <TableHead>Reward</TableHead> </TableRow> </TableHeader> <TableBody> {
  referrals.map ( (referral) => (<TableRow key= {
  referral.id 
}> <TableCell> {
  formatDate (referral.created at) 
}</TableCell> <TableCell> {
  referral.email || '-' 
}</TableCell> <TableCell> {
  renderStatusBadge (referral.status) 
}</TableCell> <TableCell> {
  referral.referred user type ? referral.referred user type.charAt (0) .toUpperCase () + referral.referred user type.slice (1) : '-' 
}</TableCell> <TableCell> {
  referral.completed at ? formatDate (referral.completed at) : '-' 
}</TableCell> <TableCell> Issued </Badge>) : referral.status === 'completed' ? (<Badge className="bg-blue-50 text-blue-800 border-blue-200" > Pending </Badge>) : ('-') 
}</TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
}
              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1);
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
