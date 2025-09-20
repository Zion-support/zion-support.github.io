
import React from "react",
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTriggerSelectValue } from "@/components/ui/select";
import { SearchFilter } from 'lucide-react';

interface FraudFiltersProps {
resetFilters: () => void}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
