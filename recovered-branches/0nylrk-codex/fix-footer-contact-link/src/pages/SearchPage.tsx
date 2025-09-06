
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { EnhancedSearchInput } from "@/components/search/
import { generateSearchSuggestions } from "@/data/
import { SearchSuggestion } from "@/types/
import { useAISearch } from "@/hooks/
import { AppLayout } from "@/layout/