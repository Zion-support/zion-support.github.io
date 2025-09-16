} import {
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;




import { TalentRateRecommender } from "@/components/pricing/TalentRateRecommender",
import { Card, CardContent } from "@/components/ui/card",








interface RateOptimizationSectionProps {
  control: Control<any>,
  setValue: UseFormSetValue<any>,
  skills: string[],
  yearsExperience: number,






          </FormItem>)}
      />;
      <Card>;
        <CardContent className="pt - 4">;
          <TalentRateRecommender;
            skills = {skills, }
            years_experience = {years_experience, }
            location = {location, }
            onSuggestionApplied = {handleSuggestionApplied, }
            rate_type = {rate_type, }
          />;
        </CardContent>;
      </Card>;
    </div>);
}

"},
}


