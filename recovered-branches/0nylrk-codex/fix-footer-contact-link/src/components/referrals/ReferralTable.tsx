



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

                
            
          
      