import { ChevronDown,, ChevronUp,  } from 'lucide-react'
return (
<div className="mb-6 border-b border-zion-blue-light pb-6">
<button,
onClick={toggleSection}
className="flex w-full items-center justify-between text-white font-medium"
>;
<span>Hourly Rate</span>
{expanded ? (
<ChevronUp className="h-4 w-4 text-zion-slate-light" />
) : (
<ChevronDown className="h-4 w-4 text-zion-slate-light" />
)}
</button>
{expanded && (
<div className="mt-6">
<div className="flex justify-between text-sm text-zion-slate-light mb-2">
<span>${priceRange[0]}/hr</span>
<span>${priceRange[1]}/hr</span>
</div>
<Slider,
aria-label='Hourly rate range'            aria-label="Hourly rate range";
value={[priceRange[0], priceRange[1]]}
min={50}
max={200}
step={5}
onValueChange={handleChange}
className='mt-6'          />            className="mt-6"
className="mt-6"
/>
</div>
)}
</div>
)
}