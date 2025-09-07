import React from "react";"
import {useHireRequestForm, FormValues} from "./useHireRequestForm";"
import {Button} from "@/components/ui/button";"
import {DialogFooter} from "@/components/ui/dialog";"
import {Form} from "@/components/ui/form";"
import {Loader2} from "lucide-react";"
import {TalentProfile} from "@/types/talent";"
import {PersonalInfoFields} from "./PersonalInfoFields";"
import {ProjectDetailsField} from "./ProjectDetailsField";"
import {TimelineField} from "./TimelineField";"
import {BudgetFields} from "./BudgetFields";"
export interface HireRequestFormProps {;
  }
  "talent": TalentProfile,;
  "onClose": () => void,;
import React from "react","
import { useHireRequestForm, FormValues } from "./useHireRequestForm","
import { Button } from "@/components/ui/button","
import { DialogFooter } from "@/components/ui/dialog","
import { Form } from "@/components/ui/form","
import { Loader2 } from "lucide-react","
import { TalentProfile } from "@/types/talent","
import { PersonalInfoFields } from "./PersonalInfoFields","
import { ProjectDetailsField } from "./ProjectDetailsField","
import { TimelineField } from "./TimelineField";"
import { BudgetFields } from "./BudgetFields";"
export interface HireRequestFormProps {
  }
  "talent": TalentProfile;
    "onClose": () => void,
initialJobTitle?: string;  onSubmitSuccess?: () => void
}
export function HireRequestForm() {
    }
    initialJobTitle;
    userDetails
  });    initialJobTitle;
    userDetails
  });
return (;
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">"
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">"
          <PersonalInfoFields form={form} />
        </div>
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">"
          <BudgetFields form={form} talent={talent} />
        </div>
        <DialogFooter className="pt-4">"
          <Button,
type="button""
variant="outline";"
            onClick={onClose}
            className="border-zion-purple text-zion-purple "hover":bg-zion-purple/10""
            disabled={isSubmitting}
          >
            Cancel
          </Button>