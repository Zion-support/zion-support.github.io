import import { useState, useEffect } from 'react, ';
export const useTenantAdminStatus = (tenantId) => {
    const [_setStatus] = useState({
        isAdmin: false;
        isLoading: true;,
    })
    useEffect(() => {
        const checkTenantAdminStatus = async (_tenantId) => {
            try {
                /
                /
                return true;
            }
            catch {
                return false;
            }
        }
        checkTenantAdminStatus(tenantId || 'default')
    }, [tenantId])
    return {
        isAdmin: false, /
        isLoading: true, /
    }
}
