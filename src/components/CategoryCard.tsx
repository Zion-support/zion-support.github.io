import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
category: {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType;
  count: number;
};
href: string;
}

interface CategoryCardProps {
  category: Category;
  className?: string;
}

return (
<Link href={href} className="group">
<Card className="h-full bg-zion-blue-dark border-zion-slate hover:border-zion-cyan transition-all duration-200 group-hover:scale-105">
<CardContent className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-zion-cyan/20 rounded-lg">
<IconComponent className="h-6 w-6 text-zion-cyan" />
</div>
<span className="text-sm text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">
{category.count} services
</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
{category.name}
</h3>
<p className="text-zion-slate-light text-sm">
{category.description}
</p>
</CardContent>
</Card>
</Link>
);
}