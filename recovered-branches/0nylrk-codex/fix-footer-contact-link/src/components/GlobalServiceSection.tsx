
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {GradientHeading} from "./GradientHeading";
import {Server, HardDrive, Network, Clock, Recycle, Truck} from "@/components/icons";
import {Button} from "./ui/button";

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { GradientHeading } from "./GradientHeading",
import { Server, HardDrive, Network, Clock, Recycle, Truck } from "@/components/icons",
import { Button } from "./ui/button",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {GradientHeading} from "./GradientHeading";
import {Server, HardDrive, Network, Clock, Recycle, Truck} from "@/components/icons";
import {Button} from "./ui/button";
import { GradientHeading } from "./GradientHeading",
import { Server, HardDrive, Network, Clock, Recycle, Truck } from "@/components/icons",
import { Button } from "./ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const services = [
  {
    title: "Servers"
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support"
    icon: <Server className="h-10 w-10" />}
  {
    title: "Storage"
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems"
    icon: <HardDrive className="h-10 w-10" />}
<<<<<<< HEAD
<<<<<<< HEAD
  {

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
import { GradientHeading } from './GradientHeading';
import { Server, HardDrive, Network, Clock, Recycle, Truck } from '@/components / icons';
import { Button } from './ui / button';
const services = [;
  {
    title: "Servers",
    description: "Enterprise - grade servers for any workload with 24 / 7 maintenance and support",
    icon: <Server className="h - 10 w - 10" />},
  {
    title: "Storage",
    description: "Scalable storage solutions from SSDs to large - scale enterprise storage systems",
    icon: <HardDrive className="h - 10 w - 10" />},
  {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx


    title: "Networking",
    description: "Connectivity solutions including switches, routers, and network security devices",
    icon: <Network className="h-10 w-10" />},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  {
    title: "Networking"
    description: "Connectivity solutions including switches, routers, and network security devices";
    icon: <Network className="h-10 w-10" />}
    title: "Networking",
    description: "Connectivity solutions including switches, routers, and network security devices",
    icon: <Network className="h-10 w-10" />},
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  {
    title: "24x7x365 Support"
    description: "Around-the-clock technical support with rapid response times guaranteed"
    icon: <Clock className="h-10 w-10" />}
  {
    title: "Recycling Services"
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices"
    icon: <Recycle className="h-10 w-10" />}
  {
    title: "Equipment Rentals"
    description: "Flexible rental options for temporary projects and scaling requirements"
    icon: <Truck className="h-10 w-10" />}]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function GlobalServiceSection() {
  return (
    <section className="py-20 bg-zion-blue" id="global-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientHeading>Global IT Services</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">
              <div className="text-zion-cyan mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">
            Get Your Free Commercial Proposal
          </Button>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
    title: "Networking"
    description: "Connectivity solutions including switches, routers, and network security devices";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
const services = [;
  {;
    title: "Servers",;
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",;
    icon: <Server className="h-10 w-10" />},;
  {;
    title: "Storage",;
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",;
    icon: <HardDrive className="h-10 w-10" />},;
  {;
    title: "Networking",;
    description: "Connectivity solutions including switches, routers, and network security devices";
    icon: <Network className="h-10 w-10" />},;
  {;
    title: "24x7x365 Support",;
    description: "Around-the-clock technical support with rapid response times guaranteed",;
    icon: <Clock className="h-10 w-10" />},;
  {;
    title: "Recycling Services",;
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",;
    icon: <Recycle className="h-10 w-10" />},;
  {;
    title: "Equipment Rentals",;
    description: "Flexible rental options for temporary projects and scaling requirements",;
    icon: <Truck className="h-10 w-10" />}],;
export function GlobalServiceSection() {;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx

=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from "@/components/icons",;
import { Button } from "./ui/button",;
const services = [;
  {;
    title: "Servers",;
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",;
    icon: <Server className="h-10 w-10" />},;
  {;
    title: "Storage",;
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",;
    icon: <HardDrive className="h-10 w-10" />},;
  {;
    title: "Networking",;
    description: "Connectivity solutions including switches, routers, and network security devices",;
    icon: <Network className="h-10 w-10" />},;
  {;
    title: "24x7x365 Support",;
    description: "Around-the-clock technical support with rapid response times guaranteed",;
    icon: <Clock className="h-10 w-10" />},;
  {;
    title: "Recycling Services",;
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",;
    icon: <Recycle className="h-10 w-10" />},;
  {;
    title: "Equipment Rentals",;
    description: "Flexible rental options for temporary projects and scaling requirements",;
    icon: <Truck className="h-10 w-10" />}];
export function GlobalServiceSection() {;
  return (;
<<<<<<< HEAD

========
=======

import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from "@/components/icons",;
import { Button } from "./ui/button",;
;
const services = [;
  {;
    title:"Servers",;
    description:"Enterprise-grade servers for any workload with 24/7 maintenance and support",;
    icon:<Server className="h-10 w-10" />},;
  {;
    title:"Storage",;
    description:"Scalable storage solutions from SSDs to large-scale enterprise storage systems",;
    icon:<HardDrive className="h-10 w-10" />},;
  {;
    title:"Networking",;
    description:"Connectivity solutions including switches, routers, and network security devices",;
    icon:<Network className="h-10 w-10" />},;
  {;
    title:"24x7x365 Support",;
    description:"Around-the-clock technical support with rapid response times guaranteed",;
    icon:<Clock className="h-10 w-10" />},;
  {;
    title:"Recycling Services",;
    description:"Sustainable disposal and recycling of IT equipment following eco-friendly practices",;
    icon:<Recycle className="h-10 w-10" />},;
  {;
    title:"Equipment Rentals",;
    description:"Flexible rental options for temporary projects and scaling requirements",;
    icon:<Truck className="h-10 w-10" />}],;
;
export function GlobalServiceSection() {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section className="py-20 bg-zion-blue" id="global-services">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-16">;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx

========
                {service && service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service && service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service && service.description}</p>;
            </div>;
          ))}
        </div>;
        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
    icon: <Network className="h - 10 w - 10" />},
  {
    title: "24x7x365 Support",
    description: "Around - the - clock technical support with rapid response times guaranteed",
    icon: <Clock className="h - 10 w - 10" />},
  {
    title: "Recycling Services",
    description: "Sustainable disposal and recycling of IT equipment following eco - friendly practices",
    icon: <Recycle className="h - 10 w - 10" />},
  {
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h - 10 w - 10" />}],
export /**
 * GlobalServiceSection - Function description
 */
function GlobalServiceSection() {
  return (
    <section className="py - 20 bg - zion - blue" id="global - services">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 16">;
          <GradientHeading > Global IT Services</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;
            Our 24x7x365 global IT service offering provides enterprise - grade solutions for businesses of all sizes;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {services.map ((service, index) => (
            <div key={index} className="bg - zion - blue - light p - 6 rounded - lg border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300">;
              <div className="text - zion - cyan mb - 4">;
                {service.icon}
              </div>;
              <h3 className="text - xl font - bold text - white mb - 2">{service.title}</h3>;
              <p className="text - zion - slate - light mb - 4">{service.description}</p>;
            </div>))}
        </div>;
        <div className="flex justify - center mt - 12">;
          <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx

========
=======
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
<<<<<<< HEAD
                {service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service.description}</p>;
            </div>;
          ))}
        </div>;
;
        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
            Get Your Free Commercial Proposal;
          </Button>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx

    </section>);
}

<<<<<<< HEAD
;

=======
=======
}


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </section>);
}
=======
    </section>;
  );}
 const services = [ {
  title: "Servers";
description: "Enterprise-grade servers for any workload with 24/7 maintenance and support";
icon: <Server className="h-10 w-10" /> 
};
{
  title: "Storage";
description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems";
icon: <HardDrive className="h-10 w-10" /> 
};
{
  title: "Networking";
description: "Connectivity solutions including switches, routers, and network security devices";
icon: <Network className="h-10 w-10" /> 
};
{
  title: "24x7x365 Support";
description: "Around-the-clock technical support with rapid response times guaranteed";
icon: <Clock className="h-10 w-10" /> 
};
{
  title: "Recycling Services";
description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices";
icon: <Recycle className="h-10 w-10" /> 
};
{
  export function GlobalServiceSection () {
  return (<section className="py-20 bg-zion-blue" id="global-services" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto" > Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes </p> </div> </div>) ) 
}</div> Get Your Free Commercial Proposal </Button> </div> </div> </section>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/GlobalServiceSection.tsx
=======
}
;
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
