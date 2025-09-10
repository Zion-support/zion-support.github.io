import {useState, useMemo, useCallback} from 'react';';
import {motion, AnimatePresence} from 'framer-motion';';
import {ChevronUp, ChevronDown, Search, Filter, Download, Eye, Edit, Trash2, ArrowUpDown} from 'lucide-react';
import {useVirtualScroll} from "../hooks/useVirtualScroll.jsx";
;
export const AdvancedDataTable = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );'
    // State management''
    const [searchQuery, setSearchQuery] = useState('');