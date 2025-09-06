reputation: number;
  size?: 'sm' | 'md' | 'lg'

  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,
}
    <div className='space-y-1'>
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className='font-semibold'>{reputation}</span>
        <span className='text-muted-foreground'>rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className='text-xs text-muted-foreground'>
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level
        up
      </div>
    </div>
  )
