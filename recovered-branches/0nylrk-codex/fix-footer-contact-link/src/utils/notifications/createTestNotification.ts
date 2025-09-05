

/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(_userId: string) {_const types: NotificationType[] = ['message', _'quote_request', _'booking_confirmation', _'hire_request', _'onboarding', _'system'];
  const _randomType = types[Math.floor(Math.random() * types.length)];
  
  const _titles = {
    'message': 'New Message Received', _'quote_request': 'Quote Request Submitted', _'booking_confirmation': 'Booking Confirmed', _'hire_request': 'New Hire Request', _'onboarding': 'Complete Your Profile', _'system': 'System Update'};
  
  const _messages = {_'message': 'You have received a new message from a potential client.', _'quote_request': 'A client has submitted a quote request for your services.', _'booking_confirmation': 'Your booking has been confirmed and scheduled.', _'hire_request': 'A client wants to hire you for a project. Check your dashboard for details.', _'onboarding': 'Complete your profile to get more visibility and job matches.', _'system': 'Our platform has been updated with new features. Check them out!'};
  
  const _actions = {_'message': { url: '/messages', _text: 'View Messages'},
    'quote_request': {_url: '/quotes', _text: 'View Quote'},
    'booking_confirmation': {_url: '/bookings', _text: 'View Booking'},
    'hire_request': {_url: '/dashboard', _text: 'View Request'},
    'onboarding': {_url: '/profile', _text: 'Complete Profile'},
    'system': {_url: '/dashboard', _text: 'Learn More'}
  };
  
  return createNotification({_userId, _title: titles[randomType], _message: messages[randomType], _type: randomType, _sendEmail: true, _actionUrl: actions[randomType].url, _actionText: actions[randomType].text});
}
