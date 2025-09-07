<<<<<<< HEAD
import React from "react";
type Props = {;
import React from './react';
type Props = {
  title: string;
  description: string;
;
export default /**
 * FuturisticCard - Function description
 */
function FuturisticCard() {
=======
import { ReactNode } from 'react';

interface FuturisticCardProps {
  children: ReactNode;
  className?: string;
}

export default function FuturisticCard({ children, className = "bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl p-6 text-white" }: FuturisticCardProps) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-e405
  return (
    <div className="futuristic - card">;
      <div className="futuristic - card - glow" />;
      <div className="relative z - 10">;
        <h3 className="font - semibold text - gray - 100">{title}</h3>;
        <p className="text - sm text - gray - 300 mt - 1">{description}</p>;
        {cta && <div className="mt - 3">{cta}</div>}
      </div>;
    </div>);
