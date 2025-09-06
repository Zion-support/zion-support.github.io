import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/
import { Input } from '@/components/ui/
import { AutocompleteSuggestions } from '@/components/search/
import { fireEvent } from '@/lib/
import { SearchSuggestion } from '@/types/
import { slugify } from '@/lib/
import { useDebounce } from '@/hooks/
import { useOnClickOutside } from '@/hooks/