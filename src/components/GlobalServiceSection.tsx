
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from &quot;./ui/button&quot;;

const services = [
  {
    title: &quot;Servers&quot;,
    description: &quot;Enterprise-grade servers for any workload with 24/7 maintenance and support&quot;,
    icon: <Server className=&quot;h-10 w-10&quot; />},
  {
    title: &quot;Storage&quot;,
    description: &quot;Scalable storage solutions from SSDs to large-scale enterprise storage systems&quot;,
    icon: <HardDrive className=&quot;h-10 w-10&quot; />},
  {
    title: &quot;Networking&quot;,
    description: &quot;Connectivity solutions including switches, routers, and network security devices&quot;,
    icon: <Network className=&quot;h-10 w-10&quot; />},
  {
    title: &quot;24x7x365 Support&quot;,
    description: &quot;Around-the-clock technical support with rapid response times guaranteed&quot;,
    icon: <Clock className=&quot;h-10 w-10&quot; />},
  {
    title: &quot;Recycling Services&quot;,
    description: &quot;Sustainable disposal and recycling of IT equipment following eco-friendly practices&quot;,
    icon: <Recycle className=&quot;h-10 w-10&quot; />},
  {
    title: &quot;Equipment Rentals&quot;,
    description: &quot;Flexible rental options for temporary projects and scaling requirements&quot;,
    icon: <Truck className=&quot;h-10 w-10&quot; />}];

export function GlobalServiceSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;global-services&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <GradientHeading>Global IT Services</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto&quot;>
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {services.map((service, index) => (
            <div key={index} className=&quot;bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300&quot;>
              <div className=&quot;text-zion-cyan mb-4&quot;>
                {service.icon}
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.title}</h3>
              <p className=&quot;text-zion-slate-light mb-4&quot;>{service.description}</p>
            </div>
          ))}
        </div>

        <div className=&quot;flex justify-center mt-12&quot;>
          <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8&quot;>
            Get Your Free Commercial Proposal
          </Button>
        </div>
      </div>
    </section>
  );
}
