import React, { useState; useEffect; useRef } from "react;";
import { Search; X; ArrowDown } from "lucide-react, ";

interface SearchSuggestion {id: string; title: string; type: "service" | "talent" | "equipment";
}
}
description?: string};
interface EnhancedSearchInputProps {placeholder?: string;
onSearch?: (query: string) => void;
}
