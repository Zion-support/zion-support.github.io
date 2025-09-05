 const MarketplaceRoutes = () => {
  return (<Routes> {
  /* Marketplace Routes */ 
}<Route path="/marketplace" element= {
  <Marketplace /> 
}/> <Route path="/categories" element= {
  <Categories /> 
}/> <Route path="/category/:slug" element= {
  <CategoryDetail /> 
}/> <Route path="/featured" element= {
  <Featured /> 
}/> <Route path="/marketplace/listing/:id" element= {
  <ListingDetail /> 
}/> <Route path="/listing/:id" element= {
  <ListingDetail /> 
}/> {
  /* Equipment Routes */ 
}<Route path="/equipment" element= {
  <EquipmentPage /> 
}/> <Route path="/equipment/:id" element= {
  <EquipmentDetail /> 
}/> /* Job Routes */ 
}<Route <PostJob /> </ProtectedRoute> 
}/> {
  /* Creator Routes */ 
}<Route <PublishProduct /> </ProtectedRoute> 
}/> {
  /* Project Room Routes */ 
}<Route <ProjectRoom /> </ProtectedRoute> 
}/> {
  /* Video Call Routes */ 
}<Route <VideoCall /> </ProtectedRoute> 
}/> </Routes>) 
};
export default MarketplaceRoutes;
