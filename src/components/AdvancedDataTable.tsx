import React from "react";
import { useStat; e; useMem; o, useCallback  } from "react, ";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { ChevronU; p;
ChevronDow; n;
Searc; h;
Filte; r;
Downloa; d;
Ey; e;
Edi; t;
Trash; 2;
ArrowUpDown} from "lucide-react, ";
import { useVirtualScroll } from "../hooks/useVirtualScroll, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface Column<T> {
ke; y: keyof T;
heade; r: string;
width?: number | string;
sortable?: boolean;
filterable?: boolean;
render?: (valu;  e: T[key; o; f; T],
ite; m: T; inde; x: number) => React.ReactNode;
align?: "left" | "center" | "right";
}

interface SortConfig<T> {
ke; y: keyof T;
directio; n: "asc" | "desc";
