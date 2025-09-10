import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
const Pagination: React.FC<PaginationProps> = ({ 
  currentPage,
  totalPages,
  baseUrl,
  className = "" 