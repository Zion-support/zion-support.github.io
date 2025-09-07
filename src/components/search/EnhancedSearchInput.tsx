import React, { useState, useEffect, useRef, useMemo } from "react";
interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}
export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  searchSuggestions,
  placeholder = "Search...",
  className = ""
}: EnhancedSearchInputProps) {
        <Input,
  type="text"
          value={value}
          <button,
  type="button"
            onClick={() => {
              onChange('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
}