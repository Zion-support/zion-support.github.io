import { NotificationType  } from './types';
import { createNotification } from './createNotification';
/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],
  const randomType = $2;
  const titles = $2;
  const messages = $2;
  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }
    'system': { url: '/dashboard', text: 'Learn More' }
  },
  
  return createNotification({
    userId;
    title: titles[randomType];
    message: messages[randomType];
    type: randomType;
    sendEmail: true;
    actionUrl: actions[randomType].url

    actionText: actions[randomType].text
  })
}
}
;