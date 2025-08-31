<<<<<<< HEAD
import React from 'react';
=======
import React from 'react.ts';

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
interface Stat {














  label: string;
  value: string;
  description: string;
<<<<<<< HEAD
interface InteractiveStatsProps {
  stats: Stat[];
  className?: string;
const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats, className = "" }) => {
=======

interface InteractiveStatsProps extends React.PropsWithChildren<{












}> {
  stats: Stat[];
  className?: string;

const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats, className = "";
}) => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <div className={`grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index)               => (
        <div
          key={index}
          className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
        >;
          <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>;
          <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>;
          <div className="text-gray-300 text-sm">{stat.description}</div>;
        </div>;
      ))};
    </div>;
  );
};
export default InteractiveStats;}}