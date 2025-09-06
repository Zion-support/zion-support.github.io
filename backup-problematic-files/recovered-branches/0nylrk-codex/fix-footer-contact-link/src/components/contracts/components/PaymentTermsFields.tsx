
import { UseFormReturn } from "react-hook-form"
 from "@/components/ui/
import { Input } from "@/components/ui/
 from "@/components/ui/
import { MilestoneSuggestions } from "@/components/projects/milestones/
import { TalentProfile } from "@/types/
import { GeneratedMilestone } from "@/hooks/
import { ContractFormValues } from "./
            projectType={form.getValues("projectName").includes("AI") ? "AI/
 <FormControl> <SelectTrigger> <SelectValue placeholder="Select payment terms" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="hourly" >Hourly Rate</SelectItem> <SelectItem value="fixed" >Fixed Price