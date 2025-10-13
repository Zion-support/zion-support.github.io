import React from "react";
import { TrendingUp, Users, Award, Zap } from "lucide-react";
interface StatItem 
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;

interface ContentStatisticsProps 
  stats?: StatItem[];
  className?: string;

const ContentStatistics: React.FC<ContentStatisticsProps> = (
  stats = [
  className = "",
) => 
  return (
                {stat.value}
</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
  );
;
export default ContentStatistics;
</TrendingUp>
</Award>
</Zap>
</Users>
</ContentStatisticsProps>