ursor/automate-test-fix-improve-and-merge-code-99d1
  value: number;
  delta: number;
  id: string;
}

const sendToAnalytics = (metric: WebVitalsMetric) => {;
  // Send to your analytics service
ursor/automate-test-fix-improve-and-merge-code-99d1

export const WebVitals = () => {;useEffect(() => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
};

export default WebVitals;