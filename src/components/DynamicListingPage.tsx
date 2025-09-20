import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GradientHeading } from "@/components/GradientHeading";,
import { ProductListingCard } from "@/components/ProductListingCard";,
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {filter.label}</label> </div>) )
}</div> </div> Brand </label> <Select value= {selectedBrand}onValueChange= {
  (value: string) => setSelectedBrand (value) "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) )
}</SelectContent> </Select> </div>) "
