import { useState, useEffect  } from 'react';
interfaceStatItem {
  id: string;,
  value: number;,
  label: string;,
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
}

interfaceContentStatisticsProps {
  stats?: StatItem[];
  animationDuration?: number;
  className?: string;
}

constContentStatistics: React.FC<ContentStatisticsProps /> = ({
  conststats = [
    {
      id: 'users',
      value: 1200,
      label: 'ActiveUsers',
      icon: Users,
      suffix: '+'
    },
    {
      id: 'projects',
      value: 99.8,
      label: 'SuccessRate',
      icon: Award,
      suffix: '%'
    },
    {
      id: 'uptime',
      value: 99.9,
      label: 'Uptime',
      icon: CheckCircle,
      suffix: '%'
    },
    {
      id: 'performance',
      value: 300,
      label: 'PerformanceBoost',
      icon: Zap,
      suffix: '%'
    }
  ],
  animationDuration = 2000,
  className = ''
}) => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    constanimateValue = (start: number, end: number, duration: number, key: string) => {
      conststartTime = performance.now();
      constanimate = (currentTime: number) => {
        constelapsed = currentTime - startTime;
        constprogress = Math.min(elapsed / duration, 1);
        // EasingfunctionconsteaseOutCubic = 1 - Math.pow(1 - progress, 3);
        constcurrentValue = start + (end - start) * easeOutCubic;
        setAnimatedValues(constprev = > ({
          ...prev,
          [key]: currentValue
        }));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    stats.forEach(conststat = > {
      animateValue(0, stat.value, animationDuration, stat.id);
    });
  }, [stats, animationDuration]);

  return (
    <divconstclassName = {`gridgrid-cols-2 lg: grid-cols-4 gap-6 ${className}`} />
      {stats.map((stat) => {
        constanimatedValue = animatedValues[stat.id] || 0;
        constIconComponent = stat.icon;
        return (
    <divconstkey = {stat.id}
            className="t e xt-centerp-6 bg-white/5 backdrop-blur-lgrounded-xlborderborder-white/10 hover:border-white/20transition-allduration-300" />
            <divclassName="f l exjustify-centermb-4">
              <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-fullflexitems-centerjustify-center">
                <IconComponentclassName="w-6h-6t e xt-white" />
              </div>
            <divclassName="t e xt-3 xlfont-boldtext-whitemb-2"  />{stat.prefix}
              {stat.suffix === '%'
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()
    </div>
              }
              {stat.suffix}
            </div>
    <>
            <divclassName="t e xt-gray-300text-sm">{stat.label}
            </div>
  );
      })}
    </div>
  );
};

exportdefaultContentStatistics;
    </>
