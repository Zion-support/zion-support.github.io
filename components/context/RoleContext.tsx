import React, {_createContext, _useContext, _useEffect, _useMemo, _useState} from 'react';

export type UserRole = 'client' | 'talent';

type RoleContextValue = {_role: UserRole;
  setRole: (_role: UserRole) => void;};

const _RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const RoleProvider: React.FC<{_children: React.ReactNode}> = (_{_children}) => {_const [role, _setRole] = useState<UserRole>('client');

  useEffect__(() => {
    try {
      const _saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion_user_role') : null;
      if (saved === 'client' || saved === 'talent') {
        setRole(saved);}
    } catch {}
  }, []);

  useEffect__(() => {_try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_user_role', _role);}
    } catch {}
  }, [role]);

  const _value = useMemo__(() => ({_role, _setRole}), [role]);

  return <RoleContext.Provider value={_value}>{_children}</RoleContext.Provider>;
};

export function useRole(): RoleContextValue {_const _ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;}