import { useState, useEffect } from 'react, ';
export const useTenantAdminStatus = (tenantId) => {;
    const [_setStatus] = useState({;
        isAdmin: false;
        isLoading: true;
    });