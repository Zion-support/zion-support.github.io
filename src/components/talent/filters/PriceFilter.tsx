
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react'
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
=======
import { Slider } from &quot;@/components/ui/slider&quot;;
import { PriceFilterProps } from &quot;@/types/filters&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  },
=======

export function PriceFilter(_{_priceRange, _setPriceRange, _expanded, _toggleSection, _isMobileFilterOpen}: PriceFilterProps) {_const _handleChange = (_values: number[]) => {
    setPriceRange([values[0] || 0, _values[1] || 500]);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
<<<<<<< HEAD
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
=======
        onClick={_toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Hourly Rate</span>
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
            <span>${priceRange[0]}/hr</span>
            <span>${_priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label=&quot;Hourly rate range&quot;
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className=&quot;mt-6&quot;
=======
            aria-label="Hourly rate range"
            value={_[priceRange[0], _priceRange[1]]}
            min={_50}
            max={_200}
            step={_5}
            onValueChange={_handleChange}
            className="mt-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      )}
    </div>
  )
}
