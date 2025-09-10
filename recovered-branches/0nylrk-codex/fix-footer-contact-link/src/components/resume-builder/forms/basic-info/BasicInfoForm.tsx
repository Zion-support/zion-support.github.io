import React, { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {Card} from "@/components/ui/card";
import {RateOptimizationSection} from "../RateOptimizationSection";
import {basicInfoSchema, BasicInfoFormData} from "./schema";
import {PersonalInfoFields} from "./PersonalInfoFields";
import {ContactFields} from "./ContactFields";
export interface BasicInfoFormProps {;
  skills?: string[];
  yearsExperience?: number;
  onComplete?: () => void;
}

export function BasicInfoForm(): any ({;
import React, { useState, useEffect } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form",
import { Card } from "@/components/ui/card",
import { RateOptimizationSection } from "../RateOptimizationSection",
import { basicInfoSchema, BasicInfoFormData } from "./schema",
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ContactFields } from "./ContactFields";
export interface BasicInfoFormProps {
  }
  resumeId?: string;
  initialData?: Partial<BasicInfoFormData>;
  skills?: string[];

  resumeId?: string,
  initialData?: Partial<BasicInfoFormData>,
  onSave: (data: BasicInfoFormData) => void,
  initialData = {}
  onSave;
  skills = [];
  yearsExperience = 0;
  resumeId,
  initialData = {},
  onSave,
  skills = [],
  yearsExperience = 0,
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any)import React, { useState, useEffect } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { Button } from "@/components/ui/button",;
import { Form } from "@/components/ui/form",;
import { Card } from "@/components/ui/card",;
import { RateOptimizationSection } from "../RateOptimizationSection",;
import { basicInfoSchema, BasicInfoFormData } from "./schema",;
import { PersonalInfoFields } from "./PersonalInfoFields",;

import { ContactFields } from "./ContactFields",;
export interface BasicInfoFormProps {;
  }
  resumeId?: string,;
  initialData?: Partial<BasicInfoFormData>,;
  "onSave": ("data": BasicInfoFormData) => void,;
  skills?: string[],;
  yearsExperience?: number,;
  onComplete?: () => void;
}
;

  yearsExperience = 0,;  }, [initialData, form]),;

  const handleSubmit = (data: BasicInfoFormData) => {;
    onSave(data),;
    if (onComplete) {;
      }
      onComplete();
    }


            <h3 className="text-lg font-medium mb-4">Rate Information</h3>;
            <RateOptimizationSection

              control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}

              yearsExperience={yearsExperience || 0}

  }, [initialData, form]);
  const handleSubmit = (data: BasicInfoFormData) => {
    onSave(data)
    if (onComplete) {
      onComplete()
    }
  }
  };
  const handleSubmit = ("data": BasicInfoFormData) => {;
    }
    onSave(data),;
    if (onComplete) {;
      }
      onComplete();
    }
  }
        }
      });
    }
  }, [initialData, form]);
    }
  }
return (;
            <RateOptimizationSection,
control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}
              yearsExperience={yearsExperience |0}
              yearsExperience={yearsExperience || 0}
              rateType="hourly"
            />
          </div>
        </Card>"
        <div className="flex justify-end">"

