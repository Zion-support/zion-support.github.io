 trackingId?: string;
}if (typeof window !== 'undefined' && trackingId) {
  // Analytics initialized with tracking ID 
}
}, [trackingId]);
return null;
};
export default Analytics;
