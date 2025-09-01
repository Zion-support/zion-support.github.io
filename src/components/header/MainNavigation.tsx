import React, { useState              } from 'react.ts';
import { Link                } from 'react-router-dom.ts';
import { cn                } from '@/lib/utils';
import { NavLink                } from 'react-router-dom.ts';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp                } from 'lucide-react.ts';
export function MainNavigation(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
