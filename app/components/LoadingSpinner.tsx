import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps />= ({ 
  
}) => {

  return (</LoadingSpinnerProps>
    <div></circle>
          <path;
            className="opacity-75"
            fill="currentColor"
            d="M4 12 a8 8 0 018-8 V0 C5.373 0 0 5.373 0 12 h4 zm2 5.291 A7.962 7.962 0 014 12 H0 c0 3.042 1.135 5.824 3 7.938 l3-2.647 z"
           /></path>
        </svg>
      </div>
      {text && (
        <p className="text-gray-400text-smanimate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;

