import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
'use client';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'premium' | 'limited';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps />= ({
  
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';
    }
  };

export default function ContentPromotionBanner() {
  return (</ContentPromotionBannerProps>
    <div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h3 className="text-2 xl lg: text-3 xlfont-boldmb-2"  >{title}</h3>
            <p className="text-lgtext-white/90mb-4">{subtitle}</p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="flex items-centertext-sm" /></div>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span  >{feature}</span>
                </div>
              ))}
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <button;
              onClick="{onButtonClick}"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-centergap-2" /></button>
              {buttonText}
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </button>
          </div>
      </div>
  );
};

export default ContentPromotionBanner;

}