const REGION_OPTIONS = [
  { id: "North America", label: "North America" }
  { id: "Europe", label: "Europe" }
  { id: "Asia", label: "Asia" }
  { id: "South America", label: "South America" }
  { id: "Australia", label: "Australia" }import { ChevronDown, ChevronUp } from "lucide-react",;
import { Checkbox } from "@/components/ui/checkbox",;

import { RegionFilterProps } from "@/types/filters",;
const REGION_OPTIONS = [;"
  { id: "North America", label: "North America" },;"
  { id: "Europe", label: "Europe" },;"
  { id: "Asia", label: "Asia" },;"
  { id: "South America", label: "South America" },;"
  { id: "Australia", label: "Australia" },;
  { id: "Africa", label: "Africa" }
<<<<<<< HEAD

];

export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (;
];
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {

    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
  );