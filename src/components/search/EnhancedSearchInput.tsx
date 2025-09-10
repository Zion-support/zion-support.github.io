import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { SearchSuggestion } from "@/types/search";
export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {