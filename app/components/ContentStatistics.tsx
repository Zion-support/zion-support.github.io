<<<<<<< HEAD
<<<<<<< HEAD


export default function ContentStatistics() {
  return (

=======
=======
'use client';
interface StatItem {
  id: string;,
  value: number;,
  label: string;,
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
}
interface ContentStatisticsProps {
  stats?: StatItem[];
  animationDuration?: number;
  className?: string;
}
const ContentStatistics: React.FC<ContentStatisticsProps /> = ({
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
  animationDuration = 2000,
  className = ''
}) => {;
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, key: string) => {;
      const startTime = performance.now();
const animate = (currentTime: number) => {;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
const currentValue = start + (end - start) * easeOutCubic;
        setAnimatedValues(const prev = > ({
          ...prev,;
          [key]: currentValue;
        }));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };
    stats.forEach(const stat = > {;
      animateValue(0, stat.value, animationDuration, stat.id);
    });
  }, [stats, animationDuration]);
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

export default function ComponentsPage() {
  return (
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
