
interface PartnerProfile {



interface PartnerProfile {

  id: string,
  user_id: string,
  name: string,'
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,



  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();



      const { data, error } = await supabase;'


      }

      }
      console.error ("Error fetching partners:", error);
      toast ({
        title: "Error",
        description: "Failed to load partner data",
        variant: "destructive"});
    } finally {
      setIsLoading (false);
    }
  }
        ],;
        setPartners(mockData),;
        filterPartners(mockData, activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]),;
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);
      }
    } catch (error) {
      console.error("Error fetching partners:", error),
      toast({
        title: "Error"
        description: "Failed to load partner data"
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }

  },












  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setCommissionRate(partner.commission_rate || 25),
    setIsSettingsOpen(true)
  },










    } catch (error) {

    try {
      // Update commission rate

      setPartners(partners.map(p =>
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p



    } catch (error) {
      ),;
      toast({;
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",;
        description: `The partner has been ${status}.`,;
        variant: status === 'approved' ? "default" : "destructive"}),;
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {;
        setIsDetailsOpen(false);
      }
    } catch (error) {;
      console.error("Error updating partner status:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update partner status",;
        variant: "destructive"});
    }
  },;
  const handleSaveSettings = async () => {;
    if (!selectedPartner) return,;
    try {;
      // Update commission rate;
      setPartners(partners.map(p =>;
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p;
      )),;
      filterPartners(;
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),;
        activeTab,;
        searchQuery;
      ),;
  },

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null



  };

                </CardTitle>;
                <div className="text-2xl font-bold text-white">;


                  {partners.filter(p => p.status === 'pending').length}
                </div>
              </CardHeader>"
              <CardContent className="pt-0">"
                <p className="text-xs text-zion-slate-light">
                  Partners waiting for review and approval;
                </p>
              </CardContent>
            </Card>"
            <Card className="bg-zion-blue border-zion-blue-light">"
              <CardHeader className="pb-2">"
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Active Partners;
                </CardTitle>"
                <div className="text-2xl font-bold text-white">'
                  {partners.filter(p => p.status === 'approved').length}





      </Card>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"



;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">;
          <div>;
            <CardTitle>Partners</CardTitle>;
            <CardDescription>Manage partnership applications and settings</CardDescription>;
          </div>;
          <div className="w-full md:w-80">;
            <div className="relative">;
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />;
              <Input;
                placeholder="Search partners...";
                className="pl-8";
                value={searchQuery}
                onChange={handleSearch}
              />;
            </div>;
          </div>;
        </CardHeader>;
        <CardContent>;
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">;
            <TabsList className="grid grid-cols-4 w-full md:w-auto">;
              <TabsTrigger value="pending">Pending</TabsTrigger>;
              <TabsTrigger value="approved">Approved</TabsTrigger>;
              <TabsTrigger value="rejected">Rejected</TabsTrigger>;
              <TabsTrigger value="all">All</TabsTrigger>;
            </TabsList>;
            ;
            <TabsContent value="pending" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
              <PartnerTable
                partners={filteredPartners}
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}

                getFraudFlagBadge={getFraudFlagBadge}





                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}


                isLoading={isLoading}
              />;






                getFraudFlagBadge={getFraudFlagBadge}















                {getFraudFlagBadge (partner.fraud_flags)}


              </div>;
            </TableCell>;

            <TableCell>{partner.niche}</TableCell>;
            <TableCell>;

                  size="sm"
                  onClick={() => onViewDetails(partner)}
                ;
                <Button ;
                  variant="outline" ;
                  size="sm";
                  onClick={() => onViewDetails(partner)}

      </TableBody>
    </Table>
  )
}

      </TableBody>;
    </Table>;
  );
}
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
  ),; interface PartnerProfile {
  id: string;
user id: string;
name: string;
status: 'pending' | 'approved' | 'rejected';
created at: string;
niche: string;
audience size: string;
social media?: Record<string string>;
website?: string;
bio?: string;
payout method?: string;
fraud flags?: number;
commission rate?: number 
}export default function PartnerManager () {
  
}
;




