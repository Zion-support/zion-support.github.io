<<<<<<< HEAD
import React from 'react';;'
import SEOHead from './components/SEOHead'
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

>>>>>>> main
>>>>>>> main
interface StatItem {},
      value: string
  label: string
  icon: React.ReactNode
  color: string
},
      interface ContentStatisticsProps {},
      stats?: StatItem[];
  className?: string
},
<<<<<<< HEAD
      const ContentStatistics: React.FC<ContentStatisticsProps>  =  ({},)";
      stats = [";";
    {},";";";
      value: "500+", label: "Happy Clients", icon: <Users className="w-8 h-8" />, _color: "text-blue-400", _}, _{},"
      value: "99.9%", _label: "Uptime", icon: <className="w-8 h-8" />, _color: "text-green-400", _}, _{},"
      value: "50+", _label: "Awards Won", icon: <Award className="w-8 h-8" />, _color: "text-yellow-400", _}, _{},"
      value: "40%", _label: "Cost Savings", icon: <TrendingUp className="w-8 h-8" />, _color: "text-purple-400", _}, _], className = "", _}) => {},";";";
      return (<div className={`py-16 ${className}`}></div>)"
      <div className="max-w-6xl mx-auto px-4"></div>"
        <div className="text-center mb-12"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>";";
            Trusted by Industry Leaders";";";
          </h2>"
          <p className="text-xl text-gray-300"></p>";
            Our solutions deliver measurable results across all industries";";
          </p>";";";
        </div>"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>";";";
          {stats.map((stat, index) => ()}"
            <div key={index} className="text-center"></div>";
              <div className={`${stat.color} flex justify-center mb-4`}></div>;";";
                {stat.icon};";";";
              </div>"
              <div className="text-4xl font-bold text-white mb-2"></div>";";
                {stat.value};";";";
              </div>"
              <div className="text-gray-300 text-lg">{stat.label}</div>
=======
      const ContentStatistics: React.FC<ContentStatisticsProps> = ({},)
      stats = [
    {},
      value: "500+", label: "Happy Clients", icon: <Users: className ="w-8 h-8" />, _color: "text-blue-400", _}, _{},"
      value: "99.9%", _label: "Uptime", icon: <className="w-8 h-8" />, _color: "text-green-400", _}, _{},"
      value: "50+", _label: "Awards Won", icon: <Award= className ="w-8 h-8" />, _color: "text-yellow-400", _}, _{},"
      value: "40%", _label: "Cost Savings", icon: <TrendingUp: className ="w-8 h-8" />, _color: "text-purple-400", _}, _], className = "", _}) => {},"
      return (<div  className ={`py-16 ${className}`}></div>)
      <div  className ="max-w-6xl mx-auto px-4"></div>"
        <div  className ="text-center mb-12"></div>"
          <h2  className ="text-3xl md=text-4xl font-bold text-white mb-4"></h2>"
            Trusted by Industry Leaders
          </h2>
          <p  className ="text-xl text-gray-300"></p>"
            Our solutions deliver measurable results across all industries
          </p>
        </div>
        <div  className ="grid grid-cols-2 md=grid-cols-4 gap-8"></div>"
          {stats.map((stat, index) => ()}
            <div  key ={index} className="text-center"></div>"
              <div  className ={`${stat.color} flex justify-center mb-4`}></div>
                {stat.icon}
              </div>
              <div  className ="text-4xl font-bold text-white mb-2"></div>"
                {stat.value}
              </div>
<<<<<<< HEAD
              <div  className ="text-gray-300 text-lg">{stat.label}</div>"
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

=======
              <div: className ="text-gray-300 text-lg">{stat.label}</div>";
>>>>>>> main
            </div>
          ))};
        </div>
      </div>
    </>
  );

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
>>>>>>> main
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
>>>>>>> main
export default ComponentsPage;'";'";"