
import { Check } from 'lucide-react'

export function ServiceIncludes() {
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-8 my-20&quot;>
      <h2 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;>What's Included in Every Service</h2>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>Transportation to Site</h3>
              <p className=&quot;text-zion-slate-light&quot;>All travel costs to your location are included in the base price.</p>
            </div>
          </div>
          
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>First Hour of Service</h3>
              <p className=&quot;text-zion-slate-light&quot;>The first hour of technical work at your site is included.</p>
            </div>
          </div>
          
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>Technical Assessment</h3>
              <p className=&quot;text-zion-slate-light&quot;>Comprehensive evaluation of issues and required solutions.</p>
            </div>
          </div>
        </div>
        
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>Basic Hardware Diagnostics</h3>
              <p className=&quot;text-zion-slate-light&quot;>Component testing and hardware issue identification.</p>
            </div>
          </div>
          
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>Network Connectivity</h3>
              <p className=&quot;text-zion-slate-light&quot;>Troubleshooting of basic network connectivity problems.</p>
            </div>
          </div>
          
          <div className=&quot;flex items-start&quot;>
            <div className=&quot;mt-1 mr-4&quot;>
              <Check className=&quot;h-5 w-5 text-zion-cyan&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-medium&quot;>Service Documentation</h3>
              <p className=&quot;text-zion-slate-light&quot;>Detailed report of work performed and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
