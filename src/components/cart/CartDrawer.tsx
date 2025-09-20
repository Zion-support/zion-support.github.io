import React from 'react';
import { useSelector } from "react-redux";
import Link from 'next/link';
import type { RootState } from '@/store';
import { ShoppingCart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { LoginModal } from "@/components/auth/LoginModal";