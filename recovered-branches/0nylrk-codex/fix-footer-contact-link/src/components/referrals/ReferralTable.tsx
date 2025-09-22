<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { formatDate } from "@/utils/referralUtils",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReferralTableProps {
=======

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table","
import { Referral, ReferralStatus } from "@/types/referrals",";
import { Badge } from "@/components/ui/badge";"
import { formatDate } from "@/utils/referralUtils";"
import { Badge } from "@/components/ui/badge","
import { formatDate } from "@/utils/referralUtils",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface ReferralTableProps {}
  referrals: Referral[]
<<<<<<< HEAD
=======
import { formatDate } from "@/utils/referralUtils",

interface ReferralTableProps {

  referrals: Referral[]
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  isLoading: boolean
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges

  const renderStatusBadge = (status: ReferralStatus) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Referral, ReferralStatus} from "@/types/referrals";
import {Badge} from "@/components/ui/badge";
import {formatDate} from "@/utils/referralUtils";
interface ReferralTableProps {;
  referrals: Referral[],;
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  isLoading: boolean;
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {};
  // Helper function to render status badges;
<<<<<<< HEAD
  const renderStatusBadge = (status: ReferralStatus) => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  isLoading: boolean;
}

export function ReferralTable(): any ({ referrals, isLoading }: ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    switch (status) {;

      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;

    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,

      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,

<<<<<<< HEAD
<<<<<<< HEAD
=======
    switch (status) {;
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      case "expired":
=======
  const renderStatusBadge = (status: ReferralStatus) => {}
"
      case "expired":"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null;
"
      case "expired":;"
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,;
      default:;
        return null;

    }

  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  if (isLoading) {}
    return ("
      <div className="flex items-center justify-center p-8">"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )

  }

  if (isLoading) {;
    return (



"
      <div className="flex flex-col items-center justify-center p-8 text-center">"
        <p className="text-muted-foreground mb-2">No referrals yet</p>"
        <p className="text-sm text-muted-foreground">
          Share your referral link with friends and colleagues to start earning rewards;
        </p>
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

=======
=======
              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {referral.referred_user_type
=======

              {referral.referred_user_type;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1)
              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              {referral.referred_user_type 
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1) 

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
=======
import { formatDate } from "@/utils/referralUtils",      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return nullimport { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { formatDate } from "@/utils/referralUtils",      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return nullimport { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
switch (status) {;
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return null

case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Referral, ReferralStatus } from "@/types/referrals",;
import { Badge } from "@/components/ui/badge",;
=======
"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Referral, ReferralStatus } from "@/types/referrals",;"
import { Badge } from "@/components/ui/badge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="flex items-center justify-center p-8">;
=======



"
      <div className="flex items-center justify-center p-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }

=======
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

  if (referrals && referrals.length === 0) {;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
if (referrals && referrals.length === 0) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return (
;
  if (referrals.length === 0) {;
    return (;
<<<<<<< HEAD


"
      <div className="flex flex-col items-center justify-center p-8 text-center">;"
        <p className="text-muted-foreground mb-2">No referrals yet</p>;"
=======
;
  if (referrals.length === 0) {;
    return (;
      <div className="flex flex-col items-center justify-center p-8 text-center">;
        <p className="text-muted-foreground mb-2">No referrals yet</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text-sm text-muted-foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
        </p>;
      </div>;
    );
  }

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
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {referrals && referrals.map((referral) => (;
          <TableRow key={referral && referral.id}>;
            <TableCell>{formatDate(referral && referral.created_at)}</TableCell>;
            <TableCell>{referral && referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral && referral.status)}</TableCell>;
            <TableCell>;

              {referral.referred_user_type;
                ? referral.referred_user_type.charAt(0).toUpperCase() + referral.referred_user_type.slice(1);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


              {referral && referral.referred_user_type ;
=======
{referral && referral.referred_user_type ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                ? referral && referral.referred_user_type.charAt(0).toUpperCase() + referral && referral.referred_user_type.slice(1) ;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


  return (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
=======
=======
        {referrals.map((referral) => (;
          <TableRow key={referral.id}>;
            <TableCell>{formatDate(referral.created_at)}</TableCell>;
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral.status)}</TableCell>;
            <TableCell>;
      </TableBody>;
    </Table>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Referral, ReferralStatus } from '@/types / referrals';
import { Badge } from '@/components / ui / badge';
=======
'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Referral, ReferralStatus } from '@/types / referrals';'
import { Badge } from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
  return (
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

{referrals.map((referral) => (;
          <TableRow key={referral.id}>;
            <TableCell>{formatDate(referral.created_at)}</TableCell>;
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge(referral.status)}</TableCell>;
            <TableCell>;
      </TableBody>;
    </Table>;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Referral, ReferralStatus } from '@/types / referrals';
import { Badge } from '@/components / ui / badge';
import { format_date } from '@/utils / referral_utils';


import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";""
import {Referral, ReferralStatus} from "@/types/referrals";""
import {Badge} from "@/components/ui/badge";""
import {formatDate} from "@/utils/referralUtils";""
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",""
import { Referral, ReferralStatus } from "@/types/referrals",""
import { Badge } from "@/components/ui/badge";""
import { formatDate } from "@/utils/referralUtils";""
import { Badge } from "@/components/ui/badge",""
import { formatDate } from "@/utils/referralUtils","
interface ReferralTableProps {
  // TODO: Implement
}
  referrals: Referral[],
  isLoading: boolean;
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges;
<<<<<<< HEAD
  const renderStatusBadge = (status: ReferralStatus) =>: any {
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg - yellow - 50 text - yellow - 800 border - yellow - 200">Pending</Badge>;
      case "completed":;
        return <Badge variant="outline" className="bg - green - 50 text - green - 800 border - green - 200">Completed</Badge>;
      case "expired":;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        return <Badge variant="outline" className="bg - gray - 50 text - gray - 800 border - gray - 200">Expired</Badge>,
      default:;
        return null;
    }
  }
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex items - center justify - center p - 8">;"
        <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex flex - col items - center justify - center p - 8 text - center">;"
        <p className="text - muted - foreground mb - 2">No referrals yet</p>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text - sm text - muted - foreground">;
          Share your referral link with friends and colleagues to start earning rewards;
=======
  const renderStatusBadge = (status: ReferralStatus) => {
"
import {formatDate} from "@/utils/referralUtils";"
interface ReferralTableProps {;
  referrals: Referral[],;

export function ReferralTable(): any ({ referrals, isLoading }: ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {;
    switch (status) {;
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending;""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed;""
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending,""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed,""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired,;""
      <div className="flex items-center justify-center p-8">"
</div>"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>
      <div className="flex flex-col items-center justify-center p-8 text-center">"
        <p className="text-muted-foreground mb-2">No referrals yet</p>""
        <p className="text-sm text-muted-foreground">"
</p>
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending,;""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed,;""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired;""
      <div className="flex items-center justify-center p-8">;"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;"
      </div>;"
      <div className="flex flex-col items-center justify-center p-8 text-center">;"
        <p className="text-muted-foreground mb-2">No referrals yet</p>;""
        <p className="text-sm text-muted-foreground">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
            <TableCell>{format_date (referral.created_at)}</TableCell>;'
=======
            <TableCell>{format_date (referral.created_at)}</TableCell>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <TableCell>{referral.email || '-'}</TableCell>;
            <TableCell>{renderStatusBadge (referral.status)}</TableCell>;
            <TableCell>;
              {referral.referred_user_type;
<<<<<<< HEAD
                ? referral.referred_user_type.char_at (0).toUpperCase () + referral.referred_user_type.slice (1);'
                : '-'}
            </TableCell>;'
            <TableCell>{referral.completed_at ? format_date (referral.completed_at) : '-'}</TableCell>;
            <TableCell>;
              {referral.reward_issued ? ("
                <Badge className="bg - green - 50 text - green - 800 border - green - 200">;
                  Issued;'
                </Badge>) : referral.status === 'completed' ? ("
                <Badge className="bg - blue - 50 text - blue - 800 border - blue - 200">;
                  Pending;
                </Badge>) : ('
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                '-')}
            </TableCell>;
          </TableRow>))}
      </TableBody>;
    </Table>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ),;}
 interface ReferralTableProps {
  referrals: Referral[];
isLoading: boolean 
}referrals, isLoading 
}: ReferralTableProps) {
  //Helper function to render status badges const renderStatusBadge = (status: ReferralStatus) => {
  switch (status) {
  default: return (<Table> <TableHeader> <TableRow> <TableHead>Date</TableHead> <TableHead>Email</TableHead> <TableHead>Status</TableHead> <TableHead>User Type</TableHead> <TableHead>Completed On</TableHead> <TableHead>Reward</TableHead> </TableRow> </TableHeader> <TableBody> {

            <TableCell>{format_date (referral.created_at)};"
            <TableCell>{referral.email || '-'};
            <TableCell>{renderStatusBadge (referral.status)};

            <TableCell>{referral.completed_at ? format_date (referral.completed_at) : '-'};

                <Badge className="bg - green - 50 text - green - 800 border - green - 200">;"
                ) : referral.status === 'completed' ? (
                <Badge className="bg - blue - 50 text - blue - 800 border - blue - 200">;"
)
                ) : (
            ;)
          ))}
    );
  default: return (<Table> <TableHeader> <TableRow> <TableHead>Date <TableHead>Email <TableHead>Status <TableHead>User Type <TableHead>Completed On <TableHead>Reward   <TableBody> {
  referrals.map ( (referral) => (<TableRow key= {
  referral.id;
}> <TableCell> {

} <TableCell> {



)"
} <TableCell> Issued ) : referral.status === 'completed' ? (<Badge className="bg-blue-50 text-blue-800 border-blue-200" > Pending ) : ('-')

} ) ) 
} ) 
            <TableCell>{referral.completed_at ? formatDate(referral.completed_at) : '-'}
            <TableCell>

                <Badge className="bg-green-50 text-green-800 border-green-200">"

                <Badge className="bg-blue-50 text-blue-800 border-blue-200">"

pr-12325
</Badge>
                </Badge>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Table>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
