
export default function Page() {
);

  // Calculate performance score based on Core Web Vitals
  
      let validMetrics = 0;

      // FCP scoring(0-100)
      if(metrics.fcp !== null) {

        validMetrics++;
        if(metrics.fcp < 1800) totalScore += 100;
        else if(metrics.fcp < 3000) totalScore += 50;
        else totalScore += 0}

      // LCP scoring(0-100)
      if(metrics.lcp !== null) {

        validMetrics++;
        if(metrics.lcp < 2500) totalScore += 100;
        else if(metrics.lcp < 4000) totalScore += 50;
        else totalScore += 0}

      // FID scoring(0-100)
      if(metrics.fid !== null) {

        validMetrics++;
        if(metrics.fid < 100) totalScore += 100;
        else if(metrics.fid < 300) totalScore += 50;
        else totalScore += 0}

      // CLS scoring(0-100)
      if(metrics.cls !== null) {

        validMetrics++;
        if(metrics.cls < 0.1) totalScore += 100;
        else if(metrics.cls < 0.25) totalScore += 50;
        else totalScore += 0}

      let rating: 'good' | 'needs-improvement' | 'poor';
      let color: string;

      if(averageScore >= 90) {

        rating = 'good';
        color = 'text-green-500'} else if(averageScore >= 50) {

        rating = 'needs-improvement';
        color = 'text-yellow-500'} else {

        rating = 'poor';
        color = 'text-red-500'}
    });

      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
