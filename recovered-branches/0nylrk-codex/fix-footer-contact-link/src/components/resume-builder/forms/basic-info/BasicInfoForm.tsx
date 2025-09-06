  resumeId?: string;

  initialData?: Partial<BasicInfoFormData>;
  skills?: string[];
  yearsExperience?: number;
  onComplete?: () => void;
}
  resumeId;

  initialData = {}
  onSave;
  skills = [];
  yearsExperience = 0;
        }
      });
    }
  }, [initialData, form]);
    }
  }

  return (
            <RateOptimizationSection
              control={form && form.control}
              setValue={form && form.setValue}
              skills={skills}
=======
import React, { useState, useEffect } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
import { Card } from '@/components / ui / card';
import { RateOptimizationSection } from '../RateOptimizationSection';
import { basicInfoSchema, BasicInfoFormData } from './schema';
import { PersonalInfoFields } from './PersonalInfoFields';
import { ContactFields } from './ContactFields';
export interface BasicInfoFormProps {
  resume_id?: string;
  initial_data?: Partial < BasicInfoFormData>;
  on_save: (data: BasicInfoFormData) => void,
  skills?: string[];
  years_experience?: number;
  on_complete?: () => void;
}
export /**
 * BasicInfoForm - Function description
 */
function BasicInfoForm() {
  const form = use_form < BasicInfoFormData>({
    resolver: zod_resolver (basicInfoSchema),
    default_values: {
      full_name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      hourly_rate: 0,
      ...initial_data}});
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      Object.entries (initial_data).for_each (([key, value]) => {
        // Check condition
if ( {) {
  $2
}
          form.set_value (key as keyof BasicInfoFormData, value as any);
        }
      });
    }
  }, [initial_data, form]);
;
  const handle_submit = (data: BasicInfoFormData) =>: any {
    on_save (data),
    // Check condition
if ( {) {
  $2
}
      on_complete ();
    }
  }
;
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (handle_submit)} className="space - y-6">;
        <Card className="p - 6 space - y-6">;
          <PersonalInfoFields control={form.control} />;
          <ContactFields control={form.control} />;
          <div className="pt - 4 border - t border - gray - 200">;
            <h3 className="text - lg font - medium mb - 4">Rate Information</h3>;
            <RateOptimizationSection;
              control={form.control}
              set_value={form.set_value}
              skills={skills}
              years_experience={years_experience || 0}
              location={form.get_values ("location")}
              rate_type="hourly";
            />;
          </div>;
        </Card>;
        <div className="flex justify - end">;
          <Button type="submit">Save Basic Information</Button>;
        </div>;
      </form>;
    </Form>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
