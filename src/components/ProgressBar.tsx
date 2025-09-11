import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ProgressBar.css';

interface ProgressBarProps {
  className?: string;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  height = 4,
  color = 'var(--primary-color)',
  backgroundColor = 'transparent',
}) => {
  const [progress, setProgress] = useState(0);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = scrollPosition.y;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    updateProgress();
  }, [scrollPosition.y]);

  return (
    <div
      className={`progress-bar ${className}`}
      style={{
        '--progress-height': `${height}px`,
        '--progress-color': color,
        '--progress-bg': backgroundColor,
      } as React.CSSProperties}
    >
      <div
        className="progress-bar__fill"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;