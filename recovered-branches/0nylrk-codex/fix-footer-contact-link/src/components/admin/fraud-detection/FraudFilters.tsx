
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";

import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

interface FraudFiltersProps {

interface FraudFiltersProps {};
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: string | null;
  setStatusFilter: (value: string | null) => void;
  severityFilter: string | null;
  setSeverityFilter: (value: string | null) => void;
  contentTypeFilter: string | null;
  setContentTypeFilter: (value: string | null) => void;
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({

interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null) => void,;
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({;


  search_query: string,
  setSearchQuery: (value: string) => void,
  status_filter: string | null,
  setStatusFilter: (value: string | null) => void,
  severity_filter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
  reset_filters: () => void;
}


  setSearchQuery;
  status_filter;
  setStatusFilter;
  severity_filter;
  setSeverityFilter;
  contentTypeFilter;


        <SelectTrigger className="w-[180px]">;

}
;

export default FraudFilters;

export default FraudFilters;

export default FraudFilters;
      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;


        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
};


export default FraudFilters;
