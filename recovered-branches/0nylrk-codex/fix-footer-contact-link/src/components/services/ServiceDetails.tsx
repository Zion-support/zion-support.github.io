<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

========
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Server, Clock, MapPin } from './lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
interface ServiceDetailsProps {
  country: string
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
=======

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, MapPin } from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

interface ServiceDetailsProps {
  country: string
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)

  const getDatacenters = (country: string): string[] => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Server, Clock, MapPin } from './lucide-react';

=======


import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ServiceDetailsProps {
  country: string;
}

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";
interface ServiceDetailsProps {;
  country: string;
}
// Component to show service details for the selected country;
export function ServiceDetails(): any ({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const dataCenters: Record<string, string[]> = {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
// Component to show service details for the selected country;
export /**
 * ServiceDetails - Function description
 */
function ServiceDetails() {
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const get_datacenters = (country: string): string[] => {
    const data_centers: Record < string, string[]> = {
=======
<<<<<<< HEAD
    const dataCenters: Record<string, string[]> = {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"];
      "United Kingdom": ["London", "Manchester", "Birmingham"];
      "Germany": ["Frankfurt", "Berlin", "Munich"];
      "Japan": ["Tokyo", "Osaka"];
      "Australia": ["Sydney", "Melbourne", "Perth"];
      "Singapore": ["Singapore Central"];
      "Canada": ["Toronto", "Montreal", "Vancouver"];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const dataCenters: Record<string string[]> = {
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      // Default for other countries
      "default": ["Major metropolitan areas"]

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Default for other countries
      "default": ["Major metropolitan areas"]
    }
    return dataCenters[country] |dataCenters["default"]
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    
    return dataCenters[country] || dataCenters["default"]
  },
  
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
      "United States": "EST/CST/PST depending on location";
      "United Kingdom": "GMT/BST";
      "Germany": "CET/CEST";
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
      "Japan": "JST";
      "Australia": "AEST / ACDT / AWST depending on location";
      "Singapore": "SGT";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    
    return regions[country] || regions["default"]
  },
  
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
    const timezone = timeZones[country] |timeZones["default"];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
    }
    const timezone = timeZones[country] |timeZones["default"];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },
    
    const timezone = timeZones[country] || timeZones["default"],
    
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  }
  const datacenters = getDatacenters(country);

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
  const datacenters = getDatacenters(country);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const datacenters = getDatacenters(country),
  
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
      "default": "Local timezone";
    };
    const timezone = timeZones[country] || timeZones["default"];
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
           `For remote locations, additional travel fees may apply.`;
  };
  const datacenters = getDatacenters(country);
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center">;
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> ;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
=======
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg mb-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <img
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
          />;
        </div>;
=======
          <img ;
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110";
          />;
        </div>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          />;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {datacenters.map((dc, idx) => (;
                <div;
                  key={idx} ;
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
                >;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  {dc}
                </div>;
              ))}

            </div>;
          </div>;

========
<<<<<<< HEAD
              {datacenters && datacenters.map((dc, idx) => (;
                <div
                  key={idx} 
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light">;
=======
              {datacenters.map((dc, idx) => (;
                <div ;
                  key={idx} ;
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
                >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  {dc}
                </div>;
              ))}
            </div>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Instructions;
            </h4>;
            <p className="text-zion-slate-light">;
              {getRegionalInstructions(country)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
            </p>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">;
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>;
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">;
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
<<<<<<< HEAD
      "default": "Local timezone";
    }
;
    const timezone = time_zones[country] || time_zones["default"];
;
    return `Our technicians in ${country} operate during business hours (8AM - 6PM ${timezone}). ` +;
          `Response times are typically within 4 hours for metropolitan areas. ` +;
          `Please have site access permissions and contact details ready for our technicians. ` +;
          `For remote locations, additional travel fees may apply.`;
  }
;
  const datacenters = get_datacenters (country);
;
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
      <CardHeader>;
        <CardTitle className="text - white flex items - center">;
          <Server className="mr - 2 h - 5 w - 5 text - zion - cyan" />;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text - zion - slate - light">;
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        <div className="overflow - hidden rounded - lg mb - 4">;
          <img;
            src={getRegionalImage (country)}
            alt={`Datacenter in ${country}`}
            className="w - full object - cover h - 48 transform transition - transform duration - 500 hover:scale - 110";
          />;
        </div>;
        <div className="space - y-4">;
          <div>;
            <h4 className="text - lg font - medium text - white mb - 2 flex items - center">;
              <MapPin className="mr - 2 h - 4 w - 4 text - zion - purple" />;
              Service Locations;
            </h4>;
            <div className="grid grid - cols - 2 md:grid - cols - 3 gap - 2">;
              {datacenters.map ((dc, idx) => (
                <div;
                  key={idx}
                  className="bg - zion - blue p - 2 rounded border border - zion - blue - light text - center text - zion - slate - light";
                >;
                  {dc}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
            </ul>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
      <CardFooter className="border - t border - zion - blue - light pt - 4">;
        <p className="text - sm text - zion - slate - light">;
          For custom enterprise needs or multi - site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDetails.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
