import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#007bff',
  className = ''
}) => {
  return (
    <div className={`${styles.spinner} ${styles[size]} ${className}`} 
         style={{ borderTopColor: color }}>
      <div className={styles.inner} />
    </div>
  );
};

export default LoadingSpinner;