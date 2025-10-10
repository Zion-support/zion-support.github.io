import React, { memo, useMemo } from 'react';
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
    const sizeClasses = useMemo(
    const textSizeClasses = useMemo(
    const colorClasses = useMemo(
    const renderSpinner = useMemo(() => {switch (variant) {
    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`;
export default OptimizedLoadingSpinner;