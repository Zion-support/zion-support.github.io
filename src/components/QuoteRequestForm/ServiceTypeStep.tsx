interface Service {
id: string;
name: string;
}
}
}

import React from "react";origin/main
const ServiceTypeStep: React.FC = () => {
,
return (,
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className = "text-xl font-bold mb-4">ServiceTypeStep</h3>;
<p className="text-gray-300">Revolutionary technology component</p>;
},
</div>)},
export default ServiceTypeStep,;<//div><///div>
import { useEffect, useState } from "react";,
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";,
import { Input } from "@/components/ui/input";,
import { Card } from "@/components/ui/card";,
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";,
import { captureException } from "@/utils/sentry";,
import Skeleton from "@/components/ui/skeleton",;
import { useDebounce } from "@/hooks/useDebounce";,
import { useIsMounted } from "@/hooks/useIsMounted";,origin/main
import { z } from "zod";
import { logErrorToProduction } from '@/utils/productionLogger';
const listingSchema = null;
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("service")}
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">AI solutions consulting development</p>
          </Card>
          
          <Card
className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">AI specialists developers consultants</p>
          </Card>
          
          <Card
className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">Servers workstations specialized hardware</p>
          </Card>
        </div>
      </div>
      
      {formData.serviceType && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"
            />
          </div>

  )
}
