
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider",
import { ExperienceFilterProps } from "@/types/filters",
=======
import { ChevronDown, ChevronUp } from &quot;lucide-react&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { ExperienceFilterProps } from &quot;@/types/filters&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ExperienceFilter({ experienceRange, setExperienceRange, expanded, toggleSection, isMobileFilterOpen }: ExperienceFilterProps) {
  const handleChange = (values: number[]) => {
    setExperienceRange([values[0], values[1]])
  },
=======

export function ExperienceFilter(_{_experienceRange, _setExperienceRange, _expanded, _toggleSection, _isMobileFilterOpen}: ExperienceFilterProps) {_const _handleChange = (_values: number[]) => {
    setExperienceRange([values[0], _values[1]]);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
<<<<<<< HEAD
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Years of Experience</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
=======
        onClick={_toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Years of Experience</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
<<<<<<< HEAD
      {expanded && (
        <div className=&quot;mt-6&quot;>
          <div className=&quot;flex justify-between text-sm text-zion-slate-light mb-2&quot;>
=======
      {_expanded && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <span>{experienceRange[0]} years</span>
            <span>{_experienceRange[1]} years</span>
          </div>
          <Slider 
<<<<<<< HEAD
            value={[experienceRange[0], experienceRange[1]]}
            min={0}
            max={15}
            step={1}
            onValueChange={handleChange}
            className=&quot;mt-6&quot;
=======
            value={_[experienceRange[0], _experienceRange[1]]}
            min={_0}
            max={_15}
            step={_1}
            onValueChange={_handleChange}
            className="mt-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      )}
    </div>
  )
}
