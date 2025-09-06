<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Server, Clock, MapPin } from './lucide-react';

=======


import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, MapPin } from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

interface ServiceDetailsProps {
  country: string
}
// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)


import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const getDatacenters = (country: string): string[] => {
    const dataCenters: Record<string, string[]> = {;

interface ServiceDetailsProps {
  country: string;
}
<<<<<<< HEAD

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

interface ServiceDetailsProps {;
  country: string;
}

// Component to show service details for the selected country;
export function ServiceDetails(): any ({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
    const dataCenters: Record<string, string[]> = {;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Component to show service details for the selected country;
export /**
 * ServiceDetails - Function description
 */
function ServiceDetails() {
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const get_datacenters = (country: string): string[] => {
    const data_centers: Record < string, string[]> = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"];
      "United Kingdom": ["London", "Manchester", "Birmingham"];
      "Germany": ["Frankfurt", "Berlin", "Munich"];
      "Japan": ["Tokyo", "Osaka"];
      "Australia": ["Sydney", "Melbourne", "Perth"];
      "Singapore": ["Singapore Central"];
      "Canada": ["Toronto", "Montreal", "Vancouver"];
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    const dataCenters: Record<string string[]> = {
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
<<<<<<< HEAD
    }
    return regions[country] |regions["default"]
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD

      // Default for other countries
      "default": ["Major metropolitan areas"]

=======
      // Default for other countries
      "default": ["Major metropolitan areas"]
    }
    return dataCenters[country] |dataCenters["default"]
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    
    return dataCenters[country] || dataCenters["default"]
  },
  
<<<<<<< HEAD


  // Get region-specific image
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
    const regions: Record<string, string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa";
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk";
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany";
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan";
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia";
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore";
      // Default placeholder
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Default for other countries;
      "default": ["Major metropolitan areas"];
    };

    return dataCenters[country] || dataCenters["default"];
  };

  // Get region-specific image;
  const getRegionalImage = (country: string): string => {;
    // In a real app, you'd have specific images for each region;
    const regions: Record<string, string> = {;
      "United States": "https://source && source.unsplash.com/featured/900x700/?datacenter,usa";
      "United Kingdom": "https://source && source.unsplash.com/featured/900x700/?datacenter,uk";
      "Germany": "https://source && source.unsplash.com/featured/900x700/?datacenter,germany";
      "Japan": "https://source && source.unsplash.com/featured/900x700/?datacenter,japan";
      "Australia": "https://source && source.unsplash.com/featured/900x700/?datacenter,australia";
      "Singapore": "https://source && source.unsplash.com/featured/900x700/?datacenter,singapore";
      // Default placeholder;
      "default": "https://source && source.unsplash.com/featured/900x700/?datacenter";
    };

    return regions[country] || regions["default"];
  };

  // Get region-specific instructions;
  const getRegionalInstructions = (country: string): string => {;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones: Record<string, string> = {;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "United States": "EST/CST/PST depending on location";
      "United Kingdom": "GMT/BST";
      "Germany": "CET/CEST";
=======
      // Default for other countries;
      "default": ["Major metropolitan areas"];
    }
;
    return data_centers[country] || data_centers["default"];
  }
;
  // Get region - specific image;
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";
      // Default placeholder;
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";
    }
;
    return regions[country] || regions["default"];
  }
;
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {
      "United States": "EST / CST / PST depending on location";
      "United Kingdom": "GMT / BST";
      "Germany": "CET / CEST";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      "Japan": "JST";
      "Australia": "AEST / ACDT / AWST depending on location";
      "Singapore": "SGT";
<<<<<<< HEAD


=======
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
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"
    }
    return regions[country] |regions["default"]
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
    return regions[country] |regions["default"]
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    },
    
    return regions[country] || regions["default"]
  },
  
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
    const timezone = timeZones[country] |timeZones["default"];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    },
    
    const timezone = timeZones[country] || timeZones["default"],
    
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }
  const datacenters = getDatacenters(country);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
  
  const datacenters = getDatacenters(country),
  
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      "default": "Local timezone";
    };
    const timezone = timeZones[country] || timeZones["default"];
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
           `For remote locations, additional travel fees may apply.`;
  };
<<<<<<< HEAD
<<<<<<< HEAD

  const datacenters = getDatacenters(country);

  return (
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const datacenters = getDatacenters(country);
  return (

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Server, Clock, MapPin } from "lucide-react",;
;
interface ServiceDetailsProps {;
  country:string;
}
;
// Component to show service details for the selected country;
export function ServiceDetails({ country } ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country:string):string[] => {;
    const dataCenters:Record<string string[]> = {;
      "United States":["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],;
      "United Kingdom":["London", "Manchester", "Birmingham"],;
      "Germany":["Frankfurt", "Berlin", "Munich"],;
      "Japan":["Tokyo", "Osaka"],;
      "Australia":["Sydney", "Melbourne", "Perth"],;
      "Singapore":["Singapore Central"],;
      "Canada":["Toronto", "Montreal", "Vancouver"],;
      // Default for other countries;
      "default":["Major metropolitan areas"];
    },;
    ;
    return dataCenters[country] || dataCenters["default"],;
  },;
  ;
  // Get region-specific image;
  const getRegionalImage = (country:string):string => {;
    // In a real app, you'd have specific images for each region;
    const regions:Record<string string> = {;
      "United States":"https://source.unsplash.com/featured/900x700/?datacenter,usa",;
      "United Kingdom":"https://source.unsplash.com/featured/900x700/?datacenter,uk",;
      "Germany":"https://source.unsplash.com/featured/900x700/?datacenter,germany",;
      "Japan":"https://source.unsplash.com/featured/900x700/?datacenter,japan",;
      "Australia":"https://source.unsplash.com/featured/900x700/?datacenter,australia",;
      "Singapore":"https://source.unsplash.com/featured/900x700/?datacenter,singapore",;
      // Default placeholder;
      "default":"https://source.unsplash.com/featured/900x700/?datacenter";
    },;
    ;
    return regions[country] || regions["default"],;
  },;
  ;
  // Get region-specific instructions;
  const getRegionalInstructions = (country:string):string => {;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones:Record<string string> = {;
      "United States":"EST/CST/PST depending on location",;
      "United Kingdom":"GMT/BST",;
      "Germany":"CET/CEST",;
      "Japan":"JST",;
      "Australia":"AEST/ACDT/AWST depending on location",;
      "Singapore":"SGT",;
      "default":"Local timezone";
    },;
    ;
    const timezone = timeZones[country] || timeZones["default"],;
    ;
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
           `For remote locations, additional travel fees may apply.`,;
  },;
  ;
  const datacenters = getDatacenters(country),;
  ;
  return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center">;
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> ;
;
  // Get region - specific image;
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";
      // Default placeholder;
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";
    }
;
    return regions[country] || regions["default"];
  }
;
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {
      "United States": "EST / CST / PST depending on location";
      "United Kingdom": "GMT / BST";
      "Germany": "CET / CEST";
      "Japan": "JST";
      "Australia": "AEST / ACDT / AWST depending on location";
      "Singapore": "SGT";
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;
<<<<<<< HEAD

=======
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg mb-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <img
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />
              Service Locations
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {datacenters.map((dc, idx) => (
                <div
                  key={idx}
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"
                >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Server, Clock, MapPin } from "lucide-react",;
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
    return dataCenters[country] || dataCenters["default"];
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
    return regions[country] || regions["default"];
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
    const timezone = timeZones[country] || timeZones["default"],;
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
           `For remote locations, additional travel fees may apply.`;
  };
  const datacenters = getDatacenters(country);
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center">;
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />;
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;
          <img;
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110";
<<<<<<< HEAD
<<<<<<< HEAD

          />;
        </div>;
<<<<<<< HEAD
=======

=======
          />;
        </div>;
          <img ;
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110";
          />;
        </div>;
        ;
          />;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

          />;
        </div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              {datacenters.map((dc, idx) => (;
                <div;
                  key={idx} ;
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
                >;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  {dc}
                </div>;
              ))}

            </div>;
          </div>;

<<<<<<< HEAD
=======
              {datacenters.map((dc, idx) => (;
                <div ;
                  key={idx} ;
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
                >;
                  {dc}
                </div>;
              ))}
            </div>;
          </div>;
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Instructions;
            </h4>;
            <p className="text-zion-slate-light">;
              {getRegionalInstructions(country)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            </p>;
          </div>;

=======
                  {dc}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />
              Service Instructions
            </h4>
            <p className="text-zion-slate-light">
              {getRegionalInstructions(country)}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </p>
          </div>
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
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
        </p>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
            </p>;
          </div>;
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">;
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>;
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">;
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
<<<<<<< HEAD
=======
      "default": "Local timezone";
    }
=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
                  {dc}
<<<<<<< HEAD
                </div>))}
            </div>;
          </div>;
          <div>;
            <h4 className="text - lg font - medium text - white mb - 2 flex items - center">;
              <Clock className="mr - 2 h - 4 w - 4 text - zion - purple" />;
              Service Instructions;
            </h4>;
            <p className="text - zion - slate - light">;
              {getRegionalInstructions (country)}
            </p>;
          </div>;
          <div className="bg - zion - blue rounded - lg p - 4 border border - zion - blue - light">;
            <h4 className="text - lg font - medium text - white mb - 2">What's Included</h4>;
            <ul className="list - disc list - inside text - zion - slate - light space - y-1">;
              <li > Transportation to your site</li>;
              <li > First hour of onsite technical support</li>;
              <li > Basic hardware diagnosis</li>;
              <li > Network connectivity troubleshooting</li>;
              <li > Equipment installation assistance</li>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                </div>;
              ))}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </ul>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <CardFooter className="border - t border - zion - blue - light pt - 4">;
        <p className="text - sm text - zion - slate - light">;
          For custom enterprise needs or multi - site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;

      <CardFooter className="border-t border-zion-blue-light pt-4">;
        <p className="text-sm text-zion-slate-light">;
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>;
  ),;}
 interface ServiceDetailsProps {
  country: string 
}//Component to show service details for the selected country export function ServiceDetails ({
  country 
}: ServiceDetailsProps) {
  //Get datacenters for regions (simplified - in production this would come from a real database) const getDatacenters = (country: string) : string[] => {
  return dataCenters[country] || dataCenters["default" ];
};
};
}operate during business hours (8AM-6PM $ {
  timezone 
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.` 
};
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4" > <img /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <div key= {
  idx 
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light" > {
  dc 
}</div>) ) 
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>) 
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
