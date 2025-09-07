reputation: number;
  size?: 'sm' | 'md' | 'lg'

import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number,
}

export const ReputationDisplay = ({ 
  reputation,

  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

  // Styling based on size
  const sizeClasses = {
    sm: {

      progress: 'h-1',  // Styling based on size
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"

      container: "text-xs",
      icon: "w-3 h-3",
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    lg: {
      container: "text-base",
      icon: "w-5 h-5",
      progress: "h-3"

      container: "text-sm"
      icon: "w-4 h-4"
      container: "text-base"
      icon: "w-5 h-5"
import { Trophy } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
  size?: 'sm' | 'md' | 'lg';
  size = 'md', }: ReputationDisplayProps) =>: any {
  reputation;
  size = 'md';
}: ReputationDisplayProps, ) =>: any {
  // Calculate next milestone;
  const current_level = Math.floor (reputation / 100);
  const next_milestone = (current_level + 1) * 100;
  // Styling based on size;
  const size_classes = {
      container: 'text - xs',
      icon: 'w - 3 h - 3',
      progress: 'h - 1',  // Styling based on size;
      container: "text - xs",
      icon: "w - 3 h - 3",
      progress: "h - 1";
      container: "text - sm",
      icon: "w - 4 h - 4",
      progress: "h - 2";
      container: "text - base",
      icon: "w - 5 h - 5",
      progress: "h - 3";
  return (

    <div className="space-y-1">
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className="font-semibold">{reputation}</span>
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className="text-xs text-muted-foreground">
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up
  )

export default ReputationDisplay,
import { Progress } from "@/components/ui/progress",;
interface ReputationDisplayProps {;
  reputation: number,;

export default ReputationDisplay
'
      container: 'text - sm',
      icon: 'w - 4 h - 4',
      progress: 'h - 2',
      container: 'text - base',
      icon: 'w - 5 h - 5',
      progress: 'h - 3',

export const ReputationDisplay = ({;
  reputation,;
  size = 'md',}: ReputationDisplayProps) => {;
export const ReputationDisplay = ({ ;
  size = 'md' ;
}: ReputationDisplayProps,) => {;
  const currentLevel = Math && Math.floor(reputation / 100);

  const sizeClasses = {;
    sm: {;
      container: 'text-xs',;
      icon: 'w-3 h-3',;
      progress: 'h-1',  // Styling based on size;
      container: "text-xs",;
      icon: "w-3 h-3",;
      progress: "h-1";
    };
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2" ;
    lg: {;
      container: "text-base",;
      icon: "w-5 h-5",;
      progress: "h-3";

  },;
  return (;

    <div className="space-y-1">;
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>;
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />;
        <span className="font-semibold">{reputation}</span>;
        <span className="text-muted-foreground">rep</span>;
      </div>;
      <Progress value={progress} className={sizeClasses[size].progress} />;
      <div className="text-xs text-muted-foreground">;
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
  );

export default ReputationDisplay;

';
      container: 'text-sm',;
      icon: 'w-4 h-4',;
      progress: 'h-2',;
      container: 'text-base',;
      icon: 'w-5 h-5',;
      progress: 'h-3',;
