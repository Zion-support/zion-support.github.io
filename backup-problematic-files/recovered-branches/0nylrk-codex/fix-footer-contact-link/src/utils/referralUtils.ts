
  }
} /** * Formats a date for display in the referral system * @param date Date or string to format * @returns Formatted date string */
}/** * Stores referral code in localStorage when detected in window.URL */
}return localStorage.getItem ('referral code')
}/** * Track referral when a user signs up */ // Call API to record the referral const response = await fetch ('/api/track-referral', {
  method: 'POST', headers: {
  'Content-Type': 'application/json'
};
}
