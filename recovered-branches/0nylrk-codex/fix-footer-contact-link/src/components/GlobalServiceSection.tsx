
import { GradientHeading } from "./GradientHeading",
import { Server, HardDrive, Network, Clock, Recycle, Truck } from "@/components/icons",
import { Button } from "./ui/button",const services = [
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
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h-10 w-10" />}],
export function GlobalServiceSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;global-services&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-16&quot;>

const _services = [
  {_title: "Servers", _description: "Enterprise-grade servers for any workload with 24/7 maintenance and support", _icon: <Server className="h-10 w-10" />},
  {_title: "Storage", _description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems", _icon: <HardDrive className="h-10 w-10" />},
  {_title: "Networking", _description: "Connectivity solutions including switches, _routers, _and network security devices", _icon: <Network className="h-10 w-10" />},
  {_title: "24x7x365 Support", _description: "Around-the-clock technical support with rapid response times guaranteed", _icon: <Clock className="h-10 w-10" />},
  {_title: "Recycling Services", _description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices", _icon: <Recycle className="h-10 w-10" />},
  {_title: "Equipment Rentals", _description: "Flexible rental options for temporary projects and scaling requirements", _icon: <Truck className="h-10 w-10" />}];

export function GlobalServiceSection() {_return (_<section className="py-20 bg-zion-blue" id="global-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              <p className=&quot;text-zion-slate-light mb-4&quot;>{service.description}</p>            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">            Get Your Free Commercial Proposal
          </Button>
        </div>
      </div>
    </section>
  )
}
