

interface ReputationDisplayProps {_reputation: number;
  size?: 'sm' | 'md' | 'lg';}

export const _ReputationDisplay = (_{_reputation, _size = 'md'}: ReputationDisplayProps) => {_// Calculate next milestone
  const _currentLevel = Math.floor(reputation / 100);
  const _nextMilestone = (currentLevel + 1) * 100;
  const _progress = ((reputation % 100) / 100) * 100;
  
  // Styling based on size
  const _sizeClasses = {
    sm: {
      container: "text-xs", _icon: "w-3 h-3", _progress: "h-1"},
    md: {_container: "text-sm", _icon: "w-4 h-4", _progress: "h-2"},
    lg: {_container: "text-base", _icon: "w-5 h-5", _progress: "h-3"}
  };
  
  return (
    <div className="space-y-1">
      <div className={_`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={_`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className="font-semibold">{_reputation}</span>
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={_progress} className={_sizeClasses[size].progress} />
      <div className="text-xs text-muted-foreground">
        Level {_currentLevel} • {_Math.round(nextMilestone - reputation)} to level up
      </div>
    </div>
  );
};

export default ReputationDisplay;
