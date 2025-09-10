import React, { useEffect, useRef } from "react";
import { _SearchSuggestion, SearchHighlight } from "@/types/search";
// Helper function to highlight matching text
const _highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if(!searchTerm || searchTerm.length === 0) {
    return { before: "", match: text, after: "" };