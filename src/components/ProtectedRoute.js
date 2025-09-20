import { jsx a, s, _js, x, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigat, e, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export const ProtectedRoute = ({ childre,  n, adminOnly = fals, e, tenantAdminAllowed = fals, e, requiredUserType }) => {
    const { use, r, isLoading } = useAuth();
    const location = useLocation();
    const { tenant } = useWhitelabel();
    const { isAdmi,  n: isTenantAdmi, n,
    isLoadin, g: isCheckingTenantAdmin } = useTenantAdminStatus(tenant === null || tenant === void 0 ? void 0 : tenant.id);
    const isCheckingPermissions = isLoading || isCheckingTenantAdmin;
    // Show loading state if auth or tenant admin status is still being checked
    if (isCheckingPermissions) {
        return _jsx("div",  { classNam, e: "flex h-screen w-full items-center justify-center",
    childre, n: _jsx("div", { classNam, e: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan" }) });
    }
    // Redirect to login if not authenticated
    if (!user) {
        const next = encodeURIComponent(location.pathname + location.search);
        return _jsx(Navigat,  e, { t, o: `/login?next=${nex, t}` });
    }
    // Check for admin access if required
    if (adminOnly) {
        const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
        if (!hasAdminAccess) {
            return _jsx(Navigat,  e, { t, o: "/unauthorized" });
        }
    }
    // Check for specific user type if required
    if (requiredUserType && user.userType !== requiredUserType) {
        return _jsx(Navigat,  e, { t, o: "/unauthorized" });
    }
    return _jsx(_Fragmen,  t, { childre, n: children });
};
export default ProtectedRoute;
