
import React from "react";;
import { Button } from "@/components/ui/button";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { SortDesc, ChevronDown } from "lucide-react";
import { DropdownMenu;
, , DropdownMenuContent;
, , DropdownMenuItem;
, , DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface SortDropdownProps {setSortOption: (option: string) => void}
                : ''            }`}        {SORT_OPTIONS.map((option) => (<DropdownMenuItem
key = {option.value}
            onClick = {() => setSortOption(option.value)}