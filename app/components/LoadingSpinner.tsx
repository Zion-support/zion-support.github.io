'use client'
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md'
text = 'Loading...'
  fullScreen = false,
  className =;
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-8 h-8'
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (

        {spinner}
      </div>
    )
  }

  return spinner;
}

}
