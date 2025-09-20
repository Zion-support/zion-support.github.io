import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm setSearchTerm }: SearchFilterProps) {return (<div className='mb-6'>
          onChange = {(e) => setSearchTerm(e.target.value)}