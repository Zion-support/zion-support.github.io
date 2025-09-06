 interface FraudFlagsTableProps {
  flags: FraudFlag[];
isLoading: boolean;
hasFilters: boolean;
resetFilters: () => void;
onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void 
}flags, isLoading, hasFilters, resetFilters, onAction 
}) => {
  if (isLoading) {
  return (<div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple" ></div> </div> <TableHeader> <TableRow> <TableHead>Severity</TableHead> <TableHead>User</TableHead> <TableHead>Content</TableHead> <TableHead>Type</TableHead> <TableHead>Reason</TableHead> <TableHead>GPT Analysis</TableHead> <TableHead>Timestamp</TableHead> <TableHead>Status</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  flags.map ( (flag) => (<TableRow key= {
  flag.id 
}> <TableCell> <SeverityDisplay severity= {
  flag.severity 
}/> </TableCell>) 
}</TableCell> <TableCell> {
  new Date (flag.timestamp) .toLocaleDateString () 
}{
  new Date (flag.timestamp) .toLocaleTimeString () 
}</TableCell> <TableCell> <Badge variant= {
  flag.status === 'pending' ? 'secondary' : flag.status === 'actioned' ? 'destructive' : flag.status === 'ignored' ? 'outline' : 'default' 
}> {
  flag.status 
}</Badge> </TableCell> <TableCell> <ActionButtons flagId= {
  flag.id 
}status= {
  flag.status 
}onAction= {
  onAction 
}/> </TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
};
