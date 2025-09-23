import React from 'react';
// Core application types
export interface AppConfig {
  name: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  apiUrl: string;
  features: {
    analytics: boolean;
    notifications: boolean;
    multiLanguage: boolean;
    darkMode: boolean;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    inApp: boolean;
  };
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  features: string[];
  pricing: ServicePricing;
  technologyStack: string[];
  benefits: string[];
  useCases: string[];
  status: ServiceStatus;
  priority: number;
  demoUrl?: string;
  documentationUrl?: string;
  contactInfo: ContactInfo;
}

export type ServiceCategory = 
  | 'AI Services' 
  | 'IT Services' 
  | 'Micro SAAS' 
  | 'Blockchain' 
  | 'IoT & Edge' 
  | 'Cybersecurity' 
  | 'Cloud & DevOps' 
  | 'Data & Analytics';

export type ServiceStatus = 'active' | 'beta' | 'coming-soon';

export interface ServicePricing {
  starter: string;
  professional: string;
  enterprise: string;
  custom?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
}

export interface NotificationData {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}