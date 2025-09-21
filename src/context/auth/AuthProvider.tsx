"use client",
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react',
import { useRouter } from 'next/router',
import { useToast } from '@/hooks/use-toast',
interface User {
  id: string,
  email: string,
  name?: string;
  avatar?: string;
  verified: boolean}

interface AuthContextType {
  user: User | null,
  isLoading: boolean,
  login: (email: string, password: string) => Promise<void>,
  logout: () => void,
  signup: (email: string, password: string, name?: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>,
  resendVerification: (email: string) => Promise<void>}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  return context, };

interface AuthProviderProps {
  children: ReactNode}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // In a real app, validate token with backend
          const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
          setUser(userData);
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data'); finally {
        setIsLoading(false);
    };

    checkAuth();, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true),
      // Simulate API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'};
        body: JSON.stringify({ email, password });
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');

      const data = await response.json();
      
      // Store auth data
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user_data', JSON.stringify(data.user));
      setUser(data.user);

      toast({
        title: "Login Successful",
        description: "Welcome back!"});

      router.push('/dashboard'); catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive"});
      throw error;
    } finally {
      setIsLoading(false);
  };

  const signup = async (email: string, password: string, name?: string) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'};
        body: JSON.stringify({ email, password, name });
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Signup failed');

      const data = await response.json();
      
      toast({
        title: "Account Created",
        description: "Please check your email to verify your account."});

      router.push('/verify-email'); catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Please try again.",
        variant: "destructive"});
      throw error;
    } finally {
      setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    router.push('/');
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."});
  };

  const verifyEmail = async (token: string) => {
    try {
      setIsLoading(true),
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'};
        body: JSON.stringify({ token })});

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Verification failed');

      const data = await response.json();
      setUser(data.user);

      toast({
        title: "Email Verified",
        description: "Your email has been successfully verified."});

      router.push('/dashboard'); catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error.message || "Please try again.",
        variant: "destructive"});
      throw error;
    } finally {
      setIsLoading(false);
  };

  const resendVerification = async (email: string) => {
    try {
      setIsLoading(true),
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'};
        body: JSON.stringify({ email })});

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to resend verification');

      toast({
        title: "Verification Email Sent",
        description: "Please check your inbox for the verification email."});
    } catch (error: any) {
      toast({
        title: "Failed to Resend",
        description: error.message || "Please try again.",
        variant: "destructive"});
      throw error;
    } finally {
      setIsLoading(false);
  };

  const value: AuthContextType = {
    user,
    isLoading;
    login,
    logout,
    signup,
    verifyEmail,
    resendVerification};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );;