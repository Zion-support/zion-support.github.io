import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {;
  form: UseFormReturn<ContractFormValues>;  form: UseFormReturn<ContractFormValues>;

export default function ProjectDetailsFields() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="ProjectDetailsFields - Zion Tech Group" description="Professional ProjectDetailsFields services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">ProjectDetailsFields</h1>
        <p className="text-gray-300 text-lg">
          Professional ProjectDetailsFields services to help your business grow.
        </p>
      </div>
    </div>
  )}