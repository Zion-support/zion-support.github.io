<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { TalentProfile } from '@/types/talent';
import { GeneratedMilestone } from '@/hooks/useMilestoneGenerator';
import { generateContract } from '../utils/contractUtils';
import { ProjectDetailsFields } from './ProjectDetailsFields';
import { PaymentTermsFields } from './PaymentTermsFields';
import { AdditionalClausesFields } from './AdditionalClausesFields';
import { logErrorToProduction } from '@/utils/productionLogger';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
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
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required");
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters");
  startDate: z.date({
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"]);
  paymentAmount: z.string().min(1, "Payment amount is required");
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  additionalClauses: z.array(z.string()).optional()}),

export type ContractFormValues = z.infer<typeof formSchema>;

    
  
        values, 
        talent, 
        clientName, 
  
<<<<<<< HEAD
=======
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl">Contract Builder</DialogTitle>
        <DialogDescription>
          Create a professional contract for your project with {talent.full_name}
        </DialogDescription>
      </DialogHeader>
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProjectDetailsFields 
            form={form} 
          />
          
          <PaymentTermsFields 
            form={form}
            handleMilestonesGenerated={handleMilestonesGenerated}
          />
          
          <AdditionalClausesFields 
            form={form}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Contract...
              </>
            ) : (
              "Generate Contract"
            )}
          </Button>
        </form>
      </Form>
      
      <DialogFooter className="gap-2 flex-wrap mt-4">
        <Button 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isGenerating}
        >
          Reset Form
        </Button>
      </DialogFooter>
    </>
  );
<<<<<<< HEAD
}finally {;
  setIsGenerating (false) ;

};
talent.full name ;
}</DialogDescription> </DialogHeader> <ProjectDetailsFields form= {;
  form ;
}/> <PaymentTermsFields form= {;
  form ;
}handleMilestonesGenerated= {;
  handleMilestonesGenerated ;
}/> <AdditionalClausesFields form= {;
  form ";
}/> <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark" disabled= {;
  isGenerating ;
}> {";
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... </>) : ("Generate Contract") ";
}</Button> </form> </Form> <DialogFooter className="gap-2 flex-wrap mt-4" > <Button > Reset Form </Button> </DialogFooter> </>) ;
}"
=======

<<<<<<< HEAD
    
<<<<<<< HEAD

  

<<<<<<< HEAD
  

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
