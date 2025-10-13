import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
=======
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
=======
  color = 'primary',
  text,
  fullScreen = false,
  className = ''
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      </div>
    );
  }

  return spinner;
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
};

export default LoadingSpinner;