



=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FraudFiltersProps {

  searchQuery: string
  setSearchQuery: (value: string) => void
  statusFilter: string | null
  setStatusFilter: (value: string | null) => void
  severityFilter: string | null
  setSeverityFilter: (value: string | null) => void
  contentTypeFilter: string | null
  setContentTypeFilter: (value: string | null) => void

  resetFilters: () => void
}
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";

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

  searchQuery;
=======
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>


        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Severities</SelectItem>;
          <SelectItem value="safe">Safe</SelectItem>;
          <SelectItem value="suspicious">Suspicious</SelectItem>;
          <SelectItem value="dangerous">Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;
=======

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Types</SelectItem>;
          <SelectItem value="signup">Signups</SelectItem>;
          <SelectItem value="job">Jobs</SelectItem>;
          <SelectItem value="message">Messages</SelectItem>;
          <SelectItem value="quote">Quotes</SelectItem>;
          <SelectItem value="review">Reviews</SelectItem>;
        </SelectContent>;
      </Select>;


      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
};

export default FraudFilters;
=======
=======      <Button variant="outline" on_click={reset_filters} className="md: w - auto">;
        <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
      </Button>;
    </div>);
}
;

=======

export default FraudFilters;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
