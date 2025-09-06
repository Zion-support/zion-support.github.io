

=======
import {NotificationType} from './types';
import {createNotification} from './createNotification';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {
  try {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];

  const randomType = types[Math && Math.floor(Math && Math.random() * types && types.length)],
  

  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {

    'message': 'You have received a new message from a potential client && client.quote_request': 'A client has submitted a quote request for your services && services.booking_confirmation': 'Your booking has been confirmed and scheduled && scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details && details.onboarding': 'Complete your profile to get more visibility and job matches && matches.system': 'Our platform has been updated with new features. Check them out!'
  };
  

  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }
    'system': { url: '/dashboard', text: 'Learn More' }
  }

    actionText: actions[randomType].text
  })

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
=======
  return create_notification ({
    user_id;
    title: titles[random_type];
    message: messages[random_type];
    type: random_type;
    send_email: true;
    action_url: actions[random_type].url,
    action_text: actions[random_type].text;
  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
