import React, { useState              } from 'react.ts';
import { Link                } from 'react-router-dom.ts';
import { cn                } from '@/lib/utils';
import { NavLink                } from 'react-router-dom.ts';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp                } from 'lucide-react.ts';
export function MainNavigation(...args[]: any):  {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
