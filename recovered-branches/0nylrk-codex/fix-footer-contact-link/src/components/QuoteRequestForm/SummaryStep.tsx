 interface SummaryStepProps {
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void 
}export function SummaryStep ({
  formData, updateFormData 
}: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState (false);
const [matches, setMatches] = useState<MatchResult[]> ([]);
//Run AI matching when the component mounts useEffect ( () => {
  const runMatching = async () => {
  if (!formData.projectDescription) return;
try {
  //Create a query string from the form data const queryString = ` $ {
  formData.projectName 
}//Get AI matches const results = await findMatches (queryString;
formData.serviceType;
3);
}finally {
  setIsMatching (false) 
}
};
}, [formData]);
const handleSelectMatch = (match: MatchResult) => {
  //Update the form with the selected match updateFormData ({
  
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Extract just the items from each MatchResult for the AIMatchingResults component return (<div className="space-y-6" > <h3 className="text-xl font-semibold text-white mb-4" >Review Your Request</h3> {
  /* AI Matching Results */ 
}<AIMatchingResults serviceType= {
  formData.serviceType 
}projectDescription= {
  formData.projectDescription 
}matches= {
  matchItems 
}onSelectMatch= {
  handleItemSelect 
}isLoading= {
  isMatching 
}/> {
  /* Service Information */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Service Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {
  formData.specificItem && (<div> <Label className="text-zion-slate-light" >Selected Item</Label> <div className="text-white" > {
  formData.specificItem.title 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {
  /* Project Details */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Project Details</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="space-y-4" > <div> </div> </div> </CardContent> </Card> </div> {
  /* Timeline */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Timeline</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {
  formData.startDate && (<div> <Label className="text-zion-slate-light" >Start Date</Label> <div className="text-white" > {
  formData.startDate.toLocaleDateString () 
}</div> </div>) 
}{
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date</Label> <div className="text-white" > {
  formData.endDate.toLocaleDateString () 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {
  /* Budget */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </CardContent> </Card> </div> {
  /* Contact Information */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Contact Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </CardContent> </Card> </div> </div>) 
}