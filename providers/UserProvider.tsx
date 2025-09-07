import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type UserRole = 'client' | 'talent';
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

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
  const updateUser = async (userData: Partial<User>): Promise<void> => {

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
