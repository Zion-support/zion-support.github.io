
<<<<<<< HEAD
import { NotificationType } from './types',
import { createNotification } from './createNotification',
/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],
  const randomType = types[Math.floor(Math.random() * types.length)],
  
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  },
  
  const messages = {
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!'
  },
  
  const actions = {
    'message': { url: '/messages', text: 'View Messages' },
    'quote_request': { url: '/quotes', text: 'View Quote' },
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },
    'hire_request': { url: '/dashboard', text: 'View Request' },
    'onboarding': { url: '/profile', text: 'Complete Profile' },
    'system': { url: '/dashboard', text: 'Learn More' }
  },
  
  return createNotification({
    userId,
    title: titles[randomType],
    message: messages[randomType],
    type: randomType,
    sendEmail: true,
    actionUrl: actions[randomType].url,
    actionText: actions[randomType].text
  })
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
