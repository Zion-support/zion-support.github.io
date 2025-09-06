 import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Sample data for integration sync logs export function IntegrationsSyncLog () {
  const getStatusBadge = (status: string) => {
  switch (status) {
  
}
};
return (<Card> <div className="p-4" > hidden md:table-cell" >Details</TableHead> </TableRow> </TableHeader> <TableBody> {
  syncLogs.map ( (log) => (<TableRow key= {
  log.id 
}> <TableCell> {
  log.event.replace (/ /g, ' ') .replace (/\b\w/g, l => l.toUpperCase () ) 
}</TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </Card>) 
}