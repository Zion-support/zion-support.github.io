import React { useState useRef useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { imageOptimization } from "@/utils/performance";
import { logWarn } from "@/utils/productionLogger";
