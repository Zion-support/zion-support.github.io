
// Analytics configuration
export const analytics = {
  googleAnalytics: {
    measurementId: process.env.GA_MEASUREMENT_ID
  },
  customEvents: {
    pageView: true,
    userInteraction: true,
    performance: true,
    errors: true
  }
};

export default analytics;
