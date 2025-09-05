

interface UserBadgesProps {_badges: Badge[];}

const _iconMap = {_Trophy, _Award, _BadgeCheck, _Star, _MessageSquare};

export const _UserBadges = (_{_badges}: UserBadgesProps) => {_if (!badges?.length) return null;

  return (_<div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const _IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  style={_{ backgroundColor: badge.color + '20'}}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent 
                    style={_{ color: badge.color}} 
                    className="w-4 h-4" 
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <div className="font-medium">{_badge.name}</div>
                  <div className="text-xs text-gray-500">{_badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default UserBadges;
