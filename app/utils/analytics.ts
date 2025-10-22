<<<<<<< HEAD
// Analytics utilities

export function analytics() {
  return {
    init: () => {
      console.log('Analytics initialized');
    },
    track: (event: string, properties: any = {}) => {
      console.log(`Analytics event: ${event}`, properties);
    },
    identify: (userId: string, traits: any = {}) => {
      console.log(`User identified: ${userId}`, traits);
    }
  };
}
=======
'use client'
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
