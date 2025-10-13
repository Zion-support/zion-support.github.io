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
    
      value: "500+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,</Users>
      color: "text-blue-400",
,
    
      value: "99.9%",
      label: "Uptime",
      icon: <Zap className="w-8 h-8" />,</Zap>
      color: "text-green-400",
,
    
      value: "50+",
      label: "Awards Won",
      icon: <Award className="w-8 h-8" />,</Award>
      color: "text-yellow-400",
,
    
      value: "40%",
      label: "Cost Savings",
      icon: <TrendingUp className="w-8 h-8" />,</TrendingUp>
      color: "text-purple-400",
,
  ],
  className = "",
) => 
  return (
    <div className="{`py-16" ${className}`}></div>
      <div className="max-w-6xl mx-auto px-4"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300"></p>
            Our solutions deliver measurable results across all industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
          
            <div key="{index}" className="text-center"></div>
              <div className="{`${stat.color}" flex justify-center mb-4`}></div>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2"></div>
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>

        </div>
      </div>
    </div>
  );
;
export default ContentStatistics;
</TrendingUp>
</Award>
</Zap>
</Users>
</ContentStatisticsProps>