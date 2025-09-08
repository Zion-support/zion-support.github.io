

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, MapPin } from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Server, Clock, MapPin} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",

interface ServiceDetailsProps {
  country: string

}
// Component to show service details for the selected country;
export function ServiceDetails({ country }: ServiceDetailsProps) {}
  // Get datacenters for regions (simplified - in production this would come from a real database)



  


  


    },

    
    const timezone = timeZones[country] || timeZones["default"],
    



  


           `For remote locations, additional travel fees may apply.`;
  };


  const datacenters = getDatacenters(country);


          IT Onsite Service in {country}
        </CardTitle>;

        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}



        </CardDescription>;

      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;



          />;
        </div>;



                >;



}
;



