import { Zap } from 'lucide-react';


      if(metrics.lcp !== null) {;
        validMetrics++;
        if(metrics.lcp < 2500) totalScore += 100;
        else if(metrics.lcp < 4000) totalScore += 50;
        else totalScore += 0}

      // FID scoring(0-100);
      if(metrics.fid !== null) {;
        validMetrics++;
        if(metrics.fid < 100) totalScore += 100;
        else if(metrics.fid < 300) totalScore += 50;
        else totalScore += 0}

      // CLS scoring(0-100);
      if(metrics.cls !== null) {;
        validMetrics++;
        if(metrics.cls < 0.1) totalScore += 100;
        else if(metrics.cls < 0.25) totalScore += 50;
        else totalScore += 0}

  return (";
    <div className="fixed bottom-4 right-4 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl p-6 shadow-2xl z-50 max-w-sm">";
      <div className="flex items-center justify-between mb-4">";
        <h3 className="text-lg font-bold text-white flex items-center">";
          <Zap className="w-5 h-5 mr-2 text-zion-cyan"   />          Performance Monitor;
        </h3>;
        <button;
          onClick={() => setIsVisible(false)}";
          className="text-zion-slate-light "hover": "tex t-white transition-colors";
        >;
          ×;
        </button>      </div>;
  );""}";</div>

>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
