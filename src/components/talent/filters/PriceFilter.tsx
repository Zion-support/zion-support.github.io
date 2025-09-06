import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { PriceFilterProps } from '@/types/filters';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function PriceFilter({
  priceRange,
  setPriceRange,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500]);
  };

  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'
      >
        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>

      {expanded && (
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
=======
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD
            aria-label='Hourly rate range'
=======
            aria-label="Hourly rate range"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={[priceRange[0], priceRange[1]]}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            min={50}
            max={200}
            step={5}
            onValueChange={handleChange}
            className='mt-6'          />
=======
            className="mt-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
