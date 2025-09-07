




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
}
export function ReferralTable({ referrals, isLoading }: ReferralTableProps) {
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {
"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";""
import {Referral, ReferralStatus} from "@/types/referrals";""
import {Badge} from "@/components/ui/badge";""
import {formatDate} from "@/utils/referralUtils";"
interface ReferralTableProps {;
  referrals: Referral[],;
  isLoading: boolean;
}

export function ReferralTable(): any ({ referrals, isLoading }: ReferralTableProps) {;
  // Helper function to render status badges;
  const renderStatusBadge = (status: ReferralStatus) => {;
    switch (status) {;
"
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;""
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>,;""
      <div className="flex items-center justify-center p-8">"
</div>"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />"
</div>
      </div>"
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>;""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;""
      <div className="flex flex-col items-center justify-center p-8 text-center">"
</div>"
        <p className="text-muted-foreground mb-2">No referrals yet</p>""
        <p className="text-sm text-muted-foreground">"
</p>
        </p>
      </div>"
      case "pending": return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Pending</Badge>,;""
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>,;""
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>;""
      <div className="flex items-center justify-center p-8">;"
</div>"
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;"
</div>
      </div>;"
      <div className="flex flex-col items-center justify-center p-8 text-center">;"
</div>"
        <p className="text-muted-foreground mb-2">No referrals yet</p>;""
        <p className="text-sm text-muted-foreground">;"
</p>
        </p>;
      </div>;
    <Table>;
</Table>
      <TableHeader>;
</TableHeader>
        <TableRow>;
</TableRow>
          <TableHead>Date</TableHead>;
          <TableHead>Email</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>User Type</TableHead>;
          <TableHead>Completed On</TableHead>;
          <TableHead>Reward</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
</TableBody>
          <TableRow key={referral && referral.id}>;
</TableRow>
            <TableCell>{formatDate(referral && referral.created_at)}</TableCell>;"
            <TableCell>{referral && referral.email || '-'}</TableCell>;'
            <TableCell>{renderStatusBadge(referral && referral.status)}</TableCell>;
            <TableCell>;
</TableCell>
            </TableCell>;'
            <TableCell>{referral && referral.completed_at ? formatDate(referral && referral.completed_at) : '-'}</TableCell>;'
            <TableCell>;
</TableCell>'
                <Badge className="bg-green-50 text-green-800 border-green-200">;"
</Badge>
                </Badge>;"
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">;"
</Badge>
                </Badge>;
            </TableCell>;
          </TableRow>;
      </TableBody>;
    </Table>;"
      case "pending": return <Badge variant="outline" className="bg - yellow - 50 text - yellow - 800 border - yellow - 200">Pending</Badge>;""
        return <Badge variant="outline" className="bg - green - 50 text - green - 800 border - green - 200">Completed</Badge>;""
        return <Badge variant="outline" className="bg - gray - 50 text - gray - 800 border - gray - 200">Expired</Badge>,""
      <div className="flex items - center justify - center p - 8">;"
</div>"
        <div className="h - 8 w - 8 animate - spin rounded - full border - 4 border - primary border - t-transparent" />;"
</div>
      </div>);"
      <div className="flex flex - col items - center justify - center p - 8 text - center">;"
</div>"
        <p className="text - muted - foreground mb - 2">No referrals yet</p>;""
        <p className="text - sm text - muted - foreground">;"
</p>
        </p>;
      </div>);
    <Table>;
</Table>
      <TableHeader>;
</TableHeader>
        <TableRow>;
</TableRow>
          <TableHead > Date</TableHead>;
          <TableHead > Email</TableHead>;
          <TableHead > Status</TableHead>;
          <TableHead > User Type</TableHead>;
          <TableHead > Completed On</TableHead>;
          <TableHead > Reward</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
</TableBody>
          <TableRow key={referral.id}>;
</TableRow>
            <TableCell>{format_date (referral.created_at)}</TableCell>;"
            <TableCell>{referral.email || '-'}</TableCell>;'
            <TableCell>{renderStatusBadge (referral.status)}</TableCell>;
            <TableCell>;
</TableCell>
            </TableCell>;'
            <TableCell>{referral.completed_at ? format_date (referral.completed_at) : '-'}</TableCell>;'
            <TableCell>;
</TableCell>'
                <Badge className="bg - green - 50 text - green - 800 border - green - 200">;"
</Badge>"
                </Badge>) : referral.status === 'completed' ? (''
                <Badge className="bg - blue - 50 text - blue - 800 border - blue - 200">;"
</Badge>)
                </Badge>) : (
            </TableCell>;)
          </TableRow>))}
      </TableBody>;
    </Table>);
  default: return (<Table> <TableHeader> <TableRow> <TableHead>Date</TableHead> <TableHead>Email</TableHead> <TableHead>Status</TableHead> <TableHead>User Type</TableHead> <TableHead>Completed On</TableHead> <TableHead>Reward</TableHead> </TableRow> </TableHeader> <TableBody> {
</Table>)
  referrals.map ( (referral) => (<TableRow key= {
  referral.id;
}> <TableCell> {
</TableRow>
}</TableCell> <TableCell> {
</TableCell>
}</TableCell> <TableCell> {
</TableCell>
}</TableCell> <TableCell> {
</TableCell>
}</TableCell> <TableCell> {
</TableCell>)"
}</TableCell> <TableCell> Issued </Badge>) : referral.status === 'completed' ? (<Badge className="bg-blue-50 text-blue-800 border-blue-200" > Pending </Badge>) : ('-')'
</TableCell>
}</TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
            </TableCell>'
            <TableCell>{referral.completed_at ? formatDate(referral.completed_at) : '-'}</TableCell>'
            <TableCell>
</TableCell>'
                <Badge className="bg-green-50 text-green-800 border-green-200">"
</Badge>
                </Badge>"
                <Badge className="bg-blue-50 text-blue-800 border-blue-200">"
</Badge>
                </Badge>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>"

