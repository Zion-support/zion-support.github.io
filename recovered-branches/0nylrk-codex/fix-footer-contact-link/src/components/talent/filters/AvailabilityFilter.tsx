const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" }
  { id: "part_time", label: "Part-time" }
import {ChevronDown, ChevronUp} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {AvailabilityFilterProps} from "@/types/filters";
import { ChevronDown, ChevronUp } from "lucide-react",import { Checkbox } from "@/components/ui/checkbox";
import { AvailabilityFilterProps } from "@/types/filters";
const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" },
  { id: "part_time", label: "Part-time" },
  { id: "project", label: "Project-based" },
];

export function AvailabilityFilter({
  selectedAvailability,
  toggleAvailability,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: AvailabilityFilterProps) {
