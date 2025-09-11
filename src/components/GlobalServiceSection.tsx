<<<<<<< HEAD
<<<<<<< HEAD

import { GradientHeading } from './GradientHeading'
import {
  Server
  HardDrive
  Network
  Clock
  Recycle
  Truck
} from 'lucide-react'
import { Button } from './ui/button'
const services = [
  {
    title: 'Servers'
    description:
      'Enterprise-grade servers for any workload with 24/7 maintenance and support'
    icon: <Server className='h-10 w-10' />
  }
  {
    title: 'Storage'
    description:
      'Scalable storage solutions from SSDs to large-scale enterprise storage systems'
    icon: <HardDrive className='h-10 w-10' />
  }
  {
    title: 'Networking'
    description:
      'Connectivity solutions including switches, routers, and network security devices'
    icon: <Network className='h-10 w-10' />
  }
  {
    title: '24x7x365 Support'
    description:
      'Around-the-clock technical support with rapid response times guaranteed'
    icon: <Clock className='h-10 w-10' />
  }
  {
    title: 'Recycling Services'
    description:
      'Sustainable disposal and recycling of IT equipment following eco-friendly practices'
    icon: <Recycle className='h-10 w-10' />
  }
  {
    title: 'Equipment Rentals'
    description:
      'Flexible rental options for temporary projects and scaling requirements'
    icon: <Truck className='h-10 w-10' />
  }
]
  Server,
  HardDrive,
  Network,
  Clock,
  Recycle,
  Truck,
} from 'lucide-react'
import { Button } from './ui/button'
  Truck,;
} from 'lucide-react';
import { Button } from './ui/button';

import { GradientHeading } from "./GradientHeading",
export function GlobalServiceSection() {;
  return (
=======
export function GlobalServiceSection() {;
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function GlobalServiceSection() {;
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className='py-20 bg-zion-blue' id='global-services'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-16'>;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
            Our 24x7x365 global IT service offering provides enterprise-grade;
            solutions for businesses of all sizes;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {services && services.map((service, index) => (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {services && services.map((service, index) => (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div
              key={index}
              className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300'>;
              <div className='text-zion-cyan mb-4'>{service && service.icon}</div>;
              <h3 className='text-xl font-bold text-white mb-2'>;
                {service && service.title}
              </h3>;
              <p className='text-zion-slate-light mb-4'>;
                {service && service.description}
              </p>            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ))}
import { GradientHeading } from "./GradientHeading";
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from "./ui/button",
onst services = [
=======

          ))}

import { GradientHeading } from './GradientHeading'
import {
  Server,
  HardDrive,
  Network,
  Clock,
  Recycle,
  Truck,;
} from 'lucide-react';
import { Button } from './ui/button';

import { GradientHeading } from "./GradientHeading",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react'
import { Button } from "./ui/button",
const services = [
  {
    title: "Servers",
    description: "Enterprise-grade servers for any workload with 24/7 maintenance and support",
    icon: <Server className="h-10 w-10" />},
  {
    title: "Storage",
    description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems",
    icon: <HardDrive className="h-10 w-10" />},
  {
    title: "Networking",
    description: "Connectivity solutions including switches, routers, and network security devices",
    icon: <Network className="h-10 w-10" />},
  {
    title: "24x7x365 Support",
    description: "Around-the-clock technical support with rapid response times guaranteed",
    icon: <Clock className="h-10 w-10" />},
  {
    title: "Recycling Services",
    description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices",
    icon: <Recycle className="h-10 w-10" />},
  {
<<<<<<< HEAD
    icon: <Truck className = "h-10 w-10" />}],
export function GlobalServiceSection() {
    title: 'Equipment Rentals',
    description:
      'Flexible rental options for temporary projects and scaling requirements',
    icon: <Truck className='h-10 w-10' />,
  },
]
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h-10 w-10" />}],
=======

          ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
    title: "Equipment Rentals",
    description: "Flexible rental options for temporary projects and scaling requirements",
    icon: <Truck className="h-10 w-10" />}],

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function GlobalServiceSection() {
  return (
    <section className="py-20 bg-zion-blue" id="global-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientHeading>Global IT Services</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300'
            >
              <div className='text-zion-cyan mb-4'>{service.icon}</div>
              <h3 className='text-xl font-bold text-white mb-2'>
                {service.title}
              </h3>
              <p className='text-zion-slate-light mb-4'>
                {service.description}
              </p>            </div>
          ))}
        </div>
        <div className='flex justify-center mt-12'>
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>            Get Your Free Commercial Proposal        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
          {services.map((service, index) => (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>
        <div className='flex justify-center mt-12'>
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>            Get Your Free Commercial Proposal        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {services.map((service, index) => (
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">
              <div className="text-zion-cyan mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
=======



            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">
            Get Your Free Commercial Proposal
          </Button>
        </div>
<<<<<<< HEAD

          ))}
        </div>
        <div className='flex justify-center mt-12'>
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>        <div className="flex justify-center mt-12">


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </section>;
  );
};
      </div>
    </section>
<<<<<<< HEAD
  )
}
import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react';
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
    <section className="py-20 bg-zion-blue" id="global-services">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-16">;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes;
          </p>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">
            Get Your Free Commercial Proposal
          </Button>
        </div>



      </div>
    </section>
        </div>;
=======

        </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>            Get Your Free Commercial Proposal        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service && service.icon}
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">{service && service.title}</h3>;
              <p className="text-zion-slate-light mb-4">{service && service.description}</p>;
          ))}
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='flex justify-center mt-12'>;
          <Button className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8'>        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
import { GradientHeading } from './GradientHeading';
import {
  Server,
  HardDrive,
  Network,
  Clock,
  Recycle,
  Truck,
} from 'lucide-react';
import { Button } from './ui / button';
const services = [;
  {
    title: 'Servers',
    description:;
      'Enterprise - grade servers for any workload with 24 / 7 maintenance and support',
    icon: <Server className='h - 10 w - 10' />,
  },
  {
    title: 'Storage',
    description:;
      'Scalable storage solutions from SSDs to large - scale enterprise storage systems',
    icon: <HardDrive className='h - 10 w - 10' />,
  },
  {
    title: 'Networking',
    description:;
      'Connectivity solutions including switches, routers, and network security devices',
    icon: <Network className='h - 10 w - 10' />,
  },
  {
    title: '24x7x365 Support',
    description:;
      'Around - the - clock technical support with rapid response times guaranteed',
    icon: <Clock className='h - 10 w - 10' />,
  },
  {
    title: 'Recycling Services',
    description:;
      'Sustainable disposal and recycling of IT equipment following eco - friendly practices',
    icon: <Recycle className='h - 10 w - 10' />,
  },
  {
    title: 'Equipment Rentals',
    description:;
      'Flexible rental options for temporary projects and scaling requirements',
    icon: <Truck className='h - 10 w - 10' />,
  },
];
export /**
 * GlobalServiceSection - Function description
 */
function GlobalServiceSection() {
  return (
    <section className='py - 20 bg - zion - blue' id='global - services'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='text - center mb - 16'>;
          <GradientHeading > Global IT Services</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;
            Our 24x7x365 global IT service offering provides enterprise - grade;
            solutions for businesses of all sizes;
          </p>;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
          {services.map ((service, index) => (
            <div;
              key={index}
              className='bg - zion - blue - light p - 6 rounded - lg border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300';
            >;
              <div className='text - zion - cyan mb - 4'>{service.icon}</div>;
              <h3 className='text - xl font - bold text - white mb - 2'>;
                {service.title}
              </h3>;
              <p className='text - zion - slate - light mb - 4'>;
                {service.description}
              </p>            </div>))}
        </div>;
        <div className='flex justify - center mt - 12'>;
          <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8'>            Get Your Free Commercial Proposal        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {services.map ((service, index) => (
            <div key={index} className="bg - zion - blue - light p - 6 rounded - lg border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300">;
              <div className="text - zion - cyan mb - 4">;
                {service.icon}
              </div>;
              <h3 className="text - xl font - bold text - white mb - 2">{service.title}</h3>;
              <p className="text - zion - slate - light mb - 4">{service.description}</p>))}
        </div>;
        <div className='flex justify - center mt - 12'>;
          <Button className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8'>        <div className="flex justify - center mt - 12">;
          <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white text - lg py - 6 px - 8">;

<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { Server, HardDrive, Network, Clock, Recycle, Truck } from 'lucide-react';
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
    <section className="py-20 bg-zion-blue" id="global-services">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-16">;
          <GradientHeading>Global IT Services</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes;
          </p>;
        </div>;
;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services.map((service, index) => (;
            <div key={index} className="bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300">;
              <div className="text-zion-cyan mb-4">;
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>

            </div>
          ))}
        </div>;
        <div className="flex justify-center mt-12">;
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Get Your Free Commercial Proposal;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </section>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
    </section>);
<<<<<<< HEAD
}
    </section>;
  );}
 const services = [ {;
  title: "Servers";";
description: "Enterprise-grade servers for any workload with 24/7 maintenance and support";";
icon: <Server className="h-10 w-10" /> ;
};
{";
  title: "Storage";";
description: "Scalable storage solutions from SSDs to large-scale enterprise storage systems";";
icon: <HardDrive className="h-10 w-10" /> ;
};
{";
  title: "Networking";";
description: "Connectivity solutions including switches,  routers, and network security devices";";
icon: <Network className="h-10 w-10" /> ;
};
{";
  title: "24x7x365 Support";";
description: "Around-the-clock technical support with rapid response times guaranteed";";
icon: <Clock className="h-10 w-10" /> ;
};
{";
  title: "Recycling Services";";
description: "Sustainable disposal and recycling of IT equipment following eco-friendly practices";";
icon: <Recycle className="h-10 w-10" /> ;
};
{;
  export function GlobalServiceSection () {";
  return (<section className="py-20 bg-zion-blue" id="global-services" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto" > Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes </p> </div> </div>) ) ;
}</div> Get Your Free Commercial Proposal </Button> </div> </div> </section>) ;
}"
    </section>);
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  );
}

    </section>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
