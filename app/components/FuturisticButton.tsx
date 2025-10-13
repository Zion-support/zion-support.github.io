
// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

// import React from 'react';

