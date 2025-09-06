import React, { useState, useEffect, useRef, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Input } from "@/components/ui/
import { AutocompleteSuggestions } from "@/components/search/
import { SearchSuggestion } from "@/types/
import { useDebounce } from "@/hooks/
import { useRouter } from "next/
import { slugify } from "@/lib/
          className="absolute left-3 top-1/2 transform -translate-y-1/
            className="absolute right-3 top-1/2 transform -translate-y-1/
 <div className="relative flex items-center w-full" > 
</div> <AutocompleteSuggestions /> 