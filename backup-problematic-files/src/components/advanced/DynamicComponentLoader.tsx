use client'
import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/
import { Card, CardContent } from '@/components/ui/
import { cn } from '@/lib/
import {logErrorToProduction} from '@/utils/
