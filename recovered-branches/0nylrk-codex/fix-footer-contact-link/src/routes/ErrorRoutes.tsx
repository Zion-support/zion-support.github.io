 const ErrorRoutes = () => {
  return (<Routes> {
  /* Error Routes */ 
}<Route path="/unauthorized" element= {
  <Unauthorized /> 
}/> <Route path="*" element= {
  <NotFound /> 
}/> 
};
export default ErrorRoutes;
