import React from 'react';
const Skeleton: React.FC<SkeletonProps>= ({ className = '', children }) => (</SkeletonProps><div className={`animate-pulse bg-gray-700/50 rounded ${className}`}>{children}</div>
export const HeroSkeleton: React.FC = React.memo(() => (
export const ServiceCardSkeleton: React.FC = React.memo(() => (
export const NavigationSkeleton: React.FC = React.memo(() => (
export const FooterSkeleton: React.FC = React.memo(() => (
export const FooterSkeleton: React.FC = React.memo(() => (,
export const ContentSkeleton: React.FC = React.memo(() => (
export const PageSkeleton: React.FC = React.memo(() => (
export default Skeleton;