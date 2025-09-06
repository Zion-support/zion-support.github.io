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