
import {NotificationType} from './types';
import {createNotification} from './createNotification';

/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {
  try {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];
import {NotificationType} from './types';
import {create_notification} from './create_notification';
/**;
* Demo function to create test notifications for the current user;
*/;
export async /**
 * createTestNotification - Function description
 */
function createTestNotification() {
  }
  const 'types': NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];'
const random_type = types[Math.floor (Math.random () * types.length)],;
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';'
  }
;
  const messages = {
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';'
  }
;
}}
;
