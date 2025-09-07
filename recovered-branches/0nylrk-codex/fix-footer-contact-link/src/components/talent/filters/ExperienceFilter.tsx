<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const handleChange = (values: number[]) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ChevronDown, ChevronUp } from "lucide-react";"
import { Slider } from "@/components/ui/slider";"
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({}
  experienceRange,
  setExperienceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: ExperienceFilterProps) {}
  const handleChange = (values: number[]) => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setExperienceRange([values[0], values[1]]);
  };
<<<<<<< HEAD
=======
    setExperienceRange([values[0], values[1]])
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setExperienceRange([values[0], values[1]])
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]])
  },

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleChange = (values: number[]) => {;
<<<<<<< HEAD
    setExperienceRange([values[0], values[1]]);
  };
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]])
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setExperienceRange([values[0], values[1]])
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { ChevronDown, ChevronUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { ExperienceFilterProps } from "@/types/filters";
export function ExperienceFilter({
  experienceRange,
  setExperienceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]]);
  };



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]])
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Years of Experience</span>;
        {expanded ? (;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      </button>;

=======
      </button>;

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Slider } from "@/components/ui/slider",;
import { ExperienceFilterProps } from "@/types/filters",;
;
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen } ExperienceFilterProps) {;
  const handleChange = (values:number[]) => {;
    setExperienceRange([values[0], values[1]]),;
  },;
;
  const handleChange = (values: number[]) => {;
    setExperienceRange([values[0], values[1]]);
  };
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Years of Experience</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {expanded && (;
        <div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>{experienceRange[0]} years</span>;
            <span>{experienceRange[1]} years</span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
<<<<<<< HEAD
          <Slider;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

      {expanded && ("
        <div className="mt-6">"
=======
      </button>

      {expanded && (
        <div className="mt-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <Slider
<<<<<<< HEAD
=======

          <Slider 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          <Slider;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
          <Slider
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Slider
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          </div>;          <Slider
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </div>;          <Slider
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <Slider;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <Slider
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          </div>;          <Slider

import { ChevronDown, ChevronUp } from "lucide-react";""
import { Slider } from "@/components/ui/slider";""
import { ExperienceFilterProps } from "@/types/filters";"

export function ExperienceFilter({
  experienceRange,
  setExperienceRange,
  expanded,

  toggleSection,
  isMobileFilterOpen,)

}: ExperienceFilterProps) {
  const handleChange = (
    setExperienceRange([values[0], values[1]]);) => {
  return $3;}
}
  };





  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium">;"
</button>
        <span>Years of Experience</span>;"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;"

      </button>"
        <div className="mt-6">"
</div>"
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">"
            <span>{experienceRange[0]} years</span>
            <span>{experienceRange[1]} years</span>
          <Slider;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
<<<<<<< HEAD
            className="mt-6"
          />;
        </div>;
      )}
    </div>
  );
}

import { ChevronDown, ChevronUp  } from './lucide-react';
import { Slider  } from '@/components / ui / slider';
=======

import { ChevronDown, ChevronUp  } from './lucide-react';'
import { Slider  } from '@/components / ui / slider';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ExperienceFilterProps  } from '@/types / filters';
export /**;
 * ExperienceFilter - Function description;
 */
function ExperienceFilter() {}
  const handle_change = (values: number[]) =>: any {}
    setExperienceRange ([values[0], values[1]]);
  }
;
<<<<<<< HEAD
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb-6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font-medium";
      >;
        <span > Years of Experience</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate-light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate-light" />)}
      </button>;
      {expanded && (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="mt-6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb-2">;
=======
  return ("
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}"
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Years of Experience</span>;
        {expanded ? ("
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : ("
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && ("
        <div className="mt - 6">;"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <div className="mt-6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb-2">;
            onValueChange={handleChange}"
            className="mt-6""
          />;
</Slider>
        </div>;
    </div>"
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;"
</div>
      <button;
        on_click={toggle_section}"
        className="flex w - full items - center justify - between text - white font - medium";"
      >;
</button>
        <span > Years of Experience</span>;)"
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : ("
</ChevronUp>)"
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}"
</ChevronDown>
      </button>;"
        <div className="mt - 6">;"
</div>"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
          </div>;
          <Slider;
            value={[experience_range[0], experience_range[1]]}
            min={0}
            max={15}
            step={1}
<<<<<<< HEAD
            onValueChange={handle_change}
<<<<<<< HEAD
<<<<<<< HEAD
            className="mt-6";
=======
            onValueChange={handle_change}"
            className="mt - 6";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="mt - 6";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            className="mt-6";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          />;
        </div>)}
    </div>);
}
<<<<<<< HEAD
'"
=======
}
            onValueChange={handleChange}"
            className="mt-6""
          />;

        </div>;
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;"
        on_click={toggle_section}"
        className="flex w - full items - center justify - between text - white font - medium";"
      >;
        <span > Years of Experience</span>;)"
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : ("
)"
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}"

      </button>;"
        <div className="mt - 6">;"
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;"
            <span>{experience_range[0]} years</span>;
            <span>{experience_range[1]} years</span>;
            value={[experience_range[0], experience_range[1]]}
            onValueChange={handle_change}"
            className="mt - 6";"

        </div>)}
    </div>);"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
