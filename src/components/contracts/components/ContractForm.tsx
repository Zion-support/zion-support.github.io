
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from 'lucide-react'import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { TalentProfile } from "@/types/talent"
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator"
import { generateContract } from "../utils/contractUtils"
import { ProjectDetailsFields } from "./ProjectDetailsFields"
import { PaymentTermsFields } from "./PaymentTermsFields"
import { AdditionalClausesFields } from "./AdditionalClausesFields"
import {logErrorToProduction} from '@/utils/productionLogger'
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required")
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters")
  startDate: z.date({
    required_error: "Start date is required"})
  endDate: z.date().optional()
  paymentTerms: z.enum(["hourly", "fixed", "milestone"])
  paymentAmount: z.string().min(1, "Payment amount is required")
  additionalClauses: z.array(z.string()).optional()})
export type ContractFormValues = z.infer<typeof formSchema>
<<<<<<< HEAD
        values
        talent
        clientName
}

  )
}
=======
        values, 
        talent, 
        clientName, 
  ;
};
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import { Form } from "@/components/ui/form";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { generateContract } from "../utils/contractUtils";
import { ProjectDetailsFields } from "./ProjectDetailsFields";
import { PaymentTermsFields } from "./PaymentTermsFields";
import { AdditionalClausesFields } from "./AdditionalClausesFields";
import {logErrorToProduction} from '@/utils/productionLogger';
const formSchema = z && z.object({;
  projectName: z && z.string().min(1, "Project name is required");
  scopeSummary: z && z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z && z.date({;
    required_error: "Start date is required"}),;
  endDate: z && z.date().optional(),;
  paymentTerms: z && z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z && z.string().min(1, "Payment amount is required");
  additionalClauses: z && z.array(z && z.string()).optional()}),;

export type ContractFormValues = z && z.infer<typeof formSchema>;



        values, ;
        talent, ;
        clientName, ;

}
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}


  )
}
=======

=======
import { useState, useEffect  } from './react';
import { use_form  } from './react - hook - form';
import { zod_resolver  } from '@hookform / resolvers / zod';
import { z  } from './zod';
import { Loader2 } from 'lucide-react'import { Button  } from '@/components / ui / button';
import { Form  } from '@/components / ui / form';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle  } from '@/components / ui / dialog';
import { use_toast  } from '@/hooks / use - toast';
import { TalentProfile  } from '@/types / talent';
import { GeneratedMilestone  } from '@/hooks / useMilestoneGenerator';
import { generate_contract  } from '../utils / contract_utils';
import { ProjectDetailsFields  } from './ProjectDetailsFields';
import { PaymentTermsFields  } from './PaymentTermsFields';
import { AdditionalClausesFields  } from './AdditionalClausesFields';
import {logErrorToProduction} from '@/utils / production_logger';
const form_schema = z.object ({
  project_name: z.string ().min (1, "Project name is required");
  scope_summary: z.string ().min (10, "Scope summary should be at least 10 characters");
  start_date: z.date ({
    required_error: "Start date is required"}),
  end_date: z.date ().optional (),
  payment_terms: z.enum (["hourly", "fixed", "milestone"]);
  payment_amount: z.string ().min (1, "Payment amount is required");
  additional_clauses: z.array (z.string ()).optional ()}),
export type ContractFormValues = z.infer < typeof form_schema>;
        values,
        talent,
        client_name,
}
  );
}

;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
