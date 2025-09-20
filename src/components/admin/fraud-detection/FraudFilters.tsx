
import React from "react",
import { Input,,  } from "@/components/ui/input",
import { Button,,  } from "
import { Select,,, SelectContent,,, SelectItem,,, SelectTrigger,,, SelectValue,,  } from "
import { Search,,, Filter,,  } from 'lucide-react'

interface FraudFiltersProps {
resetFilters: () => void,
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
