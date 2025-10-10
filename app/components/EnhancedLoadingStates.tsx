'use client';
import React from 'react';

const ServiceCardSkeleton: React.FC = () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>;
const StatsSkeleton: React.FC = () => <div className="animate-pulse bg-gray-200 h-16 rounded"></div>;

export { ServiceCardSkeleton, StatsSkeleton };
