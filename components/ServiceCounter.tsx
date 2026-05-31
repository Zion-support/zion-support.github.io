'use client';
import AnimatedCounter from './AnimatedCounter';
export default function ServiceCounter({ count }: { count: number }) {
  return (
    <div className="text-center py-8">
      <div className="text-5xl font-bold text-white"><AnimatedCounter target={count} suffix="+" /></div>
      <p className="text-gray-400 mt-2">Services & Solutions</p>
    </div>
  );
}
