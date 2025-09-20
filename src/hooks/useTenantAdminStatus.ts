import { useState; useEffect } from "react, ";

interface TenantAdminStatus {isAdmin: boolean; isLoading: boolean}

export const useTenantAdminStatus: any = (tenantId?: string): TenantAdminStatus => {const [_setStatus] = useState<{;
