export default function ServicesIndexPage () {
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handleSubmit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api/quote-request', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  service: values.serviceTitle, description: values.projectDescription, timeline: {
  start: values.timelineStart, end: values.timelineEnd 
};
budgetRange: values.budgetRange;

};
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) ) 
}</div> </div> </div> </div> <QuoteRequestModal open= {
  modalOpen 
}onClose= {
  () => setModalOpen (false) 
}service= {
  selected 
}onSubmit= {
  handleSubmit 
}/> </div>) 
};
export default ServicesPage;
