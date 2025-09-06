import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,;
} from 'react';
export type UserRole = 'client' | 'talent';

type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {

export type UserRole = 'client' | 'talent';

type RoleContextValue = {

};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

  const [role, setRole] = useState<UserRole>('client');

  useEffect(() => {
    try {

      }

    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_user_role', role);      }

      }

    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;};

};

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;