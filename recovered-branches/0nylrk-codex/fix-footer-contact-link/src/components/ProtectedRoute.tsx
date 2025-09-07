
import {Navigate} from 'react-router-dom';

export interface ProtectedRouteProps {
export interface ProtectedRouteProps {
  // TODO: Implement
}
pr-12325
  children: React.ReactNode,;
import React from 'react';

  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin";
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;

import React from 'react';
import { Navigate  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { useTenantAdminStatus  } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {

  children: React.ReactNode

import {Navigate} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {useTenantAdminStatus} from '@/hooks/useWhitelabelTenant';
import {useWhitelabel} from '@/context/WhitelabelContext';
export interface ProtectedRouteProps {
  children: React.ReactNode,;
  adminOnly?: boolean;
  tenantAdminAllowed?: boolean;
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children;

  adminOnly = false;
  tenantAdminAllowed = false
  requiredUserType
}) => {
  const { user, isLoading } = useAuth();
  const { tenant } = useWhitelabel();
  const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant?.id)
  const isCheckingPermissions = isLoading |isCheckingTenantAdmin;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;

  children;

  adminOnly = false;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ;
  children;
  adminOnly = false;

import React from 'react',
import { Navigate } from 'react-router-dom',
import { useAuth } from '@/hooks/useAuth',
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',
import { useWhitelabel } from '@/context/WhitelabelContext',
import React from 'react',;
import { Navigate } from 'react-router-dom',;
import { useAuth } from '@/hooks/useAuth',;
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
export interface ProtectedRouteProps {
  children: React.ReactNode,
  adminOnly?: boolean,
  tenantAdminAllowed?: boolean,
  requiredUserType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin"
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 

