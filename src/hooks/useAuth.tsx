import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react',
interface User {
  id: string,
  email: string;
  name?: string;
  role?: string;
  avatar?: string, }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    setLoading(false);, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock login - replace with actual API call
      const mockUser = { 
        id: '1', 
        email, 
        name: email.split('@')[0],
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser)); catch (error) {
      throw new Error('Login failed'); finally {
      setLoading(false);  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');;

  const register = async (email: string, password: string, name?: string) => {
    setLoading(true);
    try {
      // Mock registration - replace with actual API call
      const mockUser = { 
        id: '1', 
        email, 
        name: name || email.split('@')[0],
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser)); catch (error) {
      throw new Error('Registration failed'); finally {
      setLoading(false);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register, };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>, }

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  return context, }