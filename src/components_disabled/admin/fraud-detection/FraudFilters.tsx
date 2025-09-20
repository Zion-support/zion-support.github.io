
import React from "react";;
import { Input } from "@/components/ui/input";,
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface FraudFiltersProps {resetFilters: () => void}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
})