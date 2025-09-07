import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';''
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';''
export type UserRole = 'client' | 'talent';'
export type User = {
  id: string;,
  name: string;
  email: string;,
  role: UserRole;
  avatar?: string;
  createdAt: string;,
  updatedAt: string;
};

export interface UserContextType {
  // TODO: Implement
}
  user: User | null;,
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
</void>
  updateUser: (userData: Partial<User>) => Promise<void>;
</User>
const UserContext = createContext<UserContextType | undefined>(undefined);
</UserContextType>
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
</UserProviderProps>
  const [user, setUser] = useState<User | null>(null);
</User>
  const login = async (email: string, password: string): Promise<void> => {
</void>
  const updateUser = async (userData: Partial<User>): Promise<void> => {
</User>
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
</UserContext>'