'use client'
import React from 'react';


interface NavigationBackupProps {
  logo?: string;
  logoText?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

export default NavigationBackup;