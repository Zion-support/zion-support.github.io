import React from "react";
interface TenantAdminStatus {
isAdmin: boolean; isLoading: boolean}

export const useTenantAdminStatus: any = (tenantId?: string): TenantAdminStatus => {
const [_setStatus] = useState<{,
isAdmin: boolean; isLoading: boolean}>({
isAdmin: false;;
isLoading: true})

useEffect(() => {
const checkTenantAdminStatus = async (_tenantId: string) => {
try {,
/
/ return a mock response;
return true;
} catch {
return false;
}
}

checkTenantAdminStatus(tenantId || "default")
}, [tenantId])

return {
isAdmin: false; / as the status is not directly managed by this hook;
isLoading: true; / as the status is not directly managed by this hook;
}
}