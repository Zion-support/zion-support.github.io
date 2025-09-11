<<<<<<< HEAD
<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from 'lucide-react'
import Image from "next/image",
interface ServiceDetailsProps {
  country: string
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Component to show service details for the selected country
export function ServiceDetails({ country }) {
    // Get datacenters for regions (simplified - in production this would come from a real database)
    const _getDatacenters = (_country) => {
        const _dataCenters = {
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, MapPin } from "lucide-react";
// Component to show service details for the selected country
export function ServiceDetails(_{ country }) {
    // Get datacenters for regions (simplified - in production this would come from a real database)
    const getDatacenters = (country) => {
        const dataCenters = {
>>>>>>> origin/clean-error-fixing-automation
            "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
            "United Kingdom": ["London", "Manchester", "Birmingham"],
            "Germany": ["Frankfurt", "Berlin", "Munich"],
            "Japan": ["Tokyo", "Osaka"],
            "Australia": ["Sydney", "Melbourne", "Perth"],
            "Singapore": ["Singapore Central"],
            "Canada": ["Toronto", "Montreal", "Vancouver"],
            // Default for other countries
            "default": ["Major metropolitan areas"]
        };
        return dataCenters[country] || dataCenters["default"];
    };
    // Get region-specific image
<<<<<<< HEAD
=======
// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)

  const getDatacenters = (country: string): string[] => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const dataCenters: Record<string, string[]> = {
      'United States': [
        'New York'
        'Los Angeles'
        'Chicago'
        'Dallas'
        'Seattle'
      ]
      'United Kingdom': ['London', 'Manchester', 'Birmingham']
      Germany: ['Frankfurt', 'Berlin', 'Munich']
      Japan: ['Tokyo', 'Osaka']
      Australia: ['Sydney', 'Melbourne', 'Perth']
      Singapore: ['Singapore Central']
      Canada: ['Toronto', 'Montreal', 'Vancouver']
      // Default for other countries
      default: ['Major metropolitan areas']
    }
    return (
      dataCenters[country] |
      dataCenters['default'] |['Major metropolitan areas']
    )
  }
  // Get region-specific image
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
    const regions: Record<string, string> = {
      'United States':
        'https://source.unsplash.com/featured/900x700/?datacenter,usa'
      'United Kingdom':
        'https://source.unsplash.com/featured/900x700/?datacenter,uk'
      Germany:
        'https://source.unsplash.com/featured/900x700/?datacenter,germany'
      Japan: 'https://source.unsplash.com/featured/900x700/?datacenter,japan'
      Australia:
        'https://source.unsplash.com/featured/900x700/?datacenter,australia'
      Singapore:
        'https://source.unsplash.com/featured/900x700/?datacenter,singapore'
      // Default placeholder
      default: 'https://source.unsplash.com/featured/900x700/?datacenter'
    }
    return (
      regions[country] |
      regions['default'] |
      'https://source.unsplash.com/featured/900x700/?datacenter'
    )
  }
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
<<<<<<< HEAD
    // In a real implementation, this would be much more detailed and specific
    const timeZones: Record<string, string> = {
      'United States': 'EST/CST/PST depending on location'
      'United Kingdom': 'GMT/BST'
      Germany: 'CET/CEST'
      Japan: 'JST'
      Australia: 'AEST/ACDT/AWST depending on location'
      Singapore: 'SGT'
      default: 'Local timezone'
=======

    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {
      'United States': 'EST / CST / PST depending on location',
      'United Kingdom': 'GMT / BST',
      Germany: 'CET / CEST',
      Japan: 'JST',
      Australia: 'AEST/ACDT/AWST depending on location',
      Singapore: 'SGT',
      default: 'Local timezone',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const timezone =
      timeZones[country] |timeZones['default'] |'Local timezone'
    return (
      `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
      `Response times are typically within 4 hours for metropolitan areas. ` +
      `Please have site access permissions and contact details ready for our technicians. ` +
      `For remote locations, additional travel fees may apply.`
    )
  }
<<<<<<< HEAD
  const datacenters = getDatacenters(country)

  
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {
      'United States':;
        'https://source.unsplash.com / featured / 900x700/?datacenter, usa',
      'United Kingdom':;
        'https://source.unsplash.com / featured / 900x700/?datacenter, uk',
      Germany:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, germany',
      Japan: 'https://source.unsplash.com / featured / 900x700/?datacenter, japan',
      Australia:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, australia',
      Singapore:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, singapore',
      // Default placeholder;
      default: 'https://source.unsplash.com / featured / 900x700/?datacenter',
    }
    return (
      regions[country] ||;
      regions['default'] ||;
      'https://source.unsplash.com / featured / 900x700/?datacenter');

  }
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {
=======

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Server, Clock, MapPin } from 'lucide-react';
import Image from 'next / image';
interface ServiceDetailsProps {
  country: string;
// Component to show service details for the selected country;
export /**
 * ServiceDetails - Function description
 */
function ServiceDetails() {
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const get_datacenters = (country: string): string[] => {
    const data_centers: Record < string, string[]> = {
      'United States': [;
        'New York',
        'Los Angeles',
        'Chicago',
        'Dallas',
        'Seattle',
      ],
      'United Kingdom': ['London', 'Manchester', 'Birmingham'],
      Germany: ['Frankfurt', 'Berlin', 'Munich'],
      Japan: ['Tokyo', 'Osaka'],
      Australia: ['Sydney', 'Melbourne', 'Perth'],
      Singapore: ['Singapore Central'],
      Canada: ['Toronto', 'Montreal', 'Vancouver'],
      // Default for other countries;
      default: ['Major metropolitan areas'],
    }
    return (
      data_centers[country] ||;
      data_centers['default'] || ['Major metropolitan areas']);

  }
  // Get region-specific image
  const getRegionalImage = (country: string): string => {

    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {
      'United States':;
        'https://source.unsplash.com / featured / 900x700/?datacenter, usa',
      'United Kingdom':;
        'https://source.unsplash.com / featured / 900x700/?datacenter, uk',
      Germany:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, germany',
      Japan: 'https://source.unsplash.com / featured / 900x700/?datacenter, japan',
      Australia:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, australia',
      Singapore:;
        'https://source.unsplash.com / featured / 900x700/?datacenter, singapore',
      // Default placeholder;
      default: 'https://source.unsplash.com / featured / 900x700/?datacenter',
    }
    return (
      regions[country] ||;
      regions['default'] ||;
      'https://source.unsplash.com / featured / 900x700/?datacenter');

  }
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {
      'United States': 'EST / CST / PST depending on location',
      'United Kingdom': 'GMT / BST',
      Germany: 'CET / CEST',
<<<<<<< HEAD
      Japan: 'JST',
      Australia: 'AEST / ACDT / AWST depending on location',
      Singapore: 'SGT',
      default: 'Local timezone',
    }
    const timezone =;
      time_zones[country] || time_zones['default'] || 'Local timezone';

    return (
      `Our technicians in ${country} operate during business hours (8AM - 6PM ${timezone}). ` +;
      `Response times are typically within 4 hours for metropolitan areas. ` +;
      `Please have site access permissions and contact details ready for our technicians. ` +;
      `For remote locations, additional travel fees may apply.`);
  }


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';

    const dataCenters: Record<string string[]> = {
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
      // Default for other countries
      default: ['Major metropolitan areas'],
    }
    return (
      dataCenters[country] ||
      dataCenters['default'] || ['Major metropolitan areas']
    )
  }
      "default": ["Major metropolitan areas"]
    },
    
    return dataCenters[country] || dataCenters["default"] || ["Major metropolitan areas"]
  },
  
  // Get region-specific image
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
    const regions: Record<string string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",
      // Default placeholder
      default: 'https://source.unsplash.com/featured/900x700/?datacenter',
    }
    return (
      regions[country] ||
      regions['default'] ||
      'https://source.unsplash.com/featured/900x700/?datacenter'
    )
  }
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific
    const timeZones: Record<string, string> = {
      'United States': 'EST/CST/PST depending on location',
      'United Kingdom': 'GMT/BST',
      Germany: 'CET/CEST',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      Japan: 'JST',
      Australia: 'AEST/ACDT/AWST depending on location',
      Singapore: 'SGT',
      default: 'Local timezone',
    }
<<<<<<< HEAD
    const timezone = null;
      timeZones[country] || timeZones['default'] || 'Local timezone'
=======
    const timezone =;
      time_zones[country] || time_zones['default'] || 'Local timezone';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return (
      `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
      `Response times are typically within 4 hours for metropolitan areas. ` +
      `Please have site access permissions and contact details ready for our technicians. ` +
      `For remote locations, additional travel fees may apply.`
    )
  }
<<<<<<< HEAD
  const datacenters = getDatacenters(country)
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"
    },
    
    return regions[country] || regions["default"] || "https: //source.unsplash.com/featured/900x700/?datacenter"
  },
  
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific
    const timeZones: Record<string string> = {
      "United States": "EST/CST/PST depending on location",
      "United Kingdom": "GMT/BST",
      "Germany": "CET/CEST",
      "Japan": "JST",
      "Australia": "AEST/ACDT/AWST depending on location",
      "Singapore": "SGT",
      "default": "Local timezone"
    },
    
    const timezone = timeZones[country] || timeZones["default"] || "Local timezone",
    
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`
  },
  
  const datacenters = getDatacenters(country),
  
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';

    const dataCenters: Record<string string[]> = {
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
      // Default for other countries

  // Get region-specific image
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
    const regions: Record<string string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",
      // Default placeholder


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> 
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg mb-4 relative h-48">
          <Image
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="object-cover transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='space-y-4'>
          <div>
        <div className='space-y-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div className='space-y-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <div className="space-y-4">

          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />
              Service Locations
            </h4>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {datacenters.map((dc, idx) => (
                <div
                  key={idx}
                  className='bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light'                >
<<<<<<< HEAD
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
<<<<<<< HEAD
              {datacenters.map((_dc, _idx) => (<div key={idx} className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light">
=======
            className='object-cover transform transition-transform duration-500 hover:scale-110'
            loading='lazy'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {datacenters.map((dc, idx) => (
                <div 
                  key={idx} 
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"
                >
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Server, Clock, MapPin } from 'lucide-react';
import Image from "next/image",;
interface ServiceDetailsProps {;
  country: string;
}
;
// Component to show service details for the selected country;
export function ServiceDetails({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
    const dataCenters: Record<string string[]> = {;
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],;
      "United Kingdom": ["London", "Manchester", "Birmingham"],;
      "Germany": ["Frankfurt", "Berlin", "Munich"],;
      "Japan": ["Tokyo", "Osaka"],;
      "Australia": ["Sydney", "Melbourne", "Perth"],;
      "Singapore": ["Singapore Central"],;
      "Canada": ["Toronto", "Montreal", "Vancouver"],;
      // Default for other countries;
      "default": ["Major metropolitan areas"];
    },;
    return dataCenters[country] || dataCenters["default"] || ["Major metropolitan areas"];
  },;
  // Get region-specific image;
  const getRegionalImage = (country: string): string => {;
    // In a real app, you'd have specific images for each region;
    const regions: Record<string string> = {;
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",;
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",;
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",;
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",;
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",;
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",;
      // Default placeholder;
      "default": "https://source.unsplash.com/featured/900x700/?datacenter";
    },;
    return regions[country] || regions["default"] || "https: //source.unsplash.com/featured/900x700/?datacenter";
  },;
  // Get region-specific instructions;
  const getRegionalInstructions = (country: string): string => {;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones: Record<string string> = {;
      "United States": "EST/CST/PST depending on location",;
      "United Kingdom": "GMT/BST",;
      "Germany": "CET/CEST",;
      "Japan": "JST",;
      "Australia": "AEST/ACDT/AWST depending on location",;
      "Singapore": "SGT",;
      "default": "Local timezone";
    },;
    const timezone = timeZones[country] || timeZones["default"] || "Local timezone",;
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
           `For remote locations, additional travel fees may apply.`;
  };
  const datacenters = getDatacenters(country);

  return (
    <Card className='bg-zion-blue-dark border-zion-blue-light'>;
      <CardHeader>;
        <CardTitle className="text-white flex items-center">;
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4 relative h-48">;
          <Image;
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className='object-cover transform transition-transform duration-500 hover:scale-110'
            loading='lazy'

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        </div>;
        <div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {dc}
                </div>;
              ))}


          


<<<<<<< HEAD
          <div>
            <h4 className='text-lg font-medium text-white mb-2 flex items-center'>
              <Clock className='mr-2 h-4 w-4 text-zion-purple' />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
              {datacenters.map((dc, idx) => (;
                <div;
                  key={idx} ;
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
                >;
                  {dc}
                </div>
              ))}
            </div>
          </div>
          
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  {dc}
                </div>;
              ))}
            </div>
          </div>
          


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />
              Service Instructions
            </h4>
            <p className="text-zion-slate-light">
              {getRegionalInstructions(country)}
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='bg-zion-blue rounded-lg p-4 border border-zion-blue-light'>
            <h4 className='text-lg font-medium text-white mb-2'>
              What's Included
            </h4>
            <ul className='list-disc list-inside text-zion-slate-light space-y-1'>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">


              <li>Transportation to your site</li>
              <li>First hour of onsite technical support</li>
              <li>Basic hardware diagnosis</li>
              <li>Network connectivity troubleshooting</li>
              <li>Equipment installation assistance</li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className='border-t border-zion-blue-light pt-4'>
        <p className='text-sm text-zion-slate-light'>
          For custom enterprise needs or multi-site services in {country}
          please contact our enterprise team for tailored pricing.
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
=======


      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </p>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}operate during business hours (8AM-6PM $ {
  timezone
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.`
}
}operate during business hours (8AM-6PM $ {
  timezone
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;
          </div>;

          <div>;
            <h4 className='text-lg font-medium text-white mb-2 flex items-center'>;
              <Clock className='mr-2 h-4 w-4 text-zion-purple' />;
              Service Instructions;
            </h4>;
            <p className='text-zion-slate-light'>;
              {getRegionalInstructions(country)}
            </p>;
          </div>;

          <div className='bg-zion-blue rounded-lg p-4 border border-zion-blue-light'>;
            <h4 className='text-lg font-medium text-white mb-2'>;
              What's Included;
            </h4>;
            <ul className='list-disc list-inside text-zion-slate-light space-y-1'>;
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
            </ul>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='border-t border-zion-blue-light pt-4'>;
        <p className='text-sm text-zion-slate-light'>;
          For custom enterprise needs or multi-site services in {country},;
          please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>;
  );

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
}operate during business hours (8AM-6PM $ {;
  timezone ;
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.` ;
<<<<<<< HEAD
<<<<<<< HEAD
;

};"
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4 relative h-48" > <Image /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <div key= {
  idx "
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light" > {
  dc
}</div>) ) "
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>)
}'"}
;
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};";
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4 relative h-48" > <Image /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <divkey= {
  idx "
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"> {;
  dc ;
}</div>) ) ";
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>) ;
}'"}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const datacenters = get_datacenters (country);
  return (
    <Card className='bg - zion - blue - dark border - zion - blue - light'>;
      <CardHeader>;
        <CardTitle className='text - white flex items - center'>;
          <Server className='mr - 2 h - 5 w - 5 text - zion - cyan' />;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className='text - zion - slate - light'>;
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        <div className='overflow - hidden rounded - lg mb - 4 relative h - 48'>;
          <Image;
            src = {getRegionalImage (country), }
            alt={`Datacenter in ${country}`}
            className='object - cover transform transition - transform duration - 500 hover:scale - 110';
            loading='lazy';
          />;
        </div>;
        <div className='space - y-4'>;
          <div>;
            <h4 className='text - lg font - medium text - white mb - 2 flex items - center'>;
              <MapPin className='mr - 2 h - 4 w - 4 text - zion - purple' />;
              Service Locations;
            </h4>;
            <div className='grid grid - cols - 2 md:grid - cols - 3 gap - 2'>;
              {datacenters.map ((dc, idx) => (
                <div;
                  key={idx}
                  className='bg - zion - blue p - 2 rounded border border - zion - blue - light text - center text - zion - slate - light'                >;
                  {dc}
                </div>))}
            </div>;
          </div>;
          <div>;
            <h4 className='text - lg font - medium text - white mb - 2 flex items - center'>;
              <Clock className='mr - 2 h - 4 w - 4 text - zion - purple' />;
              Service Instructions;
            </h4>;
            <p className='text - zion - slate - light'>;
              {getRegionalInstructions (country)}
            </p>;
          </div>;
          <div className='bg - zion - blue rounded - lg p - 4 border border - zion - blue - light'>;
            <h4 className='text - lg font - medium text - white mb - 2'>;
              What's Included;
            </h4>;
            <ul className='list - disc list - inside text - zion - slate - light space - y-1'>;
              <li > Transportation to your site</li>;
              <li > First hour of onsite technical support</li>;
              <li > Basic hardware diagnosis</li>;
              <li > Network connectivity troubleshooting</li>;
              <li > Equipment installation assistance</li>;
            </ul>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='border - t border - zion - blue - light pt - 4'>;
        <p className='text - sm text - zion - slate - light'>;
          For custom enterprise needs or multi - site services in {country},
          please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}
}operate during business hours (8AM - 6PM $ {
  timezone;
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.`;
}";
return (<Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space - y-4" > <div className="overflow - hidden rounded - lg mb - 4 relative h - 48" > <Image /> </div> <div className="space - y-4" > <div> <h4 className="text - lg font - medium text - white mb - 2 flex items - center" > <MapPin className="mr - 2 h - 4 w - 4 text - zion - purple" /> Service Locations </h4> <div key= {
  idx ";
}className="bg - zion - blue p - 2 rounded border border - zion - blue - light text - center text - zion - slate - light" > {
  dc;
}</div>) ) ";
}</div> </div> <div> <h4 className="text - lg font - medium text - white mb - 2 flex items - center" > <Clock className="mr - 2 h - 4 w - 4 text - zion - purple" /> Service Instructions </h4> </p> </div> <div className="bg - zion - blue rounded - lg p - 4 border border - zion - blue - light" > <h4 className="text - lg font - medium text - white mb - 2" >What's Included</h4> <ul className="list - disc list - inside text - zion - slate - light space - y-1" > <li > Transportation to your site</li> <li > First hour of onsite technical support</li> <li > Basic hardware diagnosis</li> <li > Network connectivity troubleshooting</li> <li > Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>);
<<<<<<< HEAD
<<<<<<< HEAD
}'"}
=======
}'"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}'"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
