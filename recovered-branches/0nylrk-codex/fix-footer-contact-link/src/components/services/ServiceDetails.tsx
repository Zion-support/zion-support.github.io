<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Server, Clock, MapPin } from './lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
interface ServiceDetailsProps {
  country: string
}
// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)

  const getDatacenters = (country: string): string[] => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ServiceDetailsProps {
  country: string;
}

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

interface ServiceDetailsProps {;
  country: string;
}

<<<<<<< HEAD
// Component to show service details for the selected country;
export function ServiceDetails(): any ({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
=======

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Server, Clock, MapPin } from './lucide-react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, MapPin } from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

interface ServiceDetailsProps {
  country: string
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";"
import { Server, Clock, MapPin } from "lucide-react";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Server, Clock, MapPin} from "lucide-react";"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Server, Clock, MapPin } from "lucide-react",

interface ServiceDetailsProps {};
  country: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
// Component to show service details for the selected country;
export function ServiceDetails({ country }: ServiceDetailsProps) {}
  // Get datacenters for regions (simplified - in production this would come from a real database)

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const getDatacenters = (country: string): string[] => {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const dataCenters: Record<string, string[]> = {;

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";

interface ServiceDetailsProps {;

  country: string;
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  country: string;
}

// Component to show service details for the selected country;
export function ServiceDetails(): any ({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
    const dataCenters: Record<string, string[]> = {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Component to show service details for the selected country;
export /**;
 * ServiceDetails - Function description;
 */
function ServiceDetails() {}
  // Get datacenters for regions (simplified - in production this would come from a real database);
const get_datacenters = (country: string): string[] => {
<<<<<<< HEAD
<<<<<<< HEAD
    const data_centers: Record < string, string[]> = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"];
      "United Kingdom": ["London", "Manchester", "Birmingham"];
      "Germany": ["Frankfurt", "Berlin", "Munich"];
      "Japan": ["Tokyo", "Osaka"];
      "Australia": ["Sydney", "Melbourne", "Perth"];
      "Singapore": ["Singapore Central"];

      "Canada": ["Toronto", "Montreal", "Vancouver"];

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const dataCenters: Record<string string[]> = {
=======
    const data_centers: Record < string, string[]> = {    const dataCenters: Record<string string[]> = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    const data_centers: Record < string, string[]> = {    const dataCenters: Record<string string[]> = {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "Canada": ["Toronto", "Montreal", "Vancouver"];

    const dataCenters: Record<string string[]> = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      // Default for other countries
      "default": ["Major metropolitan areas"]

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
=======
    }
    return regions[country] |regions["default"]
  }    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======

    const dataCenters: Record<string string[]> = {"
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],"
      "United Kingdom": ["London", "Manchester", "Birmingham"],"
      "Germany": ["Frankfurt", "Berlin", "Munich"],"
      "Japan": ["Tokyo", "Osaka"],"
      "Australia": ["Sydney", "Melbourne", "Perth"],"
      "Singapore": ["Singapore Central"],"
      "Canada": ["Toronto", "Montreal", "Vancouver"],

    },
    "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return dataCenters[country] || dataCenters["default"]
  },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

    }
    return regions[country] |regions["default"]
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Default for other countries;"
      "default": ["Major metropolitan areas"];
    };
"
    return dataCenters[country] || dataCenters["default"];
  };

  // Get region-specific image;
  const getRegionalImage = (country: string): string => {;
    // In a real app, you'd have specific images for each region;
    const regions: Record<string, string> = {;"
      "United States": "https://source && source.unsplash.com/featured/900x700/?datacenter,usa";"
      "United Kingdom": "https://source && source.unsplash.com/featured/900x700/?datacenter,uk";"
      "Germany": "https://source && source.unsplash.com/featured/900x700/?datacenter,germany";"
      "Japan": "https://source && source.unsplash.com/featured/900x700/?datacenter,japan";"
      "Australia": "https://source && source.unsplash.com/featured/900x700/?datacenter,australia";"
      "Singapore": "https://source && source.unsplash.com/featured/900x700/?datacenter,singapore";
      // Default placeholder;"
      "default": "https://source && source.unsplash.com/featured/900x700/?datacenter";
    };
"
    return regions[country] || regions["default"];
  };

  // Get region-specific instructions;
  const getRegionalInstructions = (country: string): string => {;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones: Record<string, string> = {;
"
      "United States": "EST/CST/PST depending on location";"
      "United Kingdom": "GMT/BST";"
      "Germany": "CET/CEST";

      // Default for other countries;"
      "default": ["Major metropolitan areas"];
    }
;"
    return data_centers[country] || data_centers["default"];
  }
;
  // Get region - specific image;
  const getRegionalImage = (country: string): string => {'
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {"
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";"
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";"
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";"
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";"
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";"
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";
      // Default placeholder;"
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";
    }
;"
    return regions[country] || regions["default"];
  }
;
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {}
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {"
      "United States": "EST / CST / PST depending on location";"
      "United Kingdom": "GMT / BST";"
      "Germany": "CET / CEST";
"
      "Japan": "JST";"
      "Australia": "AEST / ACDT / AWST depending on location";"
      "Singapore": "SGT";

    }"
    return regions[country] |regions["default"]
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    "
    return regions[country] || regions["default"]
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

    },
    "
    const timezone = timeZones[country] || timeZones["default"],

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
=======

    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +`
           `Response times are typically within 4 hours for metropolitan areas. ` +`
           `Please have site access permissions and contact details ready for our technicians. ` +`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
           `For remote locations, additional travel fees may apply.`

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },

  const datacenters = getDatacenters(country),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>"
        <CardTitle className="text-white flex items-center">"
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />

=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "default": "Local timezone";
    };"
    const timezone = timeZones[country] || timeZones["default"];`
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;`
           `Response times are typically within 4 hours for metropolitan areas. ` +;`
           `Please have site access permissions and contact details ready for our technicians. ` +;`
=======
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />
      "default": "Local timezone";
    };
    const timezone = timeZones[country] || timeZones["default"];
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;
           `Response times are typically within 4 hours for metropolitan areas. ` +;
           `Please have site access permissions and contact details ready for our technicians. ` +;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
           `For remote locations, additional travel fees may apply.`;
  };

  const datacenters = getDatacenters(country);
return (
"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Server, Clock, MapPin } from "lucide-react",;
;
interface ServiceDetailsProps {;
  country:string;
}
;
// Component to show service details for the selected country;
export function ServiceDetails() { return null; }
    },;
    ;"
    return dataCenters[country] || dataCenters["default"],;
  },;
  ;
  // Get region-specific image;
const getRegionalImage = (country:string):string => {;'
    // In a real app, you'd have specific images for each region;
    const regions:Record<string string> = {;"
      "United States":"https://source.unsplash.com/featured/900x700/?datacenter,usa",;"
      "United Kingdom":"https://source.unsplash.com/featured/900x700/?datacenter,uk",;"
      "Germany":"https://source.unsplash.com/featured/900x700/?datacenter,germany",;"
      "Japan":"https://source.unsplash.com/featured/900x700/?datacenter,japan",;"
      "Australia":"https://source.unsplash.com/featured/900x700/?datacenter,australia",;"
      "Singapore":"https://source.unsplash.com/featured/900x700/?datacenter,singapore",;
      // Default placeholder;"
      "default":"https://source.unsplash.com/featured/900x700/?datacenter";
    },;
    ;"
    return regions[country] || regions["default"],;
  },;
  ;
  // Get region-specific instructions;
  const getRegionalInstructions = (country:string):string => {;
    // In a real implementation, this would be much more detailed and specific;
const timeZones:Record<string string> = {;"
      "United States":"EST/CST/PST depending on location",;"
      "United Kingdom":"GMT/BST",;"
      "Germany":"CET/CEST",;"
      "Japan":"JST",;"
      "Australia":"AEST/ACDT/AWST depending on location",;"
      "Singapore":"SGT",;"
      "default":"Local timezone";
    },;
    ;"
    const timezone = timeZones[country] || timeZones["default"],;
    ;`
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;`
           `Response times are typically within 4 hours for metropolitan areas. ` +;`
           `Please have site access permissions and contact details ready for our technicians. ` +;`
           `For remote locations, additional travel fees may apply.`,;
  },;
  ;
  const datacenters = getDatacenters(country),;
  ;
  return (;
"
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;"
        <CardTitle className="text-white flex items-center">;"
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> ;
;
  // Get region - specific image;
  const getRegionalImage = (country: string): string => {'
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {"
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";"
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";"
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";"
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";"
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";"
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";
      // Default placeholder;"
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";
    }
;"
    return regions[country] || regions["default"];
  }
;
  // Get region - specific instructions;
const getRegionalInstructions = (country: string): string => {}
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {"
      "United States": "EST / CST / PST depending on location";"
      "United Kingdom": "GMT / BST";"
      "Germany": "CET / CEST";"
      "Japan": "JST";"
      "Australia": "AEST / ACDT / AWST depending on location";"
      "Singapore": "SGT";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          IT Onsite Service in {country}
        </CardTitle>;"
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}

        </CardDescription>;
</CardHeader>;"
      <CardContent className="space-y-4">;"
        <div className="overflow-hidden rounded-lg mb-4">;

          <img;
            src={getRegionalImage(country)}`
            alt={`Datacenter in ${country}`}"
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Server, Clock, MapPin } from "lucide-react",;
interface ServiceDetailsProps {;
  country: string;
}
;
// Component to show service details for the selected country;
export function ServiceDetails() { return null; }
    },;"
    return dataCenters[country] || dataCenters["default"];
  },;
  // Get region-specific image;
  const getRegionalImage = (country: string): string => {;'
    // In a real app, you'd have specific images for each region;
    const regions: Record<string string> = {;"
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",;"
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",;"
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",;"
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",;"
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",;"
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",;
      // Default placeholder;"
      "default": "https://source.unsplash.com/featured/900x700/?datacenter";
    },;"
    return regions[country] || regions["default"];
  },;
  // Get region-specific instructions;
  const getRegionalInstructions = (country: string): string => {;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones: Record<string string> = {;"
      "United States": "EST/CST/PST depending on location",;"
      "United Kingdom": "GMT/BST",;"
      "Germany": "CET/CEST",;"
      "Japan": "JST",;"
      "Australia": "AEST/ACDT/AWST depending on location",;"
      "Singapore": "SGT",;"
      "default": "Local timezone";
    },;"
    const timezone = timeZones[country] || timeZones["default"],;`
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +;`
           `Response times are typically within 4 hours for metropolitan areas. ` +;`
           `Please have site access permissions and contact details ready for our technicians. ` +;`
           `For remote locations, additional travel fees may apply.`;
  };
  const datacenters = getDatacenters(country);
  return (;"
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;"
        <CardTitle className="text-white flex items-center">;"
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />;
          IT Onsite Service in {country}
        </CardTitle>"
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;"
      <CardContent className="space-y-4">;"
        <div className="overflow-hidden rounded-lg mb-4">;
          <img;
            src={getRegionalImage(country)}`
            alt={`Datacenter in ${country}`}"
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110";

          />;
        </div>;
"
        <div className="space-y-4">;
          <div>;"
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;"
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;"
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;

          <img
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"

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

          />;
        </div>;

          />;
        </div>;
        <div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {datacenters.map((dc, idx) => (;
                <div;
                  key={idx} ;"
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";
<<<<<<< HEAD
                >;

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {dc}
                </div>;
=======
                >;                </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                >;                </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                >;

                  {dc}
                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              ))}

            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD

          <div>;"
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;"
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Instructions;
            </h4>;"
            <p className="text-zion-slate-light">;
              {getRegionalInstructions(country)}

            </p>
          </div>"
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">'"
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>"

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
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Instructions;
            </h4>;
            <p className="text-zion-slate-light">;
              {getRegionalInstructions(country)}
            </p>;
          </div>;

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
            </p>
          </div>
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">
"
  const getDatacenters = (country: string): string[] => {
    const dataCenters: Record<string, string[]> = {;
</string>
    const data_centers: Record < string, string[]> = {"
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"];""
      "United Kingdom": ["London", "Manchester", "Birmingham"];""
      "Germany": ["Frankfurt", "Berlin", "Munich"];""
      "Japan": ["Tokyo", "Osaka"];""
      "Australia": ["Sydney", "Melbourne", "Perth"];""
      "Singapore": ["Singapore Central"];""
      "Canada": ["Toronto", "Montreal", "Vancouver"];"
    const dataCenters: Record<string string[]> = {
    const regions: Record<string, string> = {
    const regions: Record<string, string> = {;
    const timeZones: Record<string, string> = {;
    const regions: Record < string, string> = {"
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";""
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";""
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";""
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";""
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";""
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";"
      // Default placeholder;"
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";"
;"
    return regions[country] || regions["default"];"
;
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {"
      "United States": "EST / CST / PST depending on location";""
      "United Kingdom": "GMT / BST";""
      "Germany": "CET / CEST";""
      "Japan": "JST";""
      "Australia": "AEST / ACDT / AWST depending on location";""
      "Singapore": "SGT";"
    }"
    return regions[country] |regions["default"]"
    },
    return regions[country] || regions["default"]"

  // Get region-specific instructions;
    // In a real implementation, this would be much more detailed and specific;
    const timeZones: Record<string string> = {
</string>"
    <Card className="bg-zion-blue-dark border-zion-blue-light">"

      <CardHeader>
        <CardTitle className="text-white flex items-center">"
          <Server className="mr-2 h-5 w-5 text-zion-cyan" />"

    const dataCenters:Record<string string[]> = {;
    const regions:Record<string string> = {;
    const timeZones:Record<string string> = {;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;"

      <CardHeader>;
        <CardTitle className="text-white flex items-center">;"
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> ;"

      // Default placeholder;"
  // Get region - specific instructions;
    // In a real implementation, this would be much more detailed and specific;
          IT Onsite Service in {country}
        <CardDescription className="text-zion-slate-light">;"

      <CardContent className="space-y-4">;"
        <div className="overflow-hidden rounded-lg mb-4">;"
</div>
          <img;
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}"
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Server, Clock, MapPin } from "lucide-react",;"
interface ServiceDetailsProps {;
// Component to show service details for the selected country;
export function ServiceDetails({ country }: ServiceDetailsProps) {;
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const getDatacenters = (country: string): string[] => {;
</img>
    const dataCenters: Record<string string[]> = {;
    const regions: Record<string string> = {;
    const timeZones: Record<string string> = {;

          <Server className="mr-2 h-5 w-5 text-zion-cyan" />;"

        <CardDescription className="text-zion-slate-light">"

            src={getRegionalImage(country)}`;
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110";"
          />;
        </div>;
        </div>;"
        <div className="space-y-4">;"
          <div>;
</div>"
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;"
</h4>"
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;"

            </h4>;"
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;"
                <div;
                  key={idx} ;"
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light";"
                >;
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;"

            <p className="text-zion-slate-light">;"
</p>
            </p>;
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">"
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">
              <li>Transportation to your site</li>
              <li>First hour of onsite technical support</li>
              <li>Basic hardware diagnosis</li>
              <li>Network connectivity troubleshooting</li>
              <li>Equipment installation assistance</li>
            </ul>
          </div>
        </div>
</CardContent>"
      <CardFooter className="border-t border-zion-blue-light pt-4">"
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
        </p>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">;
      <CardFooter className="border-t border-zion-blue-light pt-4">"
        <p className="text-sm text-zion-slate-light">"
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">;"
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>;
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">;"
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
<<<<<<< HEAD
;
                  {dc}

                </div>;
              ))}

=======
=======
"default": "Local timezone";
    }
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
                  {dc}
                </div>))}
            <h4 className="text - lg font - medium text - white mb - 2 flex items - center">;"
              <Clock className="mr - 2 h - 4 w - 4 text - zion - purple" />;"

            <p className="text - zion - slate - light">;"
          <div className="bg - zion - blue rounded - lg p - 4 border border - zion - blue - light">;"
            <h4 className="text - lg font - medium text - white mb - 2">What's Included</h4>;
            <ul className="list - disc list - inside text - zion - slate - light space - y-1">;"
              <li > Transportation to your site</li>;
              <li > First hour of onsite technical support</li>;
              <li > Basic hardware diagnosis</li>;
              <li > Network connectivity troubleshooting</li>;
              <li > Equipment installation assistance</li>;

                </div>;
              ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </ul>;
          </div>;
        </div>;
      </CardContent>;
"
      <CardFooter className="border - t border - zion - blue - light pt - 4">;"
        <p className="text - sm text - zion - slate - light">;
          For custom enterprise needs or multi - site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}

}
;
"
      <CardFooter className="border-t border-zion-blue-light pt-4">;"
        <p className="text-sm text-zion-slate-light">;
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>;
  ),;}
interface ServiceDetailsProps {}
  country: string;
}//Component to show service details for the selected country export function ServiceDetails ({};
  country;
}: ServiceDetailsProps) {}
  //Get datacenters for regions (simplified - in production this would come from a real database) const getDatacenters = (country: string) : string[] => {"
  return dataCenters[country] || dataCenters["default" ];
};
};
}operate during business hours (8AM-6PM $ {}
  timezone;`
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.` 
};"
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4" > <img /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <div key= {}
  idx "
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light" > {}
  dc;
}</div>) ) '"
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>) 
}
}
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            </ul>;
      <CardFooter className="border - t border - zion - blue - light pt - 4">;"
        <p className="text - sm text - zion - slate - light">;"
    );"
      <CardFooter className="border-t border-zion-blue-light pt-4">;"
        <p className="text-sm text-zion-slate-light">;"
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader>   <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4" > <img /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <div key= {"
)
}</div>) ) "
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div>  </p>  )""`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
