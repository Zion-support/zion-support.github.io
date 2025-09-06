 
}export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children;
adminOnly = false;
tenantAdminAllowed = false;
requiredUserType 
}) => {
  const {
  user, isLoading 
}= useAuth ();
const {
  tenant 
}= useWhitelabel ();
const {
  isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin 
}= useTenantAdminStatus (tenant?.id);
const isCheckingPermissions = isLoading || isCheckingTenantAdmin;
//Show loading state if auth or tenant admin status is still being checked if (isCheckingPermissions) {
  
}//Redirect to login if not authenticated if (!user) {
  
}//Check for admin access if required if (adminOnly) {
  const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
if (!hasAdminAccess) {
  
}
}//Check for specific user type if required if (requiredUserType && user.userType !== requiredUserType) {
  
}return <> {
  children 
}</> 
};
