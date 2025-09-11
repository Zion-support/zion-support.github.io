import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const WhitelabelContext = createContext(undefined);
export function WhitelabelProvider({ children }) {
    const [tenant, setTenant] = useState('zion');
    return (_jsx(WhitelabelContext.Provider, { value: { tenant, setTenant }, children: children }));
}
export function useWhitelabel() {
    const context = useContext(WhitelabelContext);
    if (context === undefined) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
}
