import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';
import Link from 'next / link';
import { cn } from '@/lib / utils';interface InteractiveFeaturesProps {
  class_name?: string,
  style?: React.CSSProperties;
  ]
  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }
        "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need.",
      icon: <Settings className="h-8 w-8 text-amber-700" />,
      link: "/equipment"}],

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  },

                  'transition-all duration-300'
                  openIndex === index
                    ? 'max-h-48 opacity-100 p-6 pt-0'
                    : 'max-h-0 opacity-0 p-0'
                )}              >
                <CardContent className='text-sm text-zion-slate-light p-0'>
ursor/fix-website-loading-errors-and-merge-6662

                  "transition-all duration-300",
export default InteractiveFeatures;
;
}
}

        </div>;
}
;
export default InteractiveFeatures;
