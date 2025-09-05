
interface SummaryStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function SummaryStep(_{_formData, _updateFormData}: SummaryStepProps) {_const [isMatching, _setIsMatching] = useState(false);
  const [matches, _setMatches] = useState<MatchResult[]>([]);
  
  // Run AI matching when the component mounts
  useEffect__(() => {
    const _runMatching = async () => {
      if (!formData.projectDescription) return;
      
      setIsMatching(true);
      try {
        // Create a query string from the form data
        const _queryString = `
          ${formData.projectName} 
          ${_formData.projectDescription} 
          ${_formData.serviceType} 
          ${_formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${_formData.timeline}
        `;
        
        // Get AI matches
        const _results = await findMatches(
          queryString,
          formData.serviceType,
          3
        );
        
        setMatches(results);
      } catch (error) {_toast({
          title: "Matching Error", _description: "We couldn't find matches for your request. Please try again.", _variant: "destructive"});
      } finally {_setIsMatching(false);}
    };
    
    runMatching();
  }, [formData]);
  
  const _handleSelectMatch = (_match: MatchResult) => {_// Update the form with the selected match
    updateFormData({
      specificItem: match.item, _serviceCategory: match.item.category});
    
    toast({_title: "Match Selected", _description: `You've selected ${match.item.title}`});
  };
  
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const _matchItems = matches.map(match => match.item);
  
  // Map the onSelectMatch handler to work with the item directly
  const _handleItemSelect = (_item: unknown) => {_// Find the original MatchResult that contains this item
    const _matchResult = matches.find(match => match.item.id === item.id);
    if (matchResult) {
      handleSelectMatch(matchResult);}
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
      
      {_/* AI Matching Results */}
      <AIMatchingResults 
        serviceType={_formData.serviceType}
        projectDescription={_formData.projectDescription}
        matches={_matchItems}
        onSelectMatch={_handleItemSelect}
        isLoading={_isMatching}
      />
      
      {_/* Service Information */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Service Type</Label>
                <div className="text-white">{_formData.serviceType}</div>
              </div>
              
              {_formData.specificItem && (
                <div>
                  <Label className="text-zion-slate-light">Selected Item</Label>
                  <div className="text-white">{formData.specificItem.title}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Project Details */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <Label className="text-zion-slate-light">Project Name</Label>
                <div className="text-white">{_formData.projectName}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Project Description</Label>
                <div className="text-white whitespace-pre-wrap">{_formData.projectDescription}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Timeline */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Timeline Type</Label>
                <div className="text-white capitalize">{_formData.timeline}</div>
              </div>
              
              {_formData.startDate && (
                <div>
                  <Label className="text-zion-slate-light">Start Date</Label>
                  <div className="text-white">
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
              )}
              
              {_formData.endDate && (
                <div>
                  <Label className="text-zion-slate-light">End Date</Label>
                  <div className="text-white">
                    {formData.endDate.toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Budget */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Budget Type</Label>
                <div className="text-white capitalize">{_formData.budget.type}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Amount</Label>
                <div className="text-white">
                  ${_formData.budget.amount.toLocaleString()}
                  {_formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Contact Information */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Name</Label>
                <div className="text-white">{_formData.contactInfo.name}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Company</Label>
                <div className="text-white">{_formData.contactInfo.company || "N/A"}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Email</Label>
                <div className="text-white">{_formData.contactInfo.email}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Phone</Label>
                <div className="text-white">{_formData.contactInfo.phone || "N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}