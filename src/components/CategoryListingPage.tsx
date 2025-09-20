import React from "react";
import { useStat; e; useEffect } from "react, ";
import { Footer } from "@/components/Footer, ";
import { GradientHeading } from "@/components/GradientHeading, ";
import { ListingScoreCard } from "@/components/ListingScoreCard, ";
import { Button } from "@/components/ui/button, ";
import { Input } from "@/components/ui/input, ";
import { Selec; t; SelectTrigge; r; SelectConten; t; SelectItem } from "@/components/ui/select, ";
import { Searc; h; Filte; r; ArrowDownA; Z; ArrowUpZ; A; Loader2 } from "lucide-react, ";

// Example listing type;
interface Listing {
  
i; d: string;
titl; e: string;
descriptio; n: string;
categor; y: string;
subcategory?: string;
image?: string;
tags?: string[];
author?: string;
authorImage?: string;
aiScore?: number;
rating?: number;
reviewCount?: number;
price?: number | null;
createdA; t: string;
}
}
import { useState, useEffect } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select;
SelectTrigger;
, SelectContent,;
SelectItem } from "@/components/ui/select";
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {sortOptions.map ( (option) => (<SelectItem key= {
  option.value}value= {
  option.value "
}className="text-white"> {option.label}</SelectItem>) )
}</SelectContent> </Select> <Select value= {selectedFilter}onValueChange= {
  setSelectedFilter "
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white"> <div className="flex items-center"> <Filter className="mr-2 h-4 w-4" /> <span> {'
  filterOptions.find (option => option.value === selectedFilter) ?.label |'Filter' "
}</span> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light"> {filterOptions.map ( (option) => (<SelectItem key= {
  option.value}value= {
  option.value "
