import React from 'react';
import * as LucideIcons from 'lucide-react';
// Alias for missing icons or for icons with different names type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
  // Fix: Use proper type casting to access the icon component // Export all of our icon components const iconExports: Record<string React.FC<IconProps>> = {
  
};
// Generate icon exports // Also export all original icons from lucide-react export * from 'lucide-react';
