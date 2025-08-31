<<<<<<< HEAD
import React from 'react';
interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  className?: string;
=======
import React from 'react.ts';

interface EnhancedMarketplaceCardProps extends React.PropsWithChildren<{}> {

  title: string;
  description: string;
  className?: string;

<<<<<<< HEAD
const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({;
  title,
  description,
  className = ""

}) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${className}`}>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({ 
  title, 
  description, 
  className = "" ;
}) => {;
  return (;
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${className}`}>;
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>;
      <p className="text-gray-300">{description}</p>;
    </div>;
  );
};
export default EnhancedMarketplaceCard;}