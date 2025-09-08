<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
<<<<<<< HEAD

import { Badge } from "@/components/ui/badge",


=======
interface ReferralTableProps {
  referrals: Referral[],
  isLoading: boolean}

  referrals: Referral[]

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges
  const renderStatusBadge = $2;
      case "completed":
        return <Badge variant = $2;
      case "expired":
        return <Badge variant = $2;
      default:
        return null
    }
  },

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface ReferralTableProps {

interface ReferralTableProps {}
  referrals: Referral[]

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges

  const renderStatusBadge = (status: ReferralStatus) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";
interface ReferralTableProps {;
  referrals: Referral[],;

  isLoading: boolean;
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {};
  // Helper function to render status badges;

    switch (status) {;

      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;

    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,

      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "expired":

        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
<<<<<<< HEAD

        return null
=======
        return null;
"
      case "expired":;"
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,;
      default:;
        return null;

      case "expired":

        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

  },

<<<<<<< HEAD


  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )


=======

  if (isLoading) {}
    return ("
      <div className="flex items-center justify-center p-8">"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )


>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

  if (isLoading) {;
    return (


<<<<<<< HEAD

      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-muted-foreground mb-2">No referrals yet</p>

=======
"
      <div className="flex flex-col items-center justify-center p-8 text-center">"
        <p className="text-muted-foreground mb-2">No referrals yet</p>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p className="text-sm text-muted-foreground">
          Share your referral link with friends and colleagues to start earning rewards;
        </p>
      </div>
    )
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;

      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null

case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;

import { formatDate } from "@/utils/referralUtils",;
interface ReferralTableProps {;
  referrals: Referral[],;
  isLoading: boolean;
}
;
export function ReferralTable() { return null; }
    }
  };
  if (isLoading) {;
    return (;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="flex items-center justify-center p-8">;

        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    );
<<<<<<< HEAD

  }

=======


  }

  if (referrals && referrals.length === 0) {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
;
  if (referrals.length === 0) {;
    return (;


<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p className="text-sm text-muted-foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>;
    );
  }
<<<<<<< HEAD

=======

;
  return (;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  return (;

<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


              {referral && referral.referred_user_type ;


=======

        {referrals && referrals.map((referral) => (;
          <TableRow key={referral && referral.id}>;
            <TableCell>{formatDate(referral && referral.created_at)}</TableCell>;
            <TableCell>{referral && referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral && referral.status)}</TableCell>;
            <TableCell>;

              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1);

              {referral && referral.referred_user_type ;

                ? referral && referral.referred_user_type.charAt(0).toUpperCase() + referral && referral.referred_user_type.slice(1) ;


>>>>>>> origin/cursor/delete-old-data-records-6bba
              {referral && referral.referred_user_type ;


                ? referral && referral.referred_user_type.charAt(0).toUpperCase() + referral && referral.referred_user_type.slice(1) ;

                : '-'}
            </TableCell>;'
            <TableCell>{referral && referral.completed_at ? formatDate(referral && referral.completed_at) : '-'}</TableCell>;
            <TableCell>;
              {referral && referral.reward_issued ? (;"
                <Badge className="bg-green-50 text-green-800 border-green-200">;
                  Issued;
                </Badge>;'
              ) : referral && referral.status === 'completed' ? (;"
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">;
                  Pending;
                </Badge>;
              ) : (;'
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Referral, ReferralStatus } from '@/types / referrals';
import { Badge } from '@/components / ui / badge';

import { format_date } from '@/utils / referral_utils';
interface ReferralTableProps {}
  referrals: Referral[],
  is_loading: boolean;
}
export /**;
 * ReferralTable - Function description;
 */
function ReferralTable() {}
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) =>: any {}
    switch (status) {"
      case "pending": return <Badge variant="outline" className="bg - yellow - 50 text - yellow - 800 border - yellow - 200">Pending</Badge>;"
      case "completed":;"
        return <Badge variant="outline" className="bg - green - 50 text - green - 800 border - green - 200">Completed</Badge>;"
      case "expired":;"

        </p>;
      </div>;
    <Table>;

      <TableHeader>;

        <TableRow>;

          <TableHead>Date;
          <TableHead>Email;
          <TableHead>Status;
          <TableHead>User Type;
          <TableHead>Completed On;
          <TableHead>Reward;
        ;
      <TableBody>;

          <TableRow key={referral && referral.id}>;

            <TableCell>{formatDate(referral && referral.created_at)};"
            <TableCell>{referral && referral.email || '-'};
            <TableCell>{renderStatusBadge(referral && referral.status)};
            <TableCell>;

            <TableCell>{referral && referral.completed_at ? formatDate(referral && referral.completed_at) : '-'};

                <Badge className="bg-green-50 text-green-800 border-green-200">;"

                ;"
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">;"

      case "pending": return <Badge variant="outline" className="bg - yellow - 50 text - yellow - 800 border - yellow - 200">Pending;""
        return <Badge variant="outline" className="bg - green - 50 text - green - 800 border - green - 200">Completed;""
        return <Badge variant="outline" className="bg - gray - 50 text - gray - 800 border - gray - 200">Expired,""
      <div className="flex items - center justify - center p - 8">;"
        <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;"
      </div>);"
      <div className="flex flex - col items - center justify - center p - 8 text - center">;"
        <p className="text - muted - foreground mb - 2">No referrals yet</p>;""
        <p className="text - sm text - muted - foreground">;"
      </div>);

          <TableHead > Date;
          <TableHead > Email;
          <TableHead > Status;
          <TableHead > User Type;
          <TableHead > Completed On;
          <TableHead > Reward;

          <TableRow key={referral.id}>;

            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge (referral.status)}</TableCell>;
            <TableCell>;
              {referral.referred_user_type;

                '-')}
            </TableCell>;
          </TableRow>))}
      </TableBody>;
    </Table>);
}

<<<<<<< HEAD



=======

  ),;}
 interface ReferralTableProps {
  referrals: Referral[];
isLoading: boolean 
}referrals, isLoading 
}: ReferralTableProps) {
  //Helper function to render status badges const renderStatusBadge = (status: ReferralStatus) => {
  switch (status) {
  default: return (<Table> <TableHeader> <TableRow> <TableHead>Date</TableHead> <TableHead>Email</TableHead> <TableHead>Status</TableHead> <TableHead>User Type</TableHead> <TableHead>Completed On</TableHead> <TableHead>Reward</TableHead> </TableRow> </TableHeader> <TableBody> {

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
