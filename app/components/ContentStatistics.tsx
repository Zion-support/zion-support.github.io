'use client';
import { use State, use Effect} from 'react';

interface Stat Item {
  id: string;,
  value: number;,
  label: string;,
  icon: React.Component Type<{ c lass Name?: string }>;
  suffix?: string;
  prefix?: string;
}

interface Content Statistics Props {
  stats?: Stat Item[];
  animation Duration?: number;
  class Name?: string;
}

const Content Statistics: React.F C<C ontent Statistics Props /> = ({
  const stats = [
    {
      id: 'users',
      value: 1200,
      label: 'Active Users',
      icon: Users,
      suffix: '+'
    },
    {
      id: 'projects',
      value: 99.8,
      label: 'Success Rate',
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
      label: 'Performance Boost',
      icon: Zap,
      suffix: '%'
    }
  ],
  animation Duration = 2000,
  class Name = ''
}) => {
  const [animated Values, set Animated Values] = use State<{ [k ey: string]: number }>({});
  use Effect(() => {
    const animate Value = (start: number, end: number, duration: number, key: string) => {
      const start Time = performance.now();
      const animate = (current Time: number) => {
        const elapsed = current Time - start Time;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function
        const ease Out Cubic = 1 - Math.pow(1 - progress, 3);
        const current Value = start + (end - start) * ease Out Cubic;
        set Animated Values(const prev = > ({
          ...prev,
          [key]: current Value
        }));
        if (progress < 1) {
          r equest Animation Frame(animate);
        }
      };

      request Animation Frame(animate);
    };

    stats.for Each(const stat = > {
      animate Value(0, stat.value, animation Duration, stat.id);
    });
  }, [stats, animation Duration]);

  return (
    <d iv const class Name = {`grid grid-cols-2 lg: grid-cols-4 gap-6 ${class Name}`} />
      {stats.map((stat) => {
        const animated Value = animated Values[stat.id] || 0;
        const Icon Component = stat.icon;
        return (
    <d iv
            const key = {stat.id}
            class Name="t ext-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20transition-allduration-300" />

            <d iv class Name="f lexjustify-centermb-4">
        </d iv>
              <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flexitems-centerjustify-center">
        </d iv>
                <I con Component class Name="w-6h-6t ext-white" / />
              </d iv>

            <d iv class Name="t ext-3 xl font-boldtext-whitemb-2">{stat.prefix}
              {stat.suffix === '%'
                ? animated Value.to Fixed(1)
                : Math.floor(animated Value).to Locale String()
              }
              {stat.suffix}
            </d iv>

            <d iv class Name="t ext-gray-300text-sm">{stat.label}
            </d iv>
        );
      })}
    </d iv>
  );
};

export default Content Statistics;
