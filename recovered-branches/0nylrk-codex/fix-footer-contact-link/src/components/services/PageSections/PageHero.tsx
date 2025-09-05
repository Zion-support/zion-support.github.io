
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Clock, Map, DollarSign } from &quot;lucide-react&quot;;

export function PageHero() {
  return (
    <div className=&quot;text-center mb-12&quot;>
      <GradientHeading className=&quot;mb-4&quot;>Global IT Onsite Services</GradientHeading>
      <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;>
        Professional IT onsite support services with transparent pricing across 190+ countries worldwide
      </p>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mt-12&quot;>
        <div className=&quot;bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center&quot;>
          <div className=&quot;bg-zion-purple/20 p-3 rounded-full mb-4&quot;>
            <Map className=&quot;h-8 w-8 text-zion-cyan&quot; />
          </div>
          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Global Coverage</h3>
          <p className=&quot;text-zion-slate-light&quot;>IT onsite services available in over 190 countries and territories worldwide</p>
        </div>
        
        <div className=&quot;bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center&quot;>
          <div className=&quot;bg-zion-purple/20 p-3 rounded-full mb-4&quot;>
            <Clock className=&quot;h-8 w-8 text-zion-cyan&quot; />
          </div>
          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Rapid Response</h3>
          <p className=&quot;text-zion-slate-light&quot;>Guaranteed 4-hour response time for critical issues in most major cities</p>
        </div>
        
        <div className=&quot;bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center&quot;>
          <div className=&quot;bg-zion-purple/20 p-3 rounded-full mb-4&quot;>
            <DollarSign className=&quot;h-8 w-8 text-zion-cyan&quot; />
          </div>
          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Transparent Pricing</h3>
          <p className=&quot;text-zion-slate-light&quot;>Clear per-incident pricing includes transportation and first hour onsite</p>
        </div>
      </div>
    </div>
  );
}
