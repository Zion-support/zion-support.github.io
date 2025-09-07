
interface PartnerProfile {
  id: string;
    user_id: string;
name: string;
status: 'pending' | 'approved' | 'rejected'
  created_at: string;

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();

}: PartnerTableProps) {
  if (isLoading) {
    return (
      <div className=\"text-center py-8\" />;
        <p className=\"text-zion-slate-light\" />Loading partner data...</p>;
      </div>;}
    );}
  }
    return (
      <div className=\"text-center py-8\" />;
        <p className=\"text-zion-slate-light\" />No partners found.</p>;
      </div>;
    );
  }
  return (
    <Table />;
      <TableHeader />;
        <TableRow className=\"hover:bg-transparent\" />;
          <TableHead  /> Name</TableHead>;
          <TableHead  /> Niche</TableHead>;
          <TableHead  /> Audience</TableHead>;
          <TableHead  /> Status</TableHead>;
          <TableHead  /> Date</TableHead>;
          <TableHead className=\"text-right\" />Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody />;
        {partners.map ((partner) => (}
          <TableRow key={partner.id} className=\"border - zion - blue - light hover:bg - zion - blue-light / 10\" />;
            <TableCell className=\"font - medium text-white\" />;
              <div className=\"flex items - center gap-2\" />;
                {partner.name}
                {getFraudFlagBadge (partner.fraud_flags)}
              </div>;
            </TableCell>;
            <TableCell />{partner.niche}</TableCell>;
            <TableCell />;
              {partner.audience_size.replace ('k, 000').replace ('- - ').replace ('over_over ')}
            </TableCell>;
            <TableCell />{getStatusBadge (partner.status)}</TableCell>;
            <TableCell />;
              {new Date (partner.created_at).toLocaleDateString ()}
            </TableCell>;
                      className=\"text-green-500 hover:text-green-600 hover:bg-green-900/20\";
                    >;
                      <Check className=\"h-4 w-4\" />;
                      <span className=\"sr-only\" />Approve</span>;
                    </Button>;
                  </>;
                )}
                <Button;
variant=\"outline\"
                <Button;
variant=\"outline\" 
                  size=\"sm\"
                  onClick={() = /> onViewDetails(partner)}
                  <>;
                    <Button;
                      variant=\"ghost\";
                      size=\"sm\";
                      on_click={() = /> onUpdateStatus (partner.id, 'rejected')}
                      className=\"text - red - 500 hover:text - red - 600 hover:bg - red-900 / 20\";
                    >;
                      <X className=\"h - 4 w-4\" />;
                      <span className=\"sr-only\" />Reject</span>;
                    </Button>;
                    <Button;
                      variant=\"ghost\";
                      size=\"sm\";
                      on_click={() = /> onUpdateStatus (partner.id, 'approved')}
                      className=\"text - green - 500 hover:text - green - 600 hover:bg - green-900 / 20\";
                    >;
                      <Check className=\"h - 4 w-4\" />;
                      <span className=\"sr-only\" />Approve</span>;
                    </Button>;
                  </>)}
                <Button;
                  variant=\"ghost\";
                  size=\"sm\";
                  on_click={() = /> onOpenSettings (partner)}
                  className=\"text - zion - slate - light hover:text-white\";
                >;
                  <Settings className=\"h - 4 w-4\" />;
                  <span className=\"sr-only\" />Settings</span>;
                </Button>;
                <Button;
                  variant=\"outline\";
                  size=\"sm\";
                  on_click={() = /> onViewDetails (partner)}
                >;
                  View;
                </Button>;
              </div>;
            </TableCell>;
          </TableRow>))}
      </TableBody>;
    </Table>);
}