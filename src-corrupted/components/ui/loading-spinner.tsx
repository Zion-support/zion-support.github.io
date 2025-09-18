import { motion } from 'framer-motion';

interface LoadingSpinnerProps {

  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'white' | 'blue';
  text?: string;
  showText?: boolean;
  className?: string;

}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const colorClasses = {
  cyan: 'border-cyan-400',
  white: 'border-white',
  blue: 'border-blue-400'
};

export default function LoadingSpinner(props: any) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">loading-spinner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default loading-spinner;
