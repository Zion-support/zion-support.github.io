import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children, adminOnly = false, tenantAdminAllowed = false, requiredUserType }) => {
    const location = useLocation();
    
    // Simplified version - always allow access for now
    // In a real app, you would implement proper authentication logic here
    return <>{children}</>;
};

export default ProtectedRoute;
