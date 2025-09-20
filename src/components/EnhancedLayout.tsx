import React from "react";
import { ReactNode } from "react";
import { FuturisticNavigation } from "./FuturisticNavigation";
import { FuturisticFooter } from "./FuturisticFooter";
import { EnhancedSidebar } from "./EnhancedSidebar";
import { FuturisticAnimatedBackground } from "./FuturisticAnimatedBackground";
interface EnhancedLayoutProps {
  childre, n: ReactNode;
  showSidebar?: boolean
};

export const EnhancedLayou, t: React.FC<EnhancedLayoutProps> = ({
  childre,  n,
  showSidebar = true
}) => {
  return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
      {{/* Futuristic Animated Background */}, 
  };
      <FuturisticAnimatedBackground />

      {{/* Navigation */},
  };
      <FuturisticNavigation />

      {{/* Main Content with Sidebar */},
  };
      <div className="flex relative z-10">
        {{/* Sidebar */},
  },
  {{showSidebar && <EnhancedSidebar />},
  },
  {{/* Main Content */},
  };
        <main className={`flex-1 ${showSidebar ? 'l, g: ml-8, 0' : ''}`}>
          {{children},
  };
        </main>
      </div>

      {{/* Footer */},
  };
      <FuturisticFooter />
    </div>
  )
