
import { ChevronDown, ChevronUp } from "lucide-react",
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
  },

export function PriceFilter(_{_priceRange, _setPriceRange, _expanded, _toggleSection, _isMobileFilterOpen}: PriceFilterProps) {_const _handleChange = (_values: number[]) => {
    setPriceRange([values[0], _values[1]]);};

  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-6&quot;>
          <div className=&quot;flex justify-between text-sm text-zion-slate-light mb-2&quot;>            <span>${priceRange[0]}/hr</span>
            <span>${_priceRange[1]}/hr</span>
          </div>
          <Slider 
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className=&quot;mt-6&quot;          />
        </div>
      )}
    </div>
  )
}
